/**
 * Created by sam on 2017/6/2.
 */
var myApp = angular.module('myapp',[]);

myApp.controller('clockController', ['$scope',function ($scope) {
    $scope.clock = {
        now: new Date()
    };
    var updateClock = function () {
        $scope.clock.now = new Date()
    }
    setInterval(function () {
        $scope.$apply(updateClock)
    },1000);
    updateClock();
}])

console.log(myApp)
