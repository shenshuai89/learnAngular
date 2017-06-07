/**
 * Created by sam on 2017/6/2.
 */
var myApp = angular.module('myapp',[])
    .directive('myDrag', function () {
        return {
            restrict :'EA',
            replace:true,
            link:function (scope, element, attrs) {
                var disx=0
                var disy=0

                attrs.myDrag = angular.equals(attrs.myDrag,'true')

                element.on('mousedown', function (ev) {
                    var ELE = this
                    disx = ev.pageX - this.offsetLeft
                    disy = ev.pageY - this.offsetTop

                    if(attrs.myDrag){
                        var $line = $('<div>')
                        $line.css({width:$(this).outerWidth(), height:$(this).outerHeight(), position:'absolute',left:this.offsetLeft,
                        top:this.offsetTop, border:'2px dotted #000'})
                        $('body').append($line)
                    }

                    $(document).on('mousemove',function (ev) {

                        if(attrs.myDrag){
                            $line.css('left', ev.pageX - disx)
                            $line.css('top', ev.pageY - disy)
                        }else {
                            $(ELE).css('left', ev.pageX - disx)
                            $(ELE).css('top', ev.pageY - disy)
                        }

                    })
                    $(document).on('mouseup', function () {
                        $(document).off()
                        if (attrs.myDrag){
                            $(ELE).css('left', $line.offset().left)
                            $(ELE).css('top', $line.offset().top)
                            $line.remove()
                        }
                    })

                    return false
                })

            }
        }
    })

    myApp.controller('firstController',['$scope',function ($scope) {

    }])