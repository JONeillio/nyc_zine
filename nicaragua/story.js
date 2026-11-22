/* How each day reads as one magazine page. Photos lead with the destination.
   x, y, w, h are % of the collage box; r is rotation in degrees; stop links a photo to that stop's details.
   pos sets the photo's focal point (object-position) so the subject survives the crop. */
const STORY={
 sun:{kicker:'ARRIVAL',tile:'Land & León',cover:'leonstreet',line:'Off the red-eye and up to the student city.',pieces:[
  {img:'leonstreet',x:0,y:0,w:100,h:42,kind:'cut',stop:3,time:'4 PM',label:'León',lp:'big'},
  {img:'leonmarket',x:46,y:39,w:54,h:33,r:2.5,kind:'border',cap:'León, the market streets',pos:'center 40%'},
  {img:'leon',x:2,y:42,w:44,h:30,r:-3,kind:'border tape',cap:'León from the cathedral roof. That’s Thursday.'},
  {note:'Land 8:40. Two hours north. Sleep. Nothing before 4.',x:2,y:76,w:46,r:-1.5,kind:'sticker'},
  {note:'Swing by the trek office. 7am start tomorrow.',x:51,y:77,w:47,r:1.5,kind:'hand'}]},
 mon:{kicker:'THE BIG ONE',tile:'Up El Hoyo',cover:'hoyo',line:'Up a volcano with a hole in its side, and sleep at the top.',pieces:[
  {img:'hoyo',x:0,y:0,w:100,h:50,kind:'cut',stop:1,time:'MORNING',label:'El Hoyo',lp:'big',pos:'center 55%'},
  {note:'4–6 litres of water. You carry it.',x:2,y:53,w:50,r:-2,kind:'sticker'},
  {note:'Tent, mat, sleeping bag: borrowed from the trek. Layers, torch, snacks: yours.',x:50,y:55,w:48,r:1.5,kind:'handl'},
  {note:'Sunset at camp. Volcanoes in a row to the coast.',x:3,y:70,w:56,r:-1,kind:'hand'},
  {note:'El Hoyo 2-day trek · $60 listed<small>Trail fee about $10 if not included · meet 7am</small>',x:3,y:83,w:94,r:-1,kind:'ticket'}]},
 tue:{kicker:'CRATER & COAST',tile:'Crater lake & coast',cover:'asososca',line:'Sunrise, a swim in a crater, then the Pacific.',pieces:[
  {img:'asososca',x:0,y:0,w:100,h:40,kind:'cut',stop:1,time:'MORNING',label:'Laguna Asososca',lp:'big'},
  {img:'penitas',x:44,y:38,w:56,h:32,r:2,kind:'border',stop:3,time:'EVENING',label:'Las Peñitas',lp:'right'},
  {note:'Back in León by 2. Bag, lunch, taxi. 25 minutes to the sea.',x:2,y:43,w:42,r:-2,kind:'sticker'},
  {note:'Olazul on a Tuesday? A lead, not a plan. Ask on the day.',x:2,y:74,w:52,r:-1,kind:'hand'},
  {note:'Bigfoot’s Tuesday is in León. Can’t do both.',x:56,y:76,w:42,r:1.5,kind:'handl'}]},
 wed:{kicker:'THE SLOW DAY',tile:'Las Peñitas',cover:'penitas2',line:'Sea, hammock, mangroves, whoever’s around.',pieces:[
  {img:'penitas2',x:0,y:0,w:100,h:42,kind:'cut',stop:0,time:'MORNING',label:'Las Peñitas',lp:'big'},
  {img:'venado',x:58,y:38,w:40,h:40,r:2.5,kind:'border tape',stop:1,label:'Juan Venado',lp:'blue',pos:'center 30%'},
  {note:'Strong currents. Swim where the locals swim.',x:2,y:46,w:52,r:-2,kind:'sticker'},
  {note:'Mangrove boat or a borrowed board. Or neither.',x:2,y:62,w:52,r:1,kind:'handl'},
  {note:'The slack day. If the group wants a different plan, this is the one to give up.',x:2,y:81,w:96,r:-1,kind:'hand'}]},
 thu:{kicker:'THE LATE ONE',tile:'León, the big night',cover:'leon',line:'Back to town, barefoot on the cathedral roof, then out.',pieces:[
  {img:'leon',x:0,y:0,w:100,h:40,kind:'cut',stop:2,time:'2–4:30',label:'Cathedral roof',lp:'big'},
  {img:'boarding',x:1,y:39,w:46,h:30,r:-2.5,kind:'border',stop:0,label:'Cerro Negro',cap:'Only if you want it'},
  {img:'tona',x:52,y:41,w:46,h:27,r:2,kind:'border tape',cap:'Cold Toña'},
  {note:'Bigfoot? Only if the group’s going.',x:2,y:73,w:46,r:-1.5,kind:'sticker'},
  {note:'Flight’s not till 3:40 tomorrow. Stay out.',x:50,y:74,w:48,r:1,kind:'hand'}]},
 fri:{kicker:'HOMEWARD',tile:'Homeward',cover:'leonmarket',line:'A slow breakfast, then back to New York.',pieces:[
  {img:'leonmarket',x:0,y:0,w:100,h:46,kind:'cut',stop:0,time:'MORNING',label:'Breakfast & the market',lp:'big'},
  {img:'leonstreet',x:2,y:44,w:48,h:28,r:-2.5,kind:'border',cap:'León, for the memory'},
  {note:'Spend the córdobas. Nobody wants them in Queens.',x:53,y:47,w:45,r:1.5,kind:'handl'},
  {note:'Leave 11. Airport by 1:30.',x:52,y:64,w:46,r:-1,kind:'sticker'},
  {note:'AV397 · 15:40 → San Salvador<small>AV566 18:25 → JFK, lands 00:10 Saturday</small>',x:3,y:79,w:94,r:-1,kind:'ticket'}]}
};
/* Short rundown labels: [time tag, name] */
const SHORT={
 'Land in Managua':['8:40 AM','Land in Managua'],'Shuttle to León':['10 AM','Shuttle to León'],'Hostel, shower, sleep':['MIDDAY','Hostel. Sleep.'],'First wander round León':['4 PM','First wander'],'Drinks, early-ish':['EVENING','Drinks, early-ish'],
 'Meet at the trek office':['7 AM','Trek office'],'Up El Hoyo':['MORNING','Up El Hoyo'],'Camp under the volcanoes':['SUNSET','Camp night'],
 'Sunrise from the camp':['DAWN','Sunrise'],'Swim in Laguna Asososca':['MORNING','Laguna Asososca'],'Back to León, out to the beach':['2 PM','Taxi to the coast'],'Fish dinner on the beach':['EVENING','Fish dinner'],'Olazul Tuesday night':['LATE','Olazul night'],
 'Swim and breakfast':['MORNING','Swim. Breakfast.'],'Juan Venado mangroves by boat':['LATE AM','Juan Venado boat'],'Hammock, or a board':['AFTERNOON','Hammock or a board'],'Dinner and drinks with whoever’s around':['EVENING','Dinner & drinks'],'Second night at the beach':['NIGHT','Beach hostel'],
 'Cerro Negro boarding':['MORNING','Cerro Negro boarding'],'Taxi back to León':['LATE AM','Back to León'],'Walk the cathedral roof':['2–4:30','Cathedral roof'],'Live music in León':['EVENING','Live music'],'Bigfoot, if the group’s going':['LATE','Bigfoot'],
 'Breakfast and the market':['MORNING','Breakfast. Market.'],'Shuttle to the airport':['11 AM','Shuttle to the airport'],'AV397 to San Salvador':['3:40 PM','AV397 → AV566 → JFK']
};
