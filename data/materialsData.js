export const aspiServices = [
  {
    id: "mep-engineering",
    number: "01",
    title: "Engineering Consulting & MEP Coordination",
    tagline: "Seamlessly fusing mechanical, electrical, and technology systems into interior aesthetics.",
    description: "We eliminate the age-old clash between design and engineering. Our MEP engineers model and coordinate complex HVAC duct routing, electrical load distribution, fire suppression, plumbing, and ELV networks within 3D BIM models before site mobilization—guaranteeing clean ceiling planes, optimal thermal comfort, and zero rework.",
    capabilities: [
      "HVAC load calculations, VRV/VRF layout & continuous concealed linear diffusers",
      "Electrical distribution, dual-redundant UPS systems, DG sync & transformer design",
      "Fire alarm, smoke detection & automatic sprinkler network design (NBC compliant)",
      "BMS (Building Management Systems) & automated energy-efficiency monitoring",
      "Public health engineering (PHE) & specialized drainage routing"
    ],
    highlightMetric: "Zero On-Site MEP Clashes"
  },
  {
    id: "turnkey-fitout",
    number: "02",
    title: "Turnkey Interior Fit-Outs & Site Execution",
    tagline: "Single-team accountability from bare-shell demolition to final handover.",
    description: "ASPI oversees the entire lifecycle of the interior build. Our site engineers, project managers, and specialized trade crews execute civil works, acoustic drywall partitions, custom millwork, modular glass facades, and architectural finishes under rigorous multi-tier quality inspection checkpoints.",
    capabilities: [
      "Fast-track site mobilization, demolition & sub-floor preparation",
      "High-STC acoustic drywall, demountable double-glazed glass partitions",
      "Bespoke executive boardroom millwork, reception desks & acoustic wall panelling",
      "Modular ceiling installations integrating lighting, HVAC returns & sprinklers",
      "Multi-stage Quality Assurance (QA/QC) checklists with photographic milestone audits"
    ],
    highlightMetric: "100% On-Time Delivery"
  },
  {
    id: "compliance-management",
    number: "03",
    title: "Compliance Management & Statutory Approvals",
    tagline: "Rigorous statutory adherence, fire safety clearances, and zero-defect documentation.",
    description: "Navigating regulatory codes can stall a workplace launch. ASPI manages the complete statutory compliance envelope—securing Fire NOCs, Electrical Inspectorate (CEIG) clearances, Municipal building approvals, SEZ compliance, and LEED certification documentation seamlessly.",
    capabilities: [
      "National Building Code (NBC) & local municipal building bylaws compliance",
      "Fire Department approvals, hydrants, smoke extraction & Fire NOC certification",
      "Chief Electrical Inspectorate to Government (CEIG) approvals & transformer load sanctioning",
      "Occupational Health & Safety (OHSAS / ISO 45001) site safety compliance",
      "LEED & WELL building standard audit documentation & energy benchmarking"
    ],
    highlightMetric: "100% Statutory Clearance"
  },
  {
    id: "testing-commissioning",
    number: "04",
    title: "Testing, Commissioning & SmartOffice Handover",
    tagline: "Rigorous scientific validation before the first employee walks through the door.",
    description: "Before project delivery, we subject every installed system to exhaustive testing. From thermal imaging of electrical panels and HVAC air balancing to acoustic decibel testing and network speed certification, we deliver a fully stabilized, high-performance workplace.",
    capabilities: [
      "Thermal infrared thermography scans of electrical panels & switchgear",
      "HVAC airflow volume balancing (CFM testing) & indoor air quality (IAQ) validation",
      "Acoustic Noise Criterion (NC) & Speech Transmission Index (STI) verification",
      "Cat6/Cat6A Fluke network certification across all data nodes",
      "Digital O&M manuals, as-built drawings, and staff handover training"
    ],
    highlightMetric: "Comprehensive T&C Protocols"
  }
];

