/**
 * Created by sam on 2017/6/2.
 */
var myApp = angular.module('myapp',[])

myApp.controller('firstController',['$scope',Fnaa])

function Fnaa($scope) {

}
Fnaa.prototype.text = 'hello'
Fnaa.prototype.num = 123
Fnaa.prototype.show = function () {
    return 'angularJs'
}