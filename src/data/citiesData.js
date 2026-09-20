// Curated landmarks, favorite places, and detailed guides for all 152 cities across India.
import { destinationsData } from './destinationsData.js';

export function toCitySlug(name) {
  if (!name) return '';
  return name.toLowerCase()
    .replace(/\s*\([^)]*\)/g, '')
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Deeply curated flagship landmark data with authentic photography
export const curatedCitiesDatabase = {
  // --- RAJASTHAN ---
  "udaipur": {
    heroImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1600&auto=format&fit=crop",
    tagline: "The City of Lakes, Floating Marble Palaces, and Aravalli Sunsets",
    overview: "Udaipur is Rajasthan's most romantic realm, crowned by shimmering Lake Pichola and the monumental Mewar City Palace. Its marble courtyards, narrow whitewashed alleys, and sunset vantage points offer an aristocratic retreat like nowhere else in the subcontinent.",
    quickFacts: {
      bestSeason: "October to March",
      idealDays: "3 to 4 Days",
      elevation: "598 m (Aravalli Range)",
      vibe: "Regal Heritage & Lakeside Romance"
    },
    favouritePlaces: [
      {
        name: "City Palace & Lake Pichola",
        category: "Royal Heritage",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop",
        highlight: "Granite and marble royal complex built over four centuries by 22 Maharanas",
        description: "Perched over Lake Pichola, the City Palace encompasses intricate mirror-work in the Sheesh Mahal, peacock mosaics in Mor Chowk, and hanging gardens overlooking the floating Jag Mandir island.",
        bestTime: "Morning 9:30 AM or Late Afternoon",
        tip: "Book private early-access tickets to the Crystal Gallery before day crowds arrive."
      },
      {
        name: "Jag Mandir Island Palace",
        category: "Lakeside Wonder",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
        highlight: "17th-century island sanctuary flanked by life-size marble elephants",
        description: "Known as the 'Lake Garden Palace', Jag Mandir served as a royal summer resort and refuge for Prince Khurram (Emperor Shah Jahan), inspiring features of the Taj Mahal.",
        bestTime: "Sunset 5:00 PM for private dinner boats",
        tip: "Arrange an evening vintage solar boat charter from Bansi Ghat directly to the island terrace."
      },
      {
        name: "Saheliyon Ki Bari",
        category: "Royal Botanical Garden",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800&auto=format&fit=crop",
        highlight: "Courtyard of the Maidens featuring rain-fountain pools and lotus beds",
        description: "Built by Maharana Sangram Singh II for royal maidens, this lush oasis uses gravity-fed water acoustics without pumps to create the sensation of gentle monsoon rain.",
        bestTime: "Early Morning 8:00 AM",
        tip: "Walk the central marble pavilion where sculpted stone elephants spout water through bird-shaped fountains."
      },
      {
        name: "Monsoon Palace (Sajjangarh)",
        category: "Mountain Vantage",
        image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800&auto=format&fit=crop",
        highlight: "Panoramic hilltop citadel looking across the entire lake basin",
        description: "Perched high on Bansdara mountain in the Aravalli range, Sajjangarh was designed to track monsoon clouds across the valley and offers Udaipur's most spectacular sunset panorama.",
        bestTime: "Sunset 5:30 PM",
        tip: "Our private chauffeured 4x4 climbs through the Sajjangarh Wildlife Sanctuary to avoid entrance switchback delays."
      }
    ],
    experiences: [
      {
        title: "Private Sunset Shikara Charter on Lake Pichola",
        desc: "Glide past illuminated marble palace facades with a private flutist and champagne setup as temple bells echo across the water."
      },
      {
        title: "Exclusive Vintage Car Museum & Royal Garages Tour",
        desc: "Walkthrough the private garage of the Maharana featuring Rolls-Royces, 1934 Rolls-Royce Phantom II, and Cadillac convertibles."
      },
      {
        title: "Heritage Miniature Painting Masterclass",
        desc: "Private atelier session in the old city with master painters practicing centuries-old Mewar stone-pigment miniature art."
      }
    ],
    curatedStays: [
      { name: "Taj Lake Palace", type: "18th-Century Floating Marble Palace", highlight: "Private butler service and boat-only arrivals" },
      { name: "The Oberoi Udaivilas", type: "Ultra-Luxury Lakeside Resort", highlight: "Semi-private moat pool suites and Mewari domes" },
      { name: "The Leela Palace Udaipur", type: "Contemporary Heritage Palace", highlight: "Artisan spa tents and panoramic rooftop dining" }
    ]
  },

  "jaipur": {
    heroImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1600&auto=format&fit=crop",
    tagline: "The Pink City: Astronomical Marvels, Amber Fort, and Royal Bazaars",
    overview: "Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is India's first planned city, built in accordance with Vedic Vastu Shastra. Its rose-terracotta facades, hilltop bastions, and vibrant gemstone heritage make it a sensory feast.",
    quickFacts: {
      bestSeason: "October to March",
      idealDays: "3 to 4 Days",
      elevation: "431 m",
      vibe: "Imperial Forts & Gemstone Bazaars"
    },
    favouritePlaces: [
      {
        name: "Amber Fort & Palace",
        category: "Hilltop Fortress",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop",
        highlight: "Sheesh Mahal mirror palace and Maota Lake water gardens",
        description: "A monumental blend of Rajput and Mughal architecture, with towering ramparts, ramped gateways, and the world-renowned Hall of Mirrors that illuminates with a single candle.",
        bestTime: "Morning 8:00 AM",
        tip: "Skip elephant rides in favor of a private luxury 4x4 ascent directly into the royal Sun Gate courtyard."
      },
      {
        name: "Hawa Mahal (Palace of Winds)",
        category: "Iconic Architecture",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop",
        highlight: "953 jharokha honeycomb windows for royal purdah observation",
        description: "Built in 1799 from pink and red sandstone, this five-story facade resembles Lord Krishna's crown and features natural air cooling inspired by wind tunnels.",
        bestTime: "Sunrise 6:30 AM when morning light strikes the pink stone",
        tip: "Enjoy private rooftop coffee directly across the street for unobstructed photographs before traffic starts."
      },
      {
        name: "Jantar Mantar & City Palace",
        category: "UNESCO Astronomical Heritage",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
        highlight: "The world's largest stone sundial, measuring time down to two seconds",
        description: "Nineteen colossal architectural astronomical instruments built by Maharaja Jai Singh II alongside the ongoing royal residence of the Jaipur royal family.",
        bestTime: "Noon 11:30 AM to 1:00 PM when the sun is overhead",
        tip: "Book our Royal Grandeur ticket which grants access to the private Chandra Mahal apartments."
      }
    ],
    experiences: [
      {
        title: "Private Blue Pottery & Block Printing Masterclass",
        desc: "Hands-on session with Bagru master craftsmen using natural indigo and turmeric vegetable dyes."
      },
      {
        title: "Sunset Champagne at Nahargarh Fort",
        desc: "Watch the Pink City transition into a sparkling sea of lights from the fortress battlements."
      },
      {
        title: "Curated Gemstone & Jewellery Vault Tour",
        desc: "Private walkthrough with 5th-generation Johari Bazaar jewelers examining raw emeralds and polki diamonds."
      }
    ],
    curatedStays: [
      { name: "Rambagh Palace", type: "Former Royal Residence", highlight: "Peacocks on palace lawns and royal polo heritage" },
      { name: "Samode Haveli", type: "Traditional Heritage Mansion", highlight: "Courtyard dining and hand-painted antique frescoes" }
    ]
  },

  // --- KERALA ---
  "munnar": {
    heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1600&auto=format&fit=crop",
    tagline: "High-Altitude Tea Horizons, Cloud Mist, and Neelakurinji Slopes",
    overview: "Set at the confluence of three mountain streams in the Western Ghats at 5,200 feet, Munnar is south India's premier tea sanctuary. Rolling emerald plantations, British planter bungalows, and the habitat of the rare Nilgiri Tahr create an alpine respite.",
    quickFacts: {
      bestSeason: "September to May",
      idealDays: "3 to 4 Days",
      elevation: "1,600 m",
      vibe: "Emerald Mist & Plantation Heritage"
    },
    favouritePlaces: [
      {
        name: "Eravikulam National Park",
        category: "Wildlife & Alpine Ridge",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop",
        highlight: "Habitat of the endangered Nilgiri Tahr and rolling Shola grasslands",
        description: "Home to Anamudi (South India's highest peak at 8,842 ft). Walking along Rajamalai offers close encounters with wild mountain goats against sea-of-clouds backgrounds.",
        bestTime: "Morning 8:30 AM",
        tip: "Advance safari permits arranged by our concierge bypass regular tourist queues at the lower gate."
      },
      {
        name: "Kolukkumalai Tea Estate",
        category: "World's Highest Tea Plantation",
        image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=800&auto=format&fit=crop",
        highlight: "Organic orthodox tea plucked at 7,900 feet above sea level",
        description: "Reachable only by a rugged 4x4 mountain track, Kolukkumalai still uses original 1930s wooden tea rollers. The sunrise above the clouds here is legendary.",
        bestTime: "Sunrise 5:00 AM Jeep Safari",
        tip: "Dress in warm layers; morning temperatures can dip below 8°C on the ridgeline."
      },
      {
        name: "Mattupetty Dam & Kundala Lake",
        category: "Mountain Waters",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop",
        highlight: "Serene storage reservoir framed by eucalyptus forests and wild elephants",
        description: "Quiet mountain lakes where wild elephant herds frequently come down to drink at dusk, perfect for private speed-boating or leisurely Kashmiri-style pedal boating.",
        bestTime: "Afternoon 3:00 PM",
        tip: "Combine with a visit to the Swiss-Indo Cattle project farm nestled nearby."
      }
    ],
    experiences: [
      {
        title: "Private Tea Sommelier Tasting & Leaf Plucking",
        desc: "Walk with a senior tea planter through private estate slopes, learn the two-leaves-and-a-bud technique, and taste silver tips and white teas."
      },
      {
        title: "Private Cardamom & Spice Trail Walk",
        desc: "Guided rainforest trek with an Ayurvedic botanist discovering wild cinnamon, nutmeg, black pepper vines, and vanilla pods."
      }
    ],
    curatedStays: [
      { name: "Windermere Estate", type: "Colonial Coffee & Tea Plantation", highlight: "Cedarwood chalets and valley mist viewpoints" },
      { name: "Spice Tree Munnar", type: "Boutique Mountain Sanctuary", highlight: "Private solar heated plunge pool villas" }
    ]
  },

  "alleppey": {
    heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1600&auto=format&fit=crop",
    tagline: "Venice of the East: Palm Canals, Kettuvallams, and Paddy Shores",
    overview: "Alleppey (Alappuzha) is the spiritual heart of the Kerala backwaters. A labyrinthine water network of brackish lagoons, silent canal villages, and coconut groves where daily life happens on wooden boats.",
    quickFacts: {
      bestSeason: "October to April",
      idealDays: "2 to 3 Days",
      elevation: "Sea Level",
      vibe: "Slow Living, Houseboats & Backwaters"
    },
    favouritePlaces: [
      {
        name: "Vembanad Lake Backwater Canals",
        category: "Waterways Sanctuary",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop",
        highlight: "India's longest lake flanked by Chinese fishing nets and coir villages",
        description: "The crown jewel of Kerala's waterways. Gliding along the lake reveals village fishermen casting casting nets from dugouts and kingfishers diving into tranquil reeds.",
        bestTime: "Sunset or Early Morning 6:00 AM",
        tip: "Opt for our silent solar-powered kettuvallams that cruise without diesel odor or noise."
      },
      {
        name: "Kuttanad Below Sea-Level Paddy Fields",
        category: "Agricultural Heritage",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop",
        highlight: "One of the few places in the world where farming is done 4 to 10 feet below sea level",
        description: "Known as the 'Rice Bowl of Kerala', Kuttanad's lush dikes and waterways are protected by ancient bio-bunds and water locks.",
        bestTime: "Morning 8:00 AM by traditional canoe",
        tip: "A narrow country canoe tour gets deep into canals where large houseboats cannot navigate."
      },
      {
        name: "Marari Beach",
        category: "Secluded Coastal Sanctuary",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop",
        highlight: "Pristine fishing hamlet sands with swaying coconut groves",
        description: "Located 15 km north of Alleppey, Marari is a quiet alternative to busy beach hubs, famous for clean waves, sea-turtle nesting sites, and thatched eco-resorts.",
        bestTime: "Evening 4:30 PM",
        tip: "Enjoy fresh Malabar catch grilled with red chili paste at a private beachfront cabana."
      }
    ],
    experiences: [
      {
        title: "Overnight Solar Houseboat Cruise with Private Chef",
        desc: "Gourmet Karimeen Pollichathu (pearl spot fish wrapped in banana leaf) prepared live on board as you anchor in peaceful backwaters."
      },
      {
        title: "Kayaking Through Secret Village Canals",
        desc: "Morning paddle through low arched bridges, coir spinning yards, and duck farms with an experienced river guide."
      }
    ],
    curatedStays: [
      { name: "Bespoke Private Solar Houseboat", type: "Air-Conditioned Kettuvallam", highlight: "Private upper sun deck and dedicated crew" },
      { name: "Marari Beach Resort", type: "Luxury CGH Earth Eco-Sanctuary", highlight: "Traditional fisherman style cottages and butterfly gardens" }
    ]
  },

  // --- TAMIL NADU ---
  "coimbatore": {
    heroImage: "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?q=80&w=1600&auto=format&fit=crop",
    tagline: "The Manchester of South India & Gateway to the Nilgiri Biosphere",
    overview: "Nestled on the banks of the Noyyal River surrounded by the Western Ghats, Coimbatore combines ancient Kongu Nadu heritage, sweet Siruvani water, textile mastery, and serene foothills spirituality.",
    quickFacts: {
      bestSeason: "October to March",
      idealDays: "2 to 3 Days",
      elevation: "411 m",
      vibe: "Foothill Sanctuaries, Spices & Textiles"
    },
    favouritePlaces: [
      {
        name: "Marudhamalai Murugan Temple",
        category: "Ancient Hilltop Shrine",
        image: "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?q=80&w=800&auto=format&fit=crop",
        highlight: "1200-year-old sanctuary perched amidst medicinal Western Ghats herbal forests",
        description: "Dedicated to Lord Murugan, this temple is famous for natural spring water, medicinal plant breezes, and serene stone steps overlooking Coimbatore city.",
        bestTime: "Early Morning 6:30 AM",
        tip: "Visit during the morning abhishekam to hear sacred Vedic chants echoing across the granite hall."
      },
      {
        name: "Adiyogi Shiva & Velliangiri Foothills",
        category: "Monumental Sculpture & Meditation",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop",
        highlight: "Guinness World Record 112-foot bust of Adiyogi Shiva",
        description: "Set against the dramatic backdrop of the sacred Velliangiri hills, featuring the Dhyanalinga silent meditation sanctuary and the evening Divya Anchana light projection.",
        bestTime: "Evening 5:30 PM for the 3D projection show",
        tip: "Ensure modest attire (covering shoulders and knees) for entry into the consecrated spaces."
      },
      {
        name: "Siruvani Waterfalls & Dam",
        category: "Natural Wonder",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
        highlight: "World-renowned mineral sweet water flowing through dense virgin forests",
        description: "Renowned as having the second sweetest natural drinking water in the world, Siruvani cascades down rocky gorges surrounded by elephant corridors.",
        bestTime: "Morning 10:00 AM (entry permits required)",
        tip: "We arrange advance forest department clearances and private naturalist escort."
      },
      {
        name: "Gedee Car Museum & Heritage Textiles",
        category: "Industrial & Royal Craft",
        image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop",
        highlight: "Impeccably restored vintage automobiles and Coimbatore silk saree weaving",
        description: "A tribute to G.D. Naidu's engineering genius showcasing rare European and American microcars, paired with private visits to master Kanchipuram and Kovai silk looms.",
        bestTime: "Afternoon 2:30 PM",
        tip: "Purchase pure zari handloom silk sarees directly from verified master weaver societies."
      }
    ],
    experiences: [
      {
        title: "Kongu Nadu Royal Culinary Trail",
        desc: "Authentic degustation featuring tender coconut payasam, pallipalayam chicken, and unpolished millet specialties cooked with cold-pressed sesame oil."
      },
      {
        title: "Nilgiri Foothills Private Chauffeur Route",
        desc: "Scenic hairpin ascent connecting Coimbatore to Coonoor and Ooty through misty eucalyptus and tea groves."
      }
    ],
    curatedStays: [
      { name: "The Residency Towers Coimbatore", type: "Luxury City Haven", highlight: "Fine dining and signature Ayurvedic wellness spa" },
      { name: "Dhaatu Organic Farm Retreat", type: "Foothill Plantation Estate", highlight: "Farm-to-table cuisine and views of the Velliangiri peaks" }
    ]
  },

  // --- JAMMU & KASHMIR ---
  "srinagar": {
    heroImage: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1600&auto=format&fit=crop",
    tagline: "The Paradise on Earth: Dal Lake, Mughal Terraces, and Saffron Mist",
    overview: "Immortalized by Emperor Jahangir, Srinagar is Kashmir's jewel. Floating lotus gardens, hand-carved cedarwood houseboats, and Mughal tiered water gardens make it a poetic sanctuary framed by snow-dusted Zabarwan peaks.",
    quickFacts: {
      bestSeason: "April to October (Spring/Summer) or Dec-Feb (Snow)",
      idealDays: "3 to 4 Days",
      elevation: "1,585 m",
      vibe: "Dal Lake Reflections & Saffron Romance"
    },
    favouritePlaces: [
      {
        name: "Dal Lake & Nigeen Lake",
        category: "Living Waterway",
        image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=800&auto=format&fit=crop",
        highlight: "Floating flower and vegetable markets and cedarwood houseboats",
        description: "Srinagar's living lifeline. A wooden Shikara ride takes you past floating villages, kingfishers, and floating markets that have traded by water for hundreds of years.",
        bestTime: "Sunrise 5:30 AM for the floating vegetable market",
        tip: "Choose Nigeen Lake for private stays; it is quieter and cleaner than crowded Dal Lake ghats."
      },
      {
        name: "Mughal Terraced Gardens (Shalimar & Nishat)",
        category: "Mughal Architecture",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop",
        highlight: "12-tiered terraces with water cascades and giant 400-year-old chinar trees",
        description: "Built in 1619 by Emperor Jahangir for Empress Nur Jahan, Shalimar Bagh ('Abode of Love') features fountains fed by mountain streams overlooking Dal Lake.",
        bestTime: "Autumn (October-November) when chinars turn fiery crimson",
        tip: "Walk the third terrace (Diwan-i-Khas) where royal banquets were held beneath lanterns."
      },
      {
        name: "Shankaracharya Hill Temple",
        category: "Sacred Panorama",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
        highlight: "Ancient stone Shiva temple dating back to 200 BC overlooking all Srinagar",
        description: "Perched 1,000 feet above the valley floor on Gopadri Hill, visited by Adi Shankara in the 8th century, offering panoramic views of Dal Lake and snow mountains.",
        bestTime: "Morning 7:30 AM",
        tip: "No cameras or mobile phones are permitted past the CRPF checkpoint on the staircase."
      }
    ],
    experiences: [
      {
        title: "Dawn Shikara Ride to the Floating Vegetable Market",
        desc: "Glide through morning mist as local growers barter produce from wooden canoes amidst lotus pads."
      },
      {
        title: "Authentic Kashmiri Wazwan Feast",
        desc: "Multi-course royal feast featuring Rogan Josh, Gushtaba, Rista, and saffron kehwa tea served on copper trami platters."
      }
    ],
    curatedStays: [
      { name: "The Lalit Grand Palace Srinagar", type: "Former Maharaja's Palace", highlight: "Centuries-old chinar lawns overlooking Dal Lake" },
      { name: "Sukoon Houseboat", type: "Luxury Eco-Houseboat on Nigeen Lake", highlight: "Rooftop deck stargazing and personalized butler service" }
    ]
  },

  // --- LADAKH ---
  "leh": {
    heroImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
    tagline: "The High-Altitude Kingdom: Moonscapes, Stupas, and Tibetan Chants",
    overview: "Perched at 11,500 feet in the rain-shadow of the Greater Himalayas, Leh is the spiritual and cultural heart of Ladakh. Ancient mud-brick palaces, cliff-hanging gompas, and desert valleys under cobalt blue skies create an otherworldly landscape.",
    quickFacts: {
      bestSeason: "May to October",
      idealDays: "4 to 6 Days (including acclimatization)",
      elevation: "3,524 m (11,562 ft)",
      vibe: "High Altitude Desert & Buddhist Monasteries"
    },
    favouritePlaces: [
      {
        name: "Leh Palace & Tsemo Fort",
        category: "Tibetan Medieval Fort",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
        highlight: "9-story mud-stone royal fortress modeled on Lhasa's Potala Palace",
        description: "Built in the 17th century by King Sengge Namgyal. Its wooden balconies look out over the mud-brick old town and the snow-crested Stok Kangri range.",
        bestTime: "Sunset 5:00 PM",
        tip: "Climb up to Namgyal Tsemo monastery above the palace for prayer flags against deep blue skies."
      },
      {
        name: "Thiksey Monastery",
        category: "Monastic Citadel",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
        highlight: "12-story white and red Gompa home to a 49-foot Maitreya Buddha statue",
        description: "Resembling the Potala Palace of Tibet, Thiksey is one of Ladakh's most magnificent Gelug-sect monasteries. Morning puja with monks chanting and blowing conch shells is deeply moving.",
        bestTime: "Dawn 6:00 AM for the morning prayer assembly",
        tip: "Sit quietly at the back of the prayer hall during the butter-lamp and horn-blowing ceremony."
      },
      {
        name: "Shanti Stupa",
        category: "Peace Monument",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop",
        highlight: "White-domed stupa on Changspa hilltop inaugurated by the 14th Dalai Lama",
        description: "Features golden Buddha relics and colorful bas-relief murals depicting Buddha's life, with an uninterrupted 360-degree view of the Indus valley.",
        bestTime: "Sunset 6:00 PM when lights illuminate the white dome",
        tip: "Take our private chauffeur vehicle directly to the top parking lot instead of climbing the 500 steps."
      }
    ],
    experiences: [
      {
        title: "Private Morning Monastery Puja with Senior Lama",
        desc: "Witness traditional Tibetan morning prayers with resonant brass dungchen horns and butter tea."
      },
      {
        title: "Stargazing Astronomy Session at High Altitude",
        desc: "Unpolluted high-desert skies offer crystal-clear views of the Milky Way core and distant nebulae."
      }
    ],
    curatedStays: [
      { name: "The Grand Dragon Ladakh", type: "Eco-Luxury Hotel", highlight: "Solar heated rooms with Stok Kangri mountain views" },
      { name: "Chamba Camp Thiksey", type: "Luxury Glamping Retreat", highlight: "Customized canvas pavilions and private butler service" }
    ]
  },

  // --- UTTAR PRADESH ---
  "varanasi": {
    heroImage: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1600&auto=format&fit=crop",
    tagline: "The World's Oldest Living City: Sacred Ghats, Ganga Aarti, and Vedic Chants",
    overview: "Mark Twain wrote that Varanasi is 'older than history, older than tradition, older even than legend, and looks twice as old as all of them put together.' The sacred river ghats and labyrinthine alleys offer an unmatched spiritual immersion.",
    quickFacts: {
      bestSeason: "October to March",
      idealDays: "2 to 3 Days",
      elevation: "81 m",
      vibe: "Ancient Spirituality & Sacred Waters"
    },
    favouritePlaces: [
      {
        name: "Dashashwamedh Ghat & Evening Ganga Aarti",
        category: "Sacred Ceremony",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop",
        highlight: "Grand synchronized fire ritual performed by young priests with brass lamps",
        description: "Varanasi's main riverfront ghat where thousands gather every evening. Bells, conch shells, incense smoke, and swirling multi-tiered lamps create a hypnotic spectacle.",
        bestTime: "Evening 6:00 PM",
        tip: "We reserve private wooden boat mooring directly in front of the priests for clear views without crowd push."
      },
      {
        name: "Subah-e-Banaras at Assi Ghat",
        category: "Dawn Rituals & Yoga",
        image: "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?q=80&w=800&auto=format&fit=crop",
        highlight: "Dawn prayers, classical Indian music recitals, and morning sun worship",
        description: "Assi Ghat comes alive before sunrise with Vedic chants, classical sitar recitals, and gentle sun salutations overlooking the silver Ganga.",
        bestTime: "Sunrise 5:15 AM",
        tip: "Follow with a quiet wooden rowing boat upstream past Manikarnika Ghat to see ancient riverbank palaces."
      },
      {
        name: "Sarnath Deer Park & Dhamek Stupa",
        category: "Buddhist Sacred Site",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop",
        highlight: "The exact spot where Gautama Buddha preached his first sermon after enlightenment",
        description: "Located 10 km from Varanasi, Sarnath is where the Wheel of Law (Dharmachakra) was set in motion. Features the 43-meter cylindrical Dhamek Stupa and the Ashoka Lion Capital.",
        bestTime: "Morning 9:00 AM",
        tip: "Visit the Sarnath Archaeological Museum to view the original 3rd-century BC Lion Capital of Ashoka."
      }
    ],
    experiences: [
      {
        title: "Dawn Private Wooden Boat Journey Along the Ghats",
        desc: "Watch pilgrims bathe and greet the rising sun while floating past 84 stone ghats and 18th-century Maratha palaces."
      },
      {
        title: "Banarasi Silk Weaving Atelier Walk",
        desc: "Meet master Muslim weavers in the historic Madanpura quarter creating gold-thread brocade sarees on wooden jacquard pit looms."
      }
    ],
    curatedStays: [
      { name: "BrijRama Palace", type: "18th-Century Heritage Palace on the Ghats", highlight: "Direct boat access and Darbhanga ghat location" },
      { name: "Taj Ganges Varanasi", type: "Luxury Garden Haven", highlight: "12 acres of tranquil greenery away from city bustle" }
    ]
  },

  "agra": {
    heroImage: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1600&auto=format&fit=crop",
    tagline: "The Imperial Capital of the Mughals & Home of the Taj Mahal",
    overview: "Agra was the glorious seat of the Mughal Empire under Akbar, Jahangir, and Shah Jahan. Its architectural masterpieces on the banks of the Yamuna represent the absolute peak of Indo-Islamic marble and sandstone artistry.",
    quickFacts: {
      bestSeason: "October to March",
      idealDays: "2 Days",
      elevation: "169 m",
      vibe: "Mughal Grandeur & UNESCO Wonders"
    },
    favouritePlaces: [
      {
        name: "The Taj Mahal",
        category: "World Wonder",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop",
        highlight: "Ivory-white marble mausoleum with pietra dura semi-precious stone inlay",
        description: "Commissioned in 1632 by Shah Jahan in memory of his favorite wife Mumtaz Mahal. A perfect symmetry of Persian architecture, four minarets, and reflective watercourses.",
        bestTime: "Sunrise 6:00 AM (East Gate VIP entry)",
        tip: "Our senior royal historian guides guide you to unique photographic angles that avoid tourist crowds."
      },
      {
        name: "Agra Fort",
        category: "Imperial Red Sandstone Fortress",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop",
        highlight: "Massive walled citadel where Emperor Shah Jahan was imprisoned with Taj views",
        description: "Enclosing 94 acres, featuring the Jahangiri Mahal, the Diwan-i-Khas, and the octagonal Musamman Burj tower where Shah Jahan gazed upon the Taj Mahal in his final years.",
        bestTime: "Afternoon 3:30 PM",
        tip: "Look out through the marble balcony of Musamman Burj for a direct telephoto framing of the Taj Mahal across the river."
      },
      {
        name: "Mehtab Bagh (Moonlight Garden)",
        category: "Riverside Garden",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop",
        highlight: "Charbagh garden complex on the opposite Yamuna bank aligned with the Taj",
        description: "Designed as the ultimate sunset viewing platform, Mehtab Bagh reflects the rear marble facade of the Taj Mahal in its calm water channels without crowds.",
        bestTime: "Sunset 5:30 PM",
        tip: "Visit just before sunset as the white marble changes color from golden amber to soft violet."
      }
    ],
    experiences: [
      {
        title: "Pietra Dura Inlay Art Workshop with Master Craftsmen",
        desc: "Witness descendants of original Taj Mahal artisans cutting lapis lazuli, malachite, and mother-of-pearl into marble."
      },
      {
        title: "Mughal Culinary Experience",
        desc: "Private royal Mughlai dinner with dum pukht biryanis, galouti kebabs, and silver-leaf shahi tukda."
      }
    ],
    curatedStays: [
      { name: "The Oberoi Amarvilas", type: "Ultra-Luxury Palace", highlight: "Every room and suite has unobstructed Taj Mahal views" },
      { name: "ITC Mughal", type: "Sprawling Luxury Resort", highlight: "Mughal landscaped gardens and award-winning Kaya Kalp Spa" }
    ]
  }
};

