/* The route page map: real coastline, lakes, roads and driving routes (route-geo.js),
   drawn without a mapping library. Tap a day to light up that day's legs.
   Design from the route redesign supplied on 22 November 2026. */
const ROUTE_POINTS={leon:[-86.87897,12.43541],negro:[-86.702,12.506],hoyo:[-86.688,12.495],lake:[-86.66306,12.43306],coast:[-87.02146,12.36135],airport:[-86.1682,12.1415]};
const ROUTE_DAYS=[
 {k:'SUN 13 / NIGHT 1 · LEÓN',title:'Find your feet.',desc:'Land at 08:40. Transfer to León, meet the group, eat and settle in.',note:'Hostel night 1 of 2 · room still to book',photo:'leonCentre',caption:'León / city centre',day:'sun',routes:['arrival'],places:['leon','airport']},
 {k:'MON 14 / NIGHT 2 · EL HOYO',title:'Sleep on a volcano.',desc:'Cerro Negro boarding, then hike into El Hoyo for sunset and a night in a tent.',note:'Tent + sleeping gear supplied · $115 incl. park fees',photo:'view',caption:'El Hoyo / overnight route',day:'mon',routes:['campOut','campWalk'],places:['leon','negro','hoyo']},
 {k:'TUE 15 / NIGHT 3 · LEÓN',title:'Lake. Shower. León.',desc:'A swim at Asososca, then back to León for food and an evening with the group.',note:'Hostel night 2 of 2 · camp meals as listed',photo:'asososca',caption:'Laguna de Asososca',day:'tue',routes:['campBack','lakeWalk'],places:['hoyo','lake','leon']},
 {k:'WED 16 / NIGHT 4 · LAS PEÑITAS',title:'Head for the Pacific.',desc:'Keep the morning with your friends. Leave for Mano a Mano in the afternoon.',note:'Coast night 1 of 2 · accommodation proposed',photo:'manoShared',caption:'Mano a Mano / courtyard',day:'wed',routes:['coast'],places:['leon','coast']},
 {k:'THU 17 / NIGHT 5 · LAS PEÑITAS',title:'No alarm required.',desc:'A full day by the sea. Walk, meet people, or ask about a mangrove boat outing.',note:'Coast night 2 of 2 · boat outing optional',photo:'manoCommunal',caption:'Mano a Mano / communal space',day:'thu',routes:[],places:['coast']},
 {k:'FRI 18 / HOMEWARD',title:'One last sea breeze.',desc:'Morning transfer straight to Managua airport. Fly at 15:40, connecting in San Salvador.',note:'JFK arrival 00:10 Saturday · flight booked',photo:null,day:'fri',routes:['return'],places:['coast','airport']}
];
const ROUTE_OVERVIEW={k:'13–18 DEC / YOUR THREE BASES',title:'City. Crater. Coast.',desc:'Arrive in León, head into the volcanoes, then take two nights by the sea.',note:'4 hostel nights + 1 included camping night',photo:'manoCommunal',caption:'Mano a Mano / Las Peñitas'};

