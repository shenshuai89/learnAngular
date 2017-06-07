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
                myId:'@myId',
                myData:'='
            },
            controller:['$scope',function ($scope) {
                $scope.name = 'gongyong'
            }],
            templateUrl : 'temp.html',
            link:function (scope, element, attrs) {
                console.log(scope)
                console.log(element)
                console.log(attrs.myId)
                element.delegate('input','click',function () {
                    $(this).attr('class','active').siblings('input').attr('class','')
                    $(this).siblings('div').eq($(this).index()).css('display','block').siblings('div').css('display','none')
                })
            }
        }
    })

    myApp.controller('firstController',['$scope',function ($scope) {
        $scope.data1 = [
            {title:'语文',content:'111111'},
            {title:'数学',content:'222222'},
            {title:'英语',content:'333333'}
        ]
        $scope.data2 = [
            {title:'体育',content:'666666'},
            {title:'音乐',content:'888888'},
        ]
        $scope.show = function (n) {
            alert(n)
        }
    }])