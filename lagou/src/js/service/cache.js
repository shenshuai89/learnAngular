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
