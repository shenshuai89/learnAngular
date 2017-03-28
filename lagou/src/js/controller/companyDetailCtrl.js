/**
 * Created by Administrator on 2017/3/27.
 */
"use strict"
angular.module("app")
    .controller("companyDetailCtrl", ["$scope", '$state', '$http', function ($scope, $state, $http) {
        //$scope.title1 = "职位详情111";
        $scope.title2 = "公司详情";
        $http({
            method: "GET",
            url: "../../data/company.json?id=" + $state.params.id
        }).then(function (resp) {
            $scope.company = resp.data;
            $scope.positionClass = resp.data.positionClass;
            //console.log(resp.data.positionClass);
        }, function (error) {

        });
    }])