import React, { useEffect } from 'react';
import './ServicePage.css';

export default function ServicePage({ serviceType, navigate, onOpenEnquiry }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [serviceType]);

  const serviceData = {
    hotels: {
      tag: "LUXURY HOSPITALITY CONCIERGE",
      title: "Heritage Palaces, Private Villas & Tea Bungalows",
      desc: "Through our long-standing relationships with royal family trusts and boutique estate owners, we secure signature palace wings, private plunge pool villas, and planters' bungalows across India with preferential tariffs and VIP amenities.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1600&auto=format&fit=crop",
      cards: [
        {
          title: "Royal Heritage Palaces",
          desc: "Live like royal nobility in Udaipur, Jaipur, Jodhpur, and Mysuru. Marble courtyards, hand-carved jharokhas, and private butler service.",
          locations: "Udaipur, Jaipur, Jodhpur, Gwalior"
        },
        {
          title: "Planter Estate Bungalows",
          desc: "Century-old British colonial bungalows surrounded by cloud-hung tea gardens in Munnar, Darjeeling, and Coonoor.",
          locations: "Munnar, Darjeeling, Ooty, Coorg"
        },
        {
          title: "Jungle & Tiger Safari Lodges",
          desc: "Luxury tented pavilions with air conditioning and private plunge pools bordering Kanha, Bandhavgarh, and Ranthambore reserves.",
          locations: "Kanha, Bandhavgarh, Corbett, Gir"
        },
        {
          title: "Secluded Coastal Villas",
          desc: "Private oceanfront properties with direct barefoot beach access, private chefs, and sunset cocktail decks in South Goa and Andaman.",
          locations: "South Goa, Havelock, Alibaug, Varkala"
        }
      ]
    },
    flights: {
      tag: "AVIATION & HELICOPTER LOGISTICS",
      title: "Private Flight Concierge & Helicopter Transfers",
      desc: "Eliminate long mountain road transit. We coordinate private helicopter transfers, charter flights, and premium commercial aviation across India with tarmac VIP assistance and excess luggage handling.",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1600&auto=format&fit=crop",
      cards: [
        {
          title: "Himalayan Helicopter Shuttles",
          desc: "Direct chopper transfers to Kedarnath, Badrinath, Gulmarg, and high-altitude Himalayan ski resorts without arduous road climbs.",
          locations: "Dehradun to Char Dham, Srinagar to Gulmarg"
        },
        {
          title: "Private Jet & Turboprop Charters",
          desc: "Executive charter flights between non-scheduled airports, wildlife airstrips, and island destinations with zero airport queues.",
          locations: "Pan-India Custom Air Routes"
        },
        {
          title: "Commercial Aviation Concierge",
          desc: "Business class booking with Air India, Vistara, and IndiGo with airport lounge passes, meet-and-greet, and priority luggage tags.",
          locations: "All Major Domestic Air Hubs"
        },
        {
          title: "Inter-Island Air Transfers",
          desc: "Speedy twin-otter and helicopter hops connecting Port Blair to Havelock, and Kochi to Agatti Lagoon in Lakshadweep.",
          locations: "Andaman & Lakshadweep Atolls"
        }
      ]
    },
    taxis: {
      tag: "CHAUFFEURED PRIVATE FLEET",
      title: "Chauffeured Luxury Fleet & Inter-City Transit",
      desc: "Our vehicles are exclusively reserved for your travel party. Driven by professional, background-verified English-speaking chauffeurs trained in diplomatic courtesy, defensive driving, and local cultural context.",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1600&auto=format&fit=crop",
      cards: [
        {
          title: "Luxury Sedans & Saloons",
          desc: "Mercedes-Benz E-Class, BMW 5/7 Series, and Audi A6 for smooth city transit, airport transfers, and royal wedding delegations.",
          locations: "Delhi, Mumbai, Bengaluru, Jaipur"
        },
        {
          title: "Executive Luxury MPVs",
          desc: "Toyota Vellfire and Innova HyCross lounge editions with reclining captain seats, ambient lighting, and panoramic sunroofs.",
          locations: "Ideal for Multi-City Family Journeys"
        },
        {
          title: "Himalayan 4x4 Expedition Vehicles",
          desc: "Specially modified Toyota Fortuner and Isuzu 4x4 vehicles equipped with supplemental oxygen cylinders and high-ground clearance.",
          locations: "Ladakh, Spiti, Kinnaur, Sikkim"
        },
        {
          title: "VIP Luxury Tempo Travellers",
          desc: "Customized 9-seater lounge vans with leather pushback recliners, onboard mini-refrigerators, and Wi-Fi for multi-family tours.",
          locations: "Available Pan-India"
        }
      ]
    },
    cruises: {
      tag: "WATERWAYS & COASTAL EXPEDITIONS",
      title: "Solar Houseboats, River Expeditions & Private Yachts",
      desc: "From tranquil drifting along Kerala's palm-fringed backwater lagoons to luxury Brahmaputra river journeys and sunset yacht charters off Goa's shores.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1600&auto=format&fit=crop",
      cards: [
        {
          title: "Private Solar Kettuvallams",
          desc: "Silent electric-motor wooden houseboats with air-conditioned glass bedrooms, private chefs, and serene open sundecks in Kumarakom.",
          locations: "Kumarakom & Alleppey, Kerala"
        },
        {
          title: "Brahmaputra River Expeditions",
          desc: "Boutique expedition vessels sailing past Kaziranga wildlife shores and tea estates with onboard naturalist lectures.",
          locations: "Guwahati to Jorhat, Assam"
        },
        {
          title: "Private Yacht Charters in Goa",
          desc: "Luxury 50-foot catamarans and motor yachts for private dolphin spotting, sunset cocktail cruises, and secluded island barbecue stops.",
          locations: "Panaji & Mandovi River, Goa"
        },
        {
          title: "Sundarbans Mangrove Safaris",
          desc: "Eco-cruisers with quiet engines navigating tidal creeks in search of Royal Bengal tigers, estuarine crocodiles, and kingfishers.",
          locations: "Sundarbans Delta, West Bengal"
        }
      ]
    }
  };

  const current = serviceData[serviceType] || serviceData.hotels;

  return (
    <div className="service-experience-page">
      {/* Hero */}
      <section 
        className="service-hero-banner"
        style={{ backgroundImage: `url(${current.image})` }}
      >
        <div className="service-hero-overlay"></div>
        <div className="bespoke-container service-hero-content">
          <nav className="service-breadcrumbs" aria-label="Breadcrumb">
            <button onClick={() => navigate('home')}>Home</button>
            <span className="bread-sep">/</span>
            <span className="bread-current">{current.title}</span>
          </nav>

          <span className="service-tag">{current.tag}</span>
          <h1 className="service-headline">{current.title}</h1>
          <div className="gold-divider"></div>
          <p className="service-desc">{current.desc}</p>

          <button 
            className="btn-primary"
            onClick={() => onOpenEnquiry({ packageTitle: current.title })}
          >
            Inquire for {current.title.split('&')[0]}
          </button>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="section-padding service-offerings-section">
        <div className="bespoke-container">
          <div className="section-header">
            <span className="section-label">CURATED SPECIFICATIONS</span>
            <h2 className="section-title">Signature Fleet & Collection Options</h2>
            <div className="gold-divider"></div>
          </div>

          <div className="service-cards-grid">
            {current.cards.map((card, idx) => (
              <div key={idx} className="service-card bespoke-card">
                <div className="service-card-num">0{idx + 1}</div>
                <h3 className="service-card-title">{card.title}</h3>
                <p className="service-card-desc">{card.desc}</p>
                <div className="service-card-locations">
                  <span>Locations:</span> {card.locations}
                </div>
                <button 
                  className="service-card-cta"
                  onClick={() => onOpenEnquiry({ packageTitle: `${current.title}: ${card.title}` })}
                >
                  Reserve / Inquire Service →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
