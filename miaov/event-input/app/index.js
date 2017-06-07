/**
 * Created by sam on 2017/6/2.
 */
var myApp = angular.module('myapp',['ngSanitize'])

myApp.controller('firstController',['$scope','$interval',function ($scope,$interval) {
    var iNow = 5;
    $scope.text = iNow+ '秒'
    $scope.isDisabled = true

    var timer = $interval(function () {
        iNow--;
        $scope.text = iNow+ '秒'
        if (iNow == 0){
            //原生的clearInterval方法不能生效

            $interval.cancel(timer)
            $scope.text = '点击查看'
            $scope.isDisabled = false

        }
    },1000)

    $scope.html = '<h1>这里是在js中写的标签</h1>'
}])