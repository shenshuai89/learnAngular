"use strict";
angular.module("app")
    .directive("appTab", [function () {
        return {
            restrict: "A",
            replace: true,
            scope: {
                list: "=",
                tabClickCall: "&"
            },
            templateUrl: '../../view/template/tab.html',
            link: function ($scope) {
                $scope.tabClick = function (tab) {
                    $scope.selectId = tab.id;
                    $scope.tabClickCall(tab);
                }
            }
        }
    }])