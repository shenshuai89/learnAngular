'use strict';
angular.module('app').directive("appCompany", [function () {
    return {
        restrict: 'A',
        replace: true,
        scope: {
            comp: "="
        },
        templateUrl: '../../view/template/company.html'
    }
}])