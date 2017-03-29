/**
 * Created by shenshuai on 2017/3/24.
 */
'user strict';

angular.module('app',['ui.router','ngCookies']);
"ust strict";
//定一个dict全局变量并且初始化
angular.module('app').value('dict', {})
    .run(['$http', 'dict', function ($http, dict) {
        $http({
            method: "GET",
            url: '../../data/city.json'
        }).then(function (success) {
            dict.city = success.data;
        });
        $http({
            method: "GET",
            url: '../../data/salary.json'
        }).then(function (success) {
            dict.salary = success.data;
        });
        $http({
            method: "GET",
            url: '../../data/scale.json'
        }).then(function (success) {
            dict.scale = success.data;
        });
    }]);
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

            /*$scope.$broadcast('abc',{id:1,age:23,name:"angular"});//控制器向指令分发事件（向下传播）*/

            //console.log(resp.data.positionClass);
        }, function (error) {

        });

        /*$scope.$on('up',function (event,data) {
            console.log(event,data);
        });*/
    }])
/**
 * Created by shenshuai on 2017/3/24.
 */
'use strict'

angular.module('app')
    .controller('jobCtrl', ['$scope', '$http', '$state', '$q','cache',  function ($scope, $http, $state, $q,cache) {
        cache.remove('to');
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
    .controller("searchCtrl", ['$scope', '$http', 'dict', function ($scope, $http, dict) {
        $scope.name = '';
        $scope.search = function () {
            $http({
                method: "GET",
                url: "../../data/positionList.json?name" + $scope.name
            }).then(function (resp) {
                $scope.list12 = resp.data;
            });
        }
        $scope.search();
        $scope.sheet = {};
        $scope.tabList = [
            {id: 'city', name: '城市'},
            {id: 'salary', name: '薪水'},
            {id: 'scale', name: '公司规模'}
        ];
        $scope.filterObj={};
        var tabId = '';
        $scope.tClick = function (id, name) {
            tabId = id;
            $scope.sheet.list = dict[id];
            $scope.sheet.visiable = true;
        };
        $scope.sClick = function (id, name) {
            if (id){
                angular.forEach($scope.tabList, function (item) {
                    if(item.id ===tabId){
                        item.name = name;
                    }
                });
                $scope.filterObj[tabId + 'Id'] =id;
            }else {
                delete $scope.filterObj[tabId + 'Id'];
                angular.forEach($scope.tabList,function (item) {
                    if (item.id === tabId){
                        switch (item.id){
                            case 'city':
                                item.name = '城市';
                                break;
                            case 'salary':
                                item.name = '薪水';
                                break;
                            case 'scale':
                                item.name = '公司规模';
                                break;
                            default:
                        }
                    }
                })
            }
        };
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
            templateUrl: "../../view/template/jobClass.html",
            link: function ($scope) {
                $scope.showPositionList = function (idx) {
                    $scope.positionList = $scope.comp.positionClass[idx].positionList;
                    //console.log($scope.comp);
                    $scope.isActive = idx;
                }
                //$scope.showPositionList(0);
                $scope.$watch('comp',function(newVal){
                    if(newVal) $scope.showPositionList(0);
                });
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
            data:'=',
            filterObj:'='
        }
    }
}]);
"use strict";
angular.module("app")
    .directive("appSheet", [function () {
        return {
            restrict: "A",
            replace: true,
            scope:{
              list:'=',
              visiable:'=',
              select:'&'
            },
            templateUrl: '../../view/template/sheet.html'
        }
    }])
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
"use strict";
angular.module('app').filter('filterByObj', [function () {
    return function (list, obj) {
        var result = [];
        angular.forEach(list,function (item) {
            var isEqual = true;
            for(var e in obj){
                if (item[e]!==obj[e]){
                    isEqual = false;
                }
            }
            if (isEqual){
                result.push(item);
            }
        });
        return result;
    }
}]);
"use strict";
angular.module("app")
    //定义的【服务】公用方法
    /*.service('cache', ['$cookies', function ($cookies) {
        this.put = function (key, value) {
            $cookies.put(key, value);
        };
        this.get = function (key) {
            return $cookies.get(key);
        };
        this.remove = function (key) {
            $cookies.remove(key);
        }
    }]);*/
    //服务和工厂调用方法相同，不同点：1，工厂可以定义一些私有的属性。2，服务是直接写的函数，工厂是返回对象，对象是函数。
    .factory('cache', ['$cookies', function ($cookies) {
        var myselfprop;
        return {
            put:function (key, value) {
                $cookies.put(key, value);
            },
            get:function (key) {
                return $cookies.get(key);
            },
            remove:function (key) {
                $cookies.remove(key);
            }
        }
    }]);