export const aspiMethodology = [
  {
    step: "01",
    name: "DISCOVER",
    subtitle: "Audits, Requirements & Compliance Roadmapping",
    duration: "Phase 1: Foundation",
    description: "Comprehensive preliminary study of physical site conditions, team density requirements, technology workflows, and statutory constraints.",
    deliverables: [
      "Site structural & MEP infrastructure feasibility audits",
      "Headcount growth projections & department workflow mapping",
      "Regulatory & compliance requirement review (Fire, Electrical, Municipal)",
      "Detailed project budget framing & fast-track milestone roadmap"
    ]
  },
  {
    step: "02",
    name: "DESIGN",
    subtitle: "Spatial Architecture, MEP Co-ordination & Material Curation",
    duration: "Phase 2: Precision Engineering",
    description: "Translating discovery data into fully coordinated 3D spatial models where aesthetics, acoustics, technology, and building services merge effortlessly.",
    deliverables: [
      "Optimized workplace space planning & ergonomic workstation layouts",
      "Full 3D MEP clash-detection & coordinated schematic drawings",
      "Smart access control, AV conferencing & structured IT cabling strategy",
      "International material specification selection & statutory submission drawings"
    ]
  },
  {
    step: "03",
    name: "DELIVER",
    subtitle: "Procurement, On-Site Execution & SmartOffice Commissioning",
    duration: "Phase 3: Execution & Handover",
    description: "Mobilizing our vetted trade specialists and project managers to execute the build with strict QA/QC, continuous progress tracking, and rigorous testing.",
    deliverables: [
      "Global material procurement & supply chain logistics management",
      "Precision civil, interior fit-out & multi-tier engineering execution",
      "Rigorous testing, thermal scans, acoustic balancing & commissioning",
      "Final statutory clearances, as-built documentation & white-glove handover"
    ]
  }
];

export const internationalMaterials = [
  {
    id: "korean-acoustics",
    category: "Acoustics & Ceilings",
    name: "Korean High-Performance Sound Absorption Panels",
    origin: "Seoul, South Korea",
    specs: "NRC rating 0.85 – 0.95 • Class A Flame Retardant",
    description: "Engineered high-density acoustic baffle and wall panel systems designed specifically for executive boardrooms and high-density open-plan collaboration zones, effectively eliminating echo and flutter.",
    applications: "Boardrooms, Video Conferencing Suites, Open Workspaces, Phone Booths",
    highlight: "NRC 0.90 Sound Dampening",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=85",
    colorHex: "#3A4454"
  },
  {
    id: "integrated-modular-ceilings",
    category: "Acoustics & Ceilings",
    name: "Integrated Architectural Modular Ceiling Systems",
    origin: "Global Precision Engineered",
    specs: "Seamless integration of HVAC linear diffusers, LED lighting & fire sprinklers",
    description: "Clean ceiling plane solutions that conceal structural slabs while allowing easy tool-free plenum access for facility maintenance and future MEP reconfiguration.",
    applications: "Executive Boardrooms, Town Halls, Primary Work Halls",
    highlight: "Tool-Free Plenum Access",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=85",
    colorHex: "#ECEAE4"
  },
  {
    id: "japanese-modular-carpet",
    category: "Flooring & Lighting",
    name: "Japanese Modular Acoustic Carpet Tile Systems",
    origin: "Osaka / Nagoya, Japan",
    specs: "Heavy Commercial Extra Heavy Duty (Castor Chair 2.8) • 100% Solution Dyed Nylon",
    description: "Engineered with integrated cushion backing that absorbs footfall impact noise (up to 28dB sound reduction), repels stains, and complies with low-VOC green building codes.",
    applications: "General Workstations, Executive Suites, Corridors",
    highlight: "28dB Impact Sound Reduction",
    image: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=800&q=85",
    colorHex: "#4C5158"
  },
  {
    id: "panasonic-circadian-lighting",
    category: "Flooring & Lighting",
    name: "Intelligent Panasonic Tunable Workspace Illumination",
    origin: "Osaka, Japan",
    specs: "Tunable White (2700K – 6500K) • High CRI 95+ • UGR < 16 Glare Control",
    description: "Circadian rhythm lighting that dynamically mirrors natural daylight cycles throughout the workday, reducing employee eye fatigue and significantly boosting focus and well-being.",
    applications: "Collaborative Desks, Focus Rooms, Wellness Zones",
    highlight: "Circadian Sync & UGR < 16",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=85",
    colorHex: "#F2E8D5"
  },
  {
    id: "smart-tech-infrastructure",
    category: "Technology Integrations",
    name: "Smart Access Control & Structured Cat6/Cat6A Cabling",
    origin: "Enterprise Tier 1 Infrastructure",
    specs: "Biometric Facial Recognition + RFID • 10 Gbps Structured Network • Server Racks",
    description: "End-to-end workplace technology infrastructure including touchless biometric turnstiles, video conferencing rooms (Zoom/Teams native), and structured server rack topologies.",
    applications: "Server Rooms, Main Entrances, Collaboration Hubs",
    highlight: "10 Gbps Certified Network",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=85",
    colorHex: "#1E2A38"
  },
  {
    id: "us-composite-surfaces",
    category: "Specialty Materials",
    name: "US Lightweight Composite & Solid Surface Monoliths",
    origin: "United States (LEED Compliant)",
    specs: "Non-porous, thermoformable, seamless joint technology, high impact resistance",
    description: "Ultra-sleek monolithic surfaces engineered for reception desks, executive boardroom credenzas, and architectural feature portals with zero visible joints and extreme durability.",
    applications: "Grand Reception Desks, Feature Portals, Executive Pantries",
    highlight: "LEED & GreenGuard Gold",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85",
    colorHex: "#D8D2C4"
  }
];

