/**
 * Created by shenshuai on 2017/3/24.
 */
'user strict';

angular.module('app',['ui.router']);
/**
 * Created by shenshuai on 2017/3/24.
 */
'use strict'

angular.module('app').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('main',{
        url: '/main',
        templateUrl:'view/main.html',
        controller:'mainCtrl'
    }).state('job',{
        url: '/job/:id',
        templateUrl:'view/job.html',
        controller:'jobCtrl'
    }).state('search',{
        url: '/search',
        templateUrl:'view/search.html',
        controller:'searchCtrl'
    });
    $urlRouterProvider.otherwise('main');
}])
/**
 * Created by shenshuai on 2017/3/24.
 */
'use strict'

angular.module('app')
.controller('jobCtrl',['$scope',function ($scope) {
    $scope.title1 = "职位详情111",
    $scope.title2 = "职位详情222"
}]);

/**
 * Created by shenshuai on 2017/3/24.
 */
'use strict'

angular.module('app')
    .controller('mainCtrl', ['$scope', function ($scope) {
        $scope.list12 = [{
            id: "1",
            name: "销售",
            imgSrc: "../../image/company-1.png",
            companyName: "mooc",
            city: "上海",
            industry: "互联网",
            time: "2017-3-36 11:00"
        },
            {
                id: "2",
                name: "设计师",
                imgSrc: "../../image/company-2.png",
                companyName: "qi e",
                city: "深圳",
                industry: "互联网",
                time: "2017-3-36 11:00"
            }];
    }]);

"use strict";

angular.module("app")
.controller("searchCtrl",['$scope',function ($scope) {

}])
'use strict';
angular.module('app').directive("appCompany", [function () {
    return {
        restrict:'A',
        replace:true,
        templateUrl:'../../view/template/company.html'
    }
}])
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
'use strict';
angular.module('app').directive('appHead',[function () {
    return {
        restrict: 'A',
        replace:true,
        templateUrl:'view/template/head.html'
    }
}]);
'use strict';
angular.module('app')
.directive("appHeadBar",[function () {
    return {
        restrict:"A",
        replace:true,
        templateUrl:"../../view/template/headBar.html",
        scope:{
            title:'='
        },
        link:function ($scope) {
            $scope.back = function () {
                window.history.back();
            }
        }
    }
}])
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
'use strict';
angular.module('app').directive('appJobList',[function () {
    return{
        restrict:'A',
        replace:true,
        templateUrl:'view/template/jobList.html',
        //为了让指令可以引用不同数据，需要在指令中定义一个scope，作为控制器的scope的子元素。指令就可以自己配置一些数据
        scope:{
            data:'='
        }
    }
}]);