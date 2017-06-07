/**
 * Created by sam on 2017/6/2.
 */
var myApp = angular.module('myapp',[])

myApp.controller('firstController',['$scope',function ($scope) {
    $scope.text = 'hello'
}])