// Complete generic fallback generator covering ALL 152 cities
export function getCityData(stateId, citySlug) {
  const state = destinationsData.find(s => s.id === stateId) || destinationsData[0];
  const targetSlug = citySlug || toCitySlug(state.cities[0].name);

  // Match city in state
  const cityInfo = state.cities.find(c => toCitySlug(c.name) === targetSlug) || state.cities[0];
  const matchedSlug = toCitySlug(cityInfo.name);

  // Check if hand-crafted data exists
  if (curatedCitiesDatabase[matchedSlug]) {
    const curated = curatedCitiesDatabase[matchedSlug];
    return {
      name: cityInfo.name,
      slug: matchedSlug,
      stateId: state.id,
      stateName: state.name,
      region: state.region,
      theme: state.theme,
      heroImage: curated.heroImage || state.bannerImage,
      tagline: curated.tagline || `${cityInfo.name}: ${cityInfo.highlight}`,
      overview: curated.overview || cityInfo.description,
      quickFacts: curated.quickFacts || {
        bestSeason: state.bestSeason,
        idealDays: "2 to 3 Days",
        elevation: "Curated Haven",
        vibe: cityInfo.bestFor
      },
      favouritePlaces: curated.favouritePlaces,
      experiences: curated.experiences,
      curatedStays: curated.curatedStays,
      sisterCities: state.cities.filter(c => toCitySlug(c.name) !== matchedSlug).map(c => ({
        name: c.name,
        slug: toCitySlug(c.name),
        bestFor: c.bestFor
      }))
    };
  }

  // Deterministically generate rich, beautiful city data for the remaining cities
  // High quality verified Indian photography pool by geography
  const photoPools = {
    "North India": [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop"
    ],
    "South India": [
      "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop"
    ],
    "West India": [
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop"
    ],
    "East India": [
      "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop"
    ],
    "North East": [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=1200&auto=format&fit=crop"
    ],
    "Islands": [
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
    ]
  };

  const pool = photoPools[state.region] || photoPools["North India"];
  const heroImg = state.bannerImage;

  // Split highlight phrases to create favorite places
  const highlightParts = cityInfo.highlight.split(/ and |, /);
  const bestForParts = cityInfo.bestFor.split(/, /);

  const places = [
    {
      name: highlightParts[0] || `${cityInfo.name} Historic Sanctuary`,
      category: bestForParts[0] || "Signature Landmark",
      image: pool[0],
      highlight: `The crown jewel of ${cityInfo.name}, known for ${cityInfo.highlight.toLowerCase()}`,
      description: `${cityInfo.name} offers discerning travelers an authentic encounter with ${cityInfo.description.toLowerCase()}`,
      bestTime: "Early Morning or Sunset",
      tip: "Our private chauffeur will arrange VIP parking and timed entry to avoid waiting."
    },
    {
      name: highlightParts[1] ? highlightParts[1] : `${cityInfo.name} Old Town & Heritage Promenade`,
      category: bestForParts[1] || "Cultural Exploration",
      image: pool[1] || pool[0],
      highlight: `Historic architectural corridors and regional artisan ateliers`,
      description: `Wander through historic quarters and discover local life, traditional handicrafts, and indigenous regional culinary flavors.`,
      bestTime: "Late Afternoon 3:30 PM",
      tip: "Accompanied by a vetted local cultural docent fluent in English and native lore."
    },
    {
      name: `${cityInfo.name} Scenic Overlook & Nature Trail`,
      category: bestForParts[2] || "Scenic Vista",
      image: pool[2] || pool[0],
      highlight: `Panoramic viewpoints capturing the natural topography of ${state.name}`,
      description: `Quiet sunrise or twilight vantage point offering uninterrupted views across the surrounding mountain ridges, riverbanks, or emerald valleys.`,
      bestTime: "Golden Hour 5:15 PM",
      tip: "Pack light jackets as evening breezes pick up along the ridge."
    }
  ];

  return {
    name: cityInfo.name,
    slug: matchedSlug,
    stateId: state.id,
    stateName: state.name,
    region: state.region,
    theme: state.theme,
    heroImage: heroImg,
    tagline: `${cityInfo.name}: ${cityInfo.highlight}`,
    overview: `${cityInfo.description} Curated as an essential destination within our official luxury domestic itinerary network in ${state.name}.`,
    quickFacts: {
      bestSeason: state.bestSeason,
      idealDays: "2 to 3 Days",
      elevation: `${state.name} (${state.region})`,
      vibe: cityInfo.bestFor
    },
    favouritePlaces: places,
    experiences: [
      {
        title: `Private Chauffeur & Heritage Walk in ${cityInfo.name}`,
        desc: `Dedicated luxury vehicle and English-speaking chauffeur for unhurried exploration of all key architectural and scenic sites.`
      },
      {
        title: `Authentic ${state.name} Gastronomy Tasting`,
        desc: `Curated private dining session celebrating authentic seasonal recipes, slow-cooked gravies, and farm-fresh ingredients.`
      },
      {
        title: `Curated Artisan Atelier & Handloom Visit`,
        desc: `Behind-the-scenes access to local master artisans continuing century-old craft lineages unique to this district.`
      }
    ],
    curatedStays: [
      { name: `Bespoke Heritage Estate in ${cityInfo.name}`, type: "Curated Boutique Retreat", highlight: "VIP amenities, private dining, and preferential room allocation" },
      { name: `Luxury Nature & Panorama Resort`, type: "Exclusive Valley Stay", highlight: "Secluded suites, infinity pool, and personalized concierge care" }
    ],
    sisterCities: state.cities.filter(c => toCitySlug(c.name) !== matchedSlug).map(c => ({
      name: c.name,
      slug: toCitySlug(c.name),
      bestFor: c.bestFor
    }))
  };
}
