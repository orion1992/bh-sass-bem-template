$(function () {
    checkAndStart('.tabs_slick', function () {
        var $that = this;
        initSlickTabs(this);
        $(window).on('resize', function () {
            throttle( initSlickTabs() , 400);
        })





        function initSlickTabs() {
            if (document.documentElement.clientWidth < 480) {
                if (!$that.find('.tabs__nav').hasClass('slick-initialized')) {
                    $that.find('.tabs__nav').slick({
                        arrows: true,
                        infinite: false,
                        variableWidth: true,
                        draggable: true,
                        swipe: true,
                        slidesToShow: 1,
                        prevArrow: $('.tabs__arrow-btn_type_left'),
                        nextArrow: $('.tabs__arrow-btn_type_right')

                    });
                }

            } else {
                if ($that.find('.tabs__nav').hasClass('slick-initialized')) {
                    $that.find('.tabs__nav').slick('unslick');
                }
            }
        }
    })


})