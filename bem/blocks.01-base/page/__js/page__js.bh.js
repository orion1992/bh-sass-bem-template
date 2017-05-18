module.exports = function(bh) {

    bh.match('page__js', function(ctx, json) {
        ctx.bem(false)
            .tag('script');

        if(json.url) {
            ctx.attr('src', json.url);
        }
    });

};
