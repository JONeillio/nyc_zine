/* Nicaragua, Sunday 13 – Friday 18 December 2026.
   Source of truth: NICARAGUA_MASTER_README (updated 22 November 2026).
   A proposed ground itinerary. Only the Avianca flights are booked.
   Every price is for one person paying alone, in US dollars, with pounds at a fixed $1 = £0.764.
   kind labels:
     published = an operator's own listed price or fee
     observed  = seen on a live booking calendar for these dates, not held or booked
     allowance = a planning budget for something not yet chosen or quoted
     official  = a government-published fee */

/* Photos.
   Remote photos come from the operators' and tourism board's own pages (see README §10).
   No redistribution licence was established, and this repository is public, so these are
   shown from their source URLs, never copied into the repo. Credit and source travel with each one.
   Local photos (src without http) are Wikimedia Commons or drawn for this zine; see assets/credits.json. */
const PHOTOS = {
  cerroUp:   { src: "https://static.wixstatic.com/media/5fc1d5_96b66bd9d6794718a29b6230f3eccbd0~mv2.jpg", source: "https://www.holaholatours.com/tours-1/boarding,-camping,-lake", credit: "Hola Hola Tours", alt: "A group carrying volcano boards up the black gravel of Cerro Negro", caption: "Cerro Negro: carrying the boards up" },
  cerroDown: { src: "https://static.wixstatic.com/media/5fc1d5_32e7c34489864a2f869fb336f29587ab~mv2.jpg", source: "https://www.holaholatours.com/tours-1/boarding,-camping,-lake", credit: "Hola Hola Tours", alt: "A rider sliding down the dark volcanic slope of Cerro Negro on a board", caption: "Cerro Negro: the way down" },
  hoyo:      { src: "https://www.volcanodaynicaragua.com/img/el-hoyo.jpg", source: "https://www.volcanodaynicaragua.com/tours/el-hoyo/", credit: "Volcano Day Nicaragua", alt: "El Hoyo volcano, with the large hollow in its flank", caption: "El Hoyo, the hollow in the volcano" },
  view:      { src: "https://static.wixstatic.com/media/5fc1d5_a9cce317f3814b40a79f0fc7a8b92c61~mv2.jpg", source: "https://www.holaholatours.com/tours-1/el-hoyo-camping", credit: "Hola Hola Tours", alt: "The view from the El Hoyo overnight route", caption: "From the overnight route. Conditions vary." },
  campsite:  { src: "https://www.jackandjilltravel.com/wp-content/uploads/2013/05/IMG_6420.jpg", source: "https://www.jackandjilltravel.com/el-hoyo-trek-leon/", credit: "Jack and Jill Travel", alt: "Tents at the El Hoyo campsite, photographed in 2013", caption: "The El Hoyo campsite in 2013. Not your tent or pitch." },
  asososca:  { src: "https://images.squarespace-cdn.com/content/v1/6a11ea05884b275a28b22403/453d56e8-94b6-48c4-923c-2356dba68c9d/IMG_8867_HEIC.jpg", source: "https://www.volcanolifenicaragua.com/el-hoyo-and-lake-asososca", credit: "Volcano Life Nicaragua", alt: "Lake Asososca, a crater lake below El Hoyo", caption: "Lake Asososca" },
  leonCentre:{ src: "https://www.mapanicaragua.com/wp-content/uploads/2020/08/Parque-Central-Juan-Jos%C3%A9-Quezada_leon_arquitectura6.jpg", source: "https://www.mapanicaragua.com/en/municipio-de-leon/", credit: "Mapa Nacional de Turismo / Nicaragua", alt: "Parque Central in León with the white cathedral behind", caption: "León, Parque Central" },
  leonFood:  { src: "https://www.mapanicaragua.com/wp-content/uploads/2020/08/Gallopinto-en-fritangas-de-Le%C3%B3n.jpg", source: "https://www.mapanicaragua.com/en/municipio-de-leon/", credit: "Mapa Nacional de Turismo / Nicaragua", alt: "Gallo pinto and fried food at a León fritanga", caption: "Fritanga food in León. No particular place booked." },
  coast:     { src: "https://www.mapanicaragua.com/wp-content/uploads/2021/08/Isla-Juan-Venado-playa-Las-Penitas-600x402.jpg", source: "https://www.mapanicaragua.com/en/municipio-de-leon/", credit: "Mapa Nacional de Turismo / Nicaragua", alt: "The beach at Las Peñitas with Juan Venado island", caption: "Las Peñitas and Juan Venado" },
  manoCommunal:{ src: "https://static.wixstatic.com/media/b547dc_c0458999488443598ed1035db10899b0~mv2.jpg", source: "https://www.manoamanoecohostel.com/the-hostel", credit: "Mano a Mano Hostel, Las Peñitas", alt: "Timber communal spaces at Mano a Mano hostel", caption: "Mano a Mano: the communal spaces" },
  manoShared:{ src: "https://static.wixstatic.com/media/b547dc_ee811c03f9824637acde32c93767e01b~mv2.jpg", source: "https://www.manoamanoecohostel.com/the-hostel", credit: "Mano a Mano Hostel, Las Peñitas", alt: "The courtyard and shared spaces at Mano a Mano", caption: "Mano a Mano: the courtyard. A candidate, not a booking." },
  manoBar:   { src: "https://static.wixstatic.com/media/b547dc_6fc82a4569384c5f8bb856dc4c2d744b~mv2_d_3632_5456_s_4_2.jpeg", source: "https://www.manoamanoecohostel.com/the-hostel", credit: "Mano a Mano Hostel, Las Peñitas", alt: "Mano a Mano's beach bar, a promotional image with menu text", caption: "Mano’s bar, a promo image with menu text. Not a crowd report.", portrait: true },
  bigfoot:   { src: "https://static.wixstatic.com/media/f506f2_19e75c9eb8e04dcc88bf3eb1003fac41~mv2.png", source: "https://www.bigfoothostelleon.com/", credit: "Bigfoot Hostel León", alt: "Room photos from Bigfoot Hostel León", caption: "Bigfoot’s own room photos. Optional, not booked." },
  boarding:  { src: "boarding", alt: "Volcano boarders on the slope of Cerro Negro", caption: "Cerro Negro" },
  leon:      { src: "leon", alt: "León's rooftops and cathedral domes seen from the cathedral roof", caption: "León from the cathedral roof" },
  tona:      { src: "tona", alt: "A cold bottle of Toña beer", caption: "A cold Toña" },
  route:     { src: "route", alt: "A drawn map of the route: León, Cerro Negro, El Hoyo, Lake Asososca, back to León, Las Peñitas, then Managua airport", caption: "The route. Drawn map, not to scale." },
  routecoast:{ src: "routecoast", alt: "A drawn close-up map of León, the volcanoes and Las Peñitas", caption: "León, the volcanoes and the coast. Drawn map." }
};

