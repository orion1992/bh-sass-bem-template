**Author of bh.js: Solovey Alexander**

Usage example ( bemjson ):
<pre>
{
  block:'select',  
  name:'another_time', 
  label:'Выберите ресторан<sup>*</sup>',
  hint:'Что-то пошло не так...',
  placeholder:'Выберите ресторан из списка',
  required:true,
  mix: {
       box: { block:'...', elem:'...' } 
       field: { block: 'popup', elem: 'select-search' },
       label: { block:'order', elem:'input-label' }
  },
  mods: { display:'block' },
  content: [
    { content:'1' },
    { content:'2' },
    { content:'3' }    
  ]
},                                                                                                                                                                                                                                                                                                                                                      
</pre>
                                                                                                            
HTML result: 
<pre>
<div class="select select_display_block">
 <div class="select__label select__label_required order__input-label">Выберите ресторан<sup>*</sup></div>
 <select style='width: 100' class="select__field popup__select-search" name="another_time" placeholder="Выберите ресторан из списка">
     <option value="" ">1</option>
     <option value="" >2</option>
     <option value="" >3</option>
 </select>
 <div class="select__error-hint">Что-то пошло не так...</div>
</div>
</pre>
Not-required options: 'label, hint, placeholder, required, mix, mods'