({
    shouldDeps: [
        { elem:'error-msg' },
        { elem:'field' },
        { elem:'option' },
        { elem:'label' },
        { elem:'label', mods: { required:true } },

    ],
    mustDeps: [
        { block: 'chosen-mobile' },
        { block: 'selectize' }
    ]
})
