/**
 * Created by sam on 2017/6/2.
 */
var myApp = angular.module('myapp',[])

myApp.controller('firstController',['$scope', function ($scope) {

    $scope.regText = {
        regVal: 'default',
        regList : [
            {
                name:'default',info:'请输入用户名'
            },
            {
                name:'required',info:'用户名不能为空'
            },
            {
                name:'pattern',info:'用户名必须是字母'
            },
            {
                name:'pass',info:'√'
            }
        ],
        change:function (err) {
           // console.log(err)
            for (var k in err){
                if(err[k]){
                    this.regVal = k
                }
                return
            }
            this.regVal = 'pass'
        }
    }

    $scope.regPassword = {
        regVal: 'default',
        regList : [
            {
                name:'default',info:'请输入密码'
            },
            {
                name:'required',info:'密码不能为空'
            },
            {
                name:'minlength',info:'密码不能小于5位'
            },
            {
                name:'maxlength',info:'密码不能大于12位'
            },
            {
                name:'pass',info:'√'
            }
        ],
        change:function (err) {
            // console.log(err)
            for (var k in err){
                if(err[k]){
                    this.regVal = k
                }
                return
            }
            this.regVal = 'pass'
        }
    }

    $scope.passwordConfirm = {
        regVal: 'default',
        regList : [
            {
                name:'default',info:'请再次输入密码'
            },
            {
                name:'required',info:'必须输入'
            },
            {
                name:'different',info:'两次输入密码不一致'
            },
            {
                name:'pass',info:'√'
            }
        ],
        confirm:function (err) {
            // console.log(err)
            if (this.password !== $scope.regPassword.password){
                this.regVal = 'different'
            }else {
                this.regVal = 'pass'
            }
        }
    }

    $scope.change = function (reg, err) {
        for (var k in err){
            if(err[k]){
                $scope[reg].regVal = k
            }
            return
        }
        $scope[reg].regVal = 'pass'
    }

}])




/*
 循环遍历数组
 for(var i=0;i<arr.length;i++){
 console.log(arr[i])
 }
 遍历对象
 for(var k in obj){
 console.log(obj[k])
 }
 */