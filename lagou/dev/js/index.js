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
    }).state('companyDetail',{
        url: '/companyDetail/:id',
        templateUrl:'view/companyDetail.html',
        controller:'companyDetailCtrl'
    }).state('search',{
        url: '/search',
        templateUrl:'view/search.html',
        controller:'searchCtrl'
    });
    $urlRouterProvider.otherwise('main');
}])
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

/**
 * Created by shenshuai on 2017/3/24.
 */
'use strict'

angular.module('app')
    .controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {

        $http({
            method: 'GET',
            url: '../../data/positionList.json'
        }).then(function (res){
            // console.log(success);
            $scope.list12 = res.data;
        },function (error){

        });
        /*$scope.list12 = [{
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
            }];*/
    }]);

"use strict";

angular.module("app")
.controller("searchCtrl",['$scope',function ($scope) {

}])
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
'use strict';
angular.module('app').directive("appJobInfo",[function () {
    return {
        restrict:"A",
        replace:true,
        templateUrl:'../../view/template/jobInfo.html',
        scope:{
            isActive:"=",
            isLogin:"=",
            pos:"="
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