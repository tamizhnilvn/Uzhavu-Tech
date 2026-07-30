export interface Solution {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  benefits: string[];
  techStack: string[];
}

export const SOLUTIONS_DATA: Solution[] = [
  {
    id: "ai-crop-advisory",
    title: "AI Crop Advisory",
    shortDesc: "Real-time crop health monitoring and hyper-local disease diagnosis using computer vision.",
    fullDesc: "Uzhavu Tech's AI Crop Advisory leverages proprietary machine learning algorithms to diagnose leaf pests, nutrient deficiencies, and fungal attacks in under 10 seconds through smartphone photo uploads or drone camera feeds.",
    iconName: "BrainCircuit",
    benefits: ["Detect diseases 14 days earlier", "Reduce chemical pesticide spending by 35%", "Customized spray schedule per crop cycle"],
    techStack: ["PyTorch", "OpenCV", "TensorFlow Lite", "Edge Computing"]
  },
  {
    id: "smart-irrigation",
    title: "Smart Irrigation Control",
    shortDesc: "Automated, moisture-based water delivery minimizing electricity and water footprint.",
    fullDesc: "Integrates underground soil moisture sensors with automated solenoid valves. The AI engine predicts evapotranspiration rates using 7-day hyper-local micro-weather patterns to release exact water volumes.",
    iconName: "Droplets",
    benefits: ["Save up to 45% irrigation water", "Prevent root rot and soil leaching", "Remote pump control via mobile App/SMS"],
    techStack: ["ESP32 Microcontrollers", "MQTT Protocol", "Soil Capacitive Sensors"]
  },
  {
    id: "iot-monitoring",
    title: "IoT Field Sensor Network",
    shortDesc: "Low-cost plug-and-play agricultural telemetry arrays deployed directly in farm soil.",
    fullDesc: "Modular IoT nodes monitoring NPK (Nitrogen, Phosphorus, Potassium), soil pH, EC (Electrical Conductivity), ambient temperature, and humidity, operating continuously on solar micro-harvesting power.",
    iconName: "Cpu",
    benefits: ["Real-time soil health score dashboard", "Long-range LoRaWAN telemetry", "Zero wiring, 3-year autonomous battery life"],
    techStack: ["LoRaWAN", "RS485 Modbus", "Solar Micro-PV"]
  },
  {
    id: "drone-services",
    title: "Autonomous Drone Spraying & Mapping",
    shortDesc: "High-precision aerial multispectral scanning and uniform liquid fertilizer application.",
    fullDesc: "On-demand drone fleet services offering 10x faster chemical/organic spraying and high-resolution NDVI vegetation index mapping to identify stress pockets across multi-acre plots.",
    iconName: "Plane",
    benefits: ["Cover 1 acre in under 7 minutes", "Zero human exposure to hazardous sprays", "95% spray target accuracy"],
    techStack: ["RTK GPS", "Multispectral Cameras", "Autonomous Waypoint Navigation"]
  },
  {
    id: "soil-analysis",
    title: "Instant Digital Soil Testing",
    shortDesc: "Rapid optical soil diagnostics providing accurate chemical composition reports instantly.",
    fullDesc: "Eliminates 2-week laboratory wait times. Portable spectro-photometric readers quantify soil organic carbon and major nutrients on the field within minutes.",
    iconName: "FlaskConical",
    benefits: ["Instant soil health cards", "Precise fertilizer recommendation", "Substantially lower testing cost"],
    techStack: ["NIR Spectroscopy", "Cloud Analytics"]
  },
  {
    id: "weather-prediction",
    title: "Hyper-Local Micro-Weather Insights",
    shortDesc: "Kilometer-scale weather forecasting tailored specifically to farm coordinates.",
    fullDesc: "Aggregates satellite radar data and regional automatic weather stations (AWS) to deliver precise alerts for frost, unexpected rain, wind gusts, and humidity spikes.",
    iconName: "CloudSun",
    benefits: ["Avoid washouts during fertilizer application", "Protect crops from flash frost", "Custom SMS voice alerts in local languages"],
    techStack: ["Global Forecast System (GFS)", "Machine Learning Weather Interpolation"]
  },
  {
    id: "direct-marketplace",
    title: "Direct B2B Market Linkage",
    shortDesc: "Direct connection between farm producers and wholesale buyers, bypassing intermediaries.",
    fullDesc: "Transparent digital marketplace enabling verified buyers (food processors, exporters, urban retail chains) to pre-book harvests directly from farmers with transparent pricing.",
    iconName: "Store",
    benefits: ["18-25% higher profit margins for farmers", "Guaranteed harvest buyback contracts", "Transparent digital payments"],
    techStack: ["Smart Contracts", "Escrow Payment Gateway"]
  },
  {
    id: "export-assistance",
    title: "Global Export Compliance & Quality Certs",
    shortDesc: "Assisting progressive farmers in meeting international phytosanitary and organic standards.",
    fullDesc: "Streamlines farm-level record keeping to earn GlobalGAP and APEDA certifications, opening high-value export corridors across Europe, the Middle East, and Southeast Asia.",
    iconName: "Globe",
    benefits: ["Access to international premium markets", "Complete digital traceability ledger", "Higher farmgate realization"],
    techStack: ["Blockchain Traceability", "Digital Compliance Engine"]
  },
  {
    id: "agri-logistics",
    title: "Cold-Chain Logistics & Storage Tracking",
    shortDesc: "Temperature-monitored harvest transport to dramatically reduce post-harvest decay.",
    fullDesc: "Integrated logistics coordination connecting smallholders with refrigerated transit vehicles and local solar cold-storage micro-hubs.",
    iconName: "Truck",
    benefits: ["Reduce post-harvest loss from 30% to below 5%", "Real-time GPS & temperature tracking", "Optimized route aggregation"],
    techStack: ["GPS Telemetry", "BLE Temperature Logging"]
  },
  {
    id: "analytics-dashboard",
    title: "Central Enterprise Farmer Dashboard",
    shortDesc: "Comprehensive command center for yield forecasting, expense tracking, and ROI analysis.",
    fullDesc: "A multi-lingual web and mobile interface giving farmers complete visibility over soil metrics, water usage, input costs, projected yields, and market trends.",
    iconName: "LayoutDashboard",
    benefits: ["Single view of farm operations", "Exportable records for bank loans", "Offline-first sync mode"],
    techStack: ["React Native", "PWA Architecture", "SQLite"]
  }
];

