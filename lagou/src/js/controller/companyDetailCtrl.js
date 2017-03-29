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

            /*$scope.$broadcast('abc',{id:1,age:23,name:"angular"});//控制器向指令分发事件（向下传播）*/

            //console.log(resp.data.positionClass);
        }, function (error) {

        });

        /*$scope.$on('up',function (event,data) {
            console.log(event,data);
        });*/
    }])