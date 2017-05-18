$(function () {
    checkAndStart('.input_masked_phone', function () {
        var $domElem = $(this).find('input');
        $domElem.mask("+7(999)999-99-99",{ placeholder:"+7(___)___-__-__"} );
    })
})