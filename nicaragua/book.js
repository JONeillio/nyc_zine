const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const mapUrl=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
const dirUrl=(o,dest,mode,via)=>'https://www.google.com/maps/dir/?api=1'+(o?'&origin='+encodeURIComponent(o):'')+'&destination='+encodeURIComponent(dest)+(via&&via.length?'&waypoints='+encodeURIComponent(via.join('|')):'')+'&travelmode='+(mode||'driving');
/* One planned route per day, always between fixed points. Nicaragua is taxis and drivers, so routes are by road. */
const AIRPORT='Augusto C. Sandino International Airport, Managua';
const ROUTES={
 sun:{from:AIRPORT,to:'Calle La Calzada, Granada, Nicaragua',label:'Airport to Granada',start:'the airport'},
 mon:{from:'Parque Central, Granada, Nicaragua',via:['Puerto Asese, Granada, Nicaragua','Mercado de Artesanías, Masaya, Nicaragua'],to:'Masaya Volcano National Park, Nicaragua',label:'Granada, the islets, Masaya, the volcano',start:'Granada'},
 tue:{from:'Parque Central, Granada, Nicaragua',to:'Puerto de San Jorge, Rivas, Nicaragua',label:'Granada to the San Jorge boat',start:'Granada'},
 wed:{from:'Playa Santo Domingo, Ometepe, Nicaragua',via:['Ojo de Agua, Ometepe, Nicaragua','Charco Verde, Ometepe, Nicaragua'],to:'Punta Jesus Maria, Ometepe, Nicaragua',label:'Round Ometepe',start:'Santo Domingo'},
 thu:{from:'Puerto de San Jorge, Rivas, Nicaragua',via:['Mirador de Catarina, Nicaragua'],to:'Laguna de Apoyo, Nicaragua',label:'San Jorge to Laguna de Apoyo',start:'Santo Domingo',startAt:'Playa Santo Domingo, Ometepe, Nicaragua'},
 fri:{from:'Laguna de Apoyo, Nicaragua',to:AIRPORT,label:'Apoyo to the airport',start:'Apoyo'}};
const money=n=>'$'+(Math.round(n*100)%100?n.toFixed(2):Math.round(n));
const dayCost=d=>d.stops.reduce((t,s)=>t+(s.status==='Optional'?0:(s.cost||0)),0);
const costLine=s=>s.cost?`<p class="dialog-cost">≈ ${money(s.cost)} · ${esc(s.costNote||'')}</p>`:'';
const routeUrl=id=>{const r=ROUTES[id];return r?dirUrl(r.from,r.to,r.mode,r.via):''};
const short=s=>SHORT[s.name]||[s.time.toUpperCase(),s.name];
/* A leg runs from the previous mapped stop that day (or the day's fixed start) to this stop. Never from current location. */
function legUrl(dayId,index){const d=TRIP.days.find(d=>d.id===dayId),s=d?.stops[index],r=ROUTES[dayId]||{};if(!s?.map)return '';
 let from='',name='';for(let k=index-1;k>=0;k--)if(d.stops[k].map){from=d.stops[k].map;name=short(d.stops[k])[1];break;}
 if(!from){from=r.startAt||r.from;name=r.start||'the start';}
 if(from===s.map)return '';
 return {url:dirUrl(from,s.map,'driving'),from,name};}
