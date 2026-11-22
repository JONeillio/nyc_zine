/* Nicaragua, 13–18 December 2026. A first plan: places and stays are assumptions until booked.
   Prices are rough per-person US dollar guesses, checked November 2026. */
const TRIP = {
  "days": [
    {
      "id": "sun",
      "day": "Sunday",
      "date": "13 December",
      "short": "13",
      "label": "Land & Granada",
      "title": "Off the red-eye, into Granada.",
      "subtitle": "Land at 8:40, an hour’s drive, a nap, then sunset from a bell tower.",
      "image": "calzada",
      "area": "Managua airport · Granada",
      "travel": "Avianca AV396 from San Salvador lands at Managua (MGA) at 8:40am. Granada is about an hour south by road. Get the hotel to send a driver rather than haggling at arrivals after no sleep. Everything after that in Granada is walkable.",
      "stops": [
        {
          "time": "8:40am",
          "name": "Land in Managua",
          "text": "AV396 from San Salvador. Immigration wants your passport, the tourist card fee in US dollars and the customs form they hand out on the plane. Have the return flight on your phone in case they ask.",
          "type": "travel",
          "map": "Augusto C. Sandino International Airport Managua",
          "note": "Tourist card is around $10, cash, in dollars. Some sources say $12, so have small notes.",
          "teaser": "AV396 lands 8:40am. Tourist card, customs form, out."
        },
        {
          "time": "About 10am",
          "name": "Driver to Granada",
          "text": "About an hour. Most Granada guesthouses can book an airport pickup. Ask them to hold the room for an early check-in, or at least let you leave the bag.",
          "type": "travel",
          "map": "Parque Central Granada Nicaragua",
          "cost": 40,
          "costNote": "private airport pickup, roughly",
          "teaser": "An hour south. Pre-book it."
        },
        {
          "time": "Midday",
          "name": "Check in, shower, sleep",
          "text": "You’ll have been up all night. Lunch, a lie down, and nothing else before 4pm.",
          "type": "flex",
          "teaser": "Lunch and a proper nap."
        },
        {
          "time": "Around 5pm",
          "name": "La Merced bell tower at sunset",
          "image": "merced",
          "text": "The best view in Granada: climb the bell tower for the red roofs, the cathedral and Mombacho volcano behind. Sunset is around 5:30 in December.",
          "status": "Planned",
          "map": "Iglesia La Merced Granada Nicaragua",
          "cost": 2,
          "costNote": "tower entry, a dollar or two",
          "teaser": "Red roofs, the cathedral, the volcano. Sunset around 5:30."
        },
        {
          "time": "Evening",
          "name": "Calle La Calzada",
          "image": "calzada",
          "text": "The pedestrian street from the cathedral down towards the lake. Tables out on the street, a cold Toña, something grilled. Easy first night.",
          "status": "Planned",
          "map": "Calle La Calzada Granada Nicaragua",
          "cost": 15,
          "costNote": "dinner and a couple of beers",
          "teaser": "Dinner on the street and a cold Toña."
        }
      ],
      "breathing": "If the flights wipe you out, skip the tower. It’s there tomorrow too."
    },
    {
      "id": "mon",
      "day": "Monday",
      "date": "14 December",
      "short": "14",
      "label": "Islets & a volcano",
      "title": "Little islands, a market, a glowing crater.",
      "subtitle": "A boat round Las Isletas, the Masaya craft market, then the volcano after dark.",
      "image": "volcano",
      "area": "Lake Nicaragua · Masaya",
      "travel": "Las Isletas boats leave from Puerto Asese, ten minutes from Granada by taxi. Masaya is about 30 minutes from Granada. The volcano park is at Km 23 on the Masaya–Managua road, and you can’t walk up to the crater, so it’s a tour or a taxi that waits.",
      "stops": [
        {
          "time": "9am",
          "name": "Las Isletas by boat",
          "image": "isletas",
          "text": "Around 365 tiny islands off Granada, made by an old Mombacho eruption. A couple of hours by boat: herons, fishermen, a spider monkey island, people’s houses on rocks. Go in the morning while it’s cooler.",
          "status": "Planned",
          "map": "Puerto Asese Granada Nicaragua",
          "cost": 20,
          "costNote": "shared boat, two hours, plus taxi",
          "teaser": "Two hours weaving through 365 tiny islands.",
          "hint": "Book it at the dock or through the guesthouse."
        },
        {
          "time": "1–4pm",
          "name": "Masaya craft market",
          "image": "market",
          "text": "The old market in Masaya, a 19th-century building full of hammocks, pottery, leather and painted wood. Good rummage, have a look before you buy. Lunch nearby.",
          "status": "Planned",
          "map": "Mercado de Artesanías Masaya Nicaragua",
          "cost": 15,
          "costNote": "lunch, before any shopping",
          "teaser": "Hammocks, pottery, leather. A good rummage."
        },
        {
          "time": "5–8pm",
          "name": "Masaya Volcano after dark",
          "image": "volcano",
          "text": "Drive right up to the rim of Santiago crater and look down. A 2024 landslide covered most of the old lava lake, so it’s a red glow now rather than a bubbling pool. Still mad to see. Gas can cut your time at the edge to a few minutes.",
          "status": "Planned",
          "map": "Masaya Volcano National Park Nicaragua",
          "url": "https://sallysees.com/masaya-volcano/",
          "link": "What to expect",
          "note": "Night entry is about $10 for foreigners. The park can close at short notice for gas, so check with the tour on the day.",
          "cost": 35,
          "costNote": "night tour with transport, roughly",
          "teaser": "Look into a live crater. Red glow, not a lava lake any more.",
          "hint": "Night slot about 5–8pm. Book a tour from Granada."
        }
      ],
      "breathing": "If the volcano’s shut for gas, swap it for the Mombacho cloud forest in the day and have a slow evening on the Calzada."
    },
    {
      "id": "tue",
      "day": "Tuesday",
      "date": "15 December",
      "short": "15",
      "label": "Across the lake",
      "title": "Two volcanoes in the middle of a lake.",
      "subtitle": "Down to San Jorge, the boat to Ometepe, and the beach at Santo Domingo by mid-afternoon.",
      "image": "ferry",
      "area": "San Jorge · Ometepe",
      "travel": "Taxi from Granada to the San Jorge port, about 1½ hours. Boats to Moyogalpa run all day (10:30, 11:00, 12:00, 12:30, 13:30…) and take about 70 minutes. Then a taxi across the island to Santo Domingo, about 45 minutes.",
      "stops": [
        {
          "time": "9am",
          "name": "Taxi to San Jorge",
          "text": "Granada to the ferry port near Rivas. Ask the guesthouse for a driver; agree the price before you go.",
          "type": "travel",
          "map": "Puerto de San Jorge Rivas Nicaragua",
          "cost": 45,
          "costNote": "private taxi, roughly",
          "teaser": "1½ hours south to the port."
        },
        {
          "time": "10:30 or 12:00",
          "name": "The boat to Ometepe",
          "image": "ferry",
          "text": "Get the big ferry rather than a lancha if the lake’s choppy. Sit on the right going over: Concepción comes up out of the water the whole way.",
          "status": "Planned",
          "map": "Moyogalpa Ometepe Nicaragua",
          "url": "https://ometepeislandinfo.com/Ferry-Schedule",
          "link": "Boat timetable",
          "note": "About C$50 on the ferry, which is under $1.50. Several boats go to different ports, so check it says Moyogalpa.",
          "cost": 2,
          "costNote": "ferry ticket",
          "teaser": "70 minutes with a volcano in front of you."
        },
        {
          "time": "Afternoon",
          "name": "Santo Domingo beach",
          "image": "fields",
          "text": "Taxi across the island to Playa Santo Domingo, the strip of sand between the two volcanoes. Check in, swim, do nothing.",
          "status": "Planned",
          "map": "Playa Santo Domingo Ometepe Nicaragua",
          "cost": 20,
          "costNote": "taxi from the port",
          "teaser": "A lake beach between two volcanoes."
        },
        {
          "time": "Evening",
          "name": "Sunset and dinner by the lake",
          "text": "Dinner at the guesthouse or one of the beach places. Early night, island time.",
          "type": "flex",
          "cost": 15,
          "costNote": "dinner and a beer",
          "teaser": "Dinner, beer, early night."
        }
      ],
      "breathing": "Travel day. If you miss one boat there’s another within the hour, so don’t stress the timing."
    },
    {
      "id": "wed",
      "day": "Wednesday",
      "date": "16 December",
      "short": "16",
      "label": "Island day",
      "title": "Springs, monkeys, a sandbar at sunset.",
      "subtitle": "A loop of Ometepe with a driver: Ojo de Agua, Charco Verde, then Punta Jesús María.",
      "image": "ojo",
      "area": "Ometepe",
      "travel": "Easiest with a driver for the day. Scooters are everywhere, but the roads are rough and you need a motorbike licence for your insurance to count. Bikes work too if it’s not too hot.",
      "stops": [
        {
          "time": "All day",
          "name": "Driver for the day",
          "text": "Ask the guesthouse. Agree the stops and a finish time first.",
          "type": "travel",
          "cost": 55,
          "costNote": "driver for the day, roughly",
          "teaser": "Ask the guesthouse."
        },
        {
          "time": "9am",
          "name": "Ojo de Agua",
          "image": "ojo",
          "text": "Natural spring pools in the trees, clear and cool. Ten minutes from Santo Domingo. Go early before the tour groups.",
          "status": "Planned",
          "map": "Ojo de Agua Ometepe Nicaragua",
          "cost": 5,
          "costNote": "entry",
          "teaser": "Spring-fed swimming pools in the jungle."
        },
        {
          "time": "Midday",
          "name": "Charco Verde",
          "image": "omeview",
          "text": "A short trail round a green lagoon on the Concepción side. Howler monkeys, butterflies, a beach. Lunch at one of the places nearby.",
          "status": "Planned",
          "map": "Charco Verde Ometepe Nicaragua",
          "cost": 20,
          "costNote": "entry and lunch",
          "teaser": "Lagoon walk. Listen for the howlers."
        },
        {
          "time": "Around 5pm",
          "name": "Punta Jesús María",
          "image": "sunset",
          "text": "A long sandbar sticking out into the lake near Moyogalpa. Walk out to the end, get a drink at the shack, watch the sun drop behind the water.",
          "status": "Planned",
          "map": "Punta Jesus Maria Ometepe Nicaragua",
          "cost": 5,
          "costNote": "a drink",
          "teaser": "Walk out into the lake for sunset."
        },
        {
          "time": "Morning, if you’re keen",
          "name": "San Ramón waterfall",
          "text": "A 3–4 hour return hike up the Maderas side to a 50m waterfall. Swap it in for Charco Verde if you fancy a proper walk.",
          "status": "Optional",
          "map": "Cascada San Ramon Ometepe Nicaragua",
          "cost": 10,
          "costNote": "entry",
          "teaser": "A proper hike to a big waterfall."
        }
      ],
      "breathing": "Climbing either volcano is an 8–10 hour day with a guide. Not on this plan, but it’s there if you want to swap the loop for one."
    },
    {
      "id": "thu",
      "day": "Thursday",
      "date": "17 December",
      "short": "17",
      "label": "Crater lake",
      "title": "Swim in a volcano.",
      "subtitle": "Back on the boat, up to Laguna de Apoyo for the last night.",
      "image": "apoyo",
      "area": "Ometepe · Catarina · Laguna de Apoyo",
      "travel": "Taxi to Moyogalpa for the 9am or 10am boat. From San Jorge it’s about 1¾ hours to Laguna de Apoyo by car. Stop at the Catarina lookout on the way. Apoyo is only 45 minutes from the airport, which is why it’s the last night.",
      "stops": [
        {
          "time": "9 or 10am",
          "name": "The boat back",
          "text": "Taxi from Santo Domingo to Moyogalpa, then the ferry to San Jorge.",
          "type": "travel",
          "map": "Puerto de San Jorge Rivas Nicaragua",
          "cost": 22,
          "costNote": "taxi to the port and ferry",
          "teaser": "Taxi, boat, back on the mainland."
        },
        {
          "time": "Early afternoon",
          "name": "Catarina lookout",
          "image": "catarina",
          "text": "A balcony on the crater rim with the whole of Laguna de Apoyo below and Granada and the big lake behind. Stop for ten minutes on the way down.",
          "status": "Planned",
          "map": "Mirador de Catarina Nicaragua",
          "cost": 60,
          "costNote": "taxi from San Jorge with the stop",
          "teaser": "The crater lake from the rim."
        },
        {
          "time": "Afternoon",
          "name": "Laguna de Apoyo",
          "image": "apoyo",
          "text": "A lake inside an old volcano crater, warm and clear. Most lakeside places have a dock and free kayaks. Float about till sunset.",
          "status": "Planned",
          "map": "Laguna de Apoyo Nicaragua",
          "cost": 15,
          "costNote": "dinner and a beer",
          "teaser": "Warm, clear water in an old crater."
        }
      ],
      "breathing": "Last proper night. Nothing to rush for in the morning."
    },
    {
      "id": "fri",
      "day": "Friday",
      "date": "18 December",
      "short": "18",
      "label": "One more swim",
      "title": "A swim, then the flight back to New York.",
      "subtitle": "Morning in the lake, leave around 11:30, fly at 15:40.",
      "image": "apoyo2",
      "area": "Laguna de Apoyo · Managua airport",
      "travel": "Laguna de Apoyo to Managua airport is about 45 minutes, call it an hour. Be there by 1:15pm for the 3:40pm flight. AV397 to San Salvador, then AV566 to JFK, landing 00:10 on Saturday.",
      "stops": [
        {
          "time": "Morning",
          "name": "Swim and breakfast",
          "image": "apoyo2",
          "text": "Last swim, breakfast on the dock, pack.",
          "type": "flex",
          "teaser": "Last swim. Pack."
        },
        {
          "time": "11:30am",
          "name": "Driver to the airport",
          "text": "The guesthouse will sort it. Leave buffer for traffic in Managua.",
          "type": "travel",
          "map": "Augusto C. Sandino International Airport Managua",
          "cost": 40,
          "costNote": "airport taxi, roughly",
          "teaser": "About 45 minutes. Leave buffer."
        },
        {
          "time": "3:40pm",
          "name": "AV397 to San Salvador",
          "text": "Lands San Salvador 4:35pm. AV566 leaves 6:25pm and lands at JFK at 00:10 on Saturday 19 December. Then it’s New York again.",
          "type": "travel",
          "teaser": "Two flights. JFK just after midnight."
        }
      ],
      "breathing": "Spend leftover córdobas before the airport. Nobody will want them in New York."
    }
  ],
  "alternatives": [
    {
      "id": "leon",
      "image": "leon",
      "title": "León & Cerro Negro",
      "tag": "Instead of Ometepe",
      "text": "The other colonial city, two hours north of Managua. Student town, murals, walk on the white cathedral roof. Then Cerro Negro: hike up a black volcano and sledge back down it on a board. Two nights here instead of Ometepe, then Apoyo on the last night still works.",
      "note": "Volcano boarding tours run most mornings from León, roughly $30–40 including transport and the board.",
      "map": "Catedral de Leon Nicaragua",
      "imageAlt": "León cathedral"
    },
    {
      "id": "sanjuan",
      "image": "sanjuan",
      "title": "San Juan del Sur",
      "tag": "Instead of Laguna de Apoyo",
      "text": "The surf town on the Pacific, 30 minutes from San Jorge. Beach bars, Sunday Funday, the big Jesus statue on the headland. Fun, but it’s 2½ hours from the airport, so you’d need an early start on Friday.",
      "note": "Swap with Thursday night. Leave by 10am on Friday at the latest.",
      "map": "San Juan del Sur Nicaragua",
      "imageAlt": "The bay at San Juan del Sur"
    },
    {
      "id": "mombacho",
      "image": "mombacho",
      "title": "Mombacho cloud forest",
      "tag": "If the volcano’s shut",
      "text": "The volcano you can see from Granada. A truck takes you up into the cloud forest, then trails round the steaming craters at the top. Orchids, sloths if you’re lucky, views back to the islets.",
      "note": "Daytime only. Roughly half a day from Granada.",
      "map": "Reserva Natural Volcan Mombacho Nicaragua",
      "imageAlt": "Mombacho volcano"
    }
  ],
  "bookings": [
    { "id": "granada", "kind": "book", "title": "Granada, 2 nights", "date": "Sun 13 – Tue 15 Dec", "text": "Somewhere central, near the Calzada. Ask for early check-in and the airport pickup.", "url": "https://www.booking.com/searchresults.html?ss=Granada%2C+Nicaragua&checkin=2026-12-13&checkout=2026-12-15&group_adults=1", "action": "Search Granada", "image": "calzada", "cost": 90 },
    { "id": "pickup", "kind": "book", "title": "Airport pickup", "date": "Sun 13 Dec · 8:40am", "text": "Through the Granada guesthouse. Give them AV396.", "cost": 40 },
    { "id": "volcano", "kind": "book", "title": "Masaya night tour", "date": "Mon 14 Dec · 5pm", "text": "From Granada, with transport. Check the park’s open on the day.", "url": "https://sallysees.com/masaya-volcano/", "action": "What to expect", "image": "volcano", "cost": 35 },
    { "id": "ometepe", "kind": "book", "title": "Ometepe, 2 nights", "date": "Tue 15 – Thu 17 Dec", "text": "Santo Domingo beach area. Ask them about a driver for Wednesday.", "url": "https://www.booking.com/searchresults.html?ss=Santo+Domingo%2C+Ometepe&checkin=2026-12-15&checkout=2026-12-17&group_adults=1", "action": "Search Ometepe", "image": "fields", "cost": 80 },
    { "id": "apoyo", "kind": "book", "title": "Laguna de Apoyo, 1 night", "date": "Thu 17 – Fri 18 Dec", "text": "A lakeside place with a dock. Ask about the Friday airport taxi.", "url": "https://www.booking.com/searchresults.html?ss=Laguna+de+Apoyo&checkin=2026-12-17&checkout=2026-12-18&group_adults=1", "action": "Search Apoyo", "image": "apoyo", "cost": 55 },
    { "id": "passport", "kind": "do", "title": "Passport has 6 months left", "date": "Now", "text": "Six months past the trip, and a couple of blank pages." },
    { "id": "jabs", "kind": "do", "title": "Travel clinic for jabs", "date": "This week", "text": "Three weeks out, so go soon. Usually hep A, typhoid and tetanus. Check fitfortravel first." },
    { "id": "dollars", "kind": "do", "title": "Get US dollars in small notes", "date": "In New York", "text": "$10–12 for the tourist card, plus $100 or so in 1s, 5s and 10s. Clean notes, no tears." },
    { "id": "insurance", "kind": "do", "title": "Travel insurance covers Nicaragua", "date": "Before 13 Dec", "text": "And scooters, if you’re riding one." },
    { "id": "card", "kind": "do", "title": "A card with no foreign fees", "date": "Before 13 Dec", "text": "For BAC and LAFISE ATMs. They give out dollars or córdobas." },
    { "id": "offline", "kind": "do", "title": "Offline maps & Spanish", "date": "Before 13 Dec", "text": "Download Nicaragua in Google Maps and Spanish in Google Translate." },
    { "id": "checkin", "kind": "do", "title": "Check in for AV567", "date": "Sat 12 Dec", "text": "Avianca may ask for extra details for Nicaragua at check-in. Do it online early." },
    { "id": "spray", "kind": "do", "title": "DEET and suncream", "date": "Pack", "text": "Dengue mosquitoes bite in the day. Buy it in New York." }
  ],
  "travel": {
    "lines": [
      { "label": "Places to stay, 5 nights", "amount": 225, "note": "Private rooms in decent guesthouses: about $45 a night in Granada, $40 on Ometepe, $55 at Apoyo. Hostel dorms halve it." },
      { "label": "Food & drink not on a day", "amount": 75, "note": "Breakfasts, water, snacks, the odd extra Toña. About $15 a day." },
      { "label": "Tourist card", "amount": 10, "note": "Paid in cash dollars at Managua immigration." }
    ]
  },
  "practical": [
    { "head": "Entry", "text": "No visa on a British passport. You pay a tourist card on arrival, around $10 in cash dollars, and fill in a customs form on the plane. Passport needs six months left. Have the onward flight (AV397) to show if they ask. Departure tax is normally in the ticket." },
    { "head": "Money", "text": "Córdobas (C$), roughly C$36–37 to the dollar. Dollars work almost everywhere touristy, but change comes back in córdobas. Granada takes cards in most places; Ometepe is mostly cash. Restaurants often add a 10% tip on the bill." },
    { "head": "Jabs & bugs", "text": "Yellow fever isn’t needed coming from New York and San Salvador. The usual ones are hep A, typhoid and tetanus; check fitfortravel and a travel clinic. Dengue’s around, so DEET in the day too." },
    { "head": "Weather", "text": "December is the start of the dry season. Low 30s in the day in Granada, a bit cooler and windier on Ometepe. Shorts, a light rain jacket, something warmer for the volcano at night." },
    { "head": "Keep it low key", "text": "Politics is a touchy subject in Nicaragua. Don’t bring a drone, don’t photograph police or the army, and give any protests a wide berth. Check the FCDO page the week before." }
  ]
};
