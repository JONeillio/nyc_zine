const content = document.getElementById('content');
const dayIds = TRIP.days.map(d => d.id);
let currentDay = 'sun';
let credits = {};
let checks = {};
try { checks = JSON.parse(localStorage.getItem('nyc-booking-checks-v1') || '{}'); } catch { checks = {}; }
const icons = {
  map:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  train:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="5" y="3" width="14" height="15" rx="3"/><path d="M5 11h14M9 3v8M15 3v8M8 18l-2 3m10-3 2 3"/><circle cx="8.5" cy="14.5" r=".75"/><circle cx="15.5" cy="14.5" r=".75"/></svg>',
  leaf:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M20 4C9 3 2 8 5 15s16 3 15-11Z"/><path d="M4 21 15 10"/></svg>',
  zoom:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/></svg>'
};
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const mapUrl = q => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
function imageButton(id, alt, klass) {
  return `<button type="button" class="${klass}" data-photo="${id}" data-alt="${esc(alt)}" aria-label="Enlarge photo: ${esc(alt)}"><img src="assets/${id}.webp" alt="${esc(alt)}" loading="lazy"><span class="enlarge-label">${icons.zoom}</span></button>`;
}
function linksFor(s) {
  const links = [];
  if(s.map) links.push(`<a href="${mapUrl(s.map)}" target="_blank" rel="noopener noreferrer">${icons.map} Map</a>`);
  if(s.url) links.push(`<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.link || 'Official details')}</a>`);
  return links.length ? `<div class="stop-links">${links.join('')}</div>` : '';
}
function badge(s) {
  if(!s) return '';
  const cls = s === 'Optional' ? 'optional' : s === 'Fixed commitment' ? 'fixed' : 'planned';
  return `<span class="badge ${cls}">${esc(s)}</span>`;
}
function stop(s, lead) {
  const practical = s.note || (s.image && s.teaser && s.teaser !== s.text);
  return `<article class="stop ${s.image?'has-photo':'simple-stop'}"><div class="stop-time">${esc(s.time)}</div><div class="stop-body"><div class="stop-title-row"><h3>${esc(s.name)}</h3>${badge(s.status)}</div>${s.image ? imageButton(s.image,s.name,'stop-photo') : ''}<p class="stop-teaser">${esc(s.teaser || s.text)}</p>${s.hint?`<p class="stop-hint">${esc(s.hint)}</p>`:''}${linksFor(s)}${practical?`<details class="stop-details"><summary>Details</summary><p>${esc(s.text)}</p>${s.note?`<p class="stop-note">${esc(s.note)}</p>`:''}</details>`:''}</div></article>`;
}
function dayGallery(d) {
  const photos=d.gallery || [{image:d.image,title:d.label,caption:''}];
  return `<div class="day-gallery gallery-${photos.length}" role="group" aria-label="Photos for ${esc(d.day)}">${photos.map(p=>`<figure class="gallery-tile">${imageButton(p.image,p.title+(p.caption?' · '+p.caption:''),'gallery-image')}<figcaption><strong>${esc(p.title)}</strong><span>${esc(p.caption)}</span></figcaption></figure>`).join('')}</div><p class="gallery-help">Tap a photo to look closer<span> · Swipe to see the places</span></p>`;
}
function renderDay(id) {
  const d=TRIP.days.find(d=>d.id===id); currentDay=id;
  const idx=dayIds.indexOf(id), prev=TRIP.days[idx-1], next=TRIP.days[idx+1];
  content.innerHTML=`<div class="day-layout"><nav class="day-nav" aria-label="Choose a day">${TRIP.days.map(t=>`<a href="#${t.id}" class="day-link ${id===t.id?'active':''}" ${id===t.id?'aria-current="date"':''}><span class="day-number">${t.short}</span><span class="day-text">${t.day.slice(0,3)}${t.id==='return'?' · return':''}<small>${esc(t.label)}</small></span></a>`).join('')}</nav><section class="day-story" aria-labelledby="day-title"><div class="day-heading"><p>${d.day.toUpperCase()} ${d.date.toUpperCase()}</p><span class="company">${esc(d.company)}</span></div>${dayGallery(d)}<h2 class="day-title" id="day-title">${esc(d.title)}</h2><p class="day-subtitle">${esc(d.subtitle)}</p><div class="route-strip" aria-label="Day sequence">${d.route.map((s,i)=>(i?'<i aria-hidden="true"></i>':'')+`<span>${esc(s)}</span>`).join('')}</div><details class="travel-details"><summary>${icons.train} How this day fits together</summary><p>${esc(d.travel)}</p></details><div class="timeline">${d.stops.map(s=>stop(s,d.image)).join('')}</div><aside class="breathing-room">${icons.leaf}<div><h3>Leave a little room.</h3><p>${esc(d.breathing)}</p>${d.alternative?`<a class="alternative-link" href="#alternatives">See the alternative</a>`:''}</div></aside><nav class="day-pagination" aria-label="Previous and next day">${prev?`<a href="#${prev.id}"><div><span>PREVIOUS DAY</span>${prev.day} ${prev.short} · ${esc(prev.label)}</div></a>`:''}${next?`<a href="#${next.id}"><div><span>${next.id==='return'?'AFTER NICARAGUA':'NEXT DAY'}</span>${next.day} ${next.short} · ${esc(next.label)}</div></a>`:''}</nav></section></div>`;
}
function renderWeek() {
  content.innerHTML=`<section aria-labelledby="week-title"><div class="section-intro"><p class="section-kicker">THE BIG PICTURE</p><h2 id="week-title">A week, at a glance.</h2><p>The headline plan for each day. Tap one to see photos, timings and the room we’ve left around it.</p></div><div class="week-grid">${TRIP.days.map(d=>`<a class="week-card" href="#${d.id}"><img src="assets/${d.image}.webp" alt="${esc(d.imageAlt)}" loading="lazy"><div class="week-card-body"><span class="week-date">${d.day} ${d.date}${d.id==='return'?' · after Nicaragua':''}</span><h3>${esc(d.label)}</h3><p>${esc(d.route.join(' · '))}</p><span class="company">${esc(d.company)}</span></div></a>`).join('')}</div><p class="overview-footnote">Wednesday stays protected for time with Ken. Friday evening is her performance. Daytime coffees can fit into the flexible slots. Saturday 19 is a possibility, subject to the return flight and Ken’s availability.</p></section>`;
}
function renderBookings() {
  const done=TRIP.bookings.filter(b=>checks[b.id]).length;
  content.innerHTML=`<section aria-labelledby="bookings-title"><div class="booking-head"><div class="section-intro"><p class="section-kicker">A FEW THINGS TO SORT</p><h2 id="bookings-title">Book the anchors.<br>Let the rest breathe.</h2><p>Three decisions to consider in advance. Tick an item once you’ve sorted it; the ticks are a personal checklist, not booking confirmations.</p></div><div class="booking-progress"><strong>${done} / 3</strong>items sorted on this device</div></div><div class="booking-list">${TRIP.bookings.map(b=>`<article class="booking-item ${checks[b.id]?'is-done':''}"><label class="booking-check"><input type="checkbox" data-booking="${b.id}" ${checks[b.id]?'checked':''} aria-label="Mark ${esc(b.title)} as sorted"><span aria-hidden="true">✓</span></label><div class="booking-content">${b.image?imageButton(b.image,b.title,'booking-photo'):''}<span class="priority">${esc(b.priority)}</span><h3>${esc(b.title)}</h3><p class="booking-date">${esc(b.date)}</p><p>${esc(b.text)}</p><a class="text-link" href="${esc(b.url)}" target="_blank" rel="noopener noreferrer">${esc(b.action)}</a></div></article>`).join('')}</div><aside class="booking-extra"><h3>These can stay more flexible</h3><ul><li><strong>Tomi Jazz:</strong> walk-in only; plan around the queue rather than a reservation.</li><li><strong>Moving Image:</strong> general admission walk-ups are welcome. A specific screening would need its own ticket.</li><li><strong>Ear Inn & Sunny’s:</strong> check the music programme close to the visit. Sunny’s is conditional on a suitable music night.</li><li><strong>Society of Illustrators, Queens Museum, City Reliquary & Dream House:</strong> check current admission details when settling the dates.</li><li><strong>Cold Spring:</strong> check Monday shop hours, the weather and your train before heading out.</li></ul></aside><div class="pending-details"><h3>Still to fill in</h3><p><strong>Where you’re staying:</strong> this determines the first and last journey each day.</p><p><strong>Ken’s performance:</strong> venue and start/call time, so Friday’s museum trip leaves enough room.</p><p><strong>The existing vintage-shop list:</strong> to give Tuesday a sensible Queens route.</p><p><strong>City Reliquary:</strong> still a definite pick, but needs another slot now Saturday 12 has changed. The return Saturday is one possibility.</p><p><strong>A football fixture & pub:</strong> only add this once a real screening and New York kick-off time are confirmed.</p></div><p class="device-note">Checklist ticks save in this browser when storage is available. They aren’t shared between you and Ken, and they don’t purchase or reserve anything.</p></section>`;
}
function renderAlternatives() {
  content.innerHTML=`<section aria-labelledby="alternatives-title"><div class="section-intro"><p class="section-kicker">THE GOOD MAYBES</p><h2 id="alternatives-title">Swap something.<br>Don’t squeeze it all in.</h2><p>Cold Spring is the chosen excursion. These are substitutes and open ideas, with the trade-off kept visible.</p></div><div class="alternatives-list">${TRIP.alternatives.map(a=>`<article id="alternative-${a.id}" class="alternative-item ${a.image?'':'no-image'}">${a.image?`<img src="assets/${a.image}.webp" alt="${esc(a.imageAlt||a.title)}" loading="lazy">`:''}<div><span class="alternative-tag">${esc(a.tag)}</span><h3>${esc(a.title)}</h3><p>${esc(a.text)}</p><p class="stop-note">${esc(a.note)}</p>${linksFor({map:a.map,url:a.url,link:a.link})}</div></article>`).join('')}</div><aside class="unplaced-visual"><img src="assets/${TRIP.unplaced.image}.webp" alt="City Reliquary’s crowded displays of New York history" loading="lazy"><div><span class="alternative-tag">STILL TO PLACE</span><h3>${esc(TRIP.unplaced.title)}</h3><p>${esc(TRIP.unplaced.text)}</p>${linksFor(TRIP.unplaced)}</div></aside></section>`;
}
function route(initial=false) {
  const hash=location.hash.slice(1);
  if(hash==='plan'||hash==='content') return;
  const view=hash==='week'?'week':hash==='bookings'?'bookings':hash==='alternatives'?'alternatives':'day';
  if(view==='week')renderWeek();else if(view==='bookings')renderBookings();else if(view==='alternatives')renderAlternatives();else renderDay(dayIds.includes(hash)?hash:'sun');
  document.querySelectorAll('.view-nav a').forEach(a=>{const active=a.dataset.view===view;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');if(a.dataset.view==='day')a.href='#'+currentDay;});
  if(!initial){document.getElementById('plan').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});}
  const selected=document.querySelector('.day-link.active');
  if(selected&&innerWidth<=680){const nav=selected.closest('nav');nav.scrollLeft=Math.max(0,selected.offsetLeft-nav.clientWidth/2+selected.clientWidth/2);}
  document.title=view==='day'?`${TRIP.days.find(d=>d.id===currentDay).day} ${TRIP.days.find(d=>d.id===currentDay).short} · A Few Good Detours`:`${view==='week'?'The whole week':view==='bookings'?'Bookings':'Alternatives'} · A Few Good Detours`;
}
window.addEventListener('hashchange',()=>route());
document.addEventListener('click',e=>{
  const photo=e.target.closest('[data-photo]');
  if(photo){const id=photo.dataset.photo;const im=document.getElementById('dialog-image');im.src=`assets/${id}.webp`;im.alt=photo.dataset.alt;document.getElementById('dialog-title').textContent=photo.dataset.alt;const source=document.getElementById('dialog-source');source.href=credits[id]?.source||'#';source.textContent=credits[id]?.credit||'Photo source & credit';document.getElementById('photo-dialog').showModal();}
});
document.addEventListener('change',e=>{
  if(!e.target.matches('[data-booking]'))return;
  checks[e.target.dataset.booking]=e.target.checked;
  try{localStorage.setItem('nyc-booking-checks-v1',JSON.stringify(checks));}catch{toast('Tick updated for this visit; browser storage is unavailable.');}
  const focused=e.target.dataset.booking;
  renderBookings();content.querySelector(`[data-booking="${focused}"]`)?.focus({preventScroll:true});
});
const photoDialog=document.getElementById('photo-dialog');
photoDialog.querySelector('.dialog-close').addEventListener('click',()=>photoDialog.close());
photoDialog.addEventListener('click',e=>{if(e.target===photoDialog)photoDialog.close();});
let toastTimer;
function toast(message){const t=document.getElementById('toast');t.textContent=message;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),4000);}
document.getElementById('share-button').addEventListener('click',async()=>{
  const url=location.origin+location.pathname+'#week';
  if(navigator.share){try{await navigator.share({title:'A Few Good Detours · December 2026',text:'Our New York photo itinerary, with day plans and a few good alternatives.',url});return;}catch(e){if(e.name==='AbortError')return;}}
  try{await navigator.clipboard.writeText(url);toast('Plan link copied. Recipients will need access to the site.');}catch{const dialog=document.createElement('dialog');dialog.innerHTML='<div class="share-dialog-body"><h2>Share the plan</h2><p>Copy this link. Recipients will need access to the site.</p><input aria-label="Trip link" readonly><button type="button">Done</button></div>';dialog.querySelector('input').value=url;dialog.querySelector('button').onclick=()=>{dialog.close();dialog.remove();};document.body.append(dialog);dialog.showModal();dialog.querySelector('input').select();}
});
fetch('assets/credits.json').then(r=>r.json()).then(list=>{credits=Object.fromEntries(list.map(p=>[p.id,p]));document.getElementById('credits-list').innerHTML=`<div class="credits-list">${list.map(p=>`<a href="${esc(p.source)}" target="_blank" rel="noopener noreferrer"><strong>${esc({ear:'The Ear Inn',cold:'Cold Spring',transit:'Transit Museum',dream:'Dream House',sunny:'Sunny’s Bar',henson:'Jim Henson Exhibition',illustrators:'Society of Illustrators',burp:'Burp Castle',pdt:'Please Don’t Tell',tomi:'Tomi Jazz',reliquary:'City Reliquary',panorama:'Queens Museum Panorama',chinatown:'Chinatown',cityisland:'City Island',continental:'The Continental exterior',grandcentral:'Grand Central',coldriver:'Cold Spring waterfront',coldantiques:'Cold Spring Antiques Center',illustratorsgallery:'Society of Illustrators gallery',bluenote:'Blue Note New York',loveday:'Loveday 31 · candidate shop',panoramadetail:'Panorama detail',earinside:'Inside the Ear Inn',hensongallery:'Jim Henson Exhibition gallery',movingimage:'Museum of the Moving Image'}[p.id])}</strong>${esc(p.credit)}</a>`).join('')}</div>`;}).catch(()=>{document.getElementById('credits-list').textContent='Photo sources are recorded in the accompanying credits file.';});
route(true);
