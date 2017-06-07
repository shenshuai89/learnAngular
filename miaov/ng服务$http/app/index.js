/**
 * Created by sam on 2017/6/2.
 */
var myApp = angular.module('myapp',[])


    .controller('firstController',['$scope', '$http', '$timeout',function ($scope, $http, $timeout) {

        /*$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=angular&json=1&p=3&sid=1420_21108&req=2&bs=firebug&csor=1&cb=JSON_CALLBACK').success(function(data){
            console.log(data)
        })*/

        var timer = null
        $scope.data = []
        
        $scope.change = function (name) {

            $timeout.cancel(timer)

            timer = $timeout(function () {
                
                $http.jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+name+"&cb=JSON_CALLBACK")
                    .then(function (data) {
                        console.log(data)
                        $scope.data = data.data.s
                        //console.log($scope.data)
                    })
            },300)
        }
    }])
