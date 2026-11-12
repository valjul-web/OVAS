import * as THREE from '../vendor/three.module.min.js';
export function init(box,items,onOpen,low){
  var W=box.clientWidth||600,H=box.clientHeight||400,ren;
  try{ren=new THREE.WebGLRenderer({antialias:!low,alpha:true,powerPreference:'low-power'})}catch(e){throw e}
  ren.setPixelRatio(Math.min(devicePixelRatio||1,low?1:2));ren.setSize(W,H);box.appendChild(ren.domElement);
  var scene=new THREE.Scene(),cam=new THREE.PerspectiveCamera(50,W/H,.1,100);cam.position.set(0,3,18.5);cam.lookAt(0,0,0);
  scene.add(new THREE.AmbientLight(0xaab4c4,.7));var pl=new THREE.PointLight(0xffffff,2.2,80);pl.position.set(6,8,10);scene.add(pl);
  var world=new THREE.Group();scene.add(world);
  var N=low?250:900,pos=new Float32Array(N*3);for(var i=0;i<N*3;i++)pos[i]=(Math.random()-.5)*60;
  var sg=new THREE.BufferGeometry();sg.setAttribute('position',new THREE.BufferAttribute(pos,3));
  world.add(new THREE.Points(sg,new THREE.PointsMaterial({color:0xffffff,size:.08})));
  var seg=low?16:32,meshes=[],tags=[];
  items.forEach(function(it,k){
    var camu=k===items.length-1,col=camu?0xc9a24b:new THREE.Color().setHSL((190+(k%4)*12)/360,.3,.5);
    var m=new THREE.Mesh(new THREE.SphereGeometry(camu?1.5:.8,seg,seg),new THREE.MeshStandardMaterial({color:col,emissive:col,emissiveIntensity:camu?.2:.05,roughness:.5}));
    var a=k/(items.length-1)*Math.PI*2;
    if(camu)m.position.set(0,0,0);else m.position.set(Math.cos(a)*6.2,Math.sin(k*1.7)*1.8,Math.sin(a)*6.2);
    m.userData={it:it,base:camu?1.5:.8,s:1,camu:camu};
    if(camu){var r=new THREE.Mesh(new THREE.TorusGeometry(2.3,.07,8,64),new THREE.MeshBasicMaterial({color:0xe6cf94}));r.rotation.x=1.3;m.add(r)}
    world.add(m);meshes.push(m);
    var t=document.createElement('div');t.className='tag'+(camu?' camu':'');t.textContent=it.n;box.appendChild(t);tags.push(t);
  });
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
    meshes.forEach(function(m,i){var t=m===hover?1.25:1;m.userData.s+=(t-m.userData.s)*.15;m.scale.setScalar(m.userData.s);
      if(m.userData.camu&&!reduce)m.rotation.y+=.01;
      m.getWorldPosition(v);v.project(cam);tags[i].style.left=(v.x*.5+.5)*W+'px';tags[i].style.top=(-v.y*.5+.5)*H+'px';tags[i].style.opacity=v.z<1?1:0});
    ren.render(scene,cam);
  })();
}
