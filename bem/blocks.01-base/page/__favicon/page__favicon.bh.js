module.exports = function(bh) {

    bh.match('page__favicon', function(ctx, json) {

        var rel = 'shortcut icon';
        if (json.size && json.size !== '16x16' && json.size !== '32x32') {
            rel = 'apple-touch-icon';
        }

        ctx.bem(false)
            .tag('link')
            .attr('rel', rel)
            .attr('href', json.href);
    });

};
