/**
 * Created by shenshuai on 2017/3/26.
 */
angular.module('app')
    .directive('appFoot', [function () {
        return {
            restrict: 'A',
            replace: true,
            templateUrl:'../../view/template/foot.html'
        }
    }])