const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
const immersiveQuery=matchMedia('(max-width:700px), (pointer:coarse) and (max-height:540px)');
const isStandalone=()=>matchMedia('(display-mode: fullscreen), (display-mode: standalone)').matches||navigator.standalone===true;
const canFullscreen=()=>!!(document.documentElement.requestFullscreen||document.documentElement.webkitRequestFullscreen)&&!isStandalone();
const pageMeta=[], dayPage={}, pages=[], pageIndex={};
let flipbook, credits=[], checks={}, changingHash=false;
try{checks=JSON.parse(localStorage.getItem('nic-booking-checks-v1')||'{}');}catch{}
function tabs(active){return `<nav class="day-tabs" aria-label="Jump to a day">${TRIP.days.map(d=>`<button type="button" data-day="${d.id}" class="${active===d.id?'active':''}" aria-label="${d.day} ${d.date}">${d.day.slice(0,3).toUpperCase()}</button>`).join('')}</nav>`;}
function running(label,num){return `<div class="page-running"><button type="button" class="running-home" data-jump="1" aria-label="Go to contents">A FEW GOOD DETOURS</button><span>${esc(label)} · ${String(num+1).padStart(2,'0')}</span></div>`;}
function addPage(html,meta,klass=''){const i=pages.length;pageMeta.push(meta);pageIndex[meta.id]=i;pages.push(`<section class="zpage" data-index="${i}" data-density="soft"><div class="paper-inner ${klass}">${html}${i>0?'<span class="back-corner" data-turn="-1" aria-hidden="true"></span>':''}<span class="drag-corner" data-turn="1" aria-hidden="true"></span></div></section>`);}
function linkButtons(s,leg){return `<div class="dialog-links">${s.map?`<a href="${mapUrl(s.map)}" target="_blank" rel="noopener noreferrer">Google Maps</a>`:''}${leg?`<a href="${leg.url}" target="_blank" rel="noopener noreferrer">From ${esc(leg.name)} ↗</a>`:''}${s.url?`<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.link||'Details')}</a>`:''}</div>`;}
function pieceHTML(d,p,k){
 const st=`left:${p.x}%;top:${p.y}%;width:${p.w}%;${p.h!=null?`height:${p.h}%;`:''}--r:${p.r||0}deg;z-index:${p.z||k+1}`;
 if(p.note!=null)return `<p class="callout ${p.kind||''}" style="${st}">${p.note}</p>`;
 const s=p.stop!=null?d.stops[p.stop]:null;
 const act=s?`data-stop="${d.id}:${p.stop}"`:`data-photo="${p.img}" data-caption="${esc(p.cap||p.label||'')}"`;
 return `<button type="button" class="piece ${p.kind||''}" style="${st}" ${act} aria-label="${esc((p.label||p.cap||'Photo')+(s?' · details':' · enlarge photo'))}"><img src="assets/${p.img}.webp" alt="" draggable="false" style="${p.pos?`object-position:${p.pos}`:''}">${p.label?`<span class="piece-label ${p.lp||''}">${p.time?`<b>${esc(p.time)}</b> `:''}${esc(p.label)}</span>`:''}</button>`;
}
function dayPageHTML(d,i){
 const st=STORY[d.id];
 const rows=d.stops.map((s,k)=>{const [t,n]=short(s);const opt=s.status==='Optional';return `<button type="button" class="sheet-row${opt?' optional':''}" data-stop="${d.id}:${k}"><b>${esc(t)}</b><span>${esc(n)}${opt?' <em>maybe</em>':''}</span></button>`;}).join('');
 return `${running(`${d.day.toUpperCase()} ${d.short} DEC · ${st.kicker}`,i)}<h2 class="day-title">${d.day.toUpperCase()} ${d.short} DECEMBER</h2><p class="day-line">${esc(st.line||d.title)}</p><div class="collage">${st.pieces.map((p,k)=>pieceHTML(d,p,k)).join('')}</div><div class="run-sheet"><div class="sheet-head"><span>THE RUNDOWN</span><span class="sheet-links">${ROUTES[d.id]?`<a class="route-stamp" href="${routeUrl(d.id)}" target="_blank" rel="noopener noreferrer" aria-label="Open the day's route in Google Maps: ${esc(ROUTES[d.id].label)}">ROUTE ↗</a>`:''}<button type="button" data-day-detail="${d.id}">Notes ›</button></span></div>${rows}</div>${tabs(d.id)}`;
}
const total=()=>TRIP.days.reduce((t,d)=>t+dayCost(d),0)+TRIP.travel.lines.reduce((t,l)=>t+l.amount,0);
function buildPages(){
 addPage(`<div class="halftone"></div><div class="cover-strap">A FEW GOOD DETOURS</div><div class="cover-head"><h1>NICA<br>RAGUA</h1><div class="cover-date"><span>13–18</span><span>DECEMBER</span><span>2026</span></div></div><div class="cover-train"><img src="assets/ferry.webp" alt="Concepción volcano rising out of Lake Nicaragua, seen from the Ometepe boat" draggable="false"></div><div class="cover-bottom"><div class="cover-quote">Lava glow.<br>Lake beaches.<br>Cold Toñas.</div><div class="cover-mosaic"><img class="m1" src="assets/volcano.webp" alt="Masaya volcano crater" draggable="false"><img class="m2" src="assets/calzada.webp" alt="Calle La Calzada, Granada" draggable="false"><img class="m3" src="assets/ojo.webp" alt="Ojo de Agua springs" draggable="false"><img class="m4" src="assets/apoyo.webp" alt="Laguna de Apoyo" draggable="false"><span class="m-tag">6 DAYS, 4 VOLCANOES</span></div></div>${tabs('')}`,{id:'cover',label:'The cover'},'cover');
 addPage(`${running('CONTENTS',1)}<h2 class="index-title">SIX DAYS.<br><em>TWO LAKES.</em></h2><div class="contents-grid six">${TRIP.days.map((d,i)=>{const st=STORY[d.id]||{};return `<button class="contents-tile t${i}" type="button" data-day="${d.id}"><img src="assets/${st.cover||d.image}.webp" alt="" draggable="false"><span class="tile-day">${d.day.slice(0,3).toUpperCase()} ${d.short}</span><strong>${esc(st.tile||d.label)}</strong></button>`;}).join('')}</div><div class="contents-extras"><button type="button" data-jump="practical">BEFORE YOU GO</button><button type="button" data-jump="bookings">TO SORT</button><button type="button" data-jump="costs">COSTS</button><button type="button" data-jump="alternatives">MAYBES</button></div>${tabs('')}`,{id:'contents',label:'Contents'},'contents');
 TRIP.days.forEach(d=>{const i=pages.length;dayPage[d.id]=i;addPage(dayPageHTML(d,i),{id:d.id,label:`${d.day} ${d.short} December`,day:d.id},'day');});
 addPage(`${running('BEFORE YOU GO',pages.length)}<h2 class="page-title">GETTING IN,<br>GETTING ABOUT.</h2><div class="practical">${TRIP.practical.map(p=>`<h3>${esc(p.head)}</h3><p>${esc(p.text)}</p>`).join('')}</div><button class="special-button" type="button" data-open="travel">Flights & transfers</button>${tabs('')}`,{id:'practical',label:'Before you go'},'special credits-page practical-page');
 addPage(`${running('THE LIST',pages.length)}<h2 class="page-title">STILL<br>TO SORT.</h2><p class="special-intro">Nothing’s booked yet except the flights. Ticks stay on this phone.</p>${['book','do'].map(k=>`<h3 class="tracker-head">${k==='book'?'TO BOOK':'TO DO'}</h3>${TRIP.bookings.filter(b=>b.kind===k).map(b=>`<label class="tracker-row"><input type="checkbox" data-check="${b.id}" ${checks[b.id]?'checked':''}><span class="tick" aria-hidden="true"></span><span class="tr-main"><strong>${esc(b.title)}</strong><small>${esc(b.date)}</small></span>${b.cost?`<em>${money(b.cost)}</em>`:''}</label>`).join('')}`).join('')}<button class="special-button" type="button" data-open="bookings">Links & details</button>${tabs('')}`,{id:'bookings',label:'Still to sort'},'special tracker-page nic-tracker');
 addPage(`${running('THE DAMAGE',pages.length)}<h2 class="page-title">WHAT IT’LL<br>SET YOU BACK.</h2><p class="special-intro">Rough numbers per person in US dollars, not quotes. Flights already paid.</p><div class="cost-table">${TRIP.days.map(d=>`<button type="button" class="cost-row" data-day-detail="${d.id}"><b>${d.day.slice(0,3).toUpperCase()} ${d.short}</b><span>${esc((STORY[d.id]||{}).tile||d.label)}</span><em>${money(dayCost(d))}</em></button>`).join('')}${TRIP.travel.lines.map(l=>`<div class="cost-row travel"><b>EXTRA</b><span>${esc(l.label)}</span><em>${money(l.amount)}</em></div>`).join('')}<div class="cost-row total"><b>ALL IN</b><span>roughly, before shopping</span><em>${money(total())}</em></div></div><p class="cost-foot">About £${Math.round(total()/1.3/10)*10} at roughly $1.30 to the pound. Taxis are the big cost; going by chicken bus and dorms would halve it. Hammocks from Masaya not included.</p><button class="special-button" type="button" data-open="travel">Flights & transfers</button>${tabs('')}`,{id:'costs',label:'What it costs'},'special costs-page');
 addPage(`${running('ALTERNATIVES',pages.length)}<h2 class="page-title">THE GOOD<br>MAYBES.</h2><p class="special-intro">Swaps, if you fancy a different week.</p>${TRIP.alternatives.map(a=>`<div class="alternative-card"><img src="assets/${a.image}.webp" alt="${esc(a.title)}" draggable="false"><div><h3>${esc(a.title)}</h3><p>${esc(a.tag)}</p><button type="button" data-alt="${a.id}">Details</button></div></div>`).join('')}<button class="special-button" type="button" data-open="credits">Photo credits</button>${tabs('')}`,{id:'alternatives',label:'Alternatives'},'special');
 addPage(`${running('NICARAGUA · DECEMBER 2026',pages.length)}<h2>TAKE<br>THE GOOD<br>DETOURS.</h2><p>A glowing crater.<br>A beach between volcanoes.<br>A swim inside another.<br>Then back to New York.</p><div class="back-actions"><a class="special-button" href="../#contents">The New York zine</a><div class="stamp-row"><button type="button" data-share>Share the zine</button><a href="list.html">Read as a list</a><button type="button" data-open="credits">Credits</button></div></div>${tabs('')}`,{id:'back',label:'The back cover'},'back-cover');
 $('#book').innerHTML=pages.join('');
}
function desiredPage(){const h=location.hash.slice(1);if(dayPage[h]!=null)return dayPage[h];return h==='plan'||h==='week'?1:(pageIndex[h]??0);}
function onPage(index){
 const orientation=flipbook?.getOrientation?.()||'portrait';const visible=orientation==='landscape'?[index,index+1]:[index];
 const meta=pageMeta[index]||pageMeta[0];$('#page-label').textContent=meta.label;
 $('#page-count').textContent=orientation==='landscape'?`${String(index+1).padStart(2,'0')}–${String(Math.min(index+2,pages.length)).padStart(2,'0')} / ${pages.length}`:`${String(index+1).padStart(2,'0')} / ${pages.length}`;
 $('#previous').disabled=index<=0;$('#next').disabled=index>=(orientation==='landscape'?pages.length-2:pages.length-1);
 for(const p of document.querySelectorAll('#book .zpage')){const shown=visible.includes(Number(p.dataset.index));p.setAttribute('aria-hidden',String(!shown));p.inert=!shown;}
 $('#list-link').href='list.html#'+(meta.day||'');
 document.title=(meta.day?meta.label+' · ':'')+'A Few Good Detours · Nicaragua';
}
function go(index,animate=true){
 dismissHints();if(!flipbook)return;const n=Math.max(0,Math.min(pages.length-1,index));
 if(reduceMotion||!animate)flipbook.turnToPage(n);else flipbook.flip(n,'bottom');
}
function step(delta){dismissHints();if(!flipbook)return;if(reduceMotion){delta>0?flipbook.turnToNextPage():flipbook.turnToPrevPage();}else{delta>0?flipbook.flipNext('bottom'):flipbook.flipPrev('bottom');}}
function openDialog(title,html,kicker='THE DETOUR ISSUE · NICARAGUA'){$('#dialog-body').innerHTML=`<p class="dialog-kicker">${esc(kicker)}</p><h2 class="dialog-heading" id="dialog-heading">${esc(title)}</h2>${html}`;$('#details-dialog').showModal();dismissHints();}
function stopHTML(d,s,i,tag='section'){return `<${tag} class="dialog-stop"><p class="dialog-time">${esc(s.time)}${s.status?' · '+esc(s.status):''}</p>${tag==='section'?`<h3>${esc(s.name)}</h3>`:''}${s.image?`<img class="dialog-photo" src="assets/${s.image}.webp" alt="${esc(s.name)}">`:''}<p class="dialog-text">${esc(s.text)}</p>${s.note?`<p class="dialog-note">${esc(s.note)}</p>`:''}${costLine(s)}${linkButtons(s,legUrl(d.id,i))}</${tag}>`;}
function stopDetails(dayId,index){const d=TRIP.days.find(d=>d.id===dayId),s=d?.stops[index];if(!s)return;openDialog(s.name,stopHTML(d,s,index,'div'),`${d.day.toUpperCase()} ${d.short} DECEMBER`);}
function dayDetails(id){const d=TRIP.days.find(d=>d.id===id);if(!d)return;openDialog(d.day+' '+d.date,`<p class="dialog-text">${esc(d.subtitle)}</p><p class="dialog-cost">Today, roughly ${money(dayCost(d))} on transport, tickets, food and drink. Rooms and maybes not included.</p>${ROUTES[d.id]?`<div class="dialog-links"><a href="${routeUrl(d.id)}" target="_blank" rel="noopener noreferrer">Route: ${esc(ROUTES[d.id].label)} ↗</a></div>`:''}<p class="dialog-note">${esc(d.travel)}</p>${d.stops.map((s,i)=>stopHTML(d,s,i)).join('')}<p class="dialog-note">${esc(d.breathing)}</p>`);}
function travelInfo(){openDialog('Flights & transfers',`<section class="dialog-stop"><h3>In</h3><p class="dialog-text">Sun 13 Dec: AV567 JFK 01:40 → San Salvador 05:45, then AV396 San Salvador 07:45 → Managua 08:40.</p></section><section class="dialog-stop"><h3>Out</h3><p class="dialog-text">Fri 18 Dec: AV397 Managua 15:40 → San Salvador 16:35, then AV566 San Salvador 18:25 → JFK 00:10 Sat 19.</p><p class="dialog-note">San Salvador is a connection only, you don’t go through immigration there. Be at Managua by 1:15pm.</p></section><section class="dialog-stop"><h3>On the ground</h3><p class="dialog-text">Private drivers booked through wherever you’re staying. Easier than haggling and not much more than a street taxi for long runs. Agree the price before you get in. Chicken buses are the cheap way between towns, about a dollar, but slow with a bag.</p></section><section class="dialog-stop"><h3>Rough drive times</h3><p class="dialog-text">Airport → Granada 1h. Granada → Masaya 30 min. Granada → San Jorge port 1½h. Ferry to Moyogalpa 70 min. San Jorge → Laguna de Apoyo 1¾h. Apoyo → airport 45 min.</p></section><div class="dialog-links"><a href="https://ometepeislandinfo.com/Ferry-Schedule" target="_blank" rel="noopener noreferrer">Ometepe boats</a><a href="https://www.gov.uk/foreign-travel-advice/nicaragua" target="_blank" rel="noopener noreferrer">FCDO advice</a></div>`,'TRAVEL');}
function bookings(){openDialog('Still to sort',`<p class="dialog-text">Ticks stay on this phone. They’re not reservations.</p>${TRIP.bookings.map(b=>`<article class="check-item"><input type="checkbox" data-check="${b.id}" aria-label="Mark ${esc(b.title)} as sorted" ${checks[b.id]?'checked':''}><div><h3>${esc(b.title)}</h3><p class="dialog-time">${esc(b.date)}</p><p>${esc(b.text)}</p>${b.url?`<a href="${esc(b.url)}" target="_blank" rel="noopener noreferrer">${esc(b.action)}</a>`:''}</div></article>`).join('')}<div class="dialog-links"><a href="https://www.fitfortravel.nhs.uk/destinations/central-america/nicaragua" target="_blank" rel="noopener noreferrer">fitfortravel: Nicaragua</a><a href="https://www.gov.uk/foreign-travel-advice/nicaragua/entry-requirements" target="_blank" rel="noopener noreferrer">FCDO entry rules</a></div>`,'BOOKINGS');}
function alternative(id){const a=TRIP.alternatives.find(a=>a.id===id);if(!a)return;openDialog(a.title,`${a.image?`<img class="dialog-photo" src="assets/${a.image}.webp" alt="${esc(a.title)}">`:''}<p class="dialog-text">${esc(a.text)}</p>${a.note?`<p class="dialog-note">${esc(a.note)}</p>`:''}${linkButtons(a)}`,'ALTERNATIVES');}
function showCredits(){openDialog('The credits',`<p class="dialog-text">Union Gothic by <a href="https://wehtt.am/fonts/" target="_blank" rel="noopener noreferrer">Matthew Hinders-Anderson</a>, used unchanged for this personal, non-commercial itinerary under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener noreferrer">CC BY-NC-ND 4.0</a>. Page turning: <a href="https://github.com/Nodlik/StPageFlip" target="_blank" rel="noopener noreferrer">StPageFlip</a>, MIT licence.</p><p class="dialog-text">Photos from Wikimedia Commons, used under their Creative Commons licences. Some are years old; the Masaya lava lake photo shows how it used to look.</p><div class="credit-links">${credits.map(c=>`<a href="${esc(c.source)}" target="_blank" rel="noopener noreferrer"><strong>${esc(c.id.replaceAll('_',' '))}</strong>${esc(c.credit)}</a>`).join('')}</div>`,'PHOTOS, FONTS & SOFTWARE');}
function showPhoto(id,caption){const c=credits.find(c=>c.id===id);$('#large-photo').src=`assets/${id}.webp`;$('#large-photo').alt=caption;$('#photo-caption').innerHTML=`${esc(caption)}${c?` · <a href="${esc(c.source)}" target="_blank" rel="noopener noreferrer">${esc(c.credit)}</a>`:''}`;$('#photo-dialog').showModal();dismissHints();}
function toast(s){$('#toast').textContent=s;$('#toast').classList.add('show');setTimeout(()=>$('#toast').classList.remove('show'),4000);}
let hintTimer;
function dismissHints(){const h=$('#gesture-guide');if(h)h.remove();clearTimeout(hintTimer);try{localStorage.setItem('detour-zine-gestures-seen-v1','yes');}catch{}}
function showHints(){let seen=false;try{seen=localStorage.getItem('detour-zine-gestures-seen-v1')==='yes';}catch{}if(seen)return;const h=document.createElement('div');h.id='gesture-guide';h.setAttribute('role','note');h.innerHTML=`<div class="hint-top"><svg viewBox="0 0 60 90" aria-hidden="true"><path d="M30 5v65m-16-16 16 16 16-16"/></svg><strong>PULL DOWN FROM THE TOP</strong><span>Back to contents</span></div><div class="hint-middle"><svg viewBox="0 0 160 50" aria-hidden="true"><path d="M8 25h144M28 7 10 25l18 18m104-36 18 18-18 18"/></svg><strong>SWIPE FROM THE MIDDLE</strong><span>Right: back a page · Left: forward</span></div><div class="hint-buttons">${immersiveQuery.matches&&canFullscreen()?'<button type="button" id="hint-fullscreen">Read full screen</button>':''}<button type="button" id="dismiss-hints">Got it</button></div>`;$('.book-wrap').append(h);$('#dismiss-hints').addEventListener('click',dismissHints);$('#hint-fullscreen')?.addEventListener('click',()=>{enterFullscreen();dismissHints();});hintTimer=setTimeout(dismissHints,$("#hint-fullscreen")?8000:5500);}
let suppressClickUntil=0;
function installTopGesture(){
 const el=$('#book');let drag=null;
 const start=(x,y,target)=>{const active=[...el.querySelectorAll('.zpage[aria-hidden="false"]')].map(p=>p.getBoundingClientRect()).find(r=>r.width>0&&x>=r.left&&x<=r.right&&y>=r.top&&y<=r.bottom);const r=active||el.getBoundingClientRect();const top=y-r.top<Math.min(85,r.height*.17);const cornerEl=target.closest?.('[data-turn]');const corner=!top&&!!cornerEl;drag={x,y,mode:top?'top':corner?'corner':'middle',moved:false,turn:cornerEl?Number(cornerEl.dataset.turn):0};return drag.mode;};
 const move=(x,y,e)=>{if(!drag)return;const dx=x-drag.x,dy=y-drag.y;if(Math.hypot(dx,dy)>10)drag.moved=true;e.stopImmediatePropagation();if(drag.moved&&e.cancelable)e.preventDefault();};
 const end=(x,y,e)=>{if(!drag)return;const d=drag;drag=null;const dx=x-d.x,dy=y-d.y;if(d.moved)suppressClickUntil=Date.now()+650;e.stopImmediatePropagation();if(d.moved&&e.cancelable)e.preventDefault();if(d.mode==='top'){if(dy>38&&dy>Math.abs(dx)*.6)go(1);else if(!d.moved&&d.turn)step(d.turn);}else if(Math.abs(dx)>42&&Math.abs(dx)>Math.abs(dy)*.9){step(dx>0?-1:1);}else if(!d.moved&&d.turn){suppressClickUntil=Date.now()+400;step(d.turn);}};
 let lastTouch=0;
 el.addEventListener('touchstart',e=>{lastTouch=Date.now();if(e.touches.length!==1)return;const t=e.touches[0];start(t.clientX,t.clientY,e.target);e.stopImmediatePropagation();},{capture:true,passive:true});
 el.addEventListener('touchmove',e=>{if(e.touches.length===1)move(e.touches[0].clientX,e.touches[0].clientY,e);},{capture:true,passive:false});
 el.addEventListener('touchend',e=>{lastTouch=Date.now();if(e.changedTouches.length)end(e.changedTouches[0].clientX,e.changedTouches[0].clientY,e);},{capture:true,passive:false});
 el.addEventListener('touchcancel',()=>{drag=null;},{capture:true,passive:true});
 el.addEventListener('mousedown',e=>{if(e.button!==0||Date.now()-lastTouch<900)return;start(e.clientX,e.clientY,e.target);e.stopImmediatePropagation();},{capture:true});
 document.addEventListener('mousemove',e=>{if(drag)move(e.clientX,e.clientY,e);},{capture:true});
 document.addEventListener('mouseup',e=>{if(drag)end(e.clientX,e.clientY,e);},{capture:true});
 document.addEventListener('click',e=>{if(Date.now()<suppressClickUntil){e.preventDefault();e.stopImmediatePropagation();}},{capture:true});
}
document.addEventListener('click',e=>{
 const b=e.target.closest('button');if(!b)return;
 if(b.dataset.jump!=null){$('#details-dialog').open&&$('#details-dialog').close();const v=b.dataset.jump;go(/^\d+$/.test(v)?Number(v):pageIndex[v]);}
 else if(b.dataset.day){$('#details-dialog').open&&$('#details-dialog').close();go(dayPage[b.dataset.day]);}
 else if(b.dataset.stop){const [id,i]=b.dataset.stop.split(':');stopDetails(id,Number(i));}
 else if(b.dataset.stopName){for(const d of TRIP.days){const i=d.stops.findIndex(s=>s.name===b.dataset.stopName);if(i>=0){stopDetails(d.id,i);break;}}}
 else if(b.dataset.dayDetail)dayDetails(b.dataset.dayDetail);
 else if(b.dataset.photo)showPhoto(b.dataset.photo,b.dataset.caption||'Venue photo');
 else if(b.dataset.alt)alternative(b.dataset.alt);
 else if(b.dataset.open==='bookings')bookings();
 else if(b.dataset.open==='travel')travelInfo();
 else if(b.dataset.open==='credits')showCredits();
 else if(b.hasAttribute('data-share'))share();
 else if(b.hasAttribute('data-fullscreen'))enterFullscreen();
});
document.addEventListener('change',e=>{const id=e.target.dataset.check;if(!id)return;checks[id]=e.target.checked;document.querySelectorAll(`[data-check="${id}"]`).forEach(c=>{c.checked=checks[id]});try{localStorage.setItem('nic-booking-checks-v1',JSON.stringify(checks));}catch{toast('Tick updated for this visit.');}});
$('#previous').addEventListener('click',()=>step(-1));$('#next').addEventListener('click',()=>step(1));
$('.close-dialog').addEventListener('click',()=>$('#details-dialog').close());$('.close-photo').addEventListener('click',()=>$('#photo-dialog').close());
for(const dialog of document.querySelectorAll('dialog'))dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
document.addEventListener('keydown',e=>{if($('#details-dialog').open||$('#photo-dialog').open||e.target.matches('input,textarea,select'))return;if(e.key==='ArrowRight'){e.preventDefault();step(1);}if(e.key==='ArrowLeft'){e.preventDefault();step(-1);}if(e.key==='Home'){e.preventDefault();go(0);}if(e.key==='Escape')dismissHints();});
window.addEventListener('hashchange',()=>{if(!changingHash)go(desiredPage(),false);});
async function share(){const url=location.origin+location.pathname+'#contents';if(navigator.share){try{await navigator.share({title:'A Few Good Detours · Nicaragua',text:'The Nicaragua travel zine.',url});return;}catch(e){if(e.name==='AbortError')return;}}try{await navigator.clipboard.writeText(url);toast('Link copied. Recipients will need access to the site.');}catch{openDialog('Share the zine',`<p class="dialog-text">Copy this link. Recipients will need access to the site.</p><p class="dialog-note">${esc(url)}</p>`);}}
function enterFullscreen(){const el=document.documentElement;const req=el.requestFullscreen||el.webkitRequestFullscreen;if(!req)return;try{const r=req.call(el,{navigationUI:'hide'});r?.catch?.(()=>{});}catch{}}
function syncFullscreenButtons(){const show=canFullscreen()&&!document.fullscreenElement;for(const b of document.querySelectorAll('[data-fullscreen]'))b.hidden=!show;}
document.addEventListener('fullscreenchange',()=>{syncFullscreenButtons();requestAnimationFrame(fitPages);});
function pageSize(){const el=$('#book');const w=el.clientWidth,h=el.clientHeight;if(!w||!h)return null;const spread=w>=570;return {width:Math.round(spread?w/2:w),height:Math.round(h)};}
let lastFit='';
function fitPages(){if(!flipbook||!immersiveQuery.matches)return;const s=pageSize();if(!s)return;const key=s.width+'x'+s.height;if(key===lastFit)return;lastFit=key;const set=flipbook.getSettings();set.width=s.width;set.height=s.height;set.maxWidth=Math.max(510,s.width);flipbook.update();onPage(flipbook.getCurrentPageIndex());}
async function init(){if(location.hash)try{history.replaceState(null,'',location.pathname+location.search);}catch{}buildPages();syncFullscreenButtons();await document.fonts.ready;
 if(!window.St?.PageFlip){document.body.classList.add('list-fallback');toast('Page animation is unavailable. All magazine pages are shown below.');return;}
 const fit=immersiveQuery.matches?pageSize():null;
 flipbook=new St.PageFlip($('#book'),{width:fit?.width||420,height:fit?.height||700,size:'stretch',minWidth:285,maxWidth:fit?Math.max(510,fit.width):510,minHeight:475,maxHeight:850,autoSize:false,usePortrait:true,showCover:false,drawShadow:true,maxShadowOpacity:.35,flippingTime:reduceMotion?1:750,mobileScrollSupport:false,swipeDistance:35,clickEventForward:true,useMouseEvents:false,disableFlipByClick:false,startPage:0});
 flipbook.on('changeState',e=>{$('#book').dataset.turnState=e.data;$('#book').setAttribute('aria-busy',String(e.data==='flipping'));});flipbook.on('flip',e=>onPage(e.data));flipbook.on('changeOrientation',()=>onPage(flipbook.getCurrentPageIndex()));flipbook.on('init',e=>{onPage(e.data.page);showHints();});installTopGesture();flipbook.loadFromHTML(document.querySelectorAll('.zpage'));
 let fitTimer;const refit=()=>{clearTimeout(fitTimer);fitTimer=setTimeout(fitPages,120);};window.addEventListener('resize',refit);window.visualViewport?.addEventListener('resize',refit);immersiveQuery.addEventListener?.('change',()=>location.reload());
}
fetch('assets/credits.json').then(r=>r.json()).then(d=>{credits=d;}).catch(()=>{});init();
