(function(){
  var D=window.AULA,$=function(s){return document.querySelector(s)};
  var esc=function(t){return String(t).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})};
  var hue=function(i){return 190+(i%4)*12};
  function card(o,i){
    var btn=o.enlace?'<a class="btn" href="'+esc(o.enlace)+'" target="_blank" rel="noopener noreferrer">Ingresar al OVA</a>'
      :'<span class="btn" role="link" aria-disabled="true">Enlace pendiente</span>';
    var alt=o.alterno?'<a class="alt" href="'+esc(o.alterno)+'" target="_blank" rel="noopener noreferrer">Enlace alterno</a>':'';
    var bg=o.imagen?'linear-gradient(0deg,rgba(14,26,43,.65),transparent 60%),url('+encodeURI(o.imagen)+') center/cover':'linear-gradient(135deg,hsl('+hue(i)+',28%,34%),hsl('+(hue(i)+8)+',30%,22%))';
    return '<article class="card"><div class="art" style="background:'+bg+(o.imagen?';height:auto;aspect-ratio:16/10':'')+'"><span>'+(o.imagen?'':esc(o.n))+'</span><small>Grado '+esc(o.grado.replace('Grado ',''))+'</small></div><div class="body">'+
      '<h3>'+esc(o.nombre)+'</h3><p>'+esc(o.desc)+'</p><span class="by">'+esc(o.autores)+'</span>'+btn+alt+'</div></article>';
  }
  /* Catálogo, búsqueda y filtros */
  var grado='Todos',q='',chips=$('#chips');
  var grados=['Todos'].concat(D.ovas.map(function(o){return o.grado}).filter(function(g,i,a){return a.indexOf(g)===i}).sort());
  chips.innerHTML=grados.map(function(g){return '<button class="chip" aria-pressed="'+(g==='Todos')+'" data-g="'+g+'">'+(g==='Todos'?g:'Grado '+g)+'</button>'}).join(' ');
  function norm(s){return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')}
  function render(){
    var l=D.ovas.slice().sort(function(x,y){return parseInt(x.grado)-parseInt(y.grado)||x.n-y.n}).filter(function(o){return (grado==='Todos'||o.grado===grado)&&(!q||norm(o.nombre+' '+o.autores+' '+o.desc+' '+o.grado).indexOf(q)>-1)});
    $('#grid').innerHTML=l.map(function(o){return '<li>'+card(o,o.n)+'</li>'}).join('');
    $('#count').textContent=l.length?l.length+' OVA encontrados':'No se encontraron OVA con esa búsqueda.';
  }
  chips.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;grado=b.dataset.g;
    chips.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===b)});render()});
  $('#q').addEventListener('input',function(e){q=norm(e.target.value.trim());render()});
  render();
  if(D.imagenes){var h=$('#inicio');if(D.imagenes.hero)h.style.background='linear-gradient(rgba(14,26,43,.35),rgba(14,26,43,.55)),url("'+D.imagenes.hero+'") center/cover';
    if(D.imagenes.fondo)document.body.style.backgroundImage='linear-gradient(rgba(14,26,43,.82),rgba(14,26,43,.92)),url("'+D.imagenes.fondo+'")'}
  /* Menú hamburguesa */
  var bg=$('#burger'),mn=$('#menu');
  function setMenu(o){mn.classList.toggle('open',o);bg.setAttribute('aria-expanded',o);bg.setAttribute('aria-label',o?'Cerrar menú':'Abrir menú')}
  bg.addEventListener('click',function(e){e.stopPropagation();setMenu(!mn.classList.contains('open'))});
  mn.addEventListener('click',function(e){if(e.target.closest('a'))setMenu(false)});
  document.addEventListener('click',function(e){if(!mn.contains(e.target))setMenu(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&mn.classList.contains('open')){setMenu(false);bg.focus()}});
  /* Frases rotativas */
  var fi=0,fr=$('#frase');(function t(){fr.textContent='«'+D.frases[fi++%D.frases.length]+'»';setTimeout(t,4500)})();
  /* Universo 3D: carga diferida solo al acercarse a la sección */
  var uni=$('#uni'),msg=$('#uni-msg'),loaded=false;
  var low=(navigator.hardwareConcurrency||4)<=2||(navigator.deviceMemory||4)<=2||matchMedia('(prefers-reduced-motion:reduce)').matches;
  function start(){
    if(loaded)return;loaded=true;
    import('./universe.js').then(function(m){
      m.init(uni,D.ovas,function(o){
        if(o.enlace)window.open(o.enlace,'_blank','noopener');
      },low,D.imagenes&&D.imagenes.sol);msg.remove();
    }).catch(function(){msg.textContent='No fue posible cargar la vista 3D en este dispositivo. Usa el catálogo de OVA.'});
  }
  if(low){msg.innerHTML='Modo ligero activo. <button class="btn" id="go3d">Cargar universo 3D</button>';$('#go3d').onclick=function(){msg.textContent='Cargando…';start()}}
  else if('IntersectionObserver' in window){new IntersectionObserver(function(e,ob){if(e[0].isIntersecting){ob.disconnect();start()}},{rootMargin:'300px'}).observe(uni)}
  else start();
})();