const TRIP = {
  "fx": { "gbpPerUsd": 0.764, "checked": "22 November 2026", "source": "https://wise.com/gb/currency-converter/usd-to-gbp-rate/history/22-11-2026" },
  "flight": { "gbp": 783.80, "label": "Avianca return, already paid" },
  "nights": [
    { "day": "Sun 13", "where": "León", "what": "Bed, paid (night 1 of 2)", "kind": "paid" },
    { "day": "Mon 14", "where": "El Hoyo", "what": "Tent, included in the tour", "kind": "camp" },
    { "day": "Tue 15", "where": "León", "what": "Bed, paid (night 2 of 2)", "kind": "paid" },
    { "day": "Wed 16", "where": "Mano a Mano", "what": "Dorm bed, paid (coast 1 of 2)", "kind": "paid" },
    { "day": "Thu 17", "where": "Mano a Mano", "what": "Dorm bed, paid (coast 2 of 2)", "kind": "paid" },
    { "day": "Fri 18", "where": "In the air", "what": "MGA 15:40 → JFK 00:10 Sat", "kind": "flight" }
  ],
  "days": [
    {
      "id": "sun", "day": "Sunday", "date": "13 December", "short": "13", "label": "Land & León",
      "subtitle": "Land at 08:40, a car to León, find your friends, eat, settle in.",
      "travel": "Proposed: a private car from the airport, about $80 for the whole vehicle, paid by you. Link the pickup to the actual flight, not a fixed 08:45. The cheaper option is a $25 shared seat that leaves around 13:00, which means a long wait; check it runs on a Sunday first.",
      "stops": [
        { "time": "08:40", "name": "Land in Managua", "text": "AV396 from San Salvador. Pay the $10 arrival tax in cash, fill in the customs form, then out to the car.", "status": "Booked", "map": "Augusto C. Sandino International Airport Managua", "price": "$10 arrival tax, cash (official)" },
        { "time": "Late morning", "name": "Car to León", "text": "About 1½–2 hours north. If friends are on the same flight or route and actually travel with you, the car splits; otherwise it’s all yours.", "status": "To book", "map": "Parque Central León Nicaragua", "url": "https://www.leontrekkersnicaragua.com/transfers", "link": "Leontrekkers tariffs", "price": "$80 allowance, whole vehicle" },
        { "time": "Lunch", "name": "Find the group, eat", "image": "leonFood", "text": "Join wherever your friends are staying if it suits you. Lunch somewhere ordinary: the market or a fritanga, chosen on the day.", "status": "Flexible", "map": "Mercado Central León Nicaragua" },
        { "time": "Afternoon", "name": "Walk central León", "image": "leonCentre", "text": "Parque Central, the cathedral, the streets around it. Drop into ViaVia to check Monday’s 08:00 start, the gear handover and where your bag stays.", "status": "Proposed", "map": "Catedral de León Nicaragua", "url": "https://leon.viavia.world/home/hotel/", "link": "ViaVia León" },
        { "time": "Evening", "name": "A few drinks, not a big one", "text": "ViaVia’s bar is an easy place to meet. Bigfoot is there if the group wants it. You’ve flown overnight and start at 08:00, so this isn’t the night to go hard.", "status": "Flexible" }
      ],
      "breathing": "Nothing today is booked except the flight. If you’re wrecked, eat and sleep."
    },
    {
      "id": "mon", "day": "Monday", "date": "14 December", "short": "14", "label": "Boarding & El Hoyo",
      "subtitle": "Slide down Cerro Negro, hike El Hoyo, sleep in a tent on the mountain.",
      "travel": "Volcano Day meets at ViaVia in León. Published start 08:00, to reconfirm. Transport, guide, tent, mat, sleeping bag, backpack and four meals are included; park fees are not. They ask for 7 litres of water (Hola Hola says 8). Ask which, and how the group carries the gear.",
      "stops": [
        { "time": "08:00", "name": "Meet Volcano Day at ViaVia", "text": "Hand over the main bag for storage, pick up the gear, load up. Breakfast before this is on you.", "status": "To confirm", "map": "ViaVia León Nicaragua", "url": "https://www.volcanodaynicaragua.com/tours/el-hoyo/", "link": "Volcano Day: El Hoyo", "price": "$95 published + $10 Cerro Negro + $10 El Hoyo = $115" },
        { "time": "Morning", "name": "Cerro Negro boarding", "image": "cerroDown", "text": "Walk the board up the black gravel cone, then slide down it. Part of the combo, so no second boarding charge.", "status": "Proposed", "map": "Cerro Negro Nicaragua" },
        { "time": "Afternoon", "name": "Hike El Hoyo", "image": "hoyo", "text": "The operator calls it challenging: uphill in the heat, carrying overnight gear and a lot of water. Not a stroll to a serviced campsite.", "status": "Proposed", "map": "Volcán El Hoyo Nicaragua" },
        { "time": "Sunset", "name": "Camp on the mountain", "image": "campsite", "text": "Sunset, dinner from the guides, a supplied tent. No hostel to pay for tonight.", "status": "Proposed" }
      ],
      "breathing": "The minimum is three people on the direct operator’s page. You can join an existing group; confirm the departure rather than assuming friends will come."
    },
    {
      "id": "tue", "day": "Tuesday", "date": "15 December", "short": "15", "label": "Lake & León",
      "subtitle": "Sunrise, down to Lake Asososca, back to León for a shower and a relaxed night.",
      "travel": "The published return is around midday. Keep the afternoon open for delays, heat and tired legs.",
      "stops": [
        { "time": "Dawn", "name": "Sunrise from camp", "image": "view", "text": "Breakfast is one of the included meals.", "status": "Proposed" },
        { "time": "Morning", "name": "Swim in Lake Asososca", "image": "asososca", "text": "Down off the mountain to the crater lake, conditions and the guides allowing.", "status": "Proposed", "map": "Laguna de Asososca León Nicaragua" },
        { "time": "Afternoon", "name": "Back to León", "text": "Collect the bag, check into the second León bed, shower, laundry if needed.", "status": "To book", "map": "Parque Central León Nicaragua", "price": "In the León beds allowance" },
        { "time": "Evening", "name": "An easy night with the group", "text": "Dinner (on your food allowance) and a bar or gig that’s actually on, found on the day. No pub crawl required.", "status": "Flexible" }
      ],
      "breathing": "If your legs are gone, this is a dinner-and-bed night. Nobody needs you out."
    },
    {
      "id": "wed", "day": "Wednesday", "date": "16 December", "short": "16", "label": "Friends, then the coast",
      "subtitle": "The morning with friends in León, then out to Mano a Mano in the afternoon.",
      "travel": "Leave around 14:00–15:00, adjusted to Mano’s check-in and reception hours. Allow about an hour as a planning slot. A private car is about $20–25 for the vehicle.",
      "stops": [
        { "time": "Morning", "name": "Coffee with the group", "text": "Pan & Paz is one possible stop. Stay with your friends through lunch if their plans line up.", "status": "Flexible", "map": "Pan y Paz León Nicaragua", "url": "https://www.panypaz.com/", "link": "Pan & Paz" },
        { "time": "14:00–15:00", "name": "Car to Las Peñitas", "text": "Leontrekkers lists $20 and Fun ’N’ Sun $25 for the whole car.", "status": "To book", "map": "Mano a Mano Eco Hostal Las Peñitas", "url": "https://www.funnsuntravels.com/transport/", "link": "Fun ’N’ Sun tariffs", "price": "$20–25 published, whole vehicle" },
        { "time": "Late afternoon", "name": "Check in at Mano a Mano", "image": "manoCommunal", "text": "Dorm availability was seen on the live calendar; nothing is held. Have a look round, walk the beach.", "status": "Observed, unbooked", "url": "https://www.beds24.com/book-manoamano", "link": "Mano booking calendar", "price": "$30–40 allowance for both nights" },
        { "time": "Evening", "name": "See how the place feels", "text": "Eat, then stay around the bar or head out with people you meet. No big night to manufacture.", "status": "Flexible" }
      ],
      "breathing": "Your own two nights start here. If friends change plans, the coast still works on its own."
    },
    {
      "id": "thu", "day": "Thursday", "date": "17 December", "short": "17", "label": "A whole coastal day",
      "subtitle": "Sea air, a book, people to talk to. A boat into the mangroves if you fancy it.",
      "travel": "No transfer today. Everything is on foot along the beach.",
      "stops": [
        { "time": "Morning", "name": "Breakfast, the beach, nothing much", "image": "coast", "text": "Read, walk, swim where the locals swim. Leave real free time.", "status": "Flexible", "map": "Las Peñitas Beach Nicaragua" },
        { "time": "Late morning", "name": "Juan Venado mangroves", "image": "coast", "text": "Ask at Mano about a guided boat into the reserve behind the beach. Operator, launch point, group size and tide all matter.", "status": "Optional", "map": "Reserva Natural Isla Juan Venado Nicaragua", "price": "$30–60 extra, unquoted" },
        { "time": "Afternoon", "name": "Surf, if you choose to", "text": "A board or a lesson needs its own quote. Not booked, not in the budget.", "status": "Optional" },
        { "time": "Sunset", "name": "Sunset, food, a flexible night", "image": "manoBar", "text": "The hostel gives you a chance of company. It can’t promise a busy night or a crowd you’ll click with.", "status": "Flexible" }
      ],
      "breathing": "Sleep here again. There’s no Thursday transfer back to León."
    },
    {
      "id": "fri", "day": "Friday", "date": "18 December", "short": "18", "label": "Straight to the airport",
      "subtitle": "Pickup around 09:00, at Managua by about noon, fly at 15:40.",
      "travel": "Proposed: a direct private car from the coast. $100–130 is an allowance; no direct quote yet. A cheaper version is a taxi to León and a shared $18 seat at 09:30, but it needs four passengers and adds a connection.",
      "stops": [
        { "time": "~09:00", "name": "Direct car to the airport", "text": "Pickup time to be fixed when the transfer is quoted. No boat trip or detour this morning.", "status": "To quote", "map": "Augusto C. Sandino International Airport Managua", "url": "https://nicaraguataxi.com/rates", "link": "Reference tariffs", "price": "$100–130 allowance, whole vehicle" },
        { "time": "~Noon", "name": "At Managua airport", "text": "Leaves headroom for the road and check-in.", "status": "Proposed" },
        { "time": "15:40", "name": "AV397 to San Salvador", "text": "Then AV566 at 18:25, landing at JFK at 00:10 on Saturday. Recheck the airline itinerary before fixing pickups.", "status": "Booked" }
      ],
      "breathing": "Spend the córdobas before the airport."
    }
  ],
  "budget": {
    "lines": [
      { "id": "leonBeds", "label": "León beds, Sun & Tue", "low": 30, "high": 50, "kind": "allowance", "note": "Two beds or your share. Property and room not chosen." },
      { "id": "mano", "label": "Mano a Mano dorm, Wed & Thu", "low": 30, "high": 40, "kind": "observed", "note": "The live calendar showed $26 for one guest, two nights, before checkout. Allowance adds headroom; taxes unverified." },
      { "id": "camp", "label": "Cerro Negro + El Hoyo + lake", "low": 115, "high": 115, "kind": "published", "note": "$95 package + $10 Cerro Negro + $10 El Hoyo. Date and group still to confirm." },
      { "id": "arrive", "label": "Airport → León car, Sunday", "low": 80, "high": 80, "kind": "allowance", "note": "Based on the published León–airport whole-vehicle rate. Confirm the airport-pickup direction." },
      { "id": "coastCar", "label": "León → Las Peñitas car, Wed", "low": 20, "high": 25, "kind": "published", "note": "Whole-vehicle tariffs from Leontrekkers and Fun ’N’ Sun." },
      { "id": "depart", "label": "Coast → airport car, Friday", "low": 100, "high": 130, "kind": "allowance", "note": "No direct quote yet. Two published legs via León total about $100." },
      { "id": "food", "label": "Meals, coffee, water", "low": 70, "high": 100, "kind": "allowance", "note": "Six days, minus the four camp meals." },
      { "id": "drinks", "label": "Drinks and evening entry", "low": 40, "high": 70, "kind": "allowance", "note": "Personal spending, not a ticket price." },
      { "id": "tax", "label": "Arrival tax", "low": 10, "high": 10, "kind": "official", "note": "GOV.UK. Cash. Departure tax is normally in the ticket." },
      { "id": "buffer", "label": "Contingency", "low": 30, "high": 50, "kind": "allowance", "note": "Small extras, fees, bag storage, tips. Unspent if not needed." }
    ],
    "privateCoast": { "replaces": "mano", "low": 80, "high": 140, "note": "A private room around Las Peñitas for both nights, $40–70 a night. Unquoted. Mano had no private room free for both nights when checked." },
    "extras": [
      { "label": "Juan Venado boat outing", "range": "$30–60 · £23–46", "note": "Unquoted. Ask Mano." },
      { "label": "Surf board or lesson", "range": "Not priced", "note": "Only after you choose it and get a quote." },
      { "label": "Departure tax, if not in the ticket", "range": "$35 · £27", "note": "Check the ticket before adding it." },
      { "label": "Private rooms in León instead", "range": "+$30–50 · £23–38", "note": "Pending a quote." }
    ],
    "savings": [
      "Share the airport car only if friends actually travel with you. Four people under a four-person tariff makes $80 into $20 each.",
      "Sunday shared shuttle: $25 seat at around 13:00, so a long wait after landing. Saves about £42. Check it runs on Sundays.",
      "Friday taxi to León plus Fun ’N’ Sun’s $18 shared seat at 09:30 (minimum four). Roughly $38–43 all in, saving £44–70, but it adds a connection.",
      "Camping without boarding: $75 + $10 El Hoyo fee = $85, saving $30. Don’t buy a separate boarding day as well."
    ]
  },
  "camping": {
    "price": "$95 published + $10 Cerro Negro fee + $10 El Hoyo fee",
    "included": ["Transport from León", "Guide", "Tent", "Sleeping mat", "Sleeping bag", "Backpack", "Four meals"],
    "bring": ["7–8 litres of water (ask which)", "Walking shoes", "A warm layer", "Sun protection", "Head torch", "Swimwear", "Repellent", "Toiletries", "Charging essentials", "Cash for the park fees"],
    "confirm": ["Monday 14 runs (minimum three people)", "Final price and whether fees are included", "Which meals: Monday breakfast and Tuesday dinner are on you", "Bag storage in León, and if it costs extra", "Whether Hola Hola’s $12 upfront payment is a deposit off the $95 or extra"]
  },
  "alternatives": [
    { "id": "private", "image": "manoShared", "title": "A private room on the coast", "tag": "Swap for the Mano dorm", "text": "Mano’s calendar had no private room for both nights. A private room somewhere around Las Peñitas, same Wednesday and Thursday, is budgeted at $80–140 for two nights. Ground total becomes $575–770, about £439–588. First check Mano for cancellations; otherwise name a real nearby place with real availability before choosing it.", "note": "Unquoted. The photo is Mano’s courtyard, not a room you have." },
    { "id": "noboard", "image": "view", "title": "Camping without boarding", "tag": "Saves $30", "text": "The El Hoyo + lake overnight on its own is $75 plus the $10 El Hoyo fee: $85 instead of $115. Skip Cerro Negro, keep the night on the mountain.", "url": "https://www.holaholatours.com/tours-1/el-hoyo-camping", "link": "Hola Hola: El Hoyo camping" },
    { "id": "shared", "image": "routecoast", "title": "Shared transfers", "tag": "Only if they really run", "text": "Sunday: a $25 shared seat around 13:00 instead of the $80 car, after a long wait. Friday: a taxi to León and an $18 shared seat at 09:30 (minimum four) instead of the $100–130 car. Don’t count the saving until it’s confirmed.", "url": "https://www.roneeyshuttle.com/p_page.php?idc=19&idcd=9&idlang=EN&idp=NIC&idr=12", "link": "Roneey shuttle" },
    { "id": "venado", "image": "coast", "title": "Juan Venado by boat", "tag": "Thursday, optional", "text": "A guided boat into the mangrove reserve behind the beach. $30–60 extra as an unquoted allowance. Ask Mano locally.", "map": "Reserva Natural Isla Juan Venado Nicaragua" },
    { "id": "bigfoot", "image": "bigfoot", "title": "Bigfoot", "tag": "Optional evening or bed", "text": "A León party hostel with organised drinking games. Worth a look if the group’s there; not the centre of the trip, and not booked.", "url": "https://www.bigfoothostelleon.com/", "link": "Bigfoot León" },
    { "id": "elsewhere", "image": "route", "title": "Granada, Ometepe, San Juan del Sur", "tag": "Not this time", "text": "All on the old plans. The flight home is Friday, so none of them fit without dropping the coast or the camp.", "note": "No extra nights or detours are priced." }
  ],
  "bookings": [
    { "id": "group", "kind": "book", "title": "Ask where the group is staying", "date": "First", "text": "And what’s already planned Sunday to Wednesday. Join their base if it suits you." },
    { "id": "camp", "kind": "book", "title": "Volcano Day, Mon 14 departure", "date": "Second", "text": "Group minimum, final price with park fees, meals, bag storage.", "url": "https://www.volcanodaynicaragua.com/tours/el-hoyo/", "action": "Volcano Day", "cost": 115 },
    { "id": "mano", "kind": "book", "title": "Mano a Mano, Wed 16 – Fri 18", "date": "Third", "text": "Dorm, or a genuinely available private room nearby. Check taxes and cancellation terms.", "url": "https://www.beds24.com/book-manoamano", "action": "Mano calendar", "cost": 40 },
    { "id": "leon", "kind": "book", "title": "León beds, Sun 13 and Tue 15", "date": "Fourth", "text": "Somewhere that fits the group’s base. Ask if your bag can stay on Monday.", "url": "https://leon.viavia.world/home/hotel/", "action": "ViaVia León", "cost": 50 },
    { "id": "friday", "kind": "book", "title": "Friday coast → airport quote", "date": "Fifth", "text": "A direct pickup that gets you to MGA around noon for 15:40.", "url": "https://nicaraguataxi.com/rates", "action": "Reference rates", "cost": 130 },
    { "id": "sunday", "kind": "book", "title": "Sunday airport → León", "date": "Then", "text": "Private car vs the 13:00 shared seat. Link the pickup to AV396.", "url": "https://www.leontrekkersnicaragua.com/transfers", "action": "Leontrekkers", "cost": 80 },
    { "id": "dollars", "kind": "do", "title": "US dollars in small notes", "date": "In New York", "text": "$10 arrival tax, $20 park fees, and small notes for taxis and food." },
    { "id": "ticket", "kind": "do", "title": "Check the ticket includes departure tax", "date": "Before 13 Dec", "text": "If not, add $35." },
    { "id": "flights", "kind": "do", "title": "Recheck the Avianca itinerary", "date": "Before booking pickups", "text": "For schedule changes. Check in for AV567 online early." },
    { "id": "jabs", "kind": "do", "title": "Travel clinic", "date": "Soon", "text": "Usually hep A, typhoid and tetanus. Check fitfortravel." },
    { "id": "insurance", "kind": "do", "title": "Insurance covers the hike and boarding", "date": "Before 13 Dec", "text": "Check what you already hold." },
    { "id": "spray", "kind": "do", "title": "Repellent and suncream", "date": "Pack", "text": "Dengue mosquitoes bite in the day." }
  ],
  "sources": [
    { "name": "Volcano Day: El Hoyo", "url": "https://www.volcanodaynicaragua.com/tours/el-hoyo/", "what": "Combo $95, gear and meals, days, minimum three" },
    { "name": "Hola Hola: boarding, camping, lake", "url": "https://www.holaholatours.com/tours-1/boarding,-camping,-lake", "what": "Park fees $10 + $10, upfront payment wording" },
    { "name": "Hola Hola: El Hoyo camping", "url": "https://www.holaholatours.com/tours-1/el-hoyo-camping", "what": "$75 camping without boarding" },
    { "name": "Leontrekkers transfers", "url": "https://www.leontrekkersnicaragua.com/transfers", "what": "$80 León–airport, $20 León–Las Peñitas, up to four" },
    { "name": "Fun ’N’ Sun transport", "url": "https://www.funnsuntravels.com/transport/", "what": "$75 airport, $25 Las Peñitas, $18 shared seat" },
    { "name": "Roneey airport shuttle", "url": "https://www.roneeyshuttle.com/p_page.php?idc=19&idcd=9&idlang=EN&idp=NIC&idr=12", "what": "$25 shared seat, 13:00" },
    { "name": "Nicaragua Taxi rates", "url": "https://nicaraguataxi.com/rates", "what": "Upper reference for airport and coast" },
    { "name": "Mano a Mano calendar", "url": "https://www.beds24.com/book-manoamano", "what": "Dorm availability seen 22 Nov" },
    { "name": "Mano a Mano: the hostel", "url": "https://www.manoamanoecohostel.com/the-hostel", "what": "Photos and room types" },
    { "name": "ViaVia León", "url": "https://leon.viavia.world/home/hotel/", "what": "Trek meeting point, possible base" },
    { "name": "Pan & Paz", "url": "https://www.panypaz.com/", "what": "Possible coffee stop" },
    { "name": "GOV.UK entry requirements", "url": "https://www.gov.uk/foreign-travel-advice/nicaragua/entry-requirements", "what": "$10 arrival tax, $35 departure tax" },
    { "name": "Wise USD/GBP, 22 Nov 2026", "url": "https://wise.com/gb/currency-converter/usd-to-gbp-rate/history/22-11-2026", "what": "Rate reference; sums use a fixed 0.764" }
  ],
  "practical": [
    { "head": "Entry", "text": "No visa on a British passport. $10 arrival tax in cash at Managua. Passport needs six months left. Have the AV397 return on your phone." },
    { "head": "Money", "text": "Córdobas, roughly C$36–37 to the dollar. Dollars work in tourist places; change comes back in córdobas. Taxis and the coast are mostly cash." },
    { "head": "Heat & the hike", "text": "León is hot, low to mid 30s. El Hoyo is a real uphill with overnight gear and 7–8 litres of water. Start hydrated." },
    { "head": "The sea", "text": "Strong Pacific currents at Las Peñitas. Swim where the locals swim and ask first." },
    { "head": "Keep it low key", "text": "No drone, no photos of police or the army, give protests a wide berth. Check the FCDO page the week before." }
  ]
};