export const industriesServed = [
  {
    id: "corporate-offices",
    title: "Corporate Offices & Commercial Buildings",
    icon: "Building2",
    description: "Headquarters and high-performance workplaces designed for agile teamwork, executive privacy, and seamless technological collaboration.",
    highlight: "Fortune 500 & Tech Campuses"
  },
  {
    id: "data-centers",
    title: "Server Rooms & 24/7 Control Rooms",
    icon: "Server",
    description: "Mission-critical spaces with precision climate regulation, anti-static raised flooring, and continuous dual-redundant emergency power.",
    highlight: "99.999% Reliability Standards"
  },
  {
    id: "healthcare-institutions",
    title: "Hospitals, Healthcare & Educational Institutions",
    icon: "HeartPulse",
    description: "Specialized clinical and academic environments engineered with positive/negative pressure HVAC, acoustic shielding, and hygiene compliance.",
    highlight: "NABH & Regulatory Grade"
  },
  {
    id: "banks-financial",
    title: "Banks & Financial Institutions",
    icon: "Landmark",
    description: "High-security wealth management lounges, currency vaults, and low-latency trading floors with sound-masking speech privacy.",
    highlight: "RBI & High-Security Standards"
  },
  {
    id: "retail-showrooms",
    title: "Retail Showrooms, Malls & Exhibition Spaces",
    icon: "Sparkles",
    description: "Customer-facing flagship experience centers with high-CRI illumination, heavy point-load flooring, and dynamic display tech.",
    highlight: "High-Footfall Durability"
  },
  {
    id: "industrial-offices",
    title: "Industrial Offices & Manufacturing Facilities",
    icon: "Factory",
    description: "Engineered administrative hubs and plant R&D offices with industrial-grade acoustic dampening, dust isolation, and heavy electrical infrastructure.",
    highlight: "Heavy MEP & Factory Compliance"
  }
];

export const clientTestimonials = [
  {
    quote: "ASPI delivered our 42,000 sq.ft Cyber City headquarters in 90 days flat without a single MEP clash on site. Their SmartOffice integration, from Panasonic circadian lighting to the Korean acoustic baffles in our 14 boardrooms, created an extraordinary workplace.",
    client: "Rajesh Malhotra, VP Real Estate & Workplace",
    organization: "Global FinTech Solutions",
    location: "Cyber City, Gurugram (NCR)",
    scope: "42,000 sq.ft Turnkey Fit-Out & MEP",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=85"
  },
  {
    quote: "For our mission-critical Network Operations Center, failure was not an option. ASPI's MEP coordination and rigorous testing & commissioning protocols—including thermal scans of all switchgear and precision CRAC airflow balancing—gave us complete operational confidence.",
    client: "Vikram Sengupta, Chief Infrastructure Officer",
    organization: "CloudNexus Data Systems",
    location: "Expressway Tech Zone, Noida",
    scope: "18,500 sq.ft 24/7 Command Center",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=85"
  },
  {
    quote: "The acoustic isolation and compliance management provided by ASPI for our private banking chambers were world-class. They managed all statutory Fire NOC and Electrical Inspectorate clearances seamlessly with zero delay.",
    client: "Ananya Deshmukh, Head of Facilities & Infrastructure",
    organization: "Apex Capital & Wealth Partners",
    location: "Connaught Place, New Delhi",
    scope: "14,000 sq.ft Private Banking Enclave",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=85"
  }
];

export const journalData = [
  {
    id: "mep-interior-integration",
    title: "The SmartOffice-First Paradigm: Why MEP Must Precede Aesthetic Design",
    category: "Workplace Engineering",
    readTime: "5 min read",
    date: "Autumn / Winter 2024",
    author: "ASPI Workplace Engineering Council",
    excerpt: "Why traditional corporate fit-outs suffer from costly rework and how 3D MEP clash-detection models protect both aesthetic vision and mechanical integrity.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85",
    content: "When mechanical, electrical, and plumbing engineering are treated as secondary afterthoughts to interior styling, catastrophic site clashes occur—from unsightly exposed duct offsets to inadequate airflow over trading desks. At ASPI, we model MEP services in coordinated 3D BIM before a single partition is erected on site..."
  },
  {
    id: "circadian-workplace-productivity",
    title: "Circadian Lighting & Acoustic Baffling: The Science of High-Focus Workspaces",
    category: "Workplace Well-being & IAQ",
    readTime: "6 min read",
    date: "Late Summer 2024",
    author: "ASPI Lighting & Acoustic Division",
    excerpt: "How dynamic 2700K–6500K tunable white lighting paired with Korean high-NRC sound panels reduces employee cognitive fatigue by 38%.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
    content: "Natural sunlight changes color temperature continuously throughout the day. By integrating intelligent DALI-2 Panasonic tunable LED luminaires with automated circadian curves, we keep workplace inhabitants alert during morning focus hours and relaxed during afternoon collaboration..."
  },
  {
    id: "compliance-statutory-clearances",
    title: "Navigating Fire NOC, CEIG & NBC 2016 in High-Density Fit-Outs",
    category: "Statutory Compliance",
    readTime: "7 min read",
    date: "Summer 2024",
    author: "ASPI Statutory & Compliance Bureau",
    excerpt: "A comprehensive roadmap for facility heads on securing seamless fire safety clearances, transformer load sanctions, and local municipal occupancy certificates.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85",
    content: "Commercial occupancy delays often trace back to mismatched fire sprinkler hydraulic calculations or improper emergency exit egress widths. ASPI’s in-house compliance officers audit all drawings against the National Building Code (NBC 2016) before site submission..."
  }
];

export const blueprintData = {
  levels: [
    {
      id: "smart-office-floor",
      name: "SmartOffice Workspace & Boardroom Wing",
      area: "24,000 sq.ft",
      description: "Integrated trading floor, acoustic video conference rooms, executive pantries, and server room with centralized BMS monitoring.",
      layers: {
        architectural: "Demountable double-glazed acoustic glass partitions (Rw 46dB). Sound-absorbing wall baffles and private focus pods.",
        structural: "Reinforced 400kg/m² live load slab capacity with anti-static raised access floor (RAF) pedestal matrix.",
        mep: "Concealed 4-way cassette & linear slot VRF air conditioning, Cat6A cabling tray loops, DALI-2 Panasonic circadian lighting.",
        finishes: "Japanese modular acoustic carpet tiles (NRC 0.35) and US composite monolithic reception portal."
      },
      specHotspots: [
        { x: 30, y: 42, label: "Acoustic Video Conference Suite", note: "Korean sound absorption wall panels (NRC 0.90), isolated microphone array, STC 52 acoustic door seal." },
        { x: 65, y: 30, label: "Server Farm & UPS Enclosure", note: "Dedicated precision CRAC cooling, Inergen clean agent fire suppression, static transfer switch." },
        { x: 50, y: 70, label: "Tunable Circadian Lighting Zone", note: "Panasonic DALI-2 automated Kelvin shift (2700K to 6500K) following solar zenith for peak alertness." }
      ]
    },
    {
      id: "executive-wing",
      name: "Executive Chambers & Boardroom",
      area: "18,000 sq.ft",
      description: "VIP reception lounge, C-Suite private advisory chambers, boardrooms with integrated Zoom Room AV automation.",
      layers: {
        architectural: "High-security biometric access, sound-masked private consultation suites, smoked walnut acoustic slatting.",
        structural: "Heavy load reinforced floor for monolithic solid surface reception desk and executive archive storage.",
        mep: "Zero-draft whisper-quiet linear slot diffusers (NC < 25), circadian mood scenes, independent HEPA-13 air filtration.",
        finishes: "US composite monolith feature wall, hand-burnished brass metalwork trims, Japanese premium cushion carpet."
      },
      specHotspots: [
        { x: 26, y: 52, label: "Monolithic Reception Portal", note: "Lightweight US composite surface with seamless thermoformed joins and integrated LED backlighting." },
        { x: 74, y: 38, label: "Speech Privacy Sound Masking", note: "Direct-field acoustic emitters tuned to pink noise spectrum to prevent vocal eavesdropping." },
        { x: 48, y: 22, label: "Centralized BMS Gateway", note: "Live monitoring of IAQ (CO2, PM2.5), energy kilowatt-hour meters, and automated fault alert." }
      ]
    }
  ]
};