export const FAQ_DATA = [
  {
    question: "What is Uzhavu Tech?",
    answer: "Uzhavu Tech is an Indian agritech startup building affordable IoT devices, AI crop diagnostic tools, precision irrigation systems, and market linkage solutions designed to directly raise farmer profit margins."
  },
  {
    question: "How does Uzhavu Tech increase a farmer's income?",
    answer: "We increase income by cutting input costs up to 35% (saving fertilizer and water), reducing crop losses through early AI pest detection, and connecting farmers directly to buyers to eliminate middleman commissions."
  },
  {
    question: "Is the technology affordable for smallholder farmers?",
    answer: "Yes. Affordability is our core mission. Our hardware nodes are modular and cost up to 60% less than imported equipment. We also offer Drone-as-a-Service (DaaS) and Pay-per-Use farm advisory models."
  },
  {
    question: "Does the app support local Indian languages?",
    answer: "Absolutely. Uzhavu Tech's mobile app supports Tamil, Telugu, Kannada, Hindi, Malayalam, and English with voice command capabilities for low-literacy users."
  },
  {
    question: "How does the AI Crop Advisory work?",
    answer: "A farmer snaps a picture of an unhealthy crop leaf using our app. Our AI model compares the image against millions of agricultural data points to diagnose the disease and prescribe the exact low-cost treatment within seconds."
  },
  {
    question: "What is Smart Irrigation, and how does it save water?",
    answer: "Our smart irrigation controller monitors real-time soil moisture and local weather predictions. It automatically opens water valves only when plants need it, saving up to 45% water and electricity."
  },
  {
    question: "Do I need internet connectivity across my entire farm?",
    answer: "No. Our IoT field nodes use long-range LoRaWAN technology that can transmit data across 5-10 kilometers without cellular internet. The central hub syncs to the cloud whenever a signal is available."
  },
  {
    question: "How do drone services help my farm?",
    answer: "Our drones spray liquid bio-fertilizers and pesticides in a fraction of the time, cover hard-to-reach foliage, reduce human chemical exposure, and create health maps to highlight stressed areas."
  },
  {
    question: "How can buyers purchase produce through Uzhavu Tech?",
    answer: "Wholesale buyers, food processors, and exporters can register on our B2B portal to view verified crop listings, estimated harvest dates, and quality scores, then initiate direct purchase contracts."
  },
  {
    question: "Who founded Uzhavu Tech?",
    answer: "Uzhavu Tech was founded by Tamizh Nilavan, a final-year Electronics and Communication Engineering student and President of the IEI Student Chapter, specializing in IoT, AI, and embedded systems."
  },
  {
    question: "What is the pre-incubation status of Uzhavu Tech?",
    answer: "Uzhavu Tech is actively pre-incubated, testing prototypes across pilot farms in South India, validating sensor durability, and building partnerships with agricultural research centers."
  },
  {
    question: "Can I install the IoT soil sensors myself?",
    answer: "Yes! The sensors are plug-and-play. Simply insert the probe into the soil, turn on the solar-powered gateway node, and open the app. No electrician or technician is needed."
  },
  {
    question: "How does Uzhavu Tech assist with export quality?",
    answer: "We track farm practices from seed to harvest on a digital ledger. This verifiable history helps farmers qualify for GlobalGAP certification and export compliance standards."
  },
  {
    question: "Does Uzhavu Tech integrate with government schemes?",
    answer: "Yes, our team assists farmers in navigating subsidies under PM-KUSUM (solar pumps), Sub-Mission on Agricultural Mechanization (SMAM for drones), and PMKSY (Per Drop More Crop)."
  },
  {
    question: "How durable are the IoT devices in extreme weather?",
    answer: "All field nodes are IP67 weatherproof, enclosed in UV-resistant polycarbonate housing, and tested to withstand high monsoon humidity and temperatures exceeding 48°C."
  },
  {
    question: "How does hyper-local weather forecasting work?",
    answer: "We combine global satellite meteorological data with local telemetry to project micro-weather changes specific to a 1 km radius around your farm plot."
  },
  {
    question: "What crops are currently supported?",
    answer: "We currently support Paddy, Sugarcane, Cotton, Banana, Groundnut, Tomato, Chilli, Turmeric, Maize, and major vegetable varieties."
  },
  {
    question: "How can investors or partners collaborate with Uzhavu Tech?",
    answer: "We welcome partnerships with impact investors, agritech incubators, government agencies, and corporate CSR programs. Contact us through our partner contact portal."
  },
  {
    question: "Is my farm data secure and private?",
    answer: "Yes. All farm data is encrypted with enterprise-grade AES-256 protocols. We never sell raw individual farmer data to third parties."
  },
  {
    question: "How do I request a live demonstration for my village or cluster?",
    answer: "Click the 'Request Demo' button on our homepage or contact our team directly through WhatsApp or email to schedule an on-field demo."
  }
];

export const SDGS_DATA = [
  { id: 1, title: "No Poverty", desc: "Doubling smallholder farmer profit margins through tech efficiency." },
  { id: 2, title: "Zero Hunger", desc: "Increasing crop output and securing food supply chains." },
  { id: 8, title: "Decent Work", desc: "Creating tech-enabled rural youth entrepreneurship opportunities." },
  { id: 9, title: "Industry & Innovation", desc: "Deploying edge AI and IoT networks in rural infrastructure." },
  { id: 12, title: "Responsible Consumption", desc: "Minimizing synthetic fertilizer overuse and post-harvest decay." },
  { id: 13, title: "Climate Action", desc: "Reducing water extraction and carbon footprints in farming." }
];