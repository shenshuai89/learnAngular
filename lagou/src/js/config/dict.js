"ust strict";
//定一个dict全局变量并且初始化
angular.module('app').value('dict', {})
    .run(['$http', 'dict', function ($http, dict) {
        $http({
            method: "GET",
            url: '../../data/city.json'
        }).then(function (success) {
            dict.city = success.data;
        });
        $http({
            method: "GET",
            url: '../../data/salary.json'
        }).then(function (success) {
            dict.salary = success.data;
        });
        $http({
            method: "GET",
            url: '../../data/scale.json'
        }).then(function (success) {
            dict.scale = success.data;
        });
    }]);