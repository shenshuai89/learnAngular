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