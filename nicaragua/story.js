/* How each day reads as one magazine page. Photos lead with the destination.
   x, y, w, h are % of the collage box; r is rotation in degrees; stop links a photo to that stop's details. */
const STORY={
 sun:{kicker:'ARRIVAL',tile:'Land & Granada',cover:'calzada',line:'Off the red-eye and into the old colonial town.',pieces:[
  {img:'calzada',x:0,y:0,w:100,h:42,kind:'cut',stop:4,time:'EVENING',label:'La Calzada',lp:'big'},
  {img:'merced',x:46,y:39,w:54,h:33,r:2.5,kind:'border',stop:3,time:'5 PM',label:'La Merced tower',lp:'right'},
  {img:'cathedral',x:2,y:42,w:44,h:30,r:-3,kind:'border tape',cap:'Granada cathedral'},
  {note:'Land 8:40. Driver, lunch, sleep. Nothing before 4.',x:2,y:76,w:46,r:-1.5,kind:'sticker'},
  {note:'Sunset from the bell tower, then a cold Toña on the street.',x:51,y:77,w:47,r:1.5,kind:'hand'}]},
 mon:{kicker:'FIRE & WATER',tile:'Islets & a volcano',cover:'volcano',line:'Little islands, a market, a glowing crater.',pieces:[
  {img:'isletas',x:0,y:0,w:60,h:29,r:-1,kind:'border',stop:0,time:'9 AM',label:'Las Isletas'},
  {img:'market',x:58,y:2,w:42,h:22,r:3,kind:'border tape',stop:1,cap:'Masaya market'},
  {note:'Hammocks, pottery, leather.',x:61,y:25,w:38,r:1,kind:'handl'},
  {img:'volcano',x:0,y:33,w:100,h:40,kind:'cut',stop:2,time:'5–8 PM',label:'Masaya Volcano',lp:'big blue top'},
  {img:'rim',x:62,y:68,w:36,h:22,r:2.5,kind:'border',stop:2,cap:'Santiago crater by day'},
  {note:'That’s 2017. It’s a smaller red glow now. Still mad.',x:1,y:76,w:56,r:-1.5,kind:'sticker'},
  {note:'Gas might only give you five minutes at the edge.',x:2,y:89,w:58,r:0,kind:'handl'}]},
 tue:{kicker:'ACROSS THE LAKE',tile:'Across the lake',cover:'ferry',line:'Two volcanoes sticking out of a lake.',pieces:[
  {img:'ferry',x:0,y:0,w:100,h:44,kind:'cut',stop:1,time:'NOON',label:'The boat to Ometepe',lp:'big'},
  {img:'lake',x:1,y:42,w:50,h:28,r:-2.5,kind:'border tape',stop:1,cap:'Out on the lake'},
  {img:'fields',x:50,y:44,w:50,h:28,r:2,kind:'border',stop:2,label:'Santo Domingo'},
  {note:'Sit on the right. Concepción the whole way over.',x:2,y:75,w:46,r:-2,kind:'sticker'},
  {note:'Taxi, boat, taxi, beach. Swim, dinner, early night.',x:52,y:77,w:46,r:1,kind:'hand'}]},
 wed:{kicker:'ISLAND DAY',tile:'Springs & a sandbar',cover:'ojo',line:'Springs, monkeys, a sandbar at sunset.',pieces:[
  {img:'ojo',x:0,y:0,w:100,h:40,kind:'cut',stop:1,time:'9 AM',label:'Ojo de Agua',lp:'big'},
  {img:'omeview',x:1,y:39,w:46,h:32,r:-2,kind:'border tape',stop:2,label:'Concepción side',lp:'blue'},
  {note:'Howler monkeys. You’ll hear them before you see them.',x:50,y:42,w:48,r:1.5,kind:'handl'},
  {img:'sunset',x:44,y:56,w:56,h:28,r:2,kind:'border',stop:3,time:'5 PM',label:'Punta Jesús María',lp:'right'},
  {note:'Driver for the day. Ask the guesthouse.',x:1,y:75,w:40,r:-2,kind:'sticker'},
  {note:'Walk out to the end of the sandbar for sunset.',x:2,y:88,w:56,r:0,kind:'hand'}]},
 thu:{kicker:'CRATER LAKE',tile:'Swim in a volcano',cover:'apoyo',line:'Back over the water, then a swim inside an old volcano.',pieces:[
  {img:'catarina',x:0,y:0,w:58,h:30,r:-1.5,kind:'border',stop:1,time:'AFTERNOON',label:'Catarina lookout'},
  {img:'tona',x:58,y:2,w:42,h:25,r:3,kind:'border tape',cap:'Cold Toña'},
  {note:'Boat back first thing. 1¾ hours by car after.',x:60,y:29,w:39,r:1,kind:'handl'},
  {img:'apoyo',x:0,y:35,w:100,h:42,kind:'cut',stop:2,time:'TILL SUNSET',label:'Laguna de Apoyo',lp:'big'},
  {note:'Warm, clear, free kayaks off the dock.',x:2,y:80,w:46,r:-2,kind:'sticker'},
  {note:'45 minutes from the airport. That’s the point.',x:52,y:81,w:46,r:1,kind:'hand'}]},
 fri:{kicker:'HOMEWARD',tile:'One more swim',cover:'apoyo2',line:'A last swim, then New York again.',pieces:[
  {img:'apoyo2',x:0,y:0,w:100,h:46,kind:'cut',stop:0,time:'MORNING',label:'Last swim',lp:'big'},
  {img:'street',x:2,y:44,w:48,h:28,r:-2.5,kind:'border',cap:'Granada, for the memory'},
  {note:'Spend the córdobas. Nobody wants them in Queens.',x:53,y:47,w:45,r:1.5,kind:'handl'},
  {note:'Leave 11:30. Airport by 1:15.',x:52,y:64,w:46,r:-1,kind:'sticker'},
  {note:'AV397 · 15:40 → San Salvador<small>AV566 18:25 → JFK, lands 00:10 Saturday</small>',x:3,y:79,w:94,r:-1,kind:'ticket'}]}
};
/* Short rundown labels: [time tag, name] */
const SHORT={
 'Land in Managua':['8:40 AM','Land in Managua'],'Driver to Granada':['10 AM','Driver to Granada'],'Check in, shower, sleep':['MIDDAY','Check in. Sleep.'],'La Merced bell tower at sunset':['5 PM','La Merced tower'],'Calle La Calzada':['EVENING','Calle La Calzada'],
 'Las Isletas by boat':['9 AM','Las Isletas'],'Masaya craft market':['1 PM','Masaya market'],'Masaya Volcano after dark':['5 PM','Masaya Volcano'],
 'Taxi to San Jorge':['9 AM','Taxi to San Jorge'],'The boat to Ometepe':['NOON','Boat to Ometepe'],'Santo Domingo beach':['AFTERNOON','Santo Domingo beach'],'Sunset and dinner by the lake':['EVENING','Dinner by the lake'],
 'Driver for the day':['ALL DAY','Driver for the day'],'Ojo de Agua':['9 AM','Ojo de Agua'],'Charco Verde':['MIDDAY','Charco Verde'],'Punta Jesús María':['5 PM','Punta Jesús María'],'San Ramón waterfall':['MORNING','San Ramón waterfall'],
 'The boat back':['9 AM','Boat back'],'Catarina lookout':['2 PM','Catarina lookout'],'Laguna de Apoyo':['AFTERNOON','Laguna de Apoyo'],
 'Swim and breakfast':['MORNING','Swim. Pack.'],'Driver to the airport':['11:30','Driver to the airport'],'AV397 to San Salvador':['3:40 PM','AV397 → AV566 → JFK']
};
