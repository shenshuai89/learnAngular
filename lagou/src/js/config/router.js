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