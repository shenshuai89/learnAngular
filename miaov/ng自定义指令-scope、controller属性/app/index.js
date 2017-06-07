/**
 * Created by sam on 2017/6/2.
 */
var myApp = angular.module('myapp',[])
    .directive('myTab', function () {
        return {
            restrict :'E',
            replace:true,
            //当scope设置为true时，scope是独立作用域
            /*scope:true,*/
            scope:{
                // @ 绑定基本的字符串
                myId:'@myId',
                // = 绑定一个变量，显示的是变量所代表的值
                myName:'=',
                // & 绑定的是一个函数
                myFn :'&'
            },
            controller:['$scope',function ($scope) {
                $scope.name = 'gongyong'
            }],
            templateUrl : 'temp.html'
        }
    })

    myApp.controller('firstController',['$scope',function ($scope) {
        $scope.name = 'hello'
        $scope.show = function (n) {
            alert(n)
        }
    }])