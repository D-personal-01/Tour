// Comprehensive travel insurance plans and comparison matrix

export const insurancePlans = [
  {
    id: "domestic-explorer",
    name: "Domestic Explorer",
    badge: "Most Selected for Weekend Breaks",
    tagline: "Essential medical and baggage security for domestic journeys across India.",
    baseDailyRate: 149,
    medicalCoverage: "₹5,00,000",
    baggageCoverage: "₹25,000",
    tripCancellation: "₹50,000",
    flightDelay: "₹10,000 (after 4 hours)",
    evacuation: "₹2,50,000",
    adventureSports: "Not Included",
    idealFor: "Solo travelers, couples on short getaways, and regular weekend city breaks",
    features: [
      "Cashless hospitalization across 6,500+ network hospitals in India",
      "Compensation for checked baggage loss or delay beyond 6 hours",
      "Reimbursement for unexpected flight cancellations or weather delays",
      "24/7 emergency toll-free claims helpline with bilingual assistance"
    ]
  },
  {
    id: "family-haven",
    name: "Family Haven Comprehensive",
    badge: "Recommended for Families",
    tagline: "Total protection designed for family vacations, multi-city road trips, and resort getaways.",
    baseDailyRate: 349,
    medicalCoverage: "₹15,00,000",
    baggageCoverage: "₹75,000",
    tripCancellation: "₹1,50,000",
    flightDelay: "₹25,000 (after 3 hours)",
    evacuation: "₹10,00,000",
    adventureSports: "Water sports & light trekking covered",
    idealFor: "Families traveling with children and grandparents, holiday packages, and multi-state vacations",
    features: [
      "Comprehensive medical coverage including pediatric and emergency dental care",
      "Hotel extension reimbursement if a family member falls unwell",
      "Immediate coverage for missed train and flight connections during multi-leg tours",
      "Complimentary return flight for children in medical emergencies"
    ]
  },
  {
    id: "senior-leisure",
    name: "Senior Leisure Supreme",
    badge: "Specialized Elder Care",
    tagline: "Tailored health security and comfort priority for travelers aged 60 and above.",
    baseDailyRate: 429,
    medicalCoverage: "₹20,00,000",
    baggageCoverage: "₹50,000",
    tripCancellation: "₹2,00,000",
    flightDelay: "₹20,000 (after 3 hours)",
    evacuation: "₹15,00,000",
    adventureSports: "Gentle nature activities covered",
    idealFor: "Senior citizens, spiritual pilgrimage travelers (Char Dham, Varanasi, Tirupati), and wellness retreats",
    features: [
      "Coverage for life-threatening exacerbation of pre-existing conditions",
      "Emergency medical attendant travel expenses included",
      "Priority assistance for prescription medicine replacement in case of loss",
      "No mandatory medical check-ups required prior to policy issuance"
    ]
  },
  {
    id: "himalayan-adventure",
    name: "Himalayan & Adventure Rider",
    badge: "High Altitude & Expeditions",
    tagline: "Specialized cover for high-altitude passes, mountain expeditions, skiing, and trekking.",
    baseDailyRate: 499,
    medicalCoverage: "₹25,00,000",
    baggageCoverage: "₹60,000 (includes gear)",
    tripCancellation: "₹2,00,000",
    flightDelay: "₹30,000 (after 3 hours)",
    evacuation: "₹20,00,000 (Air & Heli-evacuation)",
    adventureSports: "Full cover up to 5,500m altitude",
    idealFor: "Ladakh bike journeys, Spiti Valley expeditions, Gulmarg skiing, and Himalayan treks",
    features: [
      "Emergency high-altitude helicopter rescue and air ambulance assistance",
      "Trekking, mountaineering, skiing, and river rafting accidental cover",
      "Protection for specialized hiking gear, cameras, and winter equipment",
      "Search and rescue coordination with local mountain rescue authorities"
    ]
  }
];

export const insuranceComparisonRows = [
  { feature: "Emergency Medical Expenses", domestic: "₹5 Lakhs", family: "₹15 Lakhs", senior: "₹20 Lakhs", adventure: "₹25 Lakhs" },
  { feature: "Cashless Hospital Network", domestic: "6,500+ Hospitals", family: "6,500+ Hospitals", senior: "6,500+ Priority Care", adventure: "Pan-India Mountain Care" },
  { feature: "Emergency Air Evacuation", domestic: "Optional Add-on", family: "Covered (₹10 Lakhs)", senior: "Covered (₹15 Lakhs)", adventure: "Helicopter & Air Rescue" },
  { feature: "Trip Cancellation or Interruption", domestic: "₹50,000", family: "₹1,50,000", senior: "₹2,00,000", adventure: "₹2,00,000" },
  { feature: "Loss of Checked-in Baggage", domestic: "₹25,000", family: "₹75,000", senior: "₹50,000", adventure: "₹60,000 (Incl. Gear)" },
  { feature: "Flight Delay Reimbursement", domestic: "After 4 Hours", family: "After 3 Hours", senior: "After 3 Hours", adventure: "After 3 Hours" },
  { feature: "Adventure & High Altitude Rider", domestic: "Excluded", family: "Basic Watersports", senior: "Gentle Activities", adventure: "Up to 5,500m Covered" },
  { feature: "Pre-Existing Conditions Exacerbation", domestic: "Excluded", family: "Excluded", senior: "Covered (Life-Threat)", adventure: "Excluded" },
  { feature: "24/7 Medical Concierge Helpline", domestic: "Standard Line", family: "Priority Family Line", senior: "Dedicated Elder Support", adventure: "Emergency Mountain SOS" }
];
