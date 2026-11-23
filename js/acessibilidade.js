(function(){
  var corpo=document.body,tam=parseFloat(localStorage.getItem('tam'))||1.125;
  function aplicar(){corpo.style.setProperty('--tam',tam+'rem');
    corpo.classList.toggle('alto-contraste',localStorage.getItem('contraste')==='1');}
  function salvar(){try{localStorage.setItem('tam',tam)}catch(e){}}
  document.getElementById('aumentar').onclick=function(){tam=Math.min(tam+.125,2);salvar();aplicar();};
  document.getElementById('diminuir').onclick=function(){tam=Math.max(tam-.125,.9);salvar();aplicar();};
  document.getElementById('contraste').onclick=function(){
    var on=localStorage.getItem('contraste')==='1';localStorage.setItem('contraste',on?'0':'1');aplicar();};
  aplicar();
  var f=document.getElementById('form-contato');
  if(f){f.addEventListener('submit',function(e){e.preventDefault();
    var n=document.getElementById('nome'),m=document.getElementById('email'),r=document.getElementById('resultado');
    if(!n.value.trim()){r.textContent='Erro: o campo Nome é obrigatório.';n.focus();return;}
    if(!/^\S+@\S+\.\S+$/.test(m.value)){r.textContent='Erro: informe um e-mail válido, como nome@exemplo.com.';m.focus();return;}
    r.textContent='Mensagem enviada com sucesso. Obrigado, '+n.value+'!';f.reset();});}
})();
