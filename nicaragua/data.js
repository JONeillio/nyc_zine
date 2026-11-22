/* Nicaragua, 13–18 December 2026. A proposed route, not a booking.
   León → El Hoyo overnight / Laguna Asososca → Las Peñitas → León → Managua airport.
   Flights are the only confirmed items. Every cost is for one person, in US dollars, checked 22 November 2026.
   costType says what kind of number it is:
     published  = the operator's own listed price
     entrance   = a separate park or site fee
     allowance  = a budget line for something not yet chosen (a bed, a meal, a taxi)
     estimate   = a figure from guides or reviews, not the operator */
const TRIP = {
  "fx": { "usdPerGbp": 1.32, "checked": "22 November 2026" },
  "buckets": [
    { "id": "beds", "label": "Beds", "note": "4 hostel nights. The camp night comes with the trek." },
    { "id": "trek", "label": "The El Hoyo trek", "note": "Listed price, trail fee, water" },
    { "id": "transport", "label": "Getting about", "note": "Airport shuttles and taxis" },
    { "id": "food", "label": "Food", "note": "Trek meals taken out" },
    { "id": "nights", "label": "Nights out", "note": "Drinks, four evenings" },
    { "id": "entry", "label": "Fees & tickets", "note": "Tourist card, cathedral roof" }
  ],
  "days": [
    {
      "id": "sun",
      "day": "Sunday",
      "date": "13 December",
      "short": "13",
      "label": "Land & León",
      "title": "Off the red-eye, up to León.",
      "subtitle": "Land at 8:40, two hours north, sleep, then a first wander and dinner.",
      "image": "leon",
      "area": "Managua airport · León",
      "travel": "AV396 from San Salvador lands at Managua (MGA) at 8:40am. León is about 1½–2 hours north by road. Shared shuttles are priced per person; a private car or taxi is priced per vehicle, often $100–150. Only split a car if the driver quotes it that way.",
      "stops": [
        {
          "time": "8:40am",
          "name": "Land in Managua",
          "bucket": "entry",
          "text": "AV396 from San Salvador. Immigration wants your passport, the tourist card fee in cash dollars and the customs form from the plane. Have the return flight on your phone.",
          "type": "travel",
          "status": "Booked",
          "map": "Augusto C. Sandino International Airport Managua",
          "cost": 10,
          "costType": "entrance",
          "costNote": "tourist card, cash dollars",
          "teaser": "AV396 lands 8:40am. Tourist card, customs form, out."
        },
        {
          "time": "About 10am",
          "name": "Shuttle to León",
          "bucket": "transport",
          "text": "About 1½–2 hours. Book a shared shuttle or a hostel pickup before you fly, so you’re not haggling after no sleep.",
          "type": "travel",
          "status": "To book",
          "map": "Parque Central León Nicaragua",
          "url": "https://www.suntransfers.com/managua-airport-to-leon-nicaragua",
          "link": "Transfer prices",
          "cost": 40,
          "costType": "allowance",
          "costNote": "shared shuttle, per person. Guides list $12–150 depending on the service",
          "teaser": "Two hours north. Pre-book it."
        },
        {
          "time": "Midday",
          "name": "Hostel, shower, sleep",
          "bucket": "beds",
          "text": "You’ll have been up all night. Check in somewhere central, eat, lie down. Nothing before 4pm.",
          "type": "flex",
          "status": "To book",
          "cost": 12,
          "costType": "allowance",
          "costNote": "one dorm bed in León. Guides put León dorms at $6–12",
          "teaser": "Lunch and a proper nap."
        },
        {
          "time": "Late afternoon",
          "name": "First wander round León",
          "bucket": "food",
          "image": "leonstreet",
          "text": "The cathedral square, the murals, whatever’s cooking on the corners. Pop into the trek operator’s office to check the 7am start and what to bring. The cathedral roof is closed on Sundays; Thursday is your day for that.",
          "status": "Proposed",
          "map": "Catedral de León Nicaragua",
          "cost": 15,
          "costType": "allowance",
          "costNote": "lunch and dinner",
          "teaser": "Walk, eat, check the trek kit list."
        },
        {
          "time": "Evening",
          "name": "Drinks, early-ish",
          "bucket": "nights",
          "text": "A couple of drinks if your friends are in town, then bed. Tomorrow starts at 7.",
          "type": "flex",
          "status": "Flexible",
          "cost": 10,
          "costType": "allowance",
          "costNote": "a few beers",
          "teaser": "See who’s around. Don’t go big."
        }
      ],
      "breathing": "If the flight wipes you out, skip the wander. The only thing that matters today is knowing where to be at 7am."
    },
    {
      "id": "mon",
      "day": "Monday",
      "date": "14 December",
      "short": "14",
      "label": "Up El Hoyo",
      "title": "Sleep on a volcano.",
      "subtitle": "A truck out of León, a hike up El Hoyo, and a night at the camp.",
      "image": "hoyo",
      "area": "León · El Hoyo",
      "travel": "The operator’s truck takes about an hour from León to the trailhead. Leave your main bag at the León hostel or the operator’s office. Ask which before you book.",
      "stops": [
        {
          "time": "7am",
          "name": "Meet at the trek office",
          "bucket": "trek",
          "text": "Pack the day bag with the guides. One third-party listing says the guides make breakfast here; Quetzaltrekkers’ own page doesn’t say, so eat something first if unsure.",
          "type": "travel",
          "status": "To book",
          "map": "Quetzaltrekkers León Nicaragua",
          "url": "https://quetzaltrekkersleon.rezdy.com/377129/2-day-volcan-el-hoyo",
          "link": "The 2-day El Hoyo trek",
          "cost": 60,
          "costType": "published",
          "costNote": "Quetzaltrekkers 2-day El Hoyo, listed price. Transport and borrowed camping gear included. Other operators list $50–95",
          "teaser": "7am start. Breakfast, kit, truck."
        },
        {
          "time": "Morning",
          "name": "Up El Hoyo",
          "bucket": "trek",
          "image": "hoyo",
          "text": "El Hoyo means ‘the hole’: a huge collapsed pit on the side of the volcano. It’s a real hike, uphill in the heat, carrying your own water. Tents, mats and sleeping bags come from the operator. The water, snacks and your own layers don’t.",
          "status": "Proposed",
          "map": "Volcán El Hoyo Nicaragua",
          "cost": 10,
          "costType": "entrance",
          "costNote": "trail entrance. One operator says $10 is charged separately; check whether yours includes it",
          "note": "Carry about 4–6 litres. Ask the operator for their exact number.",
          "teaser": "A proper uphill. Bring the water."
        },
        {
          "time": "Sunset",
          "name": "Camp under the volcanoes",
          "text": "Camp near the top, with the line of volcanoes running off towards the coast. Dinner comes with the trek. Then stars, and an early night for sunrise.",
          "status": "Proposed",
          "teaser": "The whole reason for the trip."
        }
      ],
      "breathing": "If the operator cancels for low numbers, ask about the next departure or a different one. Telica overnight runs from the same office."
    },
    {
      "id": "tue",
      "day": "Tuesday",
      "date": "15 December",
      "short": "15",
      "label": "Crater lake & coast",
      "title": "Sunrise, a crater lake, the sea.",
      "subtitle": "Down off El Hoyo to Laguna Asososca, back to León by 2, out to Las Peñitas.",
      "image": "asososca",
      "area": "El Hoyo · Laguna Asososca · Las Peñitas",
      "travel": "The listing has you back at the León office around 2pm. Las Peñitas is 25 minutes by taxi from León (around C$250, about $7), or a cheap local bus that leaves when it’s full. The last bus back from the beach is about 6pm.",
      "stops": [
        {
          "time": "Dawn",
          "name": "Sunrise from the camp",
          "image": "hoyo",
          "text": "The best light of the trip. Breakfast comes with the trek.",
          "status": "Proposed",
          "teaser": "Up for sunrise."
        },
        {
          "time": "Morning",
          "name": "Swim in Laguna Asososca",
          "image": "asososca",
          "text": "The trek finishes at the crater lake next door. Swim off the dust and the walk.",
          "status": "Proposed",
          "map": "Laguna de Asososca León Nicaragua",
          "teaser": "Swim in a crater."
        },
        {
          "time": "2pm",
          "name": "Back to León, out to the beach",
          "split": { "transport": 8, "food": 15 },
          "text": "Grab the bag, eat lunch, then a taxi out to Las Peñitas.",
          "type": "travel",
          "status": "Proposed",
          "map": "Las Peñitas León Nicaragua",
          "cost": 23,
          "costType": "allowance",
          "costNote": "taxi about $8, plus lunch",
          "teaser": "Bag, lunch, taxi to the coast."
        },
        {
          "time": "Evening",
          "name": "Fish dinner on the beach",
          "bucket": "food",
          "text": "Fried fish, rice, a cold Toña, watch the sun go into the Pacific. You’ve earned it.",
          "status": "Proposed",
          "cost": 15,
          "costType": "allowance",
          "costNote": "dinner",
          "teaser": "Fried fish, sunset."
        },
        {
          "time": "Late",
          "name": "Olazul Tuesday night",
          "bucket": "nights",
          "text": "A regular Tuesday night at Olazul came up in planning. A recurring night doesn’t mean it runs on the 15th, and I couldn’t find a schedule, so it’s a lead: ask at the hostel on the day. Don’t plan around it.",
          "status": "Lead",
          "map": "Olazul Las Peñitas Nicaragua",
          "cost": 20,
          "costType": "allowance",
          "costNote": "drinks, if it’s on",
          "note": "Bigfoot in León runs its own Tuesday night. You can only do one, and on this route you’re at the beach.",
          "teaser": "A lead, not a plan."
        }
      ],
      "breathing": "If the legs are gone, have dinner and sleep. The beach night isn’t going anywhere: you’ve got two."
    },
    {
      "id": "wed",
      "day": "Wednesday",
      "date": "16 December",
      "short": "16",
      "label": "Las Peñitas",
      "title": "A whole day doing not much.",
      "subtitle": "Sea, hammock, a boat into the mangroves if you fancy it, friends in the evening.",
      "image": "penitas",
      "area": "Las Peñitas · Juan Venado",
      "travel": "Everything’s on foot along the beach road. Bring cash: small places don’t always take cards.",
      "stops": [
        {
          "time": "Morning",
          "name": "Swim and breakfast",
          "bucket": "food",
          "image": "penitas",
          "text": "The Pacific here has a proper pull. Swim where the locals swim and ask about currents.",
          "status": "Proposed",
          "map": "Las Peñitas Beach Nicaragua",
          "cost": 8,
          "costType": "allowance",
          "costNote": "breakfast",
          "teaser": "Swim. Ask about the currents."
        },
        {
          "time": "Late morning",
          "name": "Juan Venado mangroves by boat",
          "bucket": "entry",
          "image": "venado",
          "text": "The nature reserve is the long sandbar behind the beach. Boats go up the channel through the mangroves: birds, maybe a crocodile, no effort.",
          "status": "Optional",
          "map": "Reserva Natural Isla Juan Venado Nicaragua",
          "cost": 20,
          "costType": "estimate",
          "costNote": "boat trip. My guess; I couldn’t find a current price",
          "teaser": "A gentle boat through the mangroves."
        },
        {
          "time": "Afternoon",
          "name": "Hammock, or a board",
          "bucket": "entry",
          "text": "Rent a surfboard if the waves are friendly. No lesson booked, nothing to sign up for.",
          "status": "Optional",
          "cost": 10,
          "costType": "estimate",
          "costNote": "board for a few hours, roughly",
          "teaser": "Hammock or a borrowed board."
        },
        {
          "time": "Evening",
          "name": "Dinner and drinks with whoever’s around",
          "split": { "food": 15, "nights": 15 },
          "text": "If your friends are on the coast too, this is the night. If they’re not, the hostel bars are small and friendly.",
          "type": "flex",
          "status": "Flexible",
          "cost": 30,
          "costType": "allowance",
          "costNote": "dinner $15, drinks $15",
          "teaser": "See who’s on the beach."
        },
        {
          "time": "Night",
          "name": "Second night at the beach",
          "bucket": "beds",
          "text": "Mano a Mano is one hostel to look at. Book something with free cancellation until the trek is confirmed.",
          "type": "flex",
          "status": "To book",
          "cost": 30,
          "costType": "allowance",
          "costNote": "two dorm nights at $15. Mano a Mano lists dorms from about $13",
          "teaser": "Night two by the sea."
        }
      ],
      "breathing": "This is the slack day on purpose. If the group wants a different plan, this is the one to give up."
    },
    {
      "id": "thu",
      "day": "Thursday",
      "date": "17 December",
      "short": "17",
      "label": "León, the big night",
      "title": "Rooftops, then the late one.",
      "subtitle": "Back to León, walk on the cathedral roof, then a proper night out.",
      "image": "leon",
      "area": "Las Peñitas · León",
      "travel": "Taxi back from Las Peñitas, 25 minutes. Your flight’s not until 3:40pm tomorrow, so tonight’s the one to stay out.",
      "stops": [
        {
          "time": "Morning",
          "name": "Cerro Negro boarding",
          "bucket": "entry",
          "image": "boarding",
          "text": "Hike up a black gravel volcano, slide down on a board. Only if you fancy it, and it means leaving the beach early: most trips leave León in the morning.",
          "status": "Optional",
          "map": "Cerro Negro Nicaragua",
          "cost": 40,
          "costType": "estimate",
          "costNote": "boarding with transport, from older guides. Count it once: if your trek operator bundles it, skip this",
          "teaser": "Only if you want the rush."
        },
        {
          "time": "Late morning",
          "name": "Taxi back to León",
          "split": { "transport": 8, "beds": 12 },
          "text": "Check back into a León hostel and drop the bag.",
          "type": "travel",
          "status": "To book",
          "map": "Parque Central León Nicaragua",
          "cost": 20,
          "costType": "allowance",
          "costNote": "taxi $8 plus a dorm bed $12",
          "teaser": "Back to town."
        },
        {
          "time": "2–4:30pm",
          "name": "Walk the cathedral roof",
          "bucket": "entry",
          "image": "leon",
          "text": "Shoes off, out across the white domes, volcanoes on the horizon. Listings give a 2–4:30 afternoon window; check before you go.",
          "status": "Proposed",
          "map": "Catedral de León Nicaragua",
          "cost": 4,
          "costType": "estimate",
          "costNote": "roof entry, from a cost site",
          "teaser": "Barefoot on the white roof."
        },
        {
          "time": "Evening",
          "name": "Live music in León",
          "split": { "food": 15, "nights": 20 },
          "text": "La Olla Quemada is the venue that comes up most for loud live shows. The Teatro Municipal for anything bigger. Ask the hostel what’s on tonight.",
          "status": "Proposed",
          "map": "La Olla Quemada León Nicaragua",
          "cost": 35,
          "costType": "allowance",
          "costNote": "dinner $15, drinks $20",
          "teaser": "Dinner, then wherever the band is."
        },
        {
          "time": "Late",
          "name": "Bigfoot, if the group’s going",
          "bucket": "nights",
          "text": "Big party hostel with drinking games and a party-bus vibe. It’s there if your friends end up there and you’re in the mood. It isn’t the plan, and it isn’t where you have to stay.",
          "status": "Optional",
          "map": "Bigfoot Hostel León Nicaragua",
          "cost": 15,
          "costType": "allowance",
          "costNote": "extra drinks",
          "teaser": "Optional. Party hostel bar."
        }
      ],
      "breathing": "If the night ends early, fine. If it doesn’t, you’ve got till late morning."
    },
    {
      "id": "fri",
      "day": "Friday",
      "date": "18 December",
      "short": "18",
      "label": "Homeward",
      "title": "A slow León morning, then fly.",
      "subtitle": "Breakfast, the market if there’s time, then two hours to the airport.",
      "image": "leonstreet",
      "area": "León · Managua airport",
      "travel": "Allow two hours from León to the airport and aim to be there by 1:30pm. Leave by 11am.",
      "stops": [
        {
          "time": "Morning",
          "name": "Breakfast and the market",
          "bucket": "food",
          "text": "Gallo pinto and coffee, then a walk through the central market if you’re up in time.",
          "status": "Proposed",
          "map": "Mercado Central León Nicaragua",
          "cost": 8,
          "costType": "allowance",
          "costNote": "breakfast",
          "teaser": "Gallo pinto, coffee, market."
        },
        {
          "time": "11am",
          "name": "Shuttle to the airport",
          "bucket": "transport",
          "text": "Same deal as Sunday: shared shuttle, or hostel pickup booked in advance.",
          "type": "travel",
          "status": "To book",
          "map": "Augusto C. Sandino International Airport Managua",
          "cost": 40,
          "costType": "allowance",
          "costNote": "shared shuttle, per person",
          "teaser": "Leave by 11."
        },
        {
          "time": "3:40pm",
          "name": "AV397 to San Salvador",
          "text": "Then AV566 to New York, landing at JFK at 00:10 on Saturday.",
          "type": "travel",
          "status": "Booked",
          "teaser": "AV397 → AV566 → JFK."
        }
      ],
      "breathing": "Spend the córdobas before the airport. Nobody wants them in New York."
    }
  ],
  "alternatives": [
    {
      "id": "granada",
      "image": "calzada_day",
      "title": "Granada",
      "tag": "Instead of the beach nights",
      "text": "The colonial lake town: Calle La Calzada, the Masaya market, the volcano at night. Prettier and more touristy than León. It’s three hours from Las Peñitas, so it doesn’t fit the short route without losing the beach.",
      "map": "Calle La Calzada Granada Nicaragua",
      "imageAlt": "Calle La Calzada in Granada in daylight"
    },
    {
      "id": "masaya",
      "image": "rim",
      "title": "Masaya Volcano at night",
      "tag": "With Granada only",
      "text": "You drive up to the rim after dark. The lava lake was buried by a landslide in March 2024, so it’s a red glow from a vent now. The night session runs about 5–8pm, $10 cash, vehicle only.",
      "map": "Masaya Volcano National Park Nicaragua",
      "imageAlt": "Santiago crater of Masaya volcano by day"
    },
    {
      "id": "sanjuan",
      "image": "sanjuan",
      "title": "San Juan del Sur",
      "tag": "The big party coast",
      "text": "The south-coast surf town: beach bars and the biggest backpacker scene. It’s 2½–3 hours from the airport and far from León, so it’s a different trip, not a swap.",
      "map": "San Juan del Sur Nicaragua",
      "imageAlt": "The bay at San Juan del Sur"
    },
    {
      "id": "treehouse",
      "image": "mombacho",
      "title": "The Treehouse",
      "tag": "Doesn’t fit this week",
      "text": "A jungle hostel on Mombacho near Granada, famous for its Friday party (listed 4pm–3am). You fly out on Friday afternoon, so it can’t work without adding days, and they ask for a three-night minimum.",
      "note": "The photo is Mombacho from Granada, not the hostel.",
      "map": "The Treehouse Granada Nicaragua",
      "imageAlt": "Mombacho volcano seen from Granada"
    },
    {
      "id": "ometepe",
      "image": "ferry",
      "title": "Ometepe & Laguna de Apoyo",
      "tag": "The old plan",
      "text": "Two volcanoes in a lake, then a swim in a crater lake near the airport. Beautiful and quiet, but slow to reach and light on nights out. The first version of this zine.",
      "map": "Ometepe Nicaragua",
      "imageAlt": "Concepción volcano from the Ometepe ferry"
    }
  ],
  "bookings": [
    { "id": "trek", "kind": "book", "title": "El Hoyo overnight trek", "date": "Mon 14 – Tue 15 Dec", "text": "Ask before paying: does the 14th run (minimum numbers)? Is the trail entrance included? Which meals? Where does my main bag stay? What’s the cancellation policy?", "url": "https://quetzaltrekkersleon.rezdy.com/377129/2-day-volcan-el-hoyo", "action": "Quetzaltrekkers booking page", "cost": 60 },
    { "id": "leon1", "kind": "book", "title": "León hostel, 1 night", "date": "Sun 13 – Mon 14 Dec", "text": "Central. Ask whether they’ll store your bag during the trek. Free cancellation.", "url": "https://www.hostelworld.com/hostels/north-america/nicaragua/leon/", "action": "Search León", "cost": 12 },
    { "id": "penitas", "kind": "book", "title": "Las Peñitas hostel, 2 nights", "date": "Tue 15 – Thu 17 Dec", "text": "Mano a Mano is one to look at. Free cancellation until the trek is confirmed.", "url": "https://www.hostelworld.com/hostels/north-america/nicaragua/las-penitas/", "action": "Search Las Peñitas", "cost": 30 },
    { "id": "leon2", "kind": "book", "title": "León hostel, 1 night", "date": "Thu 17 – Fri 18 Dec", "text": "The big night, so somewhere you can get back to easily.", "url": "https://www.hostelworld.com/hostels/north-america/nicaragua/leon/", "action": "Search León", "cost": 12 },
    { "id": "shuttle", "kind": "book", "title": "Airport shuttles, both ways", "date": "Sun 13 · Fri 18", "text": "Ask whether the quote is per person or per car. Give them AV396 for the pickup.", "url": "https://www.suntransfers.com/managua-airport-to-leon-nicaragua", "action": "Compare transfers", "cost": 80 },
    { "id": "group", "kind": "do", "title": "Ask the group where they’ll be", "date": "This week", "text": "Their route and dates aren’t settled. Don’t book around them; just know if they’ll be in León or on the coast." },
    { "id": "olazul", "kind": "do", "title": "Is there anything on at Olazul, Tue 15?", "date": "Closer to the date", "text": "A lead only. Message them or ask at the hostel." },
    { "id": "passport", "kind": "do", "title": "Passport has 6 months left", "date": "Now", "text": "Six months past the trip, and a couple of blank pages." },
    { "id": "jabs", "kind": "do", "title": "Travel clinic for jabs", "date": "This week", "text": "Three weeks out, so go soon. Usually hep A, typhoid and tetanus. Check fitfortravel first." },
    { "id": "dollars", "kind": "do", "title": "Get US dollars in small notes", "date": "In New York", "text": "$10–12 for the tourist card, the trail fee, plus $100 or so in 1s, 5s and 10s. Clean notes, no tears." },
    { "id": "insurance", "kind": "do", "title": "Travel insurance covers trekking", "date": "Before 13 Dec", "text": "Check it covers an overnight volcano hike, and board sports if you do Cerro Negro." },
    { "id": "card", "kind": "do", "title": "A card with no foreign fees", "date": "Before 13 Dec", "text": "For BAC and LAFISE ATMs. They give out dollars or córdobas." },
    { "id": "offline", "kind": "do", "title": "Offline maps & Spanish", "date": "Before 13 Dec", "text": "Download Nicaragua in Google Maps and Spanish in Google Translate." },
    { "id": "checkin", "kind": "do", "title": "Check in for AV567", "date": "Sat 12 Dec", "text": "Avianca may ask for extra details for Nicaragua at check-in. Do it online early." },
    { "id": "spray", "kind": "do", "title": "DEET and suncream", "date": "Pack", "text": "Dengue mosquitoes bite in the day. Buy it in New York." }
  ],
  "travel": {
    "lines": [
      { "label": "Water and snacks for the trek", "amount": 5, "costType": "allowance", "bucket": "trek", "note": "About 4–6 litres plus snacks, bought in León on Sunday." }
    ]
  },
  "packing": [
    { "head": "Provided on the trek", "text": "Tent, mat and sleeping bag, borrowed from the operator. Confirm before you go." },
    { "head": "You carry", "text": "4–6 litres of water, snacks, a warm layer for the night, head torch, sun hat, suncream, swimmers for the lake, toilet paper, cash for the trail fee." },
    { "head": "On your feet", "text": "Trainers with grip or light boots. It’s loose and dusty." },
    { "head": "Left in León", "text": "The main bag. Ask the hostel or the trek office to store it." }
  ],
  "verify": [
    "The trek runs on Mon 14 (minimum numbers).",
    "Final inclusions: meals, entrance fee, gear.",
    "Where your bag stays during the trek.",
    "Hostel cancellation terms.",
    "Whether each shuttle quote is per person or per car."
  ],
  "practical": [
    { "head": "Entry", "text": "No visa on a British passport. You pay a tourist card on arrival, around $10 in cash dollars, and fill in a customs form on the plane. Passport needs six months left. Have the onward flight (AV397) to show if they ask." },
    { "head": "Money", "text": "Córdobas (C$), roughly C$36–37 to the dollar. Dollars work in most tourist places, but change comes back in córdobas. León takes cards in some places; Las Peñitas and taxis are cash." },
    { "head": "Heat & water", "text": "León is hot, low to mid 30s in December. The trek is the hard bit: start hydrated, carry more water than feels sensible, and eat salty food." },
    { "head": "The sea", "text": "The Pacific at Las Peñitas has strong currents. Swim where locals swim and ask before going in." },
    { "head": "Keep it low key", "text": "Politics is a touchy subject in Nicaragua. Don’t bring a drone, don’t photograph police or the army, and give any protests a wide berth. Check the FCDO page the week before." }
  ]
};
