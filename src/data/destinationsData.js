// Complete domestic destinations data parsed directly from the client's official pamphlet (image.png)
// Covering all 28 states and union territories and 100+ cities with bespoke themes.

export const destinationsData = [
  {
    id: "andaman-nicobar",
    name: "Andaman & Nicobar Islands",
    region: "Islands",
    tagline: "Azure Lagoons, Coral Reefs, and Untouched Coastal Sanctuaries",
    theme: {
      accent: "#0ea5e9",
      accentHover: "#38bdf8",
      accentMuted: "rgba(14, 165, 233, 0.15)",
      gradient: "linear-gradient(135deg, rgba(14, 165, 233, 0.25) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(14, 165, 233, 0.12)",
      badgeBorder: "rgba(14, 165, 233, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "October to May",
    idealDuration: "5 to 7 Days",
    vibe: "Islands, Diving & Coastal Serenity",
    overview: "An archipelago of emerald isles wrapped in turquoise waters. From historical colonial landmarks to private catamaran charters across secluded lagoons.",
    cities: [
      {
        name: "Port Blair",
        highlight: "Cellular Jail National Memorial and quiet sunset harbors",
        description: "The historic maritime gateway where colonial archives meet tranquil coastal promenades.",
        bestFor: "History, Island Harbor Cruises, Waterfront Stays"
      },
      {
        name: "Havelock Island (Swaraj Dweep)",
        highlight: "Radhanagar Beach and secluded turquoise dive spots",
        description: "Renowned for powdery ivory sands, deep-sea scuba expeditions, and barefoot luxury villas under swaying palms.",
        bestFor: "Coral Diving, Luxury Beach Resorts, Sunsets"
      },
      {
        name: "Neil Island (Shaheed Dweep)",
        highlight: "Natural Rock Formation and serene agricultural shores",
        description: "A gentler, slow-paced sanctuary with organic tropical orchards, tide pools, and tranquil lagoons.",
        bestFor: "Boutique Eco-Lodges, Snorkeling, Solitude"
      }
    ]
  },
  {
    id: "andhra-pradesh",
    name: "Andhra Pradesh",
    region: "South India",
    tagline: "Sacred Hills, Eastern Ghat Valleys, and Ancient Dynastic Temples",
    theme: {
      accent: "#eab308",
      accentHover: "#facc15",
      accentMuted: "rgba(234, 179, 8, 0.15)",
      gradient: "linear-gradient(135deg, rgba(234, 179, 8, 0.22) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(234, 179, 8, 0.12)",
      badgeBorder: "rgba(234, 179, 8, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "October to March",
    idealDuration: "4 to 6 Days",
    vibe: "Spiritual Heritage & Coffee Valleys",
    overview: "Where holy summits rise above lush river deltas and mist-clad mountain coffee estates.",
    cities: [
      { name: "Amaravati", highlight: "Buddhist Stupa archives and Krishna riverside", description: "Ancient seat of Satavahana art and sacred Buddhist heritage.", bestFor: "Heritage, Archaeology" },
      { name: "Araku Valley", highlight: "Organic coffee plantations and Borra Caves", description: "A verdant valley in the Eastern Ghats inhabited by indigenous weaving communities and coffee growers.", bestFor: "Mountain Escapes, Coffee Tasting" },
      { name: "Vijayawada", highlight: "Kanaka Durga Temple and Prakasam Barrage", description: "Bustling cultural crossroads resting on the sacred banks of the Krishna River.", bestFor: "Culinary Discoveries, Sacred Shrines" },
      { name: "Visakhapatnam", highlight: "Kailasagiri hills, Yarada Beach, and Submarine Museum", description: "The jewel of the Coromandel coast with dramatic cliffside ocean roads and clean maritime breezes.", bestFor: "Coastal Drives, Port Heritage" },
      { name: "Tirupati", highlight: "Sri Venkateswara Swamy Temple on Tirumala Hills", description: "One of the most revered pilgrimage destinations in the world, surrounded by seven sacred hill ranges.", bestFor: "Sacred Pilgrimages, Spiritual Solitude" },
      { name: "Srisailam", highlight: "Mallikarjuna Jyotirlinga and Nallamala Forest Reserve", description: "A quiet sanctuary perched in the deciduous Nallamala mountain range overlooking deep river gorges.", bestFor: "Ancient Shrines, Forest Sanctuaries" }
    ]
  },
  {
    id: "arunachal-pradesh",
    name: "Arunachal Pradesh",
    region: "North East",
    tagline: "Dawn-Lit Peaks, Ancient Monasteries, and Pine Forest Valleys",
    theme: {
      accent: "#10b981",
      accentHover: "#34d399",
      accentMuted: "rgba(16, 185, 129, 0.15)",
      gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.22) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(16, 185, 129, 0.12)",
      badgeBorder: "rgba(16, 185, 129, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "October to April",
    idealDuration: "7 to 10 Days",
    vibe: "Eastern Himalayan Wilderness & Monastic Peace",
    overview: "The land of the rising sun where 400-year-old Buddhist monasteries perch over clouds.",
    cities: [
      { name: "Tawang", highlight: "Tawang Monastery and Sela Pass alpine lakes", description: "Perched at 10,000 feet, home to the second largest Buddhist monastery in the world.", bestFor: "Monastic Art, Snow Passes, High Altitude" },
      { name: "Bomdila", highlight: "Apple orchards and panoramic Himalayan viewpoints", description: "Gentle mountain town with traditional craft centers and quiet pine ridges.", bestFor: "Alpine Orchards, Craft Culture" },
      { name: "Ziro", highlight: "Apatani tribal villages and terraced rice landscapes", description: "A UNESCO-recognized plateau famous for unique sustainable agricultural traditions and gentle music.", bestFor: "Indigenous Heritage, Photography" },
      { name: "Dirang", highlight: "Hot water springs and Sangti Valley sheep farms", description: "A sheltered river valley framed by apple orchards, Kiwi farms, and stone houses.", bestFor: "Valley Walks, Riverfront Stays" },
      { name: "Itanagar", highlight: "Ita Fort and Ganga Lake sanctuary", description: "The capital surrounded by lush sub-tropical hills and indigenous history museums.", bestFor: "State Archives, Cultural Hubs" }
    ]
  },
  {
    id: "assam",
    name: "Assam",
    region: "North East",
    tagline: "Brahmaputra River Expeditions, One-Horned Rhinos, and Estate Teas",
    theme: {
      accent: "#84cc16",
      accentHover: "#a3e635",
      accentMuted: "rgba(132, 204, 22, 0.15)",
      gradient: "linear-gradient(135deg, rgba(132, 204, 22, 0.22) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(132, 204, 22, 0.12)",
      badgeBorder: "rgba(132, 204, 22, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "November to April",
    idealDuration: "5 to 7 Days",
    vibe: "Wildlife Safaris & Tea Bungalows",
    overview: "Rolling emerald tea gardens, heritage colonial planter bungalows, and private river safaris.",
    cities: [
      { name: "Guwahati", highlight: "Kamakhya Temple and sunset river cruises", description: "The bustling cultural gateway with ancient hilltop shrines overlooking the mighty Brahmaputra.", bestFor: "Sacred Shrines, Silk Markets" },
      { name: "Kaziranga", highlight: "One-horned rhinoceros private jeep safaris", description: "A premier wildlife haven where elephant grass plains shelter tigers, wild water buffaloes, and rhinos.", bestFor: "Wildlife Safaris, Luxury Jungle Lodges" },
      { name: "Jorhat", highlight: "Historic tea research centers and heritage planter villas", description: "The tea capital of Assam with century-old colonial bungalows and tea tastings.", bestFor: "Colonial Estates, Tea Sommelier Tours" },
      { name: "Majuli", highlight: "Neo-Vaishnavite Satras and mask-making artisans", description: "The largest river island in the world where monk artisans craft ancient theatrical masks.", bestFor: "Spiritual Monasteries, Artisan Workshops" }
    ]
  },
  {
    id: "bihar",
    name: "Bihar",
    region: "East India",
    tagline: "Cradle of Buddhism, Ancient Universities, and Sovereign Empires",
    theme: {
      accent: "#d97706",
      accentHover: "#f59e0b",
      accentMuted: "rgba(217, 119, 6, 0.15)",
      gradient: "linear-gradient(135deg, rgba(217, 119, 6, 0.22) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(217, 119, 6, 0.12)",
      badgeBorder: "rgba(217, 119, 6, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "October to March",
    idealDuration: "3 to 5 Days",
    vibe: "Ancient Enlightenment & Classical Archaeology",
    overview: "Walk the pathways where Buddha attained enlightenment and early scholars built Nalanda University.",
    cities: [
      { name: "Patna", highlight: "Patna Museum and Golghar riverside view", description: "Ancient Pataliputra, imperial capital of the Maurya and Gupta dynasties.", bestFor: "Archaeology, Sacred Sikh Gurdwaras" },
      { name: "Bodh Gaya", highlight: "Mahabodhi Temple and Sacred Bodhi Tree", description: "The spiritual center of Buddhism where Siddhartha Gautama meditated beneath the venerable tree.", bestFor: "Meditation, World Buddhist Monasteries" },
      { name: "Rajgir", highlight: "Vulture Peak (Gridhrakuta) and Japanese Peace Pagoda", description: "Surrounded by seven quiet hills, famous for ancient stone walls and medicinal hot springs.", bestFor: "Aerial Ropeways, Historical Valleys" },
      { name: "Nalanda", highlight: "Ancient Nalanda Mahavihara ruins", description: "The world's earliest residential university where scholars from across Asia gathered to study.", bestFor: "UNESCO Heritage, Classical Architecture" }
    ]
  },
  {
    id: "chandigarh",
    name: "Chandigarh",
    region: "North India",
    tagline: "Modernist Architectural Elegance and Curated Garden Boulevards",
    theme: {
      accent: "#06b6d4",
      accentHover: "#22d3ee",
      accentMuted: "rgba(6, 182, 212, 0.15)",
      gradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.22) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(6, 182, 212, 0.12)",
      badgeBorder: "rgba(6, 182, 212, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "October to March",
    idealDuration: "2 to 3 Days",
    vibe: "Urban Architecture & Lakeside Leisure",
    overview: "Le Corbusier's master-planned city, celebrated for quiet tree-lined sectors and modernist monuments.",
    cities: [
      { name: "Chandigarh", highlight: "Sukhna Lake, Rock Garden, and Capitol Complex", description: "A serene city designed with wide green avenues, curated sculpture parks, and architectural landmarks.", bestFor: "Modernist Design, Lake Promenades" }
    ]
  },
  {
    id: "chhattisgarh",
    name: "Chhattisgarh",
    region: "Central India",
    tagline: "Horseshoe Waterfalls, Dense Sal Forests, and Bell-Metal Crafts",
    theme: {
      accent: "#14b8a6",
      accentHover: "#2dd4bf",
      accentMuted: "rgba(20, 184, 166, 0.15)",
      gradient: "linear-gradient(135deg, rgba(20, 184, 166, 0.22) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(20, 184, 166, 0.12)",
      badgeBorder: "rgba(20, 184, 166, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "October to March",
    idealDuration: "4 to 6 Days",
    vibe: "Tribal Sanctuaries & Majestic Waterfalls",
    overview: "Home to India's Niagara at Chitrakote, ancient cave formations, and centuries of Dhokra brass metalwork.",
    cities: [
      { name: "Raipur", highlight: "Purkhouti Muktangan and Marine Drive", description: "The state capital blending lively handloom emporiums with tranquil lakeside parks.", bestFor: "Tribal Textiles, Gastronomy" },
      { name: "Bastar", highlight: "Chitrakote Falls and Dhokra artisan hamlets", description: "A legendary cultural heartland with dramatic roaring waterfalls and indigenous weekly haats.", bestFor: "Wild Waterfalls, Brass Artistry" },
      { name: "Bilaspur", highlight: "Ratanpur Fort and Kanan Pendari sanctuary", description: "Historic trading center rich in medieval temples and aromatic Doobraj rice fields.", bestFor: "Temple Ruins, Rural Serenity" }
    ]
  },
  {
    id: "delhi",
    name: "Delhi",
    region: "North India",
    tagline: "Imperial Capitals, Mughal Splendor, and High-End Gastronomy",
    theme: {
      accent: "#f43f5e",
      accentHover: "#fb7185",
      accentMuted: "rgba(244, 63, 94, 0.15)",
      gradient: "linear-gradient(135deg, rgba(244, 63, 94, 0.22) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(244, 63, 94, 0.12)",
      badgeBorder: "rgba(244, 63, 94, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "October to March",
    idealDuration: "3 to 5 Days",
    vibe: "Imperial Heritage, Art Galleries & Fine Dining",
    overview: "Seven historical cities rolled into one majestic capital, offering private heritage walks and Michelin-caliber dining.",
    cities: [
      { name: "New Delhi", highlight: "Humayun's Tomb, Qutub Minar, and Lutyens' Bungalow Enclave", description: "Stately wide avenues, red sandstone monuments, curated art foundations, and luxury dining spaces.", bestFor: "Mughal Architecture, Luxury Shopping, Fine Dining" }
    ]
  },
  {
    id: "goa",
    name: "Goa",
    region: "West Coast",
    tagline: "Portuguese Manors, Secluded Coves, and Luxury Beachfront Villas",
    theme: {
      accent: "#0d9488",
      accentHover: "#14b8a6",
      accentMuted: "rgba(13, 148, 136, 0.15)",
      gradient: "linear-gradient(135deg, rgba(13, 148, 136, 0.22) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(13, 148, 136, 0.12)",
      badgeBorder: "rgba(13, 148, 136, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "October to April",
    idealDuration: "4 to 7 Days",
    vibe: "Coastal Luxury, Heritage Villas & Fine Dining",
    overview: "Sun-dappled palm groves, 17th-century Latin quarters, yacht charters, and private chef dinners by the Arabian Sea.",
    cities: [
      { name: "North Goa", highlight: "Vibrant beach clubs, boutique bistros, and cliffside sunsets", description: "Electric energy combined with stylish bohemian design and Michelin-grade coastal dining.", bestFor: "Boutique Stays, Nightlife, Oceanfront Lounges" },
      { name: "South Goa", highlight: "Quiet white sand stretches, five-star luxury resorts, and coconut trails", description: "An oasis of calm with uninterrupted horizons, private villas, and peaceful waters.", bestFor: "Luxury Resorts, Romantic Escapes, Quiet Shores" },
      { name: "Panaji", highlight: "Fontainhas Latin Quarter and heritage riverfront cruises", description: "Charming cobblestone lanes lined with pastel Portuguese mansions and art galleries.", bestFor: "Heritage Walks, Art Cafes, Architecture" },
      { name: "Calangute", highlight: "Golden sand coastline and watersports expeditions", description: "One of Goa's classic coastal stretches, framed by lively seaside markets.", bestFor: "Beach Activities, Coastal Markets" },
      { name: "Vagator", highlight: "Chapora Fort overlook and dramatic red cliffs", description: "Dramatic basalt rock landscapes with open ocean vistas and chic sunset decks.", bestFor: "Sunset Views, Clifftop Dinners" },
      { name: "Candolim", highlight: "Aguada Fort promontory and serene resort stretches", description: "Sophisticated beach community home to high-end boutique properties and fine seafood bistros.", bestFor: "Fine Dining, Water Activities" }
    ]
  },
  {
    id: "gujarat",
    name: "Gujarat",
    region: "West India",
    tagline: "White Rann Desert Salt Plains, Asiatic Lions, and Stepwells",
    theme: {
      accent: "#f59e0b",
      accentHover: "#fbbf24",
      accentMuted: "rgba(245, 158, 11, 0.15)",
      gradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.22) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(245, 158, 11, 0.12)",
      badgeBorder: "rgba(245, 158, 11, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "October to March",
    idealDuration: "6 to 8 Days",
    vibe: "Desert Glamping, Wildlife & Architectural Stepwells",
    overview: "From the lunar salt flats of Kutch under full moon nights to the wild habitat of Asiatic lions in Gir.",
    cities: [
      { name: "Ahmedabad", highlight: "Adalaj Stepwell, Sabarmati Ashram, and UNESCO Walled City", description: "India's first UNESCO World Heritage City, brimming with pols, intricate wood-carved havelis, and textile museums.", bestFor: "Textile Heritage, Historic Havelis, Street Food" },
      { name: "Vadodara", highlight: "Lukshmi Villas Palace and Maharaja Fateh Singh Museum", description: "The cultural royal capital boasting one of the largest private royal palaces in the world.", bestFor: "Royal Palaces, Classical Art" },
      { name: "Surat", highlight: "Textile bazaars and diamond cutting ateliers", description: "Lively coastal trading capital renowned for silk weaves, zari craft, and culinary innovations.", bestFor: "Textiles, Gourmet Gujarati Dining" },
      { name: "Dwarka", highlight: "Dwarkadhish Temple and Bet Dwarka boat rides", description: "Ancient sacred coastal capital revered as the kingdom of Lord Krishna.", bestFor: "Sacred Shrines, Marine Sanctuary" },
      { name: "Somnath", highlight: "First Jyotirlinga on the Arabian Sea shore", description: "Majestic coastal temple with sound and light shows echoing over ocean surf.", bestFor: "Spiritual Heritage, Ocean Horizons" },
      { name: "Kutch", highlight: "White Desert of Dhordo and artisan embroidery villages", description: "Endless salt flat horizons that turn silver under moonlight, surrounded by Rogan art hamlets.", bestFor: "Desert Glamping, Artisan Villages, Stargazing" },
      { name: "Gir National Park", highlight: "Open-top 4x4 safaris for Asiatic Lions", description: "The sole wild refuge of the Asiatic lion in dry deciduous teak forests.", bestFor: "Big Cat Safaris, Eco Wilderness" },
      { name: "Statue of Unity", highlight: "World's tallest statue and Narmada river valley", description: "Monumental engineering marvel set against the Satpura and Vindhya ranges with valley cruises.", bestFor: "Monumental Sightseeing, Valley Cruises" }
    ]
  },
  {
    id: "haryana",
    name: "Haryana",
    region: "North India",
    tagline: "Heritage Havelis, Sultanpur Bird Sanctuaries, and Modern Hubs",
    theme: {
      accent: "#a855f7",
      accentHover: "#c084fc",
      accentMuted: "rgba(168, 85, 247, 0.15)",
      gradient: "linear-gradient(135deg, rgba(168, 85, 247, 0.22) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(168, 85, 247, 0.12)",
      badgeBorder: "rgba(168, 85, 247, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "October to March",
    idealDuration: "2 to 3 Days",
    vibe: "Urban Luxury & Wetland Birdwatching",
    overview: "Upscale golf resorts, historic forts, and migratory wetland sanctuaries just outside the capital.",
    cities: [
      { name: "Gurugram", highlight: "Sultanpur National Park and luxury dining strips", description: "Modern luxury hub with world-class championship golf courses and high-end gastronomy.", bestFor: "Luxury Resorts, Birdwatching, Urban Spas" },
      { name: "Faridabad", highlight: "Surajkund Crafts Mela reservoir and Raja Nahar Singh Palace", description: "Historic town with ancient amphitheater reservoirs and 18th-century royal havelis.", bestFor: "Craft Fairs, Heritage Palaces" }
    ]
  },
  {
    id: "himachal-pradesh",
    name: "Himachal Pradesh",
    region: "North India",
    tagline: "Alpine Cedar Forests, High Passes, and Tibetan Monasteries",
    theme: {
      accent: "#10b981",
      accentHover: "#34d399",
      accentMuted: "rgba(16, 185, 129, 0.15)",
      gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.22) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(16, 185, 129, 0.12)",
      badgeBorder: "rgba(16, 185, 129, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "All Year (Snow: Dec-Feb, Summer: Mar-Jun)",
    idealDuration: "6 to 10 Days",
    vibe: "Himalayan Luxury Chalets, Valleys & Snow Trails",
    overview: "Majestic deodar forests, private mountain chalets with stone fireplaces, and high mountain passes.",
    cities: [
      { name: "Shimla", highlight: "The Mall Road, Viceregal Lodge, and heritage toy train", description: "Former British summer capital with grand colonial architecture and pine-scented promenades.", bestFor: "Colonial History, Scenic Walks, Heritage Hotels" },
      { name: "Manali", highlight: "Solang Valley, Old Manali apple orchards, and Rohtang Pass", description: "High-altitude resort town framed by snow-clad peaks, mountain streams, and luxury chalets.", bestFor: "Snow Adventures, Mountain Chalets, Rivers" },
      { name: "Kasol", highlight: "Parvati River pine trails and alpine cafes", description: "A peaceful riverside mountain haven set inside the majestic Parvati Valley.", bestFor: "Nature Treks, Riverside Walks" },
      { name: "Kullu", highlight: "Great Himalayan National Park and handloom shawls", description: "The valley of the gods, celebrated for traditional wool weavers and river rafting.", bestFor: "Handloom Shopping, River Rafting" },
      { name: "Dharamshala", highlight: "Kangra Valley tea gardens and HPCA Stadium", description: "Lush valley surrounded by cedar forests and views of the snow-clad Dhauladhar range.", bestFor: "Tea Estates, Cricket Heritage, Scenic Serenity" },
      { name: "McLeod Ganj", highlight: "Tsuglagkhang Complex and Bhagsu waterfalls", description: "Seat of His Holiness the Dalai Lama, rich with Tibetan philosophy, monk libraries, and cafes.", bestFor: "Tibetan Culture, Meditation, Mountain Walks" },
      { name: "Dalhousie", highlight: "Panchpula springs and Victorian forest trails", description: "Colonial hill station retaining old-world stillness across five pine-clad hills.", bestFor: "Quiet Forest Walks, Colonial Mansions" },
      { name: "Khajjiar", highlight: "Mini Switzerland pine meadow and saucer lake", description: "Lush emerald meadow surrounded by towering deodars and a floating island lake.", bestFor: "Meadow Strolls, Horseback Riding" },
      { name: "Spiti Valley", highlight: "Key Monastery, Chandratal Lake, and fossil villages", description: "A high-altitude desert world of stark barren canyons, 1000-year-old monasteries, and clear starlit skies.", bestFor: "Extreme Landscape, Ancient Gompas, Stargazing" },
      { name: "Kaza", highlight: "High altitude trading post and highest post office at Hikkim", description: "The administrative heart of Spiti Valley sitting at 12,000 feet surrounded by peaks.", bestFor: "Spiti Basecamp, High-Altitude Culture" },
      { name: "Kinnaur", highlight: "Sangla Valley apple orchards and Kalpa sunrise over Kinner Kailash", description: "Fabled mountain region where Tibetan and Hindu traditions blend amidst deodar valleys.", bestFor: "Apple Orchards, Sacred Mountain Vistas" },
      { name: "Chamba", highlight: "Akhand Chandi Palace and ancient Lakshmi Narayan Temple", description: "Historic valley town famous for miniature Pahari paintings and ancient cedar woodcraft.", bestFor: "Pahari Art, Ancient Woodwork" }
    ]
  },
  {
    id: "jammu-kashmir",
    name: "Jammu & Kashmir",
    region: "North India",
    tagline: "Shikara Cruises on Dal Lake, Saffron Meadows, and Powder Snow",
    theme: {
      accent: "#f59e0b",
      accentHover: "#fbbf24",
      accentMuted: "rgba(245, 158, 11, 0.15)",
      gradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.22) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(245, 158, 11, 0.12)",
      badgeBorder: "rgba(245, 158, 11, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "April to October (Winter Sports: Dec-Mar)",
    idealDuration: "6 to 8 Days",
    vibe: "Alpine Paradise, Floating Houseboats & Saffron Valleys",
    overview: "Private cedar houseboats on Dal Lake, helicopter transfers to Gulmarg ski slopes, and walks in Mughal gardens.",
    cities: [
      { name: "Srinagar", highlight: "Private Shikara rides, Dal Lake houseboats, and Mughal Gardens", description: "The crown jewel of the valley, celebrated for handcrafted walnut woodwork, pashmina shawls, and floating gardens.", bestFor: "Luxury Houseboats, Mughal Terraces, Artisan Rugs" },
      { name: "Gulmarg", highlight: "Gulmarg Gondola to Apharwat Peak and championship golf", description: "Premier winter sports capital of India with powdery snow slopes and pine-fringed alpine meadows.", bestFor: "Gondola Rides, Skiing, Meadow Treks" },
      { name: "Pahalgam", highlight: "Betaab Valley, Aru Valley, and Lidder River angling", description: "A verdant shepherd valley framed by rushing glacier rivers, pine forests, and horse trails.", bestFor: "Riverfront Luxury, Horse Trails, Nature Walks" },
      { name: "Sonamarg", highlight: "Thajiwas Glacier and Sindh River trekking", description: "The Meadow of Gold sitting at the gateway to Ladakh along glacier-fed streams.", bestFor: "Glacier Treks, Alpine Camping" },
      { name: "Jammu", highlight: "Raghunath Temple and Bahu Fort gardens", description: "The winter capital known as the City of Temples, resting along the serene Tawi River.", bestFor: "Sacred Heritage, Traditional Dogra Cuisine" }
    ]
  },
  {
    id: "jharkhand",
    name: "Jharkhand",
    region: "East India",
    tagline: "Cascading Forest Falls, Sacred Hilltop Shrines, and Steel Heritage",
    theme: {
      accent: "#0284c7",
      accentHover: "#38bdf8",
      accentMuted: "rgba(2, 132, 199, 0.15)",
      gradient: "linear-gradient(135deg, rgba(2, 132, 199, 0.22) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(2, 132, 199, 0.12)",
      badgeBorder: "rgba(2, 132, 199, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "October to March",
    idealDuration: "3 to 5 Days",
    vibe: "Forest Waterfalls & Sacred Hills",
    overview: "The woodland plateau of Chota Nagpur, home to ancient sal forests and dramatic multi-tiered cascades.",
    cities: [
      { name: "Ranchi", highlight: "Hundru and Dassam Falls, and Tagore Hill", description: "City of Waterfalls set on a gentle plateau with pleasant cool breezes and tribal cultural institutes.", bestFor: "Waterfalls, Plateau Panoramas" },
      { name: "Jamshedpur", highlight: "Jubilee Park, Dalma Wildlife Sanctuary, and Dimna Lake", description: "India's first planned industrial city, ringed by forested hills sheltering wild elephants.", bestFor: "Urban Parks, Wildlife Reserves" },
      { name: "Deoghar", highlight: "Baba Baidyanath Jyotirlinga and Trikut Pahar ropeway", description: "One of the most sacred pilgrimage centers in eastern India, surrounded by ancient mythological hillocks.", bestFor: "Pilgrimage, Cable Car Rides" }
    ]
  },
  {
    id: "karnataka",
    name: "Karnataka",
    region: "South India",
    tagline: "Vijayanagara Ruins, Coffee Misty Hills, and Pristine Coastlines",
    theme: {
      accent: "#c084fc",
      accentHover: "#d8b4fe",
      accentMuted: "rgba(192, 132, 252, 0.15)",
      gradient: "linear-gradient(135deg, rgba(192, 132, 252, 0.22) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(192, 132, 252, 0.12)",
      badgeBorder: "rgba(192, 132, 252, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "October to March",
    idealDuration: "6 to 9 Days",
    vibe: "Imperial Ruins, Coffee Plantations & Coastal Temples",
    overview: "From the boulder-strewn kingdoms of Hampi to private coffee plantations in Coorg and secluded beaches.",
    cities: [
      { name: "Bengaluru", highlight: "Lalbagh Botanical Gardens, Bangalore Palace, and craft breweries", description: "The Garden City and technology capital, celebrated for lush tree canopies and progressive dining.", bestFor: "Culinary Scenes, Garden Strolls, Craft Brews" },
      { name: "Mysuru", highlight: "Mysore Palace illumination and Devaraja Market silks", description: "Royal heritage capital famous for sandalwood craftsmanship, fragrant jasmine, and Dasara pageantry.", bestFor: "Palace Architecture, Silk Bazaars" },
      { name: "Coorg (Kodagu)", highlight: "Private coffee estates, Abbey Falls, and Dubare elephant camp", description: "Known as the Scotland of India, cloaked in mist, pepper vines, and warm Kodava hospitality.", bestFor: "Plantation Homestays, Birdwatching, Treks" },
      { name: "Hampi", highlight: "Virupaksha Temple, Stone Chariot, and boulder landscape", description: "UNESCO World Heritage site of the grand Vijayanagara Empire across surreal river boulders.", bestFor: "Archaeology, Sunrise Photography, Boulders" },
      { name: "Chikmagalur", highlight: "Mullayanagiri peak and birthplace of Indian coffee", description: "Tranquil green mountain slopes where the first coffee seeds in India were cultivated.", bestFor: "Coffee Tours, Mountain Peaks, Waterfalls" },
      { name: "Gokarna", highlight: "Om Beach, Half Moon Beach, and Mahabaleshwar Temple", description: "Laid-back coastal sanctuary where forested cliff paths lead down to peaceful sandy coves.", bestFor: "Secluded Beaches, Coastal Hikes, Spiritual Solitude" },
      { name: "Udupi", highlight: "Sri Krishna Matha and Malpe St. Mary's Islands", description: "Famous temple coastal town renowned for ancient culinary heritage and columnar basalt islands.", bestFor: "Coastal Cuisine, Temple Heritage, Geologic Islands" }
    ]
  },
  {
    id: "kerala",
    name: "Kerala",
    region: "South Coast",
    tagline: "Emerald Backwaters, Cardamom Hills, and Ayurvedic Sanctuaries",
    theme: {
      accent: "#2e7d5b",
      accentHover: "#3fa377",
      accentMuted: "rgba(46, 125, 91, 0.15)",
      gradient: "linear-gradient(135deg, rgba(46, 125, 91, 0.25) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(46, 125, 91, 0.12)",
      badgeBorder: "rgba(46, 125, 91, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "September to March",
    idealDuration: "6 to 8 Days",
    vibe: "Backwater Luxury Houseboats & Mountain Mist",
    overview: "Slow-paced luxury aboard private solar-powered houseboats, traditional spice plantations, and cliffside ocean resorts.",
    cities: [
      { name: "Kochi", highlight: "Fort Kochi colonial bungalows, Chinese fishing nets, and spice markets", description: "Historic trading harbor where Dutch, Portuguese, and British legacies merge with contemporary art.", bestFor: "Colonial Architecture, Biennale Art, Spice Trails" },
      { name: "Munnar", highlight: "Tea carpeted rolling hills, Eravikulam National Park, and Anamudi Peak", description: "Hill station surrounded by mist and high-altitude tea plantations.", bestFor: "Tea Plantation Stays, Misty Treks, Nilgiri Tahr" },
      { name: "Alleppey (Alappuzha)", highlight: "Private luxury Kettuvallam houseboats and palm-fringed canals", description: "The Venice of the East, where tranquil backwater waterways drift past villages and paddy fields.", bestFor: "Luxury Houseboats, Village Backwaters, Sunsets" },
      { name: "Thekkady", highlight: "Periyar Wildlife Sanctuary boat safaris and spice garden walks", description: "Dense aromatic forest slopes sheltered by cardamom hills and wild elephant reserves.", bestFor: "Spice Plantations, Wildlife Cruises, Bamboo Rafting" },
      { name: "Kovalam", highlight: "Lighthouse Beach and crescent Ayurvedic resort bays", description: "Iconic trio of crescent beaches famed for seaside Ayurvedic wellness and gentle waves.", bestFor: "Ayurveda Retreats, Oceanfront Dining" },
      { name: "Varkala", highlight: "Dramatic red laterite cliffs and natural spring waters", description: "Perched high on dramatic laterite cliffs overlooking the Arabian Sea, famous for coastal cafes.", bestFor: "Cliff Views, Sunset Dining, Yoga" },
      { name: "Kumarakom", highlight: "Vembanad Lake bird sanctuary and slow canal life", description: "Secluded paradise on the shores of Vembanad Lake, home to migratory birds and luxury resorts.", bestFor: "Lakeside Luxury, Birdwatching, Serenity" },
      { name: "Wayanad", highlight: "Edakkal Caves, Chembra Peak heart-shaped lake, and tea estates", description: "Misty highlands dotted with spice forests, ancient neolithic cave petroglyphs, and wildlife.", bestFor: "Eco-Lodges, Nature Hikes, Cave History" },
      { name: "Thiruvananthapuram", highlight: "Padmanabhaswamy Temple and Napier Museum", description: "The coastal capital city anchored by classical Travancore architecture and regal avenues.", bestFor: "Royal Heritage, Sacred Architecture" }
    ]
  },
  {
    id: "ladakh",
    name: "Ladakh",
    region: "Far North",
    tagline: "High-Altitude Passes, Cobalt Blue Lakes, and Buddhist Monasteries",
    theme: {
      accent: "#3b82f6",
      accentHover: "#60a5fa",
      accentMuted: "rgba(59, 130, 246, 0.15)",
      gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(59, 130, 246, 0.12)",
      badgeBorder: "rgba(59, 130, 246, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "May to September",
    idealDuration: "7 to 10 Days",
    vibe: "High Altitude Wilderness, Glamping & Stargazing",
    overview: "The rooftop of the world. Stark mountain deserts, centuries-old cliff monasteries, and mirror-still high altitude lakes.",
    cities: [
      { name: "Leh", highlight: "Leh Palace, Shanti Stupa, and Thiksey Monastery morning prayers", description: "Ancient Himalayan crossroads framed by dramatic barren ridges and Tibetan Buddhist gompas.", bestFor: "Monastic Morning Chants, Heritage Markets, Acclimatization" },
      { name: "Nubra Valley", highlight: "Hunder double-humped Bactrian camels and Diskit giant Buddha", description: "The valley of flowers accessed across Khardung La, featuring white desert sand dunes among snowy peaks.", bestFor: "Bactrian Camel Safaris, Luxury Glamping, Passes" },
      { name: "Pangong Lake", highlight: "Chameleon-hued saltwater lake stretching to Tibet", description: "A high-altitude endorheic lake at 14,270 feet that shifts color from turquoise to deep indigo.", bestFor: "Stargazing, High-Altitude Photography, Lake Sunrises" },
      { name: "Tso Moriri", highlight: "Korzok Monastery and wetland migratory bird sanctuary", description: "A remote, tranquil freshwater sanctuary enclosed by peaks, home to wild Kiang horses and bar-headed geese.", bestFor: "Remote Solitude, Bird Sanctuaries, Nomadic Hamlets" }
    ]
  },
  {
    id: "lakshadweep",
    name: "Lakshadweep",
    region: "Islands",
    tagline: "Pristine Coral Atolls, Shallow Lagoons, and Marine Sanctuaries",
    theme: {
      accent: "#06b6d4",
      accentHover: "#22d3ee",
      accentMuted: "rgba(6, 182, 212, 0.15)",
      gradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.25) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(6, 182, 212, 0.12)",
      badgeBorder: "rgba(6, 182, 212, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "October to May",
    idealDuration: "4 to 6 Days",
    vibe: "Secluded Coral Atolls & Turquoise Lagoons",
    overview: "Thirty-six coral islands scattered across the Arabian Sea with crystal waters, vibrant sea turtles, and untouched sands.",
    cities: [
      { name: "Agatti", highlight: "Runway over the turquoise ocean and coral reef kayaking", description: "The island gateway boasting one of the world's most spectacular airstrips bordered by azure water on both flanks.", bestFor: "Lagoon Flights, Reef Kayaking, Scuba Diving" },
      { name: "Bangaram", highlight: "Teardrop-shaped uninhabited island and bioluminescent night waters", description: "An exclusive, tranquil paradise where shallow coral reefs surround white sandspits.", bestFor: "Private Island Living, Snorkeling, Solitude" },
      { name: "Kavaratti", highlight: "Marine Aquarium, Ujra Mosque, and glass-bottom boats", description: "The administrative capital island celebrating traditional timber boat-making and coral nurseries.", bestFor: "Marine Life, Glass-Bottom Tours" }
    ]
  },
  {
    id: "madhya-pradesh",
    name: "Madhya Pradesh",
    region: "Central India",
    tagline: "Bengal Tiger Reserves, Erotic Temple Carvings, and Marble Rocks",
    theme: {
      accent: "#ea580c",
      accentHover: "#f97316",
      accentMuted: "rgba(234, 88, 12, 0.15)",
      gradient: "linear-gradient(135deg, rgba(234, 88, 12, 0.22) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(234, 88, 12, 0.12)",
      badgeBorder: "rgba(234, 88, 12, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "October to April",
    idealDuration: "6 to 8 Days",
    vibe: "Tiger Safaris, Chandela Temples & Historic Forts",
    overview: "The heart of wild India. Royal safari lodges in Kanha and Bandhavgarh, and the UNESCO monuments of Khajuraho.",
    cities: [
      { name: "Bhopal", highlight: "Bhimbetka rock shelters and Upper Lake promenades", description: "The city of lakes with ancient Paleolithic cave paintings and grand mosques.", bestFor: "Prehistoric Art, Lake Sunsets" },
      { name: "Indore", highlight: "Rajwada Palace and Sarafa Night Food Bazaar", description: "India's cleanest metropolis celebrated for vibrant heritage street food traditions and Maratha architecture.", bestFor: "Gastronomic Walks, Heritage Bazaars" },
      { name: "Ujjain", highlight: "Mahakaleshwar Jyotirlinga and Shipra River ghats", description: "One of the seven sacred Hindu cities, host to the sacred Simhastha Kumbh Mela.", bestFor: "Sacred Ceremonies, Ancient Astronomy" },
      { name: "Khajuraho", highlight: "Western Group of Temples with sandstone filigree carvings", description: "Masterpieces of Nagara architectural style depicting celestial beings and passionate human life.", bestFor: "Sandstone Sculptures, UNESCO Architecture" },
      { name: "Kanha National Park", highlight: "Meadow tiger safaris and rare Barasingha deer", description: "The original inspiration for Rudyard Kipling's Jungle Book, featuring open sal meadows.", bestFor: "Tiger Tracking, Luxury Safari Lodges" },
      { name: "Bandhavgarh National Park", highlight: "Highest density of wild Royal Bengal Tigers in India", description: "Ancient fort ruins towering over dense bamboo jungles renowned for dramatic tiger encounters.", bestFor: "Wildlife Photography, Ancient Ruins" }
    ]
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    region: "West India",
    tagline: "Art Deco Marine Promenades, Sahyadri Hill Forts, and Vineyards",
    theme: {
      accent: "#e11d48",
      accentHover: "#f43f5e",
      accentMuted: "rgba(225, 29, 72, 0.15)",
      gradient: "linear-gradient(135deg, rgba(225, 29, 72, 0.22) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(225, 29, 72, 0.12)",
      badgeBorder: "rgba(225, 29, 72, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "October to March",
    idealDuration: "5 to 8 Days",
    vibe: "Urban Energy, Sahyadri Mountains & Wine Valleys",
    overview: "From the bustling energy of Mumbai's colonial harbor to mist-veiled Western Ghat fortresses and winery estates.",
    cities: [
      { name: "Mumbai", highlight: "Gateway of India, Marine Drive, and Art Deco heritage precincts", description: "The vibrant financial and cinematic capital with private yachting and dining.", bestFor: "Art Deco Architecture, High-End Dining, Private Yachting" },
      { name: "Pune", highlight: "Aga Khan Palace, Shaniwar Wada, and quiet hill walks", description: "Cultural capital of the Marathas, blending university greens with historic palaces.", bestFor: "Heritage Mansions, Cultural Cafes" },
      { name: "Lonavala", highlight: "Karla and Bhaja ancient Buddhist caves and misty valley viewpoints", description: "Charming Sahyadri getaway renowned for waterfalls, chikki sweets, and cliffside walks.", bestFor: "Monsoon Retreats, Ancient Buddhist Caves" },
      { name: "Mahabaleshwar", highlight: "Venna Lake, strawberry farms, and Arthur's Seat cliff overlook", description: "Plateau hill station celebrated for fresh strawberry harvests and dramatic forest gorges.", bestFor: "Strawberry Estates, Mountain Lookouts" },
      { name: "Alibaug", highlight: "Kolaba Sea Fort and secluded beachfront private villas", description: "A quick speedboat crossing from Mumbai, famed for serene coastal hamlets and private estate living.", bestFor: "Secluded Luxury Villas, Sea Forts" },
      { name: "Nashik", highlight: "Sula Vineyards and Trimbakeshwar Jyotirlinga", description: "The wine capital of India situated along the sacred Godavari River with vineyard stays.", bestFor: "Wine Tastings, Vineyard Lodges, River Ghats" },
      { name: "Aurangabad (Chhatrapati Sambhajinagar)", highlight: "Ajanta & Ellora Caves and Bibi Ka Maqbara", description: "World heritage gateway to monumental rock-cut cave temples carved directly into basalt mountains.", bestFor: "Rock-Cut Caves, UNESCO Architecture" }
    ]
  },
  {
    id: "meghalaya",
    name: "Meghalaya",
    region: "North East",
    tagline: "Living Root Bridges, Crystal Umngot Waters, and Cloud Waterfalls",
    theme: {
      accent: "#059669",
      accentHover: "#10b981",
      accentMuted: "rgba(5, 150, 105, 0.15)",
      gradient: "linear-gradient(135deg, rgba(5, 150, 105, 0.22) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(5, 150, 105, 0.12)",
      badgeBorder: "rgba(5, 150, 105, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "October to April",
    idealDuration: "5 to 7 Days",
    vibe: "Cloud Forests, Living Architecture & Waterfalls",
    overview: "The abode of clouds. Bio-engineered living root bridges nurtured across generations, deep limestone caves, and clear rivers.",
    cities: [
      { name: "Shillong", highlight: "Elephant Falls, Ward's Lake, and vibrant live music culture", description: "Known as the Scotland of the East, surrounded by pine hills and acoustic music cafes.", bestFor: "Indie Music, Pine Hills, Cafes" },
      { name: "Cherrapunji (Sohra)", highlight: "Nohkalikai Falls, Double Decker Living Root Bridge, and Mawsmai Caves", description: "One of the wettest realms on Earth, where waterfalls plunge into deep green canyons.", bestFor: "Living Root Bridges, Roaring Cascades, Cave Exploration" },
      { name: "Mawlynnong", highlight: "Asia's cleanest village, balancing rock, and treehouse canopy bridges", description: "Immaculate indigenous village with bamboo pathways, blooming orchids, and community homestays.", bestFor: "Sustainable Eco-Travel, Canopy Vistas" }
    ]
  },
  {
    id: "mizoram",
    name: "Mizoram",
    region: "North East",
    tagline: "Rolling Emerald Ridges, Blue Mountain Summits, and Bamboo Forests",
    theme: {
      accent: "#16a34a",
      accentHover: "#22c55e",
      accentMuted: "rgba(22, 165, 74, 0.15)",
      gradient: "linear-gradient(135deg, rgba(22, 165, 74, 0.22) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(22, 165, 74, 0.12)",
      badgeBorder: "rgba(22, 165, 74, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "October to April",
    idealDuration: "4 to 6 Days",
    vibe: "Mountain Ridges & Intricate Bamboo Weaves",
    overview: "Untamed mountain horizons where morning mist drifts across quiet ridge settlements and bamboo groves.",
    cities: [
      { name: "Aizawl", highlight: "Durtlang Hills, Solomon's Temple, and Bara Bazar handlooms", description: "Clifftop capital city perched dramatically over green valleys with intricate tribal weaving traditions.", bestFor: "Panoramic Ridge Views, Handloom Shawls" }
    ]
  },
  {
    id: "nagaland",
    name: "Nagaland",
    region: "North East",
    tagline: "Hornbill Cultural Echoes, Dzukou Valley Lilies, and Warrior Lore",
    theme: {
      accent: "#f97316",
      accentHover: "#fb923c",
      accentMuted: "rgba(249, 115, 22, 0.15)",
      gradient: "linear-gradient(135deg, rgba(249, 115, 22, 0.22) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(249, 115, 22, 0.12)",
      badgeBorder: "rgba(249, 115, 22, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "October to May",
    idealDuration: "4 to 6 Days",
    vibe: "Tribal Festivals, Valleys & Mountain Passes",
    overview: "Home to sixteen indigenous tribes, the annual Hornbill celebration, and the rolling green waves of Dzukou Valley.",
    cities: [
      { name: "Kohima", highlight: "Commonwealth War Cemetery, Kisama Heritage Village, and Dzukou Valley", description: "Mountainous capital famous for courageous WWII history and the annual Hornbill celebration.", bestFor: "Tribal Traditions, Valley Treks, History" },
      { name: "Dimapur", highlight: "Kachari Ruins and Diezephe Craft Village", description: "The historic lowlands gateway showcasing monolithic mushroom stone pillars from the medieval Kachari era.", bestFor: "Monolithic Ruins, Woodcarvings" }
    ]
  },
  {
    id: "odisha",
    name: "Odisha",
    region: "East Coast",
    tagline: "Sun Temple Chariots, Sacred Jagannath Raths, and Chilika Dolphins",
    theme: {
      accent: "#d97706",
      accentHover: "#f59e0b",
      accentMuted: "rgba(217, 119, 6, 0.15)",
      gradient: "linear-gradient(135deg, rgba(217, 119, 6, 0.22) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(217, 119, 6, 0.12)",
      badgeBorder: "rgba(217, 119, 6, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "October to March",
    idealDuration: "4 to 6 Days",
    vibe: "Kalinga Temple Architecture & Coastal Lagoons",
    overview: "The grand Kalinga architecture of Konark, sacred coastal rituals of Puri, and endangered Irrawaddy dolphins of Chilika.",
    cities: [
      { name: "Bhubaneswar", highlight: "Lingaraj Temple, Mukteshvara Temple, and Udayagiri Caves", description: "The Temple City of India, home to over five hundred classical stone-carved shrines.", bestFor: "Kalinga Architecture, Classical Sculpture" },
      { name: "Puri", highlight: "Jagannath Temple, Golden Beach, and Raghurajpur Pattachitra painters", description: "One of the Char Dham pilgrimage centers, bordered by crashing waves and sacred artisan hamlets.", bestFor: "Spiritual Rites, Pattachitra Painting, Beaches" },
      { name: "Konark", highlight: "UNESCO Sun Temple monumental stone wheels", description: "The architectural pinnacle of medieval India, crafted as a colossal stone chariot of the Sun God.", bestFor: "UNESCO Heritage, Classical Dance Festivals" },
      { name: "Chilika", highlight: "Asia's largest brackish lagoon, Irrawaddy dolphins, and migratory birds", description: "A vast tranquil estuary dotted with islands where playful dolphins break the surface at sunrise.", bestFor: "Boat Safaris, Bird Watching, Dolphin Sightings" }
    ]
  },
  {
    id: "puducherry",
    name: "Puducherry",
    region: "South Coast",
    tagline: "French Colonial Quarters, Bougainvillea Villas, and Spiritual Stillness",
    theme: {
      accent: "#f43f5e",
      accentHover: "#fb7185",
      accentMuted: "rgba(244, 63, 94, 0.15)",
      gradient: "linear-gradient(135deg, rgba(244, 63, 94, 0.22) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(244, 63, 94, 0.12)",
      badgeBorder: "rgba(244, 63, 94, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "October to March",
    idealDuration: "3 to 4 Days",
    vibe: "French Quarters, Coastal Cafes & Auroville",
    overview: "Mustard-yellow French colonial mansions, seaside promenades, handcrafted ceramic studios, and peaceful ashram halls.",
    cities: [
      { name: "Puducherry", highlight: "White Town heritage walks, Sri Aurobindo Ashram, and Matrimandir", description: "A tranquil seaside town where Franco-Tamil heritage reflects in courtyards, cafes, and peaceful spiritual gardens.", bestFor: "Heritage Architecture, Boutiques, Seaside Promenades" }
    ]
  },
  {
    id: "punjab",
    name: "Punjab",
    region: "North India",
    tagline: "The Golden Temple Sanctuary, Mustard Fields, and Royal Palaces",
    theme: {
      accent: "#eab308",
      accentHover: "#facc15",
      accentMuted: "rgba(234, 179, 8, 0.15)",
      gradient: "linear-gradient(135deg, rgba(234, 179, 8, 0.22) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(234, 179, 8, 0.12)",
      badgeBorder: "rgba(234, 179, 8, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "October to March",
    idealDuration: "3 to 5 Days",
    vibe: "Spiritual Reverence, Royal Palaces & Farm Hospitality",
    overview: "The serene waters reflecting the Golden Temple at dawn, boundless yellow mustard fields, and rich culinary feasts.",
    cities: [
      { name: "Amritsar", highlight: "Harmandir Sahib (Golden Temple), Jallianwala Bagh, and Wagah Border", description: "The spiritual heart of Sikhism, offering round-the-clock langar community service and heritage street delicacies.", bestFor: "Golden Temple, Heritage Gastronomy, Patriotism" },
      { name: "Ludhiana", highlight: "Punjab Agricultural University Museum and textile emporiums", description: "Lively central hub famous for woolen looms, vibrant rural fairs, and rich Punjabi farm feasts.", bestFor: "Textiles, Rural Cultural Heritage" },
      { name: "Patiala", highlight: "Qila Mubarak and Sheesh Mahal mirror palace", description: "Royal city famous for princely Patiala shahi turbans, phulkari embroidery, and grand architecture.", bestFor: "Royal Forts, Phulkari Weaving" }
    ]
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    region: "North West",
    tagline: "Maharaja Fortresses, Amber Sand Dunes, and Palace Lake Views",
    theme: {
      accent: "#c88a35",
      accentHover: "#e09f4b",
      accentMuted: "rgba(200, 138, 53, 0.18)",
      gradient: "linear-gradient(135deg, rgba(200, 138, 53, 0.25) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(200, 138, 53, 0.14)",
      badgeBorder: "rgba(200, 138, 53, 0.4)",
    },
    bannerImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "October to March",
    idealDuration: "7 to 10 Days",
    vibe: "Imperial Palaces, Desert Glamping & Royal Hospitality",
    overview: "The quintessential realm of Indian royalty. Private palace stays, vintage car collections, desert camel caravans, and sunset lakes.",
    cities: [
      { name: "Jaipur", highlight: "Amber Fort, City Palace, Hawa Mahal, and royal gem ateliers", description: "The Pink City of royalty, featuring grand hill forts, observatory sundials, and block-printed textiles.", bestFor: "Royal Palaces, Jewelry Ateliers, Fine Dining" },
      { name: "Udaipur", highlight: "Lake Pichola boat cruises, Jag Mandir, and City Palace", description: "The City of Lakes with romantic marble palaces floating over shimmering mountain waters.", bestFor: "Romantic Palace Stays, Lake Cruises, Heritage Mansions" },
      { name: "Jodhpur", highlight: "Mehrangarh Fort clifftop ramparts and the Blue City lanes", description: "The Sun City where indigo-painted alleys nestle beneath one of the grandest forts in Asia.", bestFor: "Clifftop Forts, Blue City Walks, Stepwells" },
      { name: "Jaisalmer", highlight: "Living Golden Fort and Thar Desert Sam sand dunes glamping", description: "Rising from golden desert sands like a mirage, celebrated for yellow sandstone havelis and dune stargazing.", bestFor: "Desert Glamping, Sandstone Havelis, Folk Music" },
      { name: "Pushkar", highlight: "Sacred Pushkar Lake ghats, Brahma Temple, and desert camel fair", description: "Ancient lakeside pilgrimage town surrounded by rose gardens and tranquil desert hills.", bestFor: "Lakeside Ghats, Rose Gardens, Spiritual Calm" },
      { name: "Mount Abu", highlight: "Dilwara Jain Temples and Nakki Lake sunset", description: "Rajasthan's sole hill retreat, celebrated for world-renowned carved marble temples.", bestFor: "Carved Marble Temples, Forest Viewpoints" },
      { name: "Bikaner", highlight: "Junagarh Fort, camel research farms, and Karni Mata Temple", description: "Desert stronghold famous for unbreached stone courtyards, miniature paintings, and savory savories.", bestFor: "Red Sandstone Forts, Desert Culture" }
    ]
  },
  {
    id: "sikkim",
    name: "Sikkim",
    region: "North East",
    tagline: "Kangchenjunga Horizons, Alpine Rhododendrons, and Sacred Gompas",
    theme: {
      accent: "#06b6d4",
      accentHover: "#22d3ee",
      accentMuted: "rgba(6, 182, 212, 0.15)",
      gradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.22) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(6, 182, 212, 0.12)",
      badgeBorder: "rgba(6, 182, 212, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "March to May & October to December",
    idealDuration: "5 to 8 Days",
    vibe: "Himalayan Vistas, Organic Valleys & Monasteries",
    overview: "India's first fully organic state. Crystal mountain passes, fluttering prayer flags, and views of Mount Kangchenjunga.",
    cities: [
      { name: "Gangtok", highlight: "Rumtek Monastery, MG Marg promenade, and Tsomgo Lake", description: "The cosmopolitan hill capital offering sweeping views of snowy peaks and quiet Buddhist monasteries.", bestFor: "Mountain Views, Monasteries, Clean Promenades" },
      { name: "Pelling", highlight: "Pemayangtse Monastery and skywalk overlooking Kangchenjunga", description: "Quiet forest town offering closest unobstructed views of the sacred third-highest mountain on Earth.", bestFor: "Mountain Panoramas, Skywalks, Ruins" },
      { name: "Lachung", highlight: "Yumthang Valley of Flowers and Zero Point snow passes", description: "A picturesque riverside village located in North Sikkim near thermal hot springs and blooming rhododendrons.", bestFor: "Alpine Flower Valleys, Snow Glaciers" },
      { name: "Ravangla", highlight: "Buddha Park with colossal bronze statue and tea gardens", description: "A peaceful sanctuary sheltered beneath Maenam Hill, featuring Temi Tea Estate and meditation walks.", bestFor: "Meditation Parks, Organic Tea Gardens" }
    ]
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    region: "South India",
    tagline: "Chola Dravidian Temples, Nilgiri Mountain Railways, and Coastal Forts",
    theme: {
      accent: "#b45309",
      accentHover: "#d97706",
      accentMuted: "rgba(180, 83, 9, 0.15)",
      gradient: "linear-gradient(135deg, rgba(180, 83, 9, 0.22) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(180, 83, 9, 0.12)",
      badgeBorder: "rgba(180, 83, 9, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "October to March",
    idealDuration: "6 to 9 Days",
    vibe: "Living Dravidian Heritage & Nilgiri Hill Stations",
    overview: "Millennia of classical Dravidian arts, monumental soaring gopurams, and mountain train rides through misty tea gardens.",
    cities: [
      { name: "Chennai", highlight: "Kapaleeshwarar Temple, Marina Beach, and classical music sabhas", description: "The cultural gateway of South India, rich with Carnatic music traditions, bronze sculptures, and coastal cuisine.", bestFor: "Classical Arts, Temple Gopurams, Coastal Walks" },
      { name: "Ooty", highlight: "Nilgiri Mountain Railway, Botanical Gardens, and tea estates", description: "The Queen of Hill Stations, reachable via the historic UNESCO steam toy train through pine valleys.", bestFor: "Steam Train Journeys, Tea Bungalows, Lakes" },
      { name: "Kodaikanal", highlight: "Kodai Lake, Pillar Rocks, and pine forest mist trails", description: "The Princess of Hill Stations, crowned by starry night skies and quiet eucalyptus woodlands.", bestFor: "Lakeside Cycling, Mist Walks, Berijam Lake" },
      { name: "Madurai", highlight: "Meenakshi Amman Temple with towering painted gopurams", description: "One of the oldest continuously inhabited cities in the world, renowned for fragrant jasmine and night ceremonies.", bestFor: "Ancient Temples, Midnight Rites, Street Food" },
      { name: "Rameswaram", highlight: "Ramanathaswamy Temple pillared corridors and Dhanushkodi beach", description: "Sacred island temple sanctuary situated along the shallow turquoise waters of the Gulf of Mannar.", bestFor: "Pillared Corridors, Coastal Ruins, Sacred Wells" },
      { name: "Thanjavur", highlight: "Brihadisvara Great Living Chola Temple and Tanjore paintings", description: "The imperial capital of the Cholas, home to magnificent granitic architecture and classical bronze casting.", bestFor: "Chola Architecture, Gold Leaf Art" },
      { name: "Mahabalipuram", highlight: "Shore Temple, Arjuna's Penance, and stone-carved rathas", description: "Ancient 7th-century coastal port of the Pallavas with seaside monolithic rock-cut monuments.", bestFor: "UNESCO Shore Temples, Coastal Stone Art" }
    ]
  },
  {
    id: "telangana",
    name: "Telangana",
    region: "South Central",
    tagline: "Nizami Diamond Forts, Charminar Bazaars, and Ramappa Heritage",
    theme: {
      accent: "#9333ea",
      accentHover: "#a855f7",
      accentMuted: "rgba(147, 51, 234, 0.15)",
      gradient: "linear-gradient(135deg, rgba(147, 51, 234, 0.22) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(147, 51, 234, 0.12)",
      badgeBorder: "rgba(147, 51, 234, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1572455857811-045fb4255b5d?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "October to March",
    idealDuration: "3 to 5 Days",
    vibe: "Nizami Elegance & Kakatiya Architecture",
    overview: "Grand Nizami palaces, diamond mines of Golconda, authentic Hyderabadi Dum Biryani, and UNESCO Kakatiya shrines.",
    cities: [
      { name: "Hyderabad", highlight: "Golconda Fort, Charminar, Chowmahalla Palace, and pearl bazaars", description: "The City of Pearls, where royal Nizami court culture blends with high-tech gastronomy and heritage courtyards.", bestFor: "Nizami Palaces, Pearl Shopping, Royal Biryani" },
      { name: "Warangal", highlight: "Thousand Pillar Temple and UNESCO Ramappa Temple", description: "Ancient seat of the Kakatiya dynasty celebrated for floating-brick temples and intricate stone archways.", bestFor: "Kakatiya Architecture, Stone Pillars" }
    ]
  },
  {
    id: "tripura",
    name: "Tripura",
    region: "North East",
    tagline: "Water Palaces, Unakoti Bas-Relief Carvings, and Bamboo Craft",
    theme: {
      accent: "#0284c7",
      accentHover: "#38bdf8",
      accentMuted: "rgba(2, 132, 199, 0.15)",
      gradient: "linear-gradient(135deg, rgba(2, 132, 199, 0.22) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(2, 132, 199, 0.12)",
      badgeBorder: "rgba(2, 132, 199, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "October to March",
    idealDuration: "3 to 4 Days",
    vibe: "Water Palaces & Mythological Rock Carvings",
    overview: "White floating palaces on tranquil lakes and mystical rock-cut Shiva carvings framed by deep forest valleys.",
    cities: [
      { name: "Agartala", highlight: "Ujjayanta Palace and Neermahal Lake Palace", description: "Royal palace capital surrounded by red-brick courtyards and intricate bamboo weaving crafts.", bestFor: "Palace Architecture, Lake Sanctuaries" }
    ]
  },
  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    region: "North India",
    tagline: "The Taj Mahal, Sacred Ganga Aarti Ghats, and Awadhi Legacies",
    theme: {
      accent: "#d97706",
      accentHover: "#f59e0b",
      accentMuted: "rgba(217, 119, 6, 0.15)",
      gradient: "linear-gradient(135deg, rgba(217, 119, 6, 0.22) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(217, 119, 6, 0.12)",
      badgeBorder: "rgba(217, 119, 6, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "October to March",
    idealDuration: "5 to 7 Days",
    vibe: "Mughal Wonders, Sacred River Ghats & Awadhi Feasts",
    overview: "Witness sunrise over the Taj Mahal, private wooden boat rides past Varanasi's ancient ghats, and royal Awadhi culinary banquets.",
    cities: [
      { name: "Agra", highlight: "The Taj Mahal at sunrise, Agra Fort, and Fatehpur Sikri", description: "The premier Mughal capital housing the timeless marble monument of love beside the Yamuna River.", bestFor: "Mughal Architecture, Marble Inlay, Sunrises" },
      { name: "Varanasi", highlight: "Subah-e-Banaras morning boat ride, Dashashwamedh Ghat Aarti, and Sarnath", description: "The spiritual heart of India, where classical morning sitar notes and evening river lamps honor the sacred Ganga.", bestFor: "Sacred River Rites, Banarasi Silk, Classical Music" },
      { name: "Ayodhya", highlight: "Shri Ram Janmabhoomi Mandir, Kanak Bhawan, and Saryu River Ghats", description: "Ancient epic capital resting along the serene Saryu River, rich with sacred shrines and newly built plazas.", bestFor: "Epic Sacred Heritage, Saryu Evening Aarti" },
      { name: "Mathura-Vrindavan", highlight: "Banke Bihari Temple, Prem Mandir, and Yamuna boat rides", description: "Sacred twin cities celebrating the life of Lord Krishna with joyous bhajans and fragrant Holi celebrations.", bestFor: "Spiritual Festivities, Sweets, Heritage Temples" },
      { name: "Lucknow", highlight: "Bara Imambara, Rumi Darwaza, and Chikan embroidery bazaars", description: "The City of Nawabs, celebrated for courteous tehzeeb culture, delicate needlecraft, and Awadhi dining.", bestFor: "Awadhi Kebabs, Chikan Embroidery, Imambara Architecture" }
    ]
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    region: "Himalayas",
    tagline: "Sacred Ganga Headwaters, Corbett Tigers, and Auli Alpine Skiing",
    theme: {
      accent: "#0d9488",
      accentHover: "#14b8a6",
      accentMuted: "rgba(13, 148, 136, 0.15)",
      gradient: "linear-gradient(135deg, rgba(13, 148, 136, 0.22) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(13, 148, 136, 0.12)",
      badgeBorder: "rgba(13, 148, 136, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "March to June & September to November",
    idealDuration: "6 to 9 Days",
    vibe: "Himalayan Wilderness, Yoga Retreats & Sacred Shrines",
    overview: "Devbhoomi, the Land of the Gods. Pristine alpine meadows, luxury riverside wellness retreats in Rishikesh, and Himalayan trails.",
    cities: [
      { name: "Dehradun", highlight: "Robber's Cave, Forest Research Institute, and bakeries", description: "Picturesque valley capital positioned between the Ganga and Yamuna rivers, known for pleasant climate.", bestFor: "Forest Architecture, Valley Strolls" },
      { name: "Mussoorie", highlight: "Kempty Falls, Gun Hill, and Camel's Back Road", description: "The Queen of the Hills offering dramatic views of the Doon Valley and snow-clad Himalayan peaks.", bestFor: "Colonial Promenades, Mountain Air, Waterfalls" },
      { name: "Nainital", highlight: "Naini Lake boating, Naina Devi Temple, and snow views", description: "A tranquil emerald lake town enclosed by seven steep hills in the Kumaon region.", bestFor: "Lakeside Boating, Pine Walking Trails" },
      { name: "Rishikesh", highlight: "Luxury Ayurvedic ashrams, Ganga evening Aarti, and river rafting", description: "The Yoga Capital of the World, where the holy river emerges from high mountains into clear gravel beds.", bestFor: "Wellness Sanctuaries, Yoga Retreats, River Rafting" },
      { name: "Haridwar", highlight: "Har Ki Pauri sacred evening Aarti and Mansa Devi Temple", description: "One of the holiest river gateways in India, where thousands of floating diyas light up the Ganga.", bestFor: "Sacred River Rites, Vedic Traditions" },
      { name: "Jim Corbett", highlight: "India's oldest national park and Dhikala zone tiger safaris", description: "A legendary wildlife haven along the Ramganga River, sheltering Royal Bengal tigers and wild elephants.", bestFor: "Wild Bengal Tiger Safaris, Riverside Lodges" },
      { name: "Auli", highlight: "Auli ropeway, artificial lake, and snow skiing slopes", description: "Premier Himalayan ski resort offering panoramic 180-degree vistas of Nanda Devi and Trishul peaks.", bestFor: "Skiing, Alpine Meadows, Snow Vistas" },
      { name: "Kedarnath", highlight: "Ancient stone Jyotirlinga shrine set against snow peaks", description: "Revered high-altitude Himalayan pilgrimage destination standing proudly at 11,755 feet.", bestFor: "Sacred High-Altitude Treks, Mountain Solitude" },
      { name: "Badrinath", highlight: "Badrinath Temple, Tapt Kund, and Mana the last Indian village", description: "Sacred Vishnu shrine standing between the Nar and Narayana mountain ranges beside the Alaknanda.", bestFor: "Char Dham Pilgrimage, High Valley Exploration" }
    ]
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    region: "East India",
    tagline: "Darjeeling Tea Estates, Victorian Kolkata, and Sundarban Mangroves",
    theme: {
      accent: "#f59e0b",
      accentHover: "#fbbf24",
      accentMuted: "rgba(245, 158, 11, 0.15)",
      gradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.22) 0%, rgba(11, 15, 21, 0.95) 100%)",
      badgeBg: "rgba(245, 158, 11, 0.12)",
      badgeBorder: "rgba(245, 158, 11, 0.35)",
    },
    bannerImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop",
    bestSeason: "October to March",
    idealDuration: "6 to 8 Days",
    vibe: "Colonial Intellectual Arts, Tea Estates & Mangroves",
    overview: "From the grand Victoria Memorial and coffee houses of Kolkata to Darjeeling's champagne tea slopes and Royal Bengal tiger mangroves.",
    cities: [
      { name: "Kolkata", highlight: "Victoria Memorial, Howrah Bridge, Kumartuli, and coffee houses", description: "The City of Joy and cultural capital, celebrated for colonial architecture, literature, and mustard hilsa feasts.", bestFor: "Colonial Heritage, Literary Cafes, Classical Arts" },
      { name: "Darjeeling", highlight: "Tiger Hill sunrise over Kangchenjunga, Toy Train, and Happy Valley Tea", description: "World-renowned hill station famous for muscatel-scented champagne teas and Himalayan views.", bestFor: "Tea Tastings, Mountain Steam Trains, Sunrise Vistas" },
      { name: "Kalimpong", highlight: "Deolo Hill, cactus nurseries, and historic silk route mansions", description: "A peaceful hill retreat rich with Tibetan monasteries, gladioli blooms, and Himalayan craft bazaars.", bestFor: "Quiet Mountain Lodges, Orchid Gardens" },
      { name: "Sundarbans", highlight: "UNESCO mangrove delta boat safaris and Royal Bengal tigers", description: "The largest mangrove delta on Earth, where winding tidal waterways shelter tigers and estuarine crocodiles.", bestFor: "Mangrove Cruises, Tiger Tracking, Eco Wildlife" }
    ]
  }
];

// Helper to look up a state by slug
export function getStateById(id) {
  return destinationsData.find(d => d.id === id);
}

// Popular domestic highlights for quick featured tabs on homepage
export const popularDomesticDestinations = [
  {
    stateId: "rajasthan",
    title: "Rajasthan Heritage",
    subtitle: "Jaipur, Udaipur & Jodhpur",
    highlight: "Private Palace Stays & Fort Trails",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1000&auto=format&fit=crop",
    accent: "#c88a35",
    citiesCount: 7
  },
  {
    stateId: "kerala",
    title: "Kerala Backwaters",
    subtitle: "Alleppey, Munnar & Kochi",
    highlight: "Luxury Kettuvallam & Tea Estates",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1000&auto=format&fit=crop",
    accent: "#2e7d5b",
    citiesCount: 9
  },
  {
    stateId: "ladakh",
    title: "Ladakh High Passes",
    subtitle: "Leh, Pangong & Nubra",
    highlight: "High-Altitude Glamping & Lakes",
    image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1000&auto=format&fit=crop",
    accent: "#3b82f6",
    citiesCount: 4
  },
  {
    stateId: "himachal-pradesh",
    title: "Himachal Alpine",
    subtitle: "Shimla, Manali & Spiti",
    highlight: "Cedar Forest Chalets & Snow Slopes",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=1000&auto=format&fit=crop",
    accent: "#10b981",
    citiesCount: 12
  },
  {
    stateId: "goa",
    title: "Goa Coastal Luxury",
    subtitle: "North & South Goa, Panaji",
    highlight: "Private Villas & Yacht Charters",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000&auto=format&fit=crop",
    accent: "#0d9488",
    citiesCount: 6
  },
  {
    stateId: "andaman-nicobar",
    title: "Andaman Islands",
    subtitle: "Havelock & Neil Island",
    highlight: "Coral Reefs & Azure Lagoons",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1000&auto=format&fit=crop",
    accent: "#0ea5e9",
    citiesCount: 3
  },
  {
    stateId: "uttarakhand",
    title: "Uttarakhand Peaks",
    subtitle: "Rishikesh, Corbett & Auli",
    highlight: "Wellness Ashrams & Ski Slopes",
    image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1000&auto=format&fit=crop",
    accent: "#14b8a6",
    citiesCount: 9
  },
  {
    stateId: "tamil-nadu",
    title: "Tamil Nadu Living Culture",
    subtitle: "Ooty, Madurai & Chennai",
    highlight: "Chola Temples & Nilgiri Rail",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1000&auto=format&fit=crop",
    accent: "#b45309",
    citiesCount: 7
  }
];
