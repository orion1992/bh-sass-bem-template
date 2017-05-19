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