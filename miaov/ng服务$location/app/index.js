/**
 * Created by sam on 2017/6/2.
 */
var myApp = angular.module('myapp',[])


    .controller('firstController',['$scope', '$location', '$anchorScroll',function ($scope, $location, $anchorScroll) {
        //var a = $location.absUrl();
        $location.path('aaa/bbb/ccc').replace();
        $location.hash('hello');
        $location.search({'age':'20'});
        var a = $location.protocol();
        console.log(a);

        $scope.change = function(id){

            //console.log(id);
            $location.hash(id);
            $anchorScroll();

        };

    }])
