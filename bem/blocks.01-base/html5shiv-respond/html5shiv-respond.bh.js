module.exports = function (bh) {

    bh.match('html5shiv-respond', function (ctx) {

        ctx.bem(false)
            .tag('script')
            .attr('data-skip-moving', 'true')
            .attr('src', '../../../node_modules/html5shiv/html5shiv-respond.min.js');
    });

};
