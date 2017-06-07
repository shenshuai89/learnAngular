/**
 * Created by sam on 2017/6/2.
 */
var myApp = angular.module('myapp',[])


    .controller('firstController',['$scope', '$cacheFactory', '$log', function ($scope, $cacheFactory, $log) {

        $log.error('hello');
        $log.info('hello');
        $log.warn('hello');

        var cache = $cacheFactory('myCache',{capacity : 2});

        cache.put('name','hello');
        cache.put('age','20');
        cache.put('job','it');

        console.log(cache.info());
        /*console.log(cache.get('name'));

         cache.remove('name');

         console.log(cache.get('name'));*/
    }])
