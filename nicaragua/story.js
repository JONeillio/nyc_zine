/* How each page reads as a magazine page. Photos lead with the place.
   x, y, w, h are % of the collage box; r is rotation in degrees; stop links a photo to that stop's details;
   pos sets the focal point so the crop keeps the subject. Photo ids are keys of PHOTOS in data.js. */
const STORY={
 sun:{kicker:'ARRIVAL',tile:'Land & León',cover:'leonCentre',line:'Off the red-eye, two hours north, find the group.',pieces:[
  {img:'leonCentre',x:0,y:0,w:100,h:44,kind:'cut',stop:3,time:'AFTERNOON',label:'León',lp:'big'},
  {img:'leonFood',x:47,y:41,w:53,h:31,r:2.5,kind:'border tape',stop:2,label:'Lunch',lp:'right'},
  {img:'leon',x:1,y:44,w:44,h:28,r:-3,kind:'border',cap:'León from the cathedral roof'},
  {note:'Land 08:40. $10 cash at immigration. Car north.',x:2,y:76,w:46,r:-1.5,kind:'sticker'},
  {note:'Ask at ViaVia: 08:00 start, gear, where the bag sleeps.',x:51,y:77,w:47,r:1.5,kind:'hand'}]},
 mon:{kicker:'THE BIG ONE',tile:'Boarding & El Hoyo',cover:'cerroDown',line:'Down one volcano on a board. Up another to sleep.',pieces:[
  {img:'cerroDown',x:0,y:0,w:100,h:40,kind:'cut',stop:1,time:'MORNING',label:'Cerro Negro',lp:'big'},
  {img:'hoyo',x:0,y:39,w:52,h:30,r:-2,kind:'border',stop:2,time:'AFTERNOON',label:'El Hoyo'},
  {img:'campsite',x:52,y:41,w:48,h:28,r:2.5,kind:'border tape',stop:3,label:'Camp (2013)',lp:'right'},
  {note:'Tent, mat, bag, backpack, 4 meals: supplied.',x:2,y:72,w:50,r:-1.5,kind:'sticker'},
  {note:'7–8 litres of water. That bit’s on you.',x:54,y:73,w:44,r:1,kind:'handl'},
  {note:'$95 + $10 + $10 = $115<small>Published, to confirm for Mon 14 · minimum three</small>',x:3,y:86,w:94,r:-1,kind:'ticket'}]},
 tue:{kicker:'LAKE & LEÓN',tile:'Lake & León',cover:'asososca',line:'Sunrise on the mountain, a crater lake, a León shower.',pieces:[
  {img:'asososca',x:0,y:0,w:100,h:44,kind:'cut',stop:1,time:'MORNING',label:'Lake Asososca',lp:'big'},
  {img:'view',x:46,y:42,w:54,h:30,r:2,kind:'border',stop:0,time:'DAWN',label:'From camp',lp:'right'},
  {note:'Back around midday. Bag, shower, laundry.',x:2,y:46,w:42,r:-2,kind:'sticker'},
  {note:'An easy night with the group. Find what’s on, on the day.',x:2,y:76,w:56,r:-1,kind:'hand'},
  {note:'León bed, night 2 of 2.',x:60,y:78,w:38,r:1.5,kind:'handl'}]},
 wed:{kicker:'TO THE COAST',tile:'Friends, then the coast',cover:'manoCommunal',line:'A morning with friends, then out to Las Peñitas.',pieces:[
  {img:'manoCommunal',x:0,y:0,w:100,h:44,kind:'cut',stop:2,time:'LATE AFTERNOON',label:'Mano a Mano',lp:'big'},
  {img:'leonCentre',x:1,y:42,w:46,h:28,r:-2.5,kind:'border',stop:0,time:'MORNING',label:'León'},
  {note:'Leave 14:00–15:00. Car $20–25 for the whole thing.',x:50,y:45,w:48,r:1.5,kind:'sticker'},
  {note:'Dorm seen free on the calendar. Not held.',x:50,y:63,w:48,r:-1,kind:'handl'},
  {note:'No big night to manufacture. See how the place feels.',x:2,y:80,w:96,r:-1,kind:'hand'}]},
 thu:{kicker:'THE SLOW DAY',tile:'A whole coastal day',cover:'coast',line:'Sea air, a book, people to talk to.',pieces:[
  {img:'coast',x:0,y:0,w:100,h:42,kind:'cut',stop:0,time:'ALL DAY',label:'Las Peñitas',lp:'big'},
  {img:'manoBar',x:62,y:38,w:36,h:44,r:2.5,kind:'border tape',stop:3,label:'Sunset',lp:'right',pos:'center 35%'},
  {note:'Juan Venado by boat? Ask at Mano. $30–60, unquoted.',x:2,y:45,w:56,r:-2,kind:'sticker'},
  {note:'Surf only if you choose it, and get a quote.',x:2,y:62,w:56,r:1,kind:'handl'},
  {note:'Mano night 2. No transfer today.',x:2,y:80,w:56,r:-1,kind:'hand'}]},
 fri:{kicker:'HOMEWARD',tile:'Straight to the airport',cover:'route',line:'Pickup around 09:00, Managua by noon, fly at 15:40.',pieces:[
  {img:'route',x:0,y:0,w:100,h:46,kind:'cut',stop:0,time:'~09:00',label:'Coast → airport',lp:'big'},
  {img:'coast',x:2,y:44,w:48,h:28,r:-2.5,kind:'border',cap:'One last look'},
  {note:'Direct car, $100–130 allowance. No quote yet.',x:53,y:47,w:45,r:1.5,kind:'sticker'},
  {note:'No boat, no surf, no detour this morning.',x:52,y:64,w:46,r:-1,kind:'handl'},
  {note:'MGA 15:40 → San Salvador<small>18:25 → JFK, lands 00:10 Saturday · booked</small>',x:3,y:79,w:94,r:-1,kind:'ticket'}]},
 camping:{pieces:[
  {img:'view',x:0,y:0,w:100,h:56,kind:'cut',label:'The overnight route',lp:'big'},
  {img:'campsite',x:2,y:50,w:48,h:44,r:-2.5,kind:'border',label:'2013 photo'},
  {img:'cerroUp',x:52,y:52,w:46,h:42,r:2,kind:'border tape',label:'Boards up'}]},
 mano:{pieces:[
  {img:'manoShared',x:0,y:0,w:64,h:56,r:-1,kind:'border',label:'The courtyard'},
  {img:'manoBar',x:62,y:0,w:38,h:72,r:2.5,kind:'border tape',label:'The bar',lp:'right',pos:'center 35%'},
  {img:'coast',x:0,y:56,w:60,h:40,r:1.5,kind:'border',label:'The beach'}]}
};
/* Short rundown labels: [time tag, name] */
const SHORT={
 'Land in Managua':['08:40','Land in Managua'],'Car to León':['LATE AM','Car to León'],'Find the group, eat':['LUNCH','Find the group'],'Walk central León':['AFTERNOON','Walk central León'],'A few drinks, not a big one':['EVENING','A few drinks'],
 'Meet Volcano Day at ViaVia':['08:00','Meet at ViaVia'],'Cerro Negro boarding':['MORNING','Cerro Negro'],'Hike El Hoyo':['AFTERNOON','Hike El Hoyo'],'Camp on the mountain':['SUNSET','Camp'],
 'Sunrise from camp':['DAWN','Sunrise'],'Swim in Lake Asososca':['MORNING','Lake Asososca'],'Back to León':['AFTERNOON','Back to León'],'An easy night with the group':['EVENING','Night with the group'],
 'Coffee with the group':['MORNING','Coffee with the group'],'Car to Las Peñitas':['14:00','Car to the coast'],'Check in at Mano a Mano':['LATE PM','Mano a Mano'],'See how the place feels':['EVENING','See how it feels'],
 'Breakfast, the beach, nothing much':['MORNING','The beach'],'Juan Venado mangroves':['LATE AM','Juan Venado'],'Surf, if you choose to':['AFTERNOON','Surf'],'Sunset, food, a flexible night':['SUNSET','Sunset & food'],
 'Direct car to the airport':['~09:00','Car to the airport'],'At Managua airport':['~NOON','At the airport'],'AV397 to San Salvador':['15:40','Fly → JFK']
};
