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
          locations: "Udaipur, Jaipur, Jodhpur, Gwalior",
          image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop"
        },
        {
          title: "Planter Estate Bungalows",
          desc: "Century-old British colonial bungalows surrounded by cloud-hung tea gardens in Munnar, Darjeeling, and Coonoor.",
          locations: "Munnar, Darjeeling, Ooty, Coorg",
          image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=800&auto=format&fit=crop"
        },
        {
          title: "Jungle & Tiger Safari Lodges",
          desc: "Luxury tented pavilions with air conditioning and private plunge pools bordering Kanha, Bandhavgarh, and Ranthambore reserves.",
          locations: "Kanha, Bandhavgarh, Corbett, Gir",
          image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop"
        },
        {
          title: "Secluded Coastal Villas",
          desc: "Private oceanfront properties with direct barefoot beach access, private chefs, and sunset cocktail decks in South Goa and Andaman.",
          locations: "South Goa, Havelock, Alibaug, Varkala",
          image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop"
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
          locations: "Dehradun to Char Dham, Srinagar to Gulmarg",
          image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop"
        },
        {
          title: "Private Jet & Turboprop Charters",
          desc: "Executive charter flights between non-scheduled airports, wildlife airstrips, and island destinations with zero airport queues.",
          locations: "Pan-India Custom Air Routes",
          image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop"
        },
        {
          title: "Commercial Aviation Concierge",
          desc: "Business class booking with Air India, Vistara, and IndiGo with airport lounge passes, meet-and-greet, and priority luggage tags.",
          locations: "All Major Domestic Air Hubs",
          image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop"
        },
        {
          title: "Inter-Island Air Transfers",
          desc: "Speedy twin-otter and helicopter hops connecting Port Blair to Havelock, and Kochi to Agatti Lagoon in Lakshadweep.",
          locations: "Andaman & Lakshadweep Atolls",
          image: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=800&auto=format&fit=crop"
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
          locations: "Delhi, Mumbai, Bengaluru, Jaipur",
          image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop"
        },
        {
          title: "Executive Luxury MPVs",
          desc: "Toyota Vellfire and Innova HyCross lounge editions with reclining captain seats, ambient lighting, and panoramic sunroofs.",
          locations: "Ideal for Multi-City Family Journeys",
          image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop"
        },
        {
          title: "Himalayan 4x4 Expedition Vehicles",
          desc: "Specially modified Toyota Fortuner and Isuzu 4x4 vehicles equipped with supplemental oxygen cylinders and high-ground clearance.",
          locations: "Ladakh, Spiti, Kinnaur, Sikkim",
          image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop"
        },
        {
          title: "VIP Luxury Tempo Travellers",
          desc: "Customized 9-seater lounge vans with leather pushback recliners, onboard mini-refrigerators, and Wi-Fi for multi-family tours.",
          locations: "Available Pan-India",
          image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=800&auto=format&fit=crop"
        }
      ]
    },
    cruises: {
      tag: "OCEAN LINERS & COASTAL EXPEDITIONS",
      title: "Luxury Cruise Liners, River Expeditions & Solar Houseboats",
      desc: "Sail across open ocean horizons aboard grand luxury cruise liners, drift along Kerala's tranquil backwater lagoons on private solar houseboats, or chart private sunset yacht voyages along Goa and the Andaman Sea.",
      image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1920&auto=format&fit=crop",
      cards: [
        {
          title: "Luxury Ocean Cruise Liners",
          desc: "Multi-deck ocean cruise voyages across Mumbai, Goa, Kochi, and Lakshadweep Atoll featuring oceanview staterooms, sundeck pools, fine dining, and live theater entertainment.",
          locations: "Mumbai to Goa, Lakshadweep & Kochi",
          image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=800&auto=format&fit=crop"
        },
        {
          title: "Private Solar Kettuvallams",
          desc: "Silent electric-motor wooden houseboats with air-conditioned glass bedrooms, private chefs, and serene open sundecks in Kumarakom.",
          locations: "Kumarakom & Alleppey, Kerala",
          image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop"
        },
        {
          title: "Brahmaputra & Ganges River Expeditions",
          desc: "Boutique expedition vessels sailing past Kaziranga wildlife shores and ancient riverside ghats with onboard naturalist lectures.",
          locations: "Guwahati to Jorhat, Assam & Varanasi, UP",
          image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=800&auto=format&fit=crop"
        },
        {
          title: "Private Yacht & Catamaran Charters",
          desc: "Luxury 50-foot catamarans and motor yachts for private dolphin spotting, sunset cocktail cruises, and secluded island barbecue stops.",
          locations: "Panaji & Mandovi River, Goa & Havelock, Andaman",
          image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=800&auto=format&fit=crop"
        }
      ]
    },
    visa: {
      tag: "PRIVATE VISA & EXPEDITED DOCUMENTATION",
      title: "Private Visa Concierge & Embassy Expeditions",
      desc: "Navigating diplomatic documentation with speed, accuracy, and total discretion. Our private concierge coordinates diplomatic appointments, biometric facilitation, doorstep document retrieval, and expedited processing for international travelers and Indian citizens.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1600&auto=format&fit=crop",
      cards: [
        {
          title: "Doorstep Document Collection",
          desc: "Our bonded security messengers collect, verify, and notarize your passport and supporting affidavits directly at your home or office.",
          locations: "Delhi NCR, Mumbai, Bengaluru, Chennai, Hyderabad, Kolkata",
          image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop"
        },
        {
          title: "Diplomatic & VIP Fast-Track",
          desc: "Assistance with urgent consular appointments, lounge access at visa centers, and fast-track biometric enrollment.",
          locations: "Schengen, UK, USA, Japan, UAE, Singapore, Australia",
          image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop"
        },
        {
          title: "Inbound India Tourist e-Visa",
          desc: "Complete pre-clearance and express e-Visa assistance for international visitors, NRI delegations, and destination wedding guests.",
          locations: "Pan-India 28 International Airports",
          image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop"
        },
        {
          title: "Emergency Travel Clearances",
          desc: "Round-the-clock liaison with regional passport offices and consular desks for urgent business or medical transit.",
          locations: "Dedicated 24/7 Diplomatic Helpdesk",
          image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop"
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
            className="btn-pill-gold"
            onClick={() => onOpenEnquiry({ packageTitle: current.title })}
          >
            Inquire for {current.title.split('&')[0]} →
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
                {card.image && (
                  <div className="service-card-media">
                    <img src={card.image} alt={card.title} loading="lazy" className="service-card-img" />
                    <div className="service-card-scrim"></div>
                  </div>
                )}
                <div className="service-card-content">
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
