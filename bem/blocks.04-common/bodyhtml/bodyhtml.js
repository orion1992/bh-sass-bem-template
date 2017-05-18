;(function () {
    var self = {},
        nGaleUIX = {};
    self.core = {
        dqs: function (selector) {
            return document.querySelectorAll(selector);
        },
        nodePresense: {
            private: function (domElem,func) {
                return this.operation.call(domElem, func);
            },
            operation: function (domElem, func) {
                var elems = document.querySelectorAll(domElem),
                    length = elems.length,
                    func = func || function(){return true};
                return length > 0 ?
                    (length == 1) ?
                        func.call(elems[0], this) :
                        func.call(elems, this)
                    : false;
            }
        }

    }
    for (var key in self.core) {
        nGaleUIX[key] = self.core[key].private;
    }
    // var nGaleUIX = {
    //
    //     /**
    //      *
    //      * @param domElem
    //      * @param func
    //      * @returns {boolean}
    //      */
    //     nodePresence: function (domElem, func) {
    //         return self.core.nodePresense.private(domElem, func);
    //     }
    // }


    window.nGaleUIX = nGaleUIX;

}());



window.frontAPI = window.frontAPI || {};

window.frontAPI.testModule = (function () {
  var _private = {
          item:'mazafake',
          fuck: function () {
              console.log(_private.item);
          }
      },
      _titty = function () {
          console.log('test');
      }

  return {
      testFacade: function () {
          _private.fuck();
      }
  };

}());
var currentScreenResolution = document.documentElement.clientWidth;

$(function () {
    $(document).ready(function () {



        var eqHeight = document.querySelector('.equal-height');

        if (eqHeight) {
            var blocks = [
                    {
                        selector:'.product-tile__name',
                    },
                    {
                        selector:'.about__title',
                        minResolution:'992'
                    },
                    {
                        selector:'.footer__title',
                        minResolution:'992'
                    }
            ]

            var styleTag  = document.createElement('style');
            eqHeight.innerHTML = '';

            blocks.forEach(function (item) {
                var minRes = item.minResolution || 0,
                    maxRes = item.maxResolution || 5000;

                if ((minRes < document.documentElement.clientWidth) && (maxRes > document.documentElement.clientWidth))
                {
                    styleTag.innerHTML += equalizeHeight(item.selector);
                }
            })
            eqHeight.appendChild(styleTag);




            window.addEventListener('resize', throttle(function () {
                var styleTag  = document.createElement('style');
                eqHeight.innerHTML = '';

                blocks.forEach(function (item) {
                    var minRes = item.minResolution || 0,
                        maxRes = item.maxResolution || 5000;

                    if ((minRes < document.documentElement.clientWidth) && (maxRes > document.documentElement.clientWidth))
                    {
                        styleTag.innerHTML += equalizeHeight(item.selector) + "\n";
                    }
                })
                eqHeight.appendChild(styleTag);
            }, 700))
        }
    })

})

function equalizeHeight(selector) {
    var domNode = document.querySelectorAll(selector),
        styles;

    if (domNode.length > 1) {
        var maxHeight = 0;
        // Array.from(domNode).forEach(function (item) {
        //     maxHeight = (item.offsetHeight > maxHeight) ? item.offsetHeight : maxHeight;
        // })
        [].forEach.call(domNode, function (item) {
            maxHeight = (item.offsetHeight > maxHeight) ? item.offsetHeight : maxHeight;
        })
        styles = selector + ' { \n\theight: ' + maxHeight +'px; \n}';
    }
    return styles;
}
function checkAndStart(domElem, func) {
    if ($(domElem).length > 0) {
        var result = func.call($(domElem), null);
        return result;
    }
}

// var ADAPTIVE = ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) ? screen.width <= 767 : $(window).width() + 17 <= 767;

function throttle(func, ms) {

    var isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled) { // (2)
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments); // (1)

        isThrottled = true;

        setTimeout(function() {
            isThrottled = false; // (3)
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
};