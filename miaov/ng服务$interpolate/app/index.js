/**
 * Created by sam on 2017/6/2.
 */
var myApp = angular.module('myapp',[])


    .controller('firstController',['$scope','$interpolate',function($scope,$interpolate){

        $scope.$watch('body',function(newBody){

            if(newBody){
                var temp = $interpolate(newBody);
                $scope.showText = temp({ name : $scope.name });

            }

        });

    }])
