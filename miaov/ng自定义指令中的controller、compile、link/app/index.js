/**
 * Created by sam on 2017/6/2.
 */
var myApp = angular.module('myapp',[])

.directive('order',function () {
    return {
        restrict :'EA',
        replace:true,
        /*
        //打印输出结果 compile 、controller、 pre、 post
        controller:['$scope','$element','$attrs','$transclude',function ($scope, $element, $attrs, $transclude) {
            console.log("controller")
        }],
        compile:function (element, attrs, transclude) {
            console.log("compile");
            return{
                pre:function (scope, element, attrs, controller) {
                    console.log('pre')
                },
                post:function (scope, element, attrs, controller) {
                    console.log('post')
                }
            }
        },
        link:function (scope, element, attrs, controller) {
            console.log('link')
        }*/

        /*
        * 指令的控制器controller和link函数可以进行互换。控制器函数controller主要是用来提供可在 指令间 复用的行为，但link函数只能在当前 内部指令中 定义行为，且无法在指令间复用，link函数可以将指令互相隔离开来，而controller则定义可复用的行为。*/

        controller:function($scope, $element, $attrs, $transclude) {
            console.log("order指令controller");
        },
        link:function(scope, iElement, iAttrs, controller){
            console.log("order指令link")
        }
    }
})
.directive('parent',function () {
    return{
        restrict:'EA',
        replace:true,
        scope:{},
        template:'<h1>parent {{info}} <p ng-transclude></p></h1>',
        transclude:true,
        controller:['$scope','$element','$attrs','$transclude',function ($scope,$element,$attrs,transclude) {
            console.log("parent controller")

            // 指令中用$scope定义的变量，只能在指令的template或者templateUrl
            $scope.info = 'this is parent information'

            // 要把公用的属性和方法添加到this下
            this.show = function () {
                alert('parent show function')
            }

            this.message = 'parent parent parent directive message'
        }],
        controllerAs:'parentController',
        compile:function (iElement,attr,tansclude) {
            console.log("parent compile");
            return{
                pre:function(scope, iElement, iAttrs, controller){
                    console.log("parent pre")
                },
                post:function(scope, iElement, iAttrs, controller){
                    console.log("parent post")
                }
            }
        }
    }
})
    .directive('child', function () {
        return{
            restrict:"AE",
            require:'^parent',
            replace:true,
            template:'<div>child <p ng-transclude></p></div>',
            transclude:true,
            controller:['$scope','$element','$attrs','$transclude',function ($scope, $element, $attrs, $transclude) {
                console.log("child controller")

            }],
            /*compile:function(tElement, tAttrs, transclude){
                console.log("child compile");
                return{
                    pre:function(scope, iElement, iAttrs, controller){
                        console.log("child pre")
                    },
                    post:function(scope, iElement, iAttrs, controller){
                        console.log("child post")
                    }
                }
            }*/
            link:function (scope, element, attrs, parentController) {
                element.on('click',parentController.show)
                scope.message = parentController.message
                console.log(scope.message)
            }
        }
    })
    .controller('firstController',['$scope',function ($scope) {
        $scope.info = 'controller information'
    }])
