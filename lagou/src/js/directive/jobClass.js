/**
 * Created by Administrator on 2017/3/27.
 */
"use strict"
angular.module("app")
    .directive("appJobClass", [function () {
        return {
            restrict: "A",
            replace: true,
            scope: {
                comp: "="
            },
            templateUrl: "../../view/template/jobClass.html"
            /*link: function ($scope) {
                $scope.showPositionList = function (idx) {
                    $scope.positionList = $scope.comp.positionClass[idx].positionList;
                    console.log($scope.positionList);
                    $scope.isActive = idx;
                }
                $scope.showPositionList(0);
            }*/
        }
    }])