'use strict';
angular.module('app').directive("appJobInfo",[function () {
    return {
        restrict:"A",
        replace:true,
        templateUrl:'../../view/template/jobInfo.html',
        scope:{
            isActive:"="
        },
        link:function ($scope) {
            $scope.imgPath = $scope.isActive ? "../../image/star-active.png":"../../image/star.png";
        }
    }
}]);