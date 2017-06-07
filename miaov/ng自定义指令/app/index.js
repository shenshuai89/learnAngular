/**
 * Created by sam on 2017/6/2.
 */
var myApp = angular.module('myapp',[])
    .directive('hello', function () {
        return {
            restrict :'ECMA',
            replace:true,
            template :'<div>这里是hello指令的内容</div>'
        }
    })

myApp.controller('firstController',['$scope',function ($scope) {
    $scope.text = 'hello'
}])