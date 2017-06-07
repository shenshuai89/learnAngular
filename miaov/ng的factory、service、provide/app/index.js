/**
 * Created by sam on 2017/6/7.
 */
var myApp = angular.module('myapp', [])

    .factory('myFactory', function () {
        var result = {}
        result.message = 'Hello angular factory'
        return result
    })
    // service是通过new 关键字来实例化对象的
    .service('myService', function () {
        this.message = 'Hello angular service'
    })
    // provide设置的属性可以通过config设置更改

    .provider('myProvide', function () {
        var defaultName = 'anonymous';
        var name = defaultName;

        this.setName = function(newName) {
            name = newName;
        }
        this.$get = function () {
            var result = {}
            result.message = 'Hello angular provider'

            result.name = name
            result.defaultName = defaultName
            return result
        }
    })
    // config的参数 必须 是provider中的 'myProvide' 然后加上 provider
    .config(function (myProvideProvider) {
        myProvideProvider.setName('angularJs Provider,this is changed by config')
    })
    .controller('firstController', ['$scope','myFactory','myService','myProvide',function ($scope, myFactory,myService,myProvide) {
        $scope.getMyFactory = myFactory.message
        $scope.getMyService = myService.message
        $scope.getMyProvide = myProvide.message

        $scope.defaultName = myProvide.defaultName;
        $scope.name = myProvide.name
    }])