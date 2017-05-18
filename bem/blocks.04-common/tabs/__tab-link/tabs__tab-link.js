$(function () {
    checkAndStart('.tabs__tab-link', function () {

        if (document.documentElement.clientWidth < 480) {
            $(this).on('click', function () {
                $(this).find('a').tab('show');
                $(this).parent().find('.tabs__tab-link').removeClass('active');
                $(this).addClass('active');
            })

        }
    })
})