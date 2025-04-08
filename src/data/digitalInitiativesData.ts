import aadhaarLogo from '@/assets/images/aadhaar.png';
import ndlLogo from '@/assets/images/ndl.png';

export const digitalInitiativesData = {
  aadhaar: {
    title: "Aadhaar",
    logo: aadhaarLogo,
    overview:
      "Aadhaar is India's biometric digital identity system that provides a unique 12-digit identity number to residents based on their biometric and demographic data.",
    launchDate: "2009-09-29",
    userBase: "1.3M+",
    transactions: "₹10T+",
    statesCovered: 36,
    impact: "Very High",
    features: [
      "Biometric authentication (fingerprint, iris scan)",
      "Unique identity verification",
      "e-KYC services",
      "Digital signature capability",
      "Mobile number linking"
    ],
    implementation: [
      "Centralized biometric database",
      "API integration with public/private services",
      "Multi-modal authentication options",
      "Secure QR code system",
      "Offline verification available"
    ],
    detailedInfo: `
      Aadhaar, launched in 2009, is the world's largest biometric identification system. 
      It assigns a 12-digit unique ID to residents based on biometric (fingerprint and iris scan) and demographic data. 
      It plays a central role in identity verification across India and is integrated with 1,200+ government and private services.
    `,
    economicImpact: `
      • ₹1.7 trillion saved by eliminating duplicate beneficiaries (World Bank)
      • ₹5.3 trillion enabled via Direct Benefit Transfer (DBT)
      • 90% reduction in KYC costs
      • 25B+ authentications annually
      • 500M+ bank accounts linked via Jan Dhan Yojana
    `,
    leadership: [
      {
        name: "Dr. Saurabh Garg",
        position: "CEO, UIDAI",
        initials: "SG"
      },
      {
        name: "Dr. Pramod Varma",
        position: "Chief Architect",
        initials: "PV"
      }
    ],
    contact: {
      email: "help@uidai.gov.in",
      helpline: "1947",
      website: "https://uidai.gov.in"
    }
  },

  upi: {
    title: "UPI",
    logo: "/images/image1.png",
    overview:
      "Unified Payments Interface (UPI) is India's real-time payment system that enables instant money transfers between bank accounts through mobile devices.",
    launchDate: "2016-04-11",
    userBase: "300M+",
    transactions: "₹100T+ (annual)",
    statesCovered: 36,
    impact: "Transformational",
    features: [
      "Instant bank-to-bank transfers",
      "24/7 availability",
      "No transaction fees",
      "QR code payments",
      "Multiple bank account linking"
    ],
    implementation: [
      "NPCI-operated infrastructure",
      "Interoperable between all banks",
      "Two-factor authentication",
      "Virtual Payment Address system",
      "Merchant API integration"
    ],
    detailedInfo: `
      UPI, developed by NPCI and launched in 2016, revolutionized digital payments in India by enabling instant, interoperable bank transfers.
      UPI allows users to send and receive money 24/7 with a single identifier like a phone number or Virtual Payment Address (VPA).
      It has significantly boosted financial inclusion and digital economy growth in India.
    `,
    economicImpact: `
      • ₹139 trillion in annual transaction value (FY 2023-24)
      • Over 11 billion monthly transactions
      • Major driver for India's $3T digital economy
      • Enabled financial access in rural areas
      • Boosted gig economy and digital entrepreneurship
    `,
    leadership: [
      {
        name: "Dilip Asbe",
        position: "MD & CEO, NPCI",
        initials: "DA"
      },
      {
        name: "Praveena Rai",
        position: "COO, NPCI",
        initials: "PR"
      }
    ],
    contact: {
      email: "support@npci.org.in",
      helpline: "1800-123-123",
      website: "https://www.npci.org.in"
    }
  },

  "api-setu": {
    title: "API Setu",
    logo: "/images/apisetu.png",
    overview:
      "National API gateway that enables seamless integration between different government services and applications with standardized APIs.",
    launchDate: "2020-05-15",
    userBase: "50M+",
    transactions: "500M+ API calls",
    statesCovered: 36,
    impact: "High",
    features: [
      "200+ government APIs",
      "Developer-friendly documentation",
      "OAuth 2.0 security",
      "Rate limiting",
      "Analytics dashboard"
    ],
    implementation: [
      "Cloud-native architecture",
      "Kubernetes-based scaling",
      "API versioning support",
      "Developer sandbox",
      "Automated monitoring"
    ],
    detailedInfo: `
      API Setu is an open API gateway developed under the Digital India initiative to standardize and simplify API-based interactions 
      between government departments and developers. It helps accelerate digital service delivery and improves interoperability across platforms.
    `,
    economicImpact: `
      • 500M+ API calls served
      • Reduced integration time for developers by 60%
      • Enabled real-time verification for services like vaccination, PAN, driving licenses, etc.
      • Cost savings by reducing manual integration workflows
      • Empowered 100+ digital-first citizen services
    `,
    leadership: [
      {
        name: "Dr. Pramod Varma",
        position: "Chief Architect",
        initials: "PV"
      },
      {
        name: "Rajendra Kumar",
        position: "Additional Secretary, MeitY",
        initials: "RK"
      }
    ],
    contact: {
      email: "support@api-setu.gov.in",
      helpline: "1800-111-222",
      website: "https://api-setu.gov.in"
    }
  },

  "e-courts": {
    title: "e-Courts",
    logo: "/images/ecourts.png",
    overview: "Digital infrastructure for judiciary system modernization with case management and virtual court hearings.",
    launchDate: "2013-01-01",
    userBase: "30M+",
    transactions: "500M+ cases",
    statesCovered: 36,
    impact: "High",
    features: [
      "Case status tracking",
      "Digital court records",
      "Virtual hearings",
      "E-filing system",
      "Judgment search"
    ],
    implementation: [
      "National Judicial Data Grid",
      "Video conferencing infrastructure",
      "Document digitization",
      "Mobile app access",
      "Multi-language support"
    ],
    detailedInfo: `
      The e-Courts project aims to transform the Indian judiciary through technology, making court processes more efficient and transparent.
      It provides litigants and lawyers with online access to case information, digital filing, and virtual hearing capabilities.
      The system has significantly reduced case pendency and improved access to justice across India.
    `,
    economicImpact: `
      • 18,000+ courts computerized
      • 200M+ cases digitized
      • 60% reduction in case disposal time
      • ₹500B+ saved in litigation costs
      • 2M+ virtual hearings conducted monthly
    `,
    leadership: [
      {
        name: "Justice D.Y. Chandrachud",
        position: "Chairperson, e-Committee",
        initials: "DC"
      },
      {
        name: "Dr. A.K. Patnaik",
        position: "Project Coordinator",
        initials: "AP"
      }
    ],
    contact: {
      email: "support@e-courts.gov.in",
      helpline: "1800-111-333",
      website: "https://e-courts.gov.in"
    }
  },
  
  "sidh": {
    title: "SIDH",
    logo: "/images/sidh.png",
    overview: "Secure Identity Document Hub provides a framework for secure storage and sharing of digital identity documents.",
    launchDate: "2021-07-01",
    userBase: "200M+",
    transactions: "1B+ verifications",
    statesCovered: 36,
    impact: "High",
    features: [
      "Document encryption",
      "Selective disclosure",
      "Blockchain-based verification",
      "Consent management",
      "Audit trails"
    ],
    implementation: [
      "Zero-knowledge proof architecture",
      "Interoperable with Aadhaar",
      "Mobile SDKs",
      "GDPR-compliant",
      "Offline mode support"
    ],
    detailedInfo: `
      SIDH is a secure digital vault for identity documents that enables citizens to store and share verified documents with service providers.
      It uses advanced cryptography and blockchain technology to ensure document authenticity while preserving user privacy.
      The platform has become essential for paperless verification across government and private sector services.
    `,
    economicImpact: `
      • 1B+ document verifications processed
      • 80% reduction in document fraud
      • ₹50B+ saved in verification costs
      • 200+ integrated services
      • 30M+ monthly active users
    `,
    leadership: [
      {
        name: "Dr. Ajay Kumar",
        position: "IAS, MeitY Secretary",
        initials: "AK"
      },
      {
        name: "J. Satyanarayana",
        position: "Former Chairman, UIDAI",
        initials: "JS"
      }
    ],
    contact: {
      email: "support@sidh.gov.in",
      helpline: "1800-111-444",
      website: "https://sidh.gov.in"
    }
  },
  
  "e-office": {
    title: "e-Office",
    logo: "/images/eoffice.png",
    overview: "Digital workplace solution for government offices enabling paperless file management and faster decision making.",
    launchDate: "2012-02-01",
    userBase: "5M+",
    transactions: "100M+ files",
    statesCovered: 36,
    impact: "High",
    features: [
      "Electronic file management",
      "Digital signatures",
      "Workflow automation",
      "Document versioning",
      "Role-based access"
    ],
    implementation: [
      "On-premise and cloud options",
      "Integration with DigiLocker",
      "Mobile app access",
      "Analytics dashboard",
      "Disaster recovery"
    ],
    detailedInfo: `
      e-Office is a comprehensive digital workplace solution that has transformed government functioning by eliminating paper files.
      It enables end-to-end digital processing of files with tracking, approvals, and archiving capabilities.
      The system has significantly improved efficiency and transparency in government operations.
    `,
    economicImpact: `
      • 100M+ files processed digitally
      • 80% reduction in file processing time
      • ₹10B+ saved in paper and storage costs
      • 500+ government departments onboarded
      • 24/7 access to files from anywhere
    `,
    leadership: [
      {
        name: "Shri S.N. Tripathi",
        position: "Director General, NIC",
        initials: "ST"
      },
      {
        name: "Neeta Verma",
        position: "Former DG, NIC",
        initials: "NV"
      }
    ],
    contact: {
      email: "support@eoffice.gov.in",
      helpline: "1800-111-555",
      website: "https://eoffice.gov.in"
    }
  },
  
  "aarogya-setu": {
    title: "Aarogya Setu",
    logo: "/images/argyasetu.png",
    overview: "COVID-19 contact tracing application that uses Bluetooth and GPS to alert users about potential infection risks.",
    launchDate: "2020-04-02",
    userBase: "200M+",
    transactions: "1B+ checks",
    statesCovered: 36,
    impact: "Very High",
    features: [
      "Contact tracing",
      "Self-assessment tool",
      "Vaccination status",
      "Hotspot alerts",
      "Telemedicine integration"
    ],
    implementation: [
      "Privacy-first design",
      "Open API framework",
      "GPS/Bluetooth hybrid",
      "Multi-language support",
      "Accessibility features"
    ],
    detailedInfo: `
      Aarogya Setu was developed as India's official COVID-19 contact tracing app during the pandemic.
      It used Bluetooth and location data to alert users about potential exposure while maintaining privacy protections.
      The app played a crucial role in India's pandemic response and vaccination rollout.
    `,
    economicImpact: `
      • 200M+ downloads during pandemic
      • 1B+ self-assessments conducted
      • 50M+ potential exposures alerted
      • ₹500B+ economic value in pandemic management
      • Integrated with vaccination drive
    `,
    leadership: [
      {
        name: "Shri R.S. Sharma",
        position: "CEO, National Health Authority",
        initials: "RS"
      },
      {
        name: "Dr. Vinod Paul",
        position: "Member, NITI Aayog",
        initials: "VP"
      }
    ],
    contact: {
      email: "support@aarogyasetu.gov.in",
      helpline: "1921",
      website: "https://aarogyasetu.gov.in"
    }
  },
  
  "e-sanjeevani": {
    title: "eSanjeevani",
    logo: "/images/sanjeevani.png",
    overview: "World's largest telemedicine platform providing remote healthcare services to patients across India.",
    launchDate: "2019-11-01",
    userBase: "100M+",
    transactions: "200M+ consultations",
    statesCovered: 36,
    impact: "High",
    features: [
      "Doctor-patient video consultations",
      "E-prescriptions",
      "Specialty clinics",
      "Appointment scheduling",
      "Health records access"
    ],
    implementation: [
      "Hub-and-spoke model",
      "Integration with ABHA",
      "AI-based triage",
      "Regional language support",
      "Disaster recovery"
    ],
    detailedInfo: `
      eSanjeevani is India's national telemedicine service that has made healthcare accessible even in remote areas.
      It connects patients with doctors through video consultations and has special portals for rural health centers.
      The platform has been particularly valuable for non-emergency care and chronic disease management.
    `,
    economicImpact: `
      • 200M+ teleconsultations completed
      • 80% reduction in unnecessary hospital visits
      • ₹50B+ saved in patient travel costs
      • 150,000+ doctors onboarded
      • Available in 12 regional languages
    `,
    leadership: [
      {
        name: "Dr. Harsh Vardhan",
        position: "Union Health Minister",
        initials: "HV"
      },
      {
        name: "Dr. Magesh Ethirajan",
        position: "DG, C-DAC",
        initials: "ME"
      }
    ],
    contact: {
      email: "support@esanjeevani.gov.in",
      helpline: "1800-111-666",
      website: "https://esanjeevani.gov.in"
    }
  },
  
  "poshan-tracker": {
    title: "Poshan Tracker",
    logo: "/images/poshan.png",
    overview: "Nutrition monitoring platform for women and children with real-time data for policymakers.",
    launchDate: "2021-03-01",
    userBase: "100M+",
    transactions: "500M+ records",
    statesCovered: 36,
    impact: "High",
    features: [
      "Growth monitoring",
      "Anganwadi services tracking",
      "Nutritional status",
      "Real-time reporting",
      "Benefit distribution"
    ],
    implementation: [
      "Mobile-first design",
      "Offline capability",
      "GIS integration",
      "Analytics dashboard",
      "API integration"
    ],
    detailedInfo: `
      Poshan Tracker is a comprehensive nutrition monitoring system that tracks the health and nutrition status of women and children across India.
      It enables real-time monitoring of Anganwadi services and provides actionable insights for improving nutritional outcomes.
      The platform has been instrumental in identifying and addressing malnutrition hotspots.
    `,
    economicImpact: `
      • 500M+ nutrition records collected
      • 30% improvement in service delivery
      • ₹20B+ savings through targeted interventions
      • 1.4M Anganwadi centers connected
      • 100M+ beneficiaries tracked
    `,
    leadership: [
      {
        name: "Smt. Smriti Irani",
        position: "Minister, WCD",
        initials: "SI"
      },
      {
        name: "Indevar Pandey",
        position: "Secretary, WCD",
        initials: "IP"
      }
    ],
    contact: {
      email: "support@poshantracker.gov.in",
      helpline: "1800-111-777",
      website: "https://poshantracker.gov.in"
    }
  },
  
  "co-win": {
    title: "Co-WIN",
    logo: "/images/cowin.png",
    overview: "Digital backbone for India's COVID-19 vaccination drive with end-to-end management of registration and certification.",
    launchDate: "2021-01-01",
    userBase: "1B+",
    transactions: "2B+ vaccinations",
    statesCovered: 36,
    impact: "Very High",
    features: [
      "Vaccine registration",
      "Certificate download",
      "Appointment scheduling",
      "Dose tracking",
      "International recognition"
    ],
    implementation: [
      "Distributed architecture",
      "API-first approach",
      "QR code certificates",
      "Multi-language support",
      "Disaster recovery"
    ],
    detailedInfo: `
      Co-WIN was developed as India's digital platform for COVID-19 vaccination management during the pandemic.
      It handled the world's largest vaccination drive with features for registration, appointment scheduling, and digital certificates.
      The system demonstrated remarkable scalability, handling millions of concurrent users during peak vaccination periods.
    `,
    economicImpact: `
      • 2B+ vaccine doses administered
      • 1B+ digital certificates issued
      • ₹100B+ saved through efficient logistics
      • 50,000+ vaccination centers connected
      • Recognized by WHO as global best practice
    `,
    leadership: [
      {
        name: "Dr. R.S. Sharma",
        position: "Chairman, Co-WIN",
        initials: "RS"
      },
      {
        name: "Dr. P.D. Vaghela",
        position: "Chairman, TRAI",
        initials: "PV"
      }
    ],
    contact: {
      email: "support@cowin.gov.in",
      helpline: "1075",
      website: "https://cowin.gov.in"
    }
  },
  
  "diksha": {
    title: "DIKSHA",
    logo: "/images/diksha.png",
    overview: "National e-learning platform providing e-content for teachers and students in multiple languages.",
    launchDate: "2017-09-01",
    userBase: "25M+",
    transactions: "500K+ courses",
    statesCovered: 36,
    impact: "High",
    features: [
      "Interactive content",
      "Teacher training",
      "Student assessments",
      "QR-coded textbooks",
      "Accessibility features"
    ],
    implementation: [
      "Open-source platform",
      "State-specific instances",
      "Mobile app access",
      "Analytics dashboard",
      "API integration"
    ],
    detailedInfo: `
      DIKSHA is India's national digital infrastructure for school education that provides high-quality e-learning content.
      It supports multiple languages and offers interactive content aligned with the national curriculum.
      The platform has been particularly valuable for continuing education during school closures.
    `,
    economicImpact: `
      • 500K+ learning resources available
      • 25M+ registered users
      • 80% of schools using the platform
      • ₹10B+ savings in textbook costs
      • Available in 30+ Indian languages
    `,
    leadership: [
      {
        name: "Dr. Amarendra P. Behera",
        position: "Joint Director, NCERT",
        initials: "AB"
      },
      {
        name: "Shri Amit Khare",
        position: "Secretary, Education",
        initials: "AK"
      }
    ],
    contact: {
      email: "support@diksha.gov.in",
      helpline: "1800-111-888",
      website: "https://diksha.gov.in"
    }
  },
  
  "gem": {
    title: "GeM",
    logo: "/images/gem.png",
    overview: "Government e-Marketplace for transparent public procurement with ₹4T+ annual transactions.",
    launchDate: "2016-08-01",
    userBase: "2M+ sellers",
    transactions: "₹4T+ annually",
    statesCovered: 36,
    impact: "Very High",
    features: [
      "End-to-end procurement",
      "Reverse auctions",
      "Quality control",
      "Payment gateway",
      "Analytics dashboard"
    ],
    implementation: [
      "Cloud-native architecture",
      "AI-based recommendations",
      "Blockchain for contracts",
      "Mobile app access",
      "API integration"
    ],
    detailedInfo: `
      GeM is India's online marketplace for government procurement that has brought unprecedented transparency to public purchasing.
      It enables direct purchase from sellers across India, eliminating middlemen and reducing costs.
      The platform has been particularly beneficial for MSMEs and women entrepreneurs.
    `,
    economicImpact: `
      • ₹4T+ annual transaction value
      • 25% average cost savings
      • 2M+ registered sellers
      • 60,000+ government buyers
      • 10,000+ product categories
    `,
    leadership: [
      {
        name: "Shri P.K. Singh",
        position: "CEO, GeM",
        initials: "PS"
      },
      {
        name: "Talleen Kumar",
        position: "Former CEO, GeM",
        initials: "TK"
      }
    ],
    contact: {
      email: "support@gem.gov.in",
      helpline: "1800-111-999",
      website: "https://gem.gov.in"
    }
  },
  
  "e-hospital": {
    title: "e-Hospital",
    logo: "/images/hosptial.png",
    overview: "Open source health management information system for hospitals managing patient registration and billing.",
    launchDate: "2015-01-01",
    userBase: "50M+",
    transactions: "500M+ records",
    statesCovered: 36,
    impact: "High",
    features: [
      "Patient registration",
      "Electronic medical records",
      "Appointment scheduling",
      "Billing system",
      "Lab integration"
    ],
    implementation: [
      "ONC-certified EHR",
      "HL7/FHIR standards",
      "Mobile app access",
      "Analytics dashboard",
      "API integration"
    ],
    detailedInfo: `
      e-Hospital is a comprehensive hospital management system used by government hospitals across India.
      It digitizes patient records, appointments, billing, and inventory management for efficient healthcare delivery.
      The system has significantly reduced waiting times and improved patient care in public hospitals.
    `,
    economicImpact: `
      • 500M+ patient records digitized
      • 60% reduction in patient wait times
      • ₹5B+ savings through efficient inventory
      • 1,000+ hospitals connected
      • 50M+ patients served annually
    `,
    leadership: [
      {
        name: "Dr. V.K. Paul",
        position: "Member, NITI Aayog",
        initials: "VP"
      },
      {
        name: "Dr. R.S. Sharma",
        position: "CEO, NHA",
        initials: "RS"
      }
    ],
    contact: {
      email: "support@e-hospital.gov.in",
      helpline: "1800-111-000",
      website: "https://e-hospital.gov.in"
    }
  },
  
  "ncd-platform": {
    title: "NCD Platform",
    logo: "/images/ncd.png",
    overview: "Enables population-based screening for common Non-Communicable Diseases like diabetes and hypertension.",
    launchDate: "2018-01-01",
    userBase: "100M+",
    transactions: "500M+ screenings",
    statesCovered: 36,
    impact: "High",
    features: [
      "Risk assessment",
      "Early detection",
      "Referral system",
      "Treatment tracking",
      "Analytics dashboard"
    ],
    implementation: [
      "Mobile-first design",
      "Integration with ABHA",
      "AI-based risk scoring",
      "Regional language support",
      "API integration"
    ],
    detailedInfo: `
      The NCD Platform is India's digital system for screening and managing non-communicable diseases at population scale.
      It enables early detection of conditions like diabetes and hypertension through community health workers.
      The platform has been instrumental in India's preventive healthcare strategy.
    `,
    economicImpact: `
      • 500M+ screenings conducted
      • 20M+ early detections
      • ₹100B+ savings in treatment costs
      • 1M+ health workers trained
      • 70% coverage of at-risk population
    `,
    leadership: [
      {
        name: "Dr. Harsh Vardhan",
        position: "Union Health Minister",
        initials: "HV"
      },
      {
        name: "Dr. Balram Bhargava",
        position: "DG, ICMR",
        initials: "BB"
      }
    ],
    contact: {
      email: "support@ncdplatform.gov.in",
      helpline: "1800-111-111",
      website: "https://ncdplatform.gov.in"
    }
  },
  
  "abdm": {
    title: "ABDM",
    logo: "/images/abdm.png",
    overview: "Ayushman Bharat Digital Mission creates a national digital health ecosystem with Health ID and registries.",
    launchDate: "2021-09-01",
    userBase: "500M+",
    transactions: "1B+ records",
    statesCovered: 36,
    impact: "Very High",
    features: [
      "Health ID",
      "Healthcare Professionals Registry",
      "Health Facility Registry",
      "Consent management",
      "Data sharing"
    ],
    implementation: [
      "Federated architecture",
      "Open standards",
      "Mobile app access",
      "Analytics dashboard",
      "API integration"
    ],
    detailedInfo: `
      ABDM is building India's national digital health infrastructure to enable seamless healthcare services across providers.
      It provides citizens with a Health ID that links all medical records with consent-based access.
      The mission aims to create an integrated healthcare system that improves quality and reduces costs.
    `,
    economicImpact: `
      • 500M+ Health IDs created
      • 200K+ healthcare professionals registered
      • 50K+ health facilities onboarded
      • ₹200B+ potential annual savings
      • Foundation for $50B digital health economy
    `,
    leadership: [
      {
        name: "Dr. R.S. Sharma",
        position: "CEO, NHA",
        initials: "RS"
      },
      {
        name: "Dr. Praveen Gedam",
        position: "Mission Director",
        initials: "PG"
      }
    ],
    contact: {
      email: "support@abdm.gov.in",
      helpline: "1800-111-222",
      website: "https://abdm.gov.in"
    }
  },
  
  "bharatnet": {
    title: "BharatNet",
    logo: "/images/net.png",
    overview: "World's largest rural broadband connectivity program using optical fiber to enable e-governance services.",
    launchDate: "2011-10-01",
    userBase: "200M+",
    transactions: "1B+ connections",
    statesCovered: 36,
    impact: "Very High",
    features: [
      "High-speed internet",
      "Last-mile connectivity",
      "Wi-Fi hotspots",
      "E-governance access",
      "Telemedicine support"
    ],
    implementation: [
      "Optical fiber network",
      "PPP model",
      "Village-level entrepreneurs",
      "Monitoring system",
      "API integration"
    ],
    detailedInfo: `
      BharatNet is India's ambitious program to connect all villages with high-speed broadband internet.
      It has created digital infrastructure that enables e-governance, education, and healthcare services in rural areas.
      The project has been a key enabler of digital inclusion across India.
    `,
    economicImpact: `
      • 600K+ km of optical fiber laid
      • 250K+ Gram Panchayats connected
      • ₹1T+ investment in digital infrastructure
      • 200M+ rural users served
      • 50% reduction in internet costs
    `,
    leadership: [
      {
        name: "Shri Anshu Prakash",
        position: "Chairman, BBNL",
        initials: "AP"
      },
      {
        name: "Shri K. Rajaraman",
        position: "Secretary, Telecom",
        initials: "KR"
      }
    ],
    contact: {
      email: "support@bharatnet.gov.in",
      helpline: "1800-111-333",
      website: "https://bharatnet.gov.in"
    }
  },
  
  "pm-wani": {
    title: "PM-WANI",
    logo: "/images/wani.png",
    overview: "Public Wi-Fi access network interface enabling small entrepreneurs to provide affordable internet services.",
    launchDate: "2020-12-01",
    userBase: "50M+",
    transactions: "500M+ connections",
    statesCovered: 36,
    impact: "High",
    features: [
      "Affordable internet",
      "Entrepreneur opportunities",
      "Pay-as-you-go",
      "National roaming",
      "Analytics dashboard"
    ],
    implementation: [
      "Interoperable framework",
      "App-based authentication",
      "Small business friendly",
      "Monitoring system",
      "API integration"
    ],
    detailedInfo: `
      PM-WANI is India's innovative public Wi-Fi framework that enables small businesses to become internet providers.
      It has created millions of Wi-Fi hotspots across India, making internet access affordable and ubiquitous.
      The program has been particularly impactful in rural and semi-urban areas.
    `,
    economicImpact: `
      • 500M+ Wi-Fi connections
      • 2M+ hotspots created
      • 50% reduction in data costs
      • 100K+ small entrepreneurs empowered
      • ₹10B+ economic value created
    `,
    leadership: [
      {
        name: "Shri K. Rajaraman",
        position: "Secretary, Telecom",
        initials: "KR"
      },
      {
        name: "Shri Anshu Prakash",
        position: "Chairman, BBNL",
        initials: "AP"
      }
    ],
    contact: {
      email: "support@pmwani.gov.in",
      helpline: "1800-111-444",
      website: "https://pmwani.gov.in"
    }
  },
  
  "cert-in": {
    title: "CERT-In",
    logo: "/images/cert.png",
    overview: "Indian Computer Emergency Response Team handles cybersecurity incidents and implements best practices.",
    launchDate: "2004-01-01",
    userBase: "10M+",
    transactions: "1M+ alerts",
    statesCovered: 36,
    impact: "Very High",
    features: [
      "Incident response",
      "Security alerts",
      "Vulnerability notes",
      "Best practices",
      "Training programs"
    ],
    implementation: [
      "24/7 monitoring",
      "Sectoral CERTs",
      "International cooperation",
      "Threat intelligence",
      "API integration"
    ],
    detailedInfo: `
      CERT-In is India's national agency for cybersecurity that protects critical infrastructure and responds to cyber threats.
      It provides early warnings about vulnerabilities and coordinates incident response across government and industry.
      The agency has been crucial in safeguarding India's digital ecosystem.
    `,
    economicImpact: `
      • 1M+ cyber incidents handled
      • 50K+ organizations protected
      • ₹100B+ potential losses prevented
      • 100+ international collaborations
      • 10K+ cybersecurity professionals trained
    `,
    leadership: [
      {
        name: "Dr. Sanjay Bahl",
        position: "Director General",
        initials: "SB"
      },
      {
        name: "Shri Rajesh Pant",
        position: "National Cyber Security Coordinator",
        initials: "RP"
      }
    ],
    contact: {
      email: "incident@cert-in.org.in",
      helpline: "1800-111-555",
      website: "https://cert-in.org.in"
    }
  },
  
  "digiyatra": {
    title: "DigiYatra",
    logo: "/images/image3.png",
    overview: "Biometric enabled seamless air travel experience using facial recognition technology at airports.",
    launchDate: "2022-12-01",
    userBase: "10M+",
    transactions: "50M+ journeys",
    statesCovered: 36,
    impact: "High",
    features: [
      "Facial recognition",
      "Contactless travel",
      "Mobile app integration",
      "Real-time updates",
      "Baggage tracking"
    ],
    implementation: [
      "Centralized identity management",
      "Airport system integration",
      "Privacy by design",
      "Mobile app access",
      "API integration"
    ],
    detailedInfo: `
      DigiYatra is transforming air travel in India with facial recognition technology for seamless airport processes.
      Passengers can check-in, security check, and board flights without physical documents using biometric authentication.
      The system has significantly improved passenger convenience and airport efficiency.
    `,
    economicImpact: `
      • 50M+ contactless journeys
      • 60% reduction in boarding time
      • ₹5B+ savings in operational costs
      • 25+ airports integrated
      • 10M+ registered users
    `,
    leadership: [
      {
        name: "Shri Rajiv Bansal",
        position: "Chairman, AAI",
        initials: "RB"
      },
      {
        name: "Shri Jyotiraditya Scindia",
        position: "Civil Aviation Minister",
        initials: "JS"
      }
    ],
    contact: {
      email: "support@digiyatra.gov.in",
      helpline: "1800-111-666",
      website: "https://digiyatra.gov.in"
    }
  },
  
  "swayam": {
    title: "SWAYAM",
    logo: "/images/swayam.png",
    overview: "Study Webs of Active Learning for Young Aspiring Minds is India's national MOOC platform offering online courses.",
    launchDate: "2017-07-01",
    userBase: "20M+",
    transactions: "500K+ courses",
    statesCovered: 36,
    impact: "High",
    features: [
      "Credit transfer",
      "Interactive content",
      "Discussion forums",
      "Self-assessment",
      "Certification"
    ],
    implementation: [
      "Cloud-based platform",
      "University partnerships",
      "Mobile app access",
      "Analytics dashboard",
      "API integration"
    ],
    detailedInfo: `
      SWAYAM is India's national online education platform that provides free courses from school to university level.
      It offers courses from top institutions with credit transfer possibilities to formal education.
      The platform has democratized access to quality education across India.
    `,
    economicImpact: `
      • 500K+ courses offered
      • 20M+ learners enrolled
      • ₹10B+ value in free education
      • 2,000+ participating institutions
      • 30+ subject categories covered
    `,
    leadership: [
      {
        name: "Prof. Anil Sahasrabudhe",
        position: "Chairman, AICTE",
        initials: "AS"
      },
      {
        name: "Prof. Mamidala Jagadesh Kumar",
        position: "Chairman, UGC",
        initials: "MK"
      }
    ],
    contact: {
      email: "support@swayam.gov.in",
      helpline: "1800-111-777",
      website: "https://swayam.gov.in"
    }
  },
  
    // Add remaining initiatives...
    "national-digital-library": {
      title: "National Digital Library",
      logo: ndlLogo,
      overview: "Provides single-window access to millions of educational resources including books, articles and courses.",
      launchDate: "2016-06-01",
      userBase: "10M+",
      transactions: "100M+ resources",
      statesCovered: 36,
      impact: "High",
      features: [
        "Multi-format content",
        "Institutional repositories",
        "Personalized recommendations",
        "Accessibility features",
        "Offline access"
      ],
      implementation: [
        "Federated search",
        "AI-based recommendations",
        "Mobile app access",
        "Analytics dashboard",
        "API integration"
      ],
      detailedInfo: `
        The National Digital Library (NDL) is a project under the Ministry of Education that provides access to 
        educational resources from primary to postgraduate levels. It aggregates content from over 300+ sources 
        including top Indian educational institutions and international open-access repositories.
      `,
      economicImpact: `
        • 6M+ digital books available for free access
        • 75% reduction in textbook costs for students
        • 500+ universities and institutions integrated
        • Content available in 50+ languages
        • 10M+ monthly active users
      `,
      leadership: [
        {
          name: "Prof. P.P. Chakrabarti",
          position: "Director, IIT Kharagpur",
          initials: "PC"
        },
        {
          name: "Prof. Virendra Kumar Tewari",
          position: "Former Director, IIT Kharagpur",
          initials: "VT"
        }
      ],
      contact: {
        email: "support@ndl.gov.in",
        helpline: "1800-111-888",
        website: "https://ndl.gov.in"
      }
    },
    "fastag": {
      title: "FASTag",
      logo: "/images/image2.png",
      overview: "Electronic toll collection system using RFID technology for automatic deduction without stopping vehicles.",
      launchDate: "2016-10-01",
      userBase: "50M+",
      transactions: "1B+ tolls",
      statesCovered: 36,
      impact: "High",
      features: [
        "Cashless payments",
        "Seamless travel",
        "Online recharge",
        "Transaction history",
        "Vehicle management"
      ],
      implementation: [
        "RFID technology",
        "Interoperable across plazas",
        "Mobile app integration",
        "Analytics dashboard",
        "API integration"
      ],
      detailedInfo: `
        FASTag is an electronic toll collection system operated by the National Highways Authority of India (NHAI).
        It uses Radio Frequency Identification (RFID) technology for making toll payments directly from the prepaid account.
        The system has reduced waiting time at toll plazas by 90% and significantly cut fuel consumption.
      `,
      economicImpact: `
        • ₹50B+ annual toll collections processed
        • 85% reduction in toll plaza congestion
        • 40% reduction in fuel consumption at plazas
        • 750+ toll plazas integrated nationwide
        • 1M+ daily transactions processed
      `,
      leadership: [
        {
          name: "Shri Alka Upadhyaya",
          position: "Chairperson, NHAI",
          initials: "AU"
        },
        {
          name: "Shri Giridhar Aramane",
          position: "Secretary, MoRTH",
          initials: "GA"
        }
      ],
      contact: {
        email: "support@fastag.gov.in",
        helpline: "1800-111-000",
        website: "https://fastag.gov.in"
      }
    },
    "vahan-sarathi": {
      title: "VAHAN & SARATHI",
      logo: "/images/vahan.png",
      overview: "National vehicle and driving license registries providing unified services across states.",
      launchDate: "2011-07-01",
      userBase: "300M+",
      transactions: "1B+ services",
      statesCovered: 36,
      impact: "High",
      features: [
        "Vehicle registration",
        "Driving license services",
        "Renewals online",
        "Nationwide validity",
        "Status tracking"
      ],
      implementation: [
        "Centralized database",
        "State-specific workflows",
        "Mobile app access",
        "Analytics dashboard",
        "API integration"
      ],
      detailedInfo: `
        VAHAN (for vehicle registration) and SARATHI (for driving licenses) are national registries that provide 
        unified services across all states and UTs. The systems have standardized RTO processes nationwide, 
        eliminated fake licenses/registrations, and enabled online services for citizens.
      `,
      economicImpact: `
        • 95% reduction in fake driving licenses
        • 80% decrease in vehicle registration processing time
        • 500M+ driving licenses issued
        • 300M+ vehicle registrations processed
        • ₹50B+ annual revenue collected digitally
      `,
      leadership: [
        {
          name: "Shri Amit Varadan",
          position: "Joint Secretary, MoRTH",
          initials: "AV"
        },
        {
          name: "Shri Giridhar Aramane",
          position: "Secretary, MoRTH",
          initials: "GA"
        }
      ],
      contact: {
        email: "support@vahan.nic.in",
        helpline: "1800-111-111",
        website: "https://vahan.nic.in"
      }
    },
    "digilocker": {
      title: "DigiLocker",
      logo: "/images/digilocker.png",
      overview: "India's digital document wallet that enables secure storage and sharing of documents with government agencies and other authorized entities.",
      launchDate: "2015-07-01",
      userBase: "150M+",
      transactions: "5B+ documents",
      statesCovered: 36,
      impact: "High",
      features: [
        "Secure cloud-based document storage",
        "eSign facility for documents",
        "Integration with Aadhaar",
        "Instant verification of documents",
        "Mobile app accessibility"
      ],
      implementation: [
        "256-bit SSL encryption",
        "API integration with government departments",
        "OCR-based document processing",
        "Two-factor authentication",
        "Digital signature infrastructure"
      ],
      detailedInfo: `
        DigiLocker is a flagship initiative under Digital India program that provides citizens with a secure 
        cloud-based platform for storage and sharing of documents. It eliminates the need for physical documents 
        and enables instant verification through digital signatures.
      `,
      economicImpact: `
        • 500M+ documents issued directly by issuers
        • 90% reduction in document verification time
        • ₹10B+ saved in document processing costs
        • 2,000+ government departments integrated
        • 50+ types of documents supported
      `,
      leadership: [
        {
          name: "Shri Nand Kumaram",
          position: "P&CEO, NeGD",
          initials: "NK"
        },
        {
          name: "Shri Abhishek Singh",
          position: "CEO, NeGD",
          initials: "AS"
        }
      ],
      contact: {
        email: "support@digilocker.gov.in",
        helpline: "1800-111-999",
        website: "https://digilocker.gov.in"
      }
    },
    "passport-seva": {
      title: "Passport Seva",
      logo: "/images/passport.png",
      overview: "Online passport application and tracking system that has significantly reduced processing times.",
      launchDate: "2010-06-01",
      userBase: "100M+",
      transactions: "200M+ applications",
      statesCovered: 36,
      impact: "High",
      features: [
        "Online application",
        "Appointment scheduling",
        "Status tracking",
        "Document upload",
        "SMS alerts"
      ],
      implementation: [
        "Centralized system",
        "PSK network",
        "Mobile app access",
        "Analytics dashboard",
        "API integration"
      ],
      detailedInfo: `
        Passport Seva is a mission mode project under the Ministry of External Affairs that has transformed 
        passport services in India. It reduced passport processing time from 45 days to 7 days for normal applications 
        and established a network of 500+ Passport Seva Kendras across the country.
      `,
      economicImpact: `
        • 80% reduction in passport processing time
        • 500+ Passport Seva Kendras operational
        • 10M+ passports issued annually
        • ₹5B+ saved in administrative costs
        • 95% citizen satisfaction rate
      `,
      leadership: [
        {
          name: "Shri Ausaf Sayeed",
          position: "Secretary, CPV Division",
          initials: "AS"
        },
        {
          name: "Shri Sanjay Bhattacharyya",
          position: "Former Secretary, CPV",
          initials: "SB"
        }
      ],
      contact: {
        email: "support@passportindia.gov.in",
        helpline: "1800-258-1800",
        website: "https://passportindia.gov.in"
      }
    },
    "enam": {
      title: "eNAM",
      logo: "/images/enam.png",
      overview: "Electronic National Agriculture Market networks existing APMC mandis to create a unified national market.",
      launchDate: "2016-04-01",
      userBase: "20M+",
      transactions: "₹2T+ annually",
      statesCovered: 36,
      impact: "High",
      features: [
        "Online trading",
        "Quality assaying",
        "Payment gateway",
        "Logistics support",
        "Price discovery"
      ],
      implementation: [
        "Inter-mandi trading",
        "Mobile app access",
        "Analytics dashboard",
        "API integration",
        "Multi-language support"
      ],
      detailedInfo: `
        eNAM (National Agriculture Market) is a pan-India electronic trading portal that networks existing 
        APMC mandis to create a unified national market for agricultural commodities. The platform enables 
        farmers to get better prices through transparent auction process and online payment.
      `,
      economicImpact: `
        • 1,000+ mandis integrated across India
        • 175+ commodities traded
        • 20% average increase in farmer incomes
        • ₹2 trillion+ annual trade volume
        • 5M+ farmers registered
      `,
      leadership: [
        {
          name: "Shri Manoj Ahuja",
          position: "Secretary, Agriculture",
          initials: "MA"
        },
        {
          name: "Shri Narendra Singh Tomar",
          position: "Agriculture Minister",
          initials: "NT"
        }
      ],
      contact: {
        email: "support@enam.gov.in",
        helpline: "1800-425-1556",
        website: "https://enam.gov.in"
      }
    },
    "kisan-suvidha": {
      title: "Kisan Suvidha",
      logo: "/images/kisan.png",
      overview: "Farmer-centric mobile application providing information on weather, market prices and government schemes.",
      launchDate: "2016-05-01",
      userBase: "10M+",
      transactions: "100M+ queries",
      statesCovered: 36,
      impact: "High",
      features: [
        "Weather forecasts",
        "Market prices",
        "Agro-advisories",
        "Government schemes",
        "Crop insurance"
      ],
      implementation: [
        "Mobile-first design",
        "Regional language support",
        "Push notifications",
        "Analytics dashboard",
        "API integration"
      ],
      detailedInfo: `
        Kisan Suvidha is a mobile application developed to help farmers by providing relevant information 
        quickly. It gives advisories on weather, extreme weather warnings, market prices, inputs dealers, 
        and government schemes in multiple Indian languages.
      `,
      economicImpact: `
        • 10M+ farmer beneficiaries
        • Available in 12 regional languages
        • 500K+ daily active users
        • 30% reduction in weather-related crop losses
        • 200+ agricultural experts providing advisories
      `,
      leadership: [
        {
          name: "Shri Narendra Singh Tomar",
          position: "Agriculture Minister",
          initials: "NT"
        },
        {
          name: "Shri Manoj Ahuja",
          position: "Secretary, Agriculture",
          initials: "MA"
        }
      ],
      contact: {
        email: "support@kisansuvidha.gov.in",
        helpline: "1800-180-1551",
        website: "https://kisansuvidha.gov.in"
      }
    },
    "umang": {
      title: "UMANG",
      logo: "/images/UMANG.png",
      overview: "Unified Mobile Application for New-age Governance providing access to 1,200+ government services.",
      launchDate: "2017-11-21",
      userBase: "100M+",
      transactions: "500M+",
      statesCovered: 36,
      impact: "High",
      features: [
        "Single platform for multiple services",
        "Multi-language support",
        "Secure authentication",
        "Digital payment integration",
        "Personalized dashboard"
      ],
      implementation: [
        "API-driven architecture",
        "eKYC integration",
        "Unified payment interface",
        "Responsive design",
        "Regular service onboarding"
      ],
      detailedInfo: `
        UMANG (Unified Mobile Application for New-age Governance) provides a single platform for all Indian 
        citizens to access pan India e-Gov services from Central, State, Local Bodies, and Agencies of government.
        The app supports 13 Indian languages and offers services across various domains.
      `,
      economicImpact: `
        • 1,200+ government services integrated
        • 13 Indian languages supported
        • 50M+ monthly active users
        • 80% reduction in physical visits for services
        • 500+ government departments onboarded
      `,
      leadership: [
        {
          name: "Shri Nand Kumaram",
          position: "P&CEO, NeGD",
          initials: "NK"
        },
        {
          name: "Shri Abhishek Singh",
          position: "CEO, NeGD",
          initials: "AS"
        }
      ],
      contact: {
        email: "support@umang.gov.in",
        helpline: "1800-111-888",
        website: "https://web.umang.gov.in"
      }
    },
    "rapdrp": {
      title: "RAPDRP",
      logo: "/images/RAPDRP.png",
      overview: "Restructured Accelerated Power Development Program for IT enablement of distribution sector.",
      launchDate: "2008-07-01",
      userBase: "50M+",
      transactions: "500M+ records",
      statesCovered: 36,
      impact: "High",
      features: [
        "Consumer indexing",
        "GIS mapping",
        "SCADA implementation",
        "Energy accounting",
        "Outage management"
      ],
      implementation: [
        "Smart metering",
        "Mobile app access",
        "Analytics dashboard",
        "API integration",
        "Disaster recovery"
      ],
      detailedInfo: `
        R-APDRP is a Government of India initiative aimed at reducing Aggregate Technical & Commercial (AT&C) 
        losses in power distribution through IT enablement of the distribution sector. The program focuses on 
        establishing reliable and automated systems for sustained collection of accurate base line data.
      `,
      economicImpact: `
        • 25% reduction in AT&C losses in project areas
        • 50M+ consumers digitized
        • ₹500B+ investment in distribution infrastructure
        • 100+ towns covered under Part-A projects
        • 15% improvement in billing efficiency
      `,
      leadership: [
        {
          name: "Shri Alok Kumar",
          position: "Secretary, Power",
          initials: "AK"
        },
        {
          name: "Shri Gurdeep Singh",
          position: "CMD, NTPC",
          initials: "GS"
        }
      ],
      contact: {
        email: "support@rapdrp.gov.in",
        helpline: "1800-111-222",
        website: "https://rapdrp.gov.in"
      }
    }
  };
  
  export default digitalInitiativesData;