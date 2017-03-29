'use strict';
angular.module('app')
    .directive("appHeadBar", [function () {
        return {
            restrict: "A",
            replace: true,
            templateUrl: "../../view/template/headBar.html",
            scope: {
                title: '='
            },
            link: function ($scope) {
                $scope.back = function () {
                    window.history.back();
                };
                /*//使用on接收到了控制器使用$broadcast广播的事件
                $scope.$on('abc', function (event, data) {
                    console.log(event, data);
                });
                $scope.$emit('up', {name:"emit up"});//从指令向控制器冒泡事件，使用emit

                $scope.$digest();//用原生方法操作dom时，双向数据绑定失效的情况使用*/
            }
        }
    }])