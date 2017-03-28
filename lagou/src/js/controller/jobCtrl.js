/**
 * Created by shenshuai on 2017/3/24.
 */
'use strict'

angular.module('app')
    .controller('jobCtrl', ['$scope', '$http', '$state', '$q', function ($scope, $http, $state, $q) {
        $scope.isLogin = false;
        $scope.title1 = "职位详情111";
        $scope.title2 = "职位详情222";
        function getPosition() {
            var def = $q.defer();//$q可以让函数异步加载
            $http({
                method: "GET",
                url: "../../data/position.json?id=" + $state.params.id
            }).then(function (resp) {
                $scope.position = resp.data;
                def.resolve(resp);
            }, function (error) {
                def.reject(error);
            });
            return def.promise;////$q的promise可以让函数执行then方法
        };
        function getCompany(id) {
            $http({
                method: "GET",
                url: "../../data/company.json?id=" + id
            }).then(function (resp) {
                //console.log("getCompany");
                //console.log(resp.data);
                $scope.company = resp.data;
            });
        };
        getPosition().then(function (obj) {
            //console.log("companyId");
            //console.log(obj.data.companyId);
            getCompany(obj.data.companyId);
        });

    }]);
