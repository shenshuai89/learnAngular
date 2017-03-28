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
