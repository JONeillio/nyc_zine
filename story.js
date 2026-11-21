/* How each day reads as one magazine page. Photos lead with the destination.
   x, y, w, h are % of the collage box; r is rotation in degrees; stop links a photo to that stop's details. */
const STORY={
 sun:{kicker:'ARRIVAL',tile:'Touch down, find jazz',cover:'ear',line:'Off the plane and into one of the oldest bars in town.',pieces:[
  {img:'ear',x:0,y:0,w:100,h:50,kind:'cut',stop:2,time:'8 PM',label:'The Ear Inn',lp:'big'},
  {img:'earinside',x:47,y:45,w:53,h:35,r:2.5,kind:'border',stop:2,label:'The EarRegulars',lp:'right'},
  {img:'ear_ext',fb:{img:'ear',pos:'center 85%'},x:2,y:47,w:44,h:31,r:-3,kind:'border tape',cap:'326 Spring Street'},
  {note:'One of the oldest bars in the city. Proper old school.',x:3,y:82,w:44,r:-1.5,kind:'hand'},
  {note:'Land 2pm. Dinner nearby, nothing long.',x:52,y:84,w:46,r:1.5,kind:'sticker'}]},
 mon:{kicker:'DAY TRIP',tile:'Cold Spring',cover:'cs_banner',line:'An hour up the Hudson. Antiques, river, quiet.',pieces:[
  {img:'cs_banner',fb:{img:'cold'},x:0,y:0,w:100,h:44,kind:'cut',stop:1,time:'MIDDAY',label:'Cold Spring',lp:'big'},
  {img:'coldantiques',x:51,y:40,w:49,h:29,r:2.5,kind:'border',stop:1,label:'Antiques Center',lp:'right'},
  {img:'cs_frozen',fb:{img:'grandcentral',stop:0,label:'Grand Central'},x:1,y:42,w:50,h:28,r:-2,kind:'border tape',stop:2,label:'The Hudson'},
  {img:'coldriver',x:2,y:72,w:46,h:26,r:1.5,kind:'border',stop:2,label:'Waterfront lunch'},
  {img:'grandcentral',need:'cs_frozen',x:70,y:69,w:29,kind:'round',stop:0},
  {note:'Main Street, antiques, river air. Train back.',x:52,y:89,w:46,r:-1,kind:'sticker'}]},
 tue:{kicker:'QUEENS & JAZZ',tile:'Queens & Tomi',cover:'tomi',line:'Rummage in Queens. Jazz in a tiny room.',pieces:[
  {img:'loveday',x:0,y:0,w:60,h:47,r:-1.5,kind:'border',stop:1,time:'AFTERNOON',label:'Queens vintage'},
  {img:'astoria30',fb:{img:null,note:'Astoria for vintage. Long rummage.',kind:'sticker',h:null,y:10},x:58,y:4,w:42,h:33,r:3,kind:'border tape',cap:'30th Avenue, Astoria'},
  {note:'Loveday 31, maybe. Lunch on the way.',x:60,y:39,w:39,r:1,kind:'handl'},
  {img:'tomi',x:6,y:50,w:94,h:36,kind:'cutb',stop:2,time:'5 PM',label:'Tomi Jazz',lp:'big'},
  {note:'Walk-ins only. Early, or you’re queuing.',x:0,y:88,w:52,r:-2,kind:'sticker'},
  {note:'Coffee first with Ken’s mate.',x:56,y:89,w:43,r:1,kind:'hand'}]},
 wed:{kicker:'DAY OFF',tile:'Dinosaurs & a spiral',cover:'amnh',line:'Dinosaurs, a spiral, then a very quiet beer.',pieces:[
  {img:'amnh',x:0,y:0,w:100,h:40,kind:'cut',stop:1,time:'11 AM',label:'Natural History',lp:'big'},
  {img:'guggenheim',x:1,y:39,w:58,h:27,r:-2,kind:'border tape',stop:2,label:'Guggenheim · maybe',lp:'blue'},
  {note:'Twenty minutes across the park. Spiral from the top down.',x:61,y:42,w:38,r:1.5,kind:'handl'},
  {img:'burp',x:38,y:64,w:62,h:28,r:2,kind:'border',stop:3,time:'7 PM',label:'Burp Castle',lp:'right'},
  {note:'Breakfast together. No rush.',x:1,y:70,w:36,r:-2,kind:'sticker'},
  {note:'Monk murals, Belgian beer, everyone whispering.',x:0,y:84,w:38,r:0,kind:'hand'}]},
 thu:{kicker:'SOLO DAY',tile:'Trains, drawings & Dream House',cover:'transit',line:'Old trains, drawings, a purple evening.',pieces:[
  {img:'transit',x:0,y:0,w:100,h:33,kind:'cut',stop:0,time:'10 AM',label:'Transit Museum',lp:'big'},
  {img:'illustratorsgallery',x:1,y:32,w:52,h:25,r:-2.5,kind:'border tape',stop:1,time:'1:30',label:'Illustrators',lp:'right'},
  {note:'Coffee at the 128 Bar halfway round.',x:56,y:35,w:42,r:2,kind:'sticker'},
  {img:'dream',x:30,y:56,w:70,h:30,r:1.5,kind:'cutb',stop:2,time:'4:30 PM',label:'Dream House',lp:'big blue top'},
  {note:'Open till 10. No rush.',x:0,y:62,w:29,r:-3,kind:'handl'},
  {img:'sunny',x:1,y:79,w:40,h:20,r:-2,kind:'border',stop:3,label:'Sunny’s · maybe',lp:'blue'},
  {note:'Sunny’s in Red Hook if you’ve still got legs. Music 8 till 10.',x:45,y:88,w:54,r:0,kind:'handl'}]},
 fri:{kicker:'BIG NIGHT',tile:'Tiny city, big night',cover:'bee_gods',line:'A tiny city by day. The big one at night.',pieces:[
  {img:'panorama',x:0,y:0,w:60,h:27,r:-1,kind:'border',stop:1,time:'NOON',label:'The Panorama'},
  {img:'panoramadetail',x:58,y:1,w:42,h:19,r:3,kind:'border tape',stop:1,cap:'Tiny streets at the Queens Museum'},
  {note:'Nearly every building in the five boroughs.',x:61,y:21,w:38,r:1,kind:'handl'},
  {img:'bee_def',x:0,y:32,w:100,h:36,kind:'cut',stop:2,time:'7 PM',label:'Balkan Erotic Epic',lp:'big blue top',pos:'center 60%'},
  {note:'The Def dance.',x:70,y:58,w:28,r:-2,kind:'sticker'},
  {img:'bee_knives',x:0,y:67,w:34,h:21,r:-2.5,kind:'border',stop:2},
  {img:'bee_black',x:33,y:68.5,w:34,h:20,r:1.5,kind:'border tape',stop:2},
  {img:'bee_gods',x:66,y:67,w:34,h:21,r:-1.5,kind:'border',stop:2},
  {note:'Park Avenue Armory · 7pm · four hours · eat before',x:3,y:90,w:94,r:-1,kind:'ticket slim'}]},
 sat:{kicker:'LAST DAY',tile:'Wick, the Bull & Chinatown',cover:'chinatown',line:'Downtown with Alyssa and Vin, then a nap before the flight.',pieces:[
  {img:'continental',x:0,y:0,w:47,h:42,r:-1.5,kind:'border',stop:0,time:'MORNING',label:'The Continental'},
  {img:'bull',fb:{img:null,note:'The Charging Bull’s five minutes down Broadway. Bare tourists, worth it anyway.',kind:'hand',h:null,y:6},x:49,y:2,w:51,h:26,r:2.5,kind:'border tape',stop:1,label:'The Bull',lp:'right'},
  {note:'Alyssa and Vin, all day.',x:52,y:29,w:46,r:-2,kind:'sticker'},
  {img:'chinatown',x:0,y:44,w:100,h:34,kind:'cut',stop:2,time:'LUNCH',label:'Chinatown',lp:'big'},
  {img:'ct_2025',fb:{img:null,note:'Dumplings, the bend on Doyers, bakeries on Mott. The fun bit.',kind:'handl',h:null,w:52,y:80},x:0,y:75,w:34,h:20,r:-2.5,kind:'border',stop:2},
  {img:'doyers',fb:{skip:true},x:33,y:76,w:32,h:19,r:2,kind:'border tape',stop:2,cap:'Doyers Street'},
  {note:'Night: JFK, then Nicaragua<small>Home, nap, pack. Friends are driving you.</small>',x:56,y:80,w:44,r:1.5,kind:'ticket'}]},
 return:{kicker:'BACK IN NYC',tile:'Back for one more',cover:'hensongallery',line:'One more for the road?',pieces:[
  {img:'hensongallery',x:0,y:0,w:100,h:43,kind:'cut',stop:1,time:'AFTERNOON',label:'Jim Henson',lp:'big'},
  {img:'henson',x:1,y:41,w:50,h:29,r:-2.5,kind:'border',stop:1,label:'Kermit & co'},
  {img:'momi_a',fb:{img:'movingimage'},x:50,y:43,w:50,h:27,r:2,kind:'border tape',cap:'Museum of the Moving Image, Astoria'},
  {note:'Muppets and puppets. Ken, you in?',x:2,y:76,w:46,r:-2,kind:'sticker'},
  {note:'Straight off the Nicaragua flight. Evening’s free.',x:52,y:76,w:46,r:1,kind:'hand'}]}
};

const PHOTOS=new Set(['amnh','bee_black','bee_cast','bee_def','bee_gods','bee_hero','bee_knives','bee_rehearse','bluenote','burp','chinatown','cityisland','cloisters','cold','coldantiques','coldriver','continental','dream','ear','earinside','grandcentral','guggenheim','henson','hensongallery','illustrators','illustratorsgallery','loveday','movingimage','panorama','panoramadetail','pdt','reliquary','sunny','tomi','transit']);
