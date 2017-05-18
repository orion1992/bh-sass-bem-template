({
    block: 'container',
    content: [
      {
          block: 'row',
          content: [
            {
                elem: 'col',
                mods: {md: 4},
                content: '.col-md-4'
            },
            {
                elem: 'col',
                mods: {md: 4, 'md-offset': 4},
                content: '.col-md-4 .col-md-offset-4'
            },
          ]
      },
      {
          block: 'row',
          content: [
            {
                elem: 'col',
                mods: {md: 9, 'md-push': 3},
                content: '.col-md-9 .col-md-push-3'
            },
            {
                elem: 'col',
                mods: {md: 3, 'md-pull': 9},
                content: '.col-md-3 .col-md-pull-9'
            },
          ]
      },
    ]
})
