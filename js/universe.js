import * as THREE from '../vendor/three.module.min.js';
export function init(box,items,onOpen,low,solSrc){
  var W=box.clientWidth||600,H=box.clientHeight||400,ren;
  try{ren=new THREE.WebGLRenderer({antialias:!low,alpha:true,powerPreference:'low-power'})}catch(e){throw e}
  ren.setPixelRatio(Math.min(devicePixelRatio||1,low?1:2));ren.setSize(W,H);box.appendChild(ren.domElement);
  var scene=new THREE.Scene(),cam=new THREE.PerspectiveCamera(50,W/H,.1,100);cam.position.set(0,3,18.5);cam.lookAt(0,0,0);
  scene.add(new THREE.AmbientLight(0xaab4c4,.7));var pl=new THREE.PointLight(0xffffff,2.2,80);pl.position.set(6,8,10);scene.add(pl);
  var world=new THREE.Group();scene.add(world);
  var N=low?250:900,pos=new Float32Array(N*3);for(var i=0;i<N*3;i++)pos[i]=(Math.random()-.5)*60;
  var sg=new THREE.BufferGeometry();sg.setAttribute('position',new THREE.BufferAttribute(pos,3));
  world.add(new THREE.Points(sg,new THREE.PointsMaterial({color:0xffffff,size:.08})));
  var seg=low?16:32,R=.95,FOV=50,meshes=[],tags=[];
  /* Planetas: la esfera solo sirve de zona de clic; lo que se ve es la imagen del OVA */
  items.forEach(function(it,k){
    var m=new THREE.Mesh(new THREE.SphereGeometry(R,seg,seg),new THREE.MeshBasicMaterial({transparent:true,opacity:0,depthWrite:false}));
    var a=k/items.length*Math.PI*2;
    m.position.set(Math.cos(a)*6.2,Math.sin(k*1.7)*1.8,Math.sin(a)*6.2);
    m.userData={it:it,s:1};
    world.add(m);meshes.push(m);
    var t=document.createElement('div');t.className='tag';t.setAttribute('aria-hidden','true');
    if(it.imagen){var im=document.createElement('img');im.src=it.imagen;im.alt='';im.draggable=false;im.style.objectPosition=((it.foco==null?.5:it.foco)*100)+'% 50%';t.appendChild(im)}
    else t.textContent=it.n;
    box.appendChild(t);tags.push(t);
  });
  /* Sol central: si existe la imagen se usa; si no, queda el sol provisional (esfera dorada con anillo) */
  var sun=new THREE.Mesh(new THREE.SphereGeometry(1.5,seg,seg),new THREE.MeshStandardMaterial({color:0xc9a24b,emissive:0xc9a24b,emissiveIntensity:.35,roughness:.5}));
  var ring=new THREE.Mesh(new THREE.TorusGeometry(2.3,.07,8,64),new THREE.MeshBasicMaterial({color:0xe6cf94}));ring.rotation.x=1.3;sun.add(ring);world.add(sun);
  var sunTag=null;
  if(solSrc){var si=new Image();si.onload=function(){sun.visible=false;sunTag=document.createElement('div');sunTag.className='tag sol';sunTag.setAttribute('aria-hidden','true');si.alt='';si.draggable=false;sunTag.appendChild(si);box.appendChild(sunTag)};si.src=solSrc}
  var tip=document.createElement('div');tip.id='tip';box.appendChild(tip);
  var hint=document.createElement('div');hint.id='hint';hint.textContent='Arrastra para girar · toca un planeta para abrir su OVA';box.appendChild(hint);
  var ray=new THREE.Raycaster(),mp=new THREE.Vector2(),hover=null,drag=null,moved=0,ry=0,rx=0,vis=true,reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  function pick(e){var r=ren.domElement.getBoundingClientRect();mp.set((e.clientX-r.left)/r.width*2-1,-((e.clientY-r.top)/r.height)*2+1);ray.setFromCamera(mp,cam);var h=ray.intersectObjects(meshes,false)[0];return h&&h.object}
  function show(o,e){hover=o;var c=ren.domElement;c.style.cursor=o?'pointer':'grab';tip.style.opacity=o?1:0;
    if(o){var r=box.getBoundingClientRect();tip.textContent=o.userData.it.nombre+' · '+o.userData.it.grado.replace('Grado ','');tip.style.left=(e.clientX-r.left)+'px';tip.style.top=(e.clientY-r.top)+'px'}}
  var cv=ren.domElement;
  cv.addEventListener('pointerdown',function(e){drag={x:e.clientX,y:e.clientY};moved=0;hint.style.display='none'});
  cv.addEventListener('pointermove',function(e){
    if(drag){var dx=e.clientX-drag.x,dy=e.clientY-drag.y;moved+=Math.abs(dx)+Math.abs(dy);ry+=dx*.008;rx=Math.max(-.6,Math.min(.6,rx+dy*.006));drag={x:e.clientX,y:e.clientY}}
    show(pick(e),e)});
  cv.addEventListener('pointerup',function(e){if(drag&&moved<8){var o=pick(e);if(o)onOpen(o.userData.it)}drag=null});
  cv.addEventListener('pointerleave',function(){show(null)});cv.addEventListener('pointercancel',function(){drag=null});
  new ResizeObserver(function(){W=box.clientWidth;H=box.clientHeight;if(!W||!H)return;ren.setSize(W,H);cam.aspect=W/H;cam.updateProjectionMatrix()}).observe(box);
  new IntersectionObserver(function(e){vis=e[0].isIntersecting}).observe(box);
  var v=new THREE.Vector3();
  (function loop(){
    requestAnimationFrame(loop);if(!vis||document.hidden)return;
    if(!drag&&!reduce)ry+=.0025;world.rotation.y+=(ry-world.rotation.y)*.12;world.rotation.x+=(rx-world.rotation.x)*.12;
    var k=Math.tan(FOV*Math.PI/360)*2;
    function place(t,d,diam,p){var px=Math.max(26,diam*H/(k*d));t.style.width=t.style.height=px+'px';t.style.left=(p.x*.5+.5)*W+'px';t.style.top=(-p.y*.5+.5)*H+'px';t.style.zIndex=Math.round(2000-d*50);t.style.opacity=p.z<1?1:0}
    meshes.forEach(function(m,i){var t=m===hover?1.25:1;m.userData.s+=(t-m.userData.s)*.15;m.scale.setScalar(m.userData.s);
      m.getWorldPosition(v);var d=cam.position.distanceTo(v);v.project(cam);place(tags[i],d,2*R*m.userData.s,v)});
    if(!reduce)sun.rotation.y+=.01;
    if(sunTag){sun.getWorldPosition(v);var d0=cam.position.distanceTo(v);v.project(cam);place(sunTag,d0,2*3,v)}
    ren.render(scene,cam);
  })();
}