function routeMap(root){
 const P=ROUTE_POINTS,G=ROUTE_GEO,NS='http://www.w3.org/2000/svg';
 const svg=root.querySelector('.nr-map'),wrap=root.querySelector('.nr-map-wrap');
 const detail=root.querySelector('.nr-detail'),pic=root.querySelector('.nr-photo'),flight=root.querySelector('.nr-flight'),openDay=root.querySelector('.nr-open-day');
 const line=c=>({type:'LineString',coordinates:c});
 const ROUTES=[
  {id:'arrival',g:G.route_airport_leon},{id:'return',g:G.route_airport_coast},{id:'coast',g:G.route_leon_coast},
  {id:'campOut',g:line([P.leon,P.negro]),camp:true},{id:'campWalk',g:line([P.negro,P.hoyo]),camp:true},
  {id:'lakeWalk',g:line([P.hoyo,P.lake]),camp:true},{id:'campBack',g:line([P.lake,P.leon]),camp:true}];
 let selected=-1,routeEls=[],rings=[],labels=[],drawn='';
 const el=(tag,attrs={},parent)=>{const n=document.createElementNS(NS,tag);for(const [k,v] of Object.entries(attrs))n.setAttribute(k,v);(parent||svg).appendChild(n);return n;};
 const text=(parent,x,y,cls,str,anchor='start')=>{const t=el('text',{x,y,class:cls,'text-anchor':anchor},parent);t.textContent=str;return t;};
 /* Mercator, fitted to the same box as the original design. */
 function projection(w,h){
  const R=Math.PI/180,m=([lon,lat])=>[lon*R,Math.log(Math.tan(Math.PI/4+lat*R/2))];
  const a=m([-87.14,12.075]),b=m([-86.075,12.625]),pad=[21,62];
  const k=Math.min((w-2*pad[0])/(b[0]-a[0]),(h-2*pad[1])/(b[1]-a[1]));
  const cx=(a[0]+b[0])/2,cy=(a[1]+b[1])/2;
  return p=>{const q=m(p);return [w/2+(q[0]-cx)*k,h/2-(q[1]-cy)*k];};
 }
 function pathOf(geom,pr){
  const ring=(pts,close)=>pts.map((p,i)=>{const [x,y]=pr(p);return (i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1);}).join('')+(close?'Z':'');
  switch(geom.type){
   case 'FeatureCollection':return geom.features.map(f=>pathOf(f.geometry,pr)).join('');
   case 'Feature':return pathOf(geom.geometry,pr);
   case 'LineString':return ring(geom.coordinates,false);
   case 'MultiLineString':return geom.coordinates.map(c=>ring(c,false)).join('');
   case 'Polygon':return geom.coordinates.map(c=>ring(c,true)).join('');
   case 'MultiPolygon':return geom.coordinates.map(p=>p.map(c=>ring(c,true)).join('')).join('');
   default:return '';}
 }
 function draw(){
  const w=Math.round(svg.clientWidth),h=Math.round(svg.clientHeight);if(!w||!h||drawn===w+'x'+h)return;drawn=w+'x'+h;
  svg.setAttribute('viewBox',`0 0 ${w} ${h}`);svg.replaceChildren();routeEls=[];rings=[];labels=[];
  const pr=projection(w,h);
  let grid='';for(let lon=-87.5;lon<=-85.75;lon+=.25)grid+=pathOf(line([[lon,11.8],[lon,12.9]]),pr);for(let lat=11.75;lat<=12.9;lat+=.25)grid+=pathOf(line([[-87.4,lat],[-85.8,lat]]),pr);
  el('path',{d:grid,class:'nr-grid'});
  el('path',{d:pathOf(G.land,pr),class:'nr-land'});
  el('path',{d:pathOf(G.lakes,pr),class:'nr-lake'});
  el('path',{d:pathOf(G.roads,pr),class:'nr-road'});
  const tracks=el('g');
  ROUTES.forEach(r=>{const d=pathOf(r.g,pr);el('path',{d,class:'nr-route-under',opacity:r.camp?.65:.8},tracks);routeEls.push({...r,el:el('path',{d,class:'nr-route'+(r.camp?' nr-camp-route':'')},tracks)});});
  const lk=pr([-86.37,12.34]);const wl=el('text',{x:lk[0],y:lk[1],class:'nr-water-label','text-anchor':'middle'});el('tspan',{x:lk[0]},wl).textContent='Lake';el('tspan',{x:lk[0],dy:15},wl).textContent='Managua';
  const marks=el('g');
  const mark=(id,num,fill)=>{const [x,y]=pr(P[id]);const g=el('g',{transform:`translate(${x} ${y})`},marks);rings.push({id,el:el('circle',{r:19,class:'nr-active-ring'},g)});el('circle',{r:num?12:5,fill,stroke:'var(--paper)','stroke-width':2.7},g);if(num)text(g,0,0,'nr-pin-number',num,'middle');return [x,y];};
  const leon=mark('leon','1','var(--forest)'),hoyo=mark('hoyo','2','var(--red)'),coast=mark('coast','3','var(--forest)'),airport=mark('airport',null,'var(--ink)');
  const [ax,ay]=pr(P.lake);el('circle',{cx:ax,cy:ay,r:3,class:'nr-mini'},marks);
  const label=(id,x,y,lines,anchor='start',leader)=>{const g=el('g');if(leader){const [px,py]=pr(P[id]);el('path',{d:`M${px} ${py}L${leader[0]} ${leader[1]}L${x+(anchor==='end'?-3:3)} ${y+3}`,class:'nr-leader'},g);}text(g,x,y,'nr-callout',lines[0],anchor);lines.slice(1).forEach((s,i)=>text(g,x,y+15+i*14,'nr-label-note',s,anchor));labels.push({id,el:g});};
  label('leon',leon[0]-8,leon[1]-30,['LEÓN','Sun + Tue'],'end');
  label('hoyo',hoyo[0]+31,hoyo[1]-54,['EL HOYO','Mon 14 · tent'],'start',[hoyo[0]+17,hoyo[1]-33]);
  const coastY=coast[1]+53;label('coast',Math.max(12,coast[0]-24),coastY,['MANO A MANO','Las Peñitas · Wed + Thu'],'start',[coast[0]-4,coast[1]+32]);
  /* Pacific label: below the Mano label and above the scale bar, or left out if there's no room. */
  const pacY=Math.max(coastY+40,Math.min(pr([-87.05,12.18])[1],h-50));if(pacY<=h-46)text(null,Math.max(52,pr([-87.05,12.18])[0]),pacY,'nr-water-label','Pacific Ocean','middle');
  label('airport',w-18,Math.min(airport[1]+55,h-30),['MGA AIRPORT','Arrive Sun · leave Fri'],'end');
  text(null,ax+12,ay+10,'nr-label-note','Asososca');
  const km=Math.abs(pr([-87,12.2])[0]-pr([-87+20/(111.32*Math.cos(12.2*Math.PI/180)),12.2])[0]);
  el('path',{d:`M16 ${h-30}v5h${km}v-5`,fill:'none',stroke:'#386350','stroke-width':1.3});
  text(null,16,h-36,'nr-subtle','20 km');text(null,16+km+12,h-25,'nr-subtle','↑ N');
  select(selected);
 }
 function select(day){
  selected=day;
  root.querySelectorAll('.nr-day').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.mapDay)===day)));
  const a=day<0?ROUTE_OVERVIEW:ROUTE_DAYS[day];
  detail.querySelector('.nr-detail-kicker').textContent=a.k;detail.querySelector('.nr-detail-title').textContent=a.title;
  detail.querySelector('.nr-detail-desc').textContent=a.desc;detail.querySelector('.nr-detail-note').textContent=a.note;
  pic.hidden=!a.photo;flight.hidden=!!a.photo;
  if(a.photo){const img=pic.querySelector('img');delete img.dataset.failed;delete img.dataset.fellBack;img.classList.remove('img-failed');pic.querySelector('.img-missing')?.remove();
   img.dataset.id=a.photo;if(isRemote(a.photo))img.referrerPolicy='no-referrer';else img.removeAttribute('referrerpolicy');img.src=imgSrc(a.photo);img.alt=PHOTOS[a.photo].alt;
   pic.dataset.photo=a.photo;pic.dataset.caption=PHOTOS[a.photo].caption;pic.querySelector('.nr-figcaption').textContent=a.caption;pic.setAttribute('aria-label','Enlarge photo: '+PHOTOS[a.photo].alt);}
  openDay.hidden=day<0;if(day>=0){openDay.dataset.day=a.day;openDay.textContent=`Open ${['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'][day]} ›`;}
  const active=day<0?[]:a.routes;
  routeEls.forEach(x=>{x.el.setAttribute('opacity',day<0?(x.id==='return'?.6:.95):(active.includes(x.id)?1:.12));x.el.style.strokeWidth=day>=0&&active.includes(x.id)?3.6:(x.camp?2:2.5);});
  rings.forEach(x=>x.el.classList.toggle('active',day>=0&&a.places.includes(x.id)));
  labels.forEach(x=>x.el.setAttribute('opacity',day<0||a.places.includes(x.id)?1:.5));
  root.querySelector('.nr-map-desc').textContent=(day<0?'Overview of all six days. North is up.':a.k+'. '+a.desc)+' Driving routes follow mapped roads; dotted volcano links connect stops rather than mark hiking trails.';
 }
 root.addEventListener('click',e=>{const b=e.target.closest('[data-map-day]');if(b){e.stopPropagation();select(Number(b.dataset.mapDay));}});
 new ResizeObserver(draw).observe(wrap);select(-1);draw();
}
