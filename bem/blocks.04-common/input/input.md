<pre>
{
  block:'input',
  name:'address_floor',
  params: {
    label:'Этаж',
    placeholder:'',
    required:true,
    errorMsg:'Что-то пошло не так...'
  },
  mixFLB: {
    fieldMix : { block:'order', elem:'input-field' },
    labelMix : { block:'order', elem:'input-label' },
    boxMix : { block:'order', elem:'field-row' },
  },
  yandexSearch: {
    block:'list',
    mods: { type:'unordered' },
    mix: { block:'search-results' },
    mixElems: { block:'search-results', elem:'item'},
    content:[
      { content:'Ленина 2' },
      { content:'Комсомольская 3' },
      { content:'Краснознаменская 6' },
      { content:'Ленина 2' },
      { content:'Комсомольская 3' },
      { content:'Краснознаменская 6' }
    ]
  }
}                                                                                                                                                                                                                                                                                                                                                    
</pre>