$(function () {
    checkAndStart('.checkbox_connected', function () {
        var first  = $(this).find('input')[0];
        var second  = $(this).find('input')[1];
        $(this).on('change', function (e) {

            if (e.target == first) {
                if (first.checked == true) {
                    second.checked = false;
                }
            }
            else {
                if (second.checked == true) {
                    first.checked = false;
                }
            }
        })
    })
})