export const colors = {
  primary: "#13A2BC",
  secondary: "#FCB600",
  text: "#494949",
  background: "#144A68",
  white: "#ffffff",
  black: "#000000",
  gray: "#6c6c6c",
  blue: "#065A89",
  lightBlue: "rgba(19, 166, 191, 0.2)",
  lightBg: "#ECF3F6",
  lighttext: "#666666",
  anqrtext: "#1F668E",
  darktext: "#393D3F",
  darkText: "#474E52",
  borderColor: "#C4C4C4",
  transparent: "transparent",
};
export const pingHerokuUrl = "https://kmit-policyhub.herokuapp.com"

export const fontSizes = [12, 16, 20, 24, 32, 48, 64, 96, 128, 160, 192];

export const space = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
export const halfWidth = "50%";
export const fullWidth = "100%";
export const ELECTRICITY_ACCESS = "electricity";
export const CLEAN_COOKING = "cleancooking";
export const SUSTAINABLE_COOLING = "sustainablecooling";
export const ENERGY_EFFICIENCY = "energyefficiency";
export const POWERING_HEALTHCARE= "poweringhealthcare";
export const ELECTRICITYACCESS = "Electricity Access";
export const CLEANCOOKING = "Clean Cooking";
export const SUSTAINABLECOOLING = "Sustainable Cooling";
export const ENERGYEFFICIENCY = "Energy Efficiency";
export const POWERINGHEALTHCARE = "Powering Healthcare";

export const media = {
  smallMobile: "480px",
  mediumMobile: "520px",
  mobile: "767px",
  tabletX: "991px",
  tablet: "920px",
  smallLaptop: "1024px",
  laptop: "1200px",
  laptopX: "1220px",
  screen: "1400px",
  mediumScreen: "1680px",
  largeScreen: "2200px",
};

export const videosCard = [
  {
    link: "zYNntqAi5gE",
    title: "Sustainable Energy Policy Hub",
  },
  {
    link: "ny6hh4Khap8",
    title:
      "Energizing Finance: Impacts of Policies on Electricity Financing in Rwanda",
  },
  {
    link: "D2ApkVkEov0",
    title: "Nigeria Integrated Energy Planning Tool - A Guide for Stakeholders",
  },
  {
    link: "XRIaYKeeGyw",
    title: "Promoting Mini-Grids Electrification for Rural Development",
  },
  {
    link: "hFeqJZtxiCk",
    title:
      "IRENA/ADFD Project Facility Changing Lives through Renewable Energy",
  },
  {
    link: "wdyvLdm26Bs",
    title:
      "Solar-Powered Mini-Grids Bring Security and New Economic Opportunities in Ghana",
  },
];

export const buttonOptions = [
  {
    [ELECTRICITY_ACCESS]: {
      "Mini grids": ["determine-mini-grid-operator-and-ownership-model", "../../static/images/mini-grid.png", "review-policy-and-regulatory-framework-to-reflect-nes", "MINI-RÉSEAUX"],
      "Standalone systems": ["collaborate-with-the-private-sector-to-promote-off-grid-electrification", "../../static/images/solaroutline.png", "review-policy-and-regulatory-framework-to-reflect-nes", "SYSTÈMES AUTONOMES"],
    },
  },
  {
    [CLEAN_COOKING]: {
      "Policy and institutional framework": [
        "set-clean-cooking-policy-targets",
        "../../static/images/framework.svg",
        "review-enabling-framework-for-implementing-clean-cooking-plan-strategy",
        "CADRE POLITIQUE ET LÉGAL"
      ],
      "Regulations and Standards": ["set-up-regulatory-framework", "../../static/images/Standards.svg", "review-enabling-framework-for-implementing-clean-cooking-plan-strategy", "RÈGLEMENTS ET NORMES"],
      "Market development and financing": [
        "review-existing-subsidies-and-their-efficiency",
        "../../static/images/market_development.svg",
        "review-enabling-framework-for-implementing-clean-cooking-plan-strategy",
        "DÉVELOPPEMENT DU MARCHÉ ET FINANCEMENT"
      ],
      "Awareness raising": ["develop-inclusive-awareness-raising-strategy-including-transversal-impacts-eg-health-economy-environment", "../../static/images/awareness_raising.svg", "review-enabling-framework-for-implementing-clean-cooking-plan-strategy", "SENSIBILISATION"],
    },
  },
  {
    [SUSTAINABLE_COOLING]: {
      "Thermal comfort and safety": ["thermal-comfort-and-safety-regulation", "../../static/images/safety.svg", "review-enabling-framework-for-thematic-areas-related-to-access-to-cooling", "CONFORT THERMIQUE ET SÉCURITÉ"],
      "Food & agricultural cold chains": [
        "food-agricultural-cold-chains-regulation",
        "../../static/images/cold_chains.svg",
        "review-enabling-framework-for-thematic-areas-related-to-access-to-cooling",
        "CHAÎNE DU FROID ALIMENTAIRE ET AGRICOLE"
      ],
      "Healthcare and medical cold chains": [
        "regulation",
        "../../static/images/healthcare.svg",
        "review-enabling-framework-for-thematic-areas-related-to-access-to-cooling",
        "CHAÎNES DE FROID MÉDICALES ET DE SOINS DE SANTÉ"
      ],
    },
  },
  {
    [ENERGY_EFFICIENCY]: {
      "Buildings": ["buildings-regulation", "../../static/images/BUILDINGS.svg", "review-enabling-framework-and-energy-efficiency-policy-approaches-by-sectors", "BÂTIMENTS"],
      "Industry": ["industry-regulation", "../../static/images/INDUSTRY.svg", "review-enabling-framework-and-energy-efficiency-policy-approaches-by-sectors", "L'INDUSTRIE"],
      "Transport/ Mobility": ["transport-mobility-regulation", "../../static/images/TRANSPORT_MOBILITY.svg", "review-enabling-framework-and-energy-efficiency-policy-approaches-by-sectors", "TRANSPORT/ MOBILITÉ"],
      "Products / Appliances": [
        "products-appliances-regulation",
        "../../static/images/PRODUCT_APPLIANCES.svg",
        "review-enabling-framework-and-energy-efficiency-policy-approaches-by-sectors",
        "PRODUITS / APPAREILS"
      ],
      "Utilities": ["utilities-regulation", "../../static/images/UTILITIES.svg", "review-enabling-framework-and-energy-efficiency-policy-approaches-by-sectors", "SERVICES PUBLICS ET EFFICACITÉ ÉNERGÉTIQUE"],
      "Energy efficiency services": [
        "energy-efficiency-services-regulation",
        "../../static/images/ENERGY_EFFICIENCY_SERVICES.svg",
        "review-enabling-framework-and-energy-efficiency-policy-approaches-by-sectors",
        "SERVICES D'EFFICACITÉ ÉNERGÉTIQUE"
      ],
    },
  },
  {
    [POWERING_HEALTHCARE]: {
      "Data collection and Analysis": ["understand-impact-data-and-nexus-between-sustainable-energy-health-and-other-dimensions", "../../static/images/DataCollection.svg", "develop-enabling-framework-conditions-for-health-facility-electrification", "COLLECTE ET ANALYSE DE DONNÉES"],
      "Policy, planning and institutional  framework for implementation": ["nominate-a-coordinating-body-with-high-level-political-buy-in", "../../static/images/Policy.svg", "develop-enabling-framework-conditions-for-health-facility-electrification", "Politique, planification et cadre institutionnel pour la mise en œuvre"],
      "Technical aspects to be  considered for policy and  regulations": ["technical-standards-for-healthcare-electrification", "../../static/images/TechnicalAspect.png", "develop-enabling-framework-conditions-for-health-facility-electrification", "Aspects techniques à considérer pour les politiques et les réglementations"],
      "Financial conditions": ["identification-of-investment-needs-and-financing-gaps-based-on-new-or-revised-national-electrification-strategy-and-healthcare-components", "../../static/images/financial.png", "develop-enabling-framework-conditions-for-health-facility-electrification", "Condition financière"],
    },
  },
];
export const resourcesList = [
  {
    "id": 1,
    "attributes": {
      "Name": "Electricity Access",
      "createdAt": "2022-11-03T12:05:58.176Z",
      "updatedAt": "2023-04-19T12:44:32.100Z",
      "publishedAt": "2022-11-03T12:06:01.609Z",
      "QuestionId": "9",
      "locale": "en",
      "FrenchName": "Accès à l’électricité"
    }
  },
  {
    "id": 2,
    "attributes": {
      "Name": "Clean Cooking",
      "createdAt": "2022-11-03T12:06:36.827Z",
      "updatedAt": "2023-04-19T12:44:47.314Z",
      "publishedAt": "2022-11-03T12:06:37.839Z",
      "QuestionId": "32",
      "locale": "en",
      "FrenchName": "Cuisson propre"
    }
  },
  {
    "id": 3,
    "attributes": {
      "Name": "Energy Efficiency",
      "createdAt": "2022-11-03T12:07:01.176Z",
      "updatedAt": "2023-04-19T12:45:14.427Z",
      "publishedAt": "2022-11-03T12:07:01.970Z",
      "QuestionId": "80",
      "locale": "en",
      "FrenchName": "Efficacité énergétique"
    }
  },
  {
    "id": 4,
    "attributes": {
      "Name": "Sustainable Cooling",
      "createdAt": "2022-11-03T12:07:23.964Z",
      "updatedAt": "2023-04-24T10:22:54.789Z",
      "publishedAt": "2022-11-03T12:07:25.369Z",
      "QuestionId": "52",
      "locale": "en",
      "FrenchName": "Refroidissement durable"
    }
  },
  {
    "id": 9,
    "attributes": {
      "Name": "Powering Healthcare",
      "createdAt": "2024-05-08T14:37:50.771Z",
      "updatedAt": "2024-06-27T11:28:45.464Z",
      "publishedAt": "2024-05-08T14:42:27.318Z",
      "QuestionId": "172",
      "locale": "en",
      "FrenchName": "L'électrification des établissements de santé"
    }
  }
]

export const logoData = [
  {
    img: "../../static/images/african-development.jpg",
    title: "African Development Bank Group",
    link: "https://www.afdb.org/en",
    width: "100%",
  },
  {
    img: "../../static/images/ASR_Logo.png",
    title: "African School of Regulation",
    link: "https://africanschoolregulation.org/",
    width: "86%",
  },
  {
    img: "../../static/images/ARE_LOGO_2014_cmyk.png",
    title: "Alliance for Rural Electrification",
    link: "https://www.ruralelec.org/",
    width: "100%",
  },
  {
    img: "../../static/images/BASE_Logo_blue_claim.png",
    title: "BASE",
    link: "https://energy-base.org/",
    width: "80%",
  },
  {
    img: "../../static/images/CRDF_CARBSE_Logo.jpg",
    title: "CEPT Research and Development Foundation",
    link: "https://crdf.org.in/",
    width: "100%",
  },
  {
    img: "../../static/images/DUKE EAP_blue_square_line.png",
    title: "Duke Energy Access Project",
    link: "https://energyaccess.duke.edu/",
    width: "70%",
  },
  {
    img: "../../static/images/EEPAfrica_Logo_4Color_CMYK.jpg",
    title: "EEP Africa",
    link: "https://eepafrica.org/",
    width: "82%",
  },
  {
    img: "../../static/images/energypedia_Logo.png",
    title: "Energypedia",
    link: "https://energypedia.info/wiki/Main_Page",
    width: "62%",
  },
  {
    img: "../../static/images/HEVAC_Kenya_logo.png",
    title: "HEVAC Kenya",
    link: "https://hevac.co.ke/",
    width: "80%",
  },
  {
    img: "../../static/images/iit_comillas.png",
    title: "IIT Comillas",
    link: "https://www.iit.comillas.edu/",
    width: "100%",
  },
  {
    img: "../../static/images/Kenya_Green_Building_Society_Green_Logo.png",
    title: "Kenya Green Building Society",
    link: "https://kgbs.co.ke/",
    width: "100%",
  },
  {
    img: "../../static/images/Kerea_logo.png",
    title: "Kenya Renewable Energy Association",
    link: "http://kerea.org/",
    width: "94%",
  },
  {
    img: "../../static/images/ERC_logo_High_Resolution.jpg",
    title: "NUL Energy Research Centre",
    link: "https://erc.nul.ls/",
    width: "62%",
  },
  {
    img: "../../static/images/WRI_logo_4c.png",
    title: "World Resources Institute",
    link: "https://www.wri.org/",
    width: "100%",
  },
  {
    img: "../../static/images/U4E_Colour-Green-Icons.svg",
    title: "United for Efficiency",
    link: "https://united4efficiency.org/",
    width: "86%",
  },
  {
    img: "../../static/images/waya_energy.png",
    title: "Waya Energy",
    link: "https://waya-energy.com/",
    width: "100%",
  },
  {
    img: "../../static/images/WEB_Limited.jpg",
    title: "WEB Limited, Kenya",
    link: "https://www.linkedin.com/in/web-limited-8b34081b8/",
    width: "90%",
  },
  {
    img: "../../static/images/AMDA.png",
    title: "AMDA",
    link: "https://africamda.org/",
    width: "100%",
  },
  {
    img: "../../static/images/world_bank.png",
    title: "The World Bank",
    link: "https://www.worldbank.org/",
    width: "100%",
  },
  {
    img: "../../static/images/chai.png",
    title: "Clinton Health Access Initiative",
    link: "https://www.clintonhealthaccess.org/",
    width: "100%",
  },
  {
    img: "../../static/images/irena.png",
    title: "IRENA",
    link: "https://www.irena.org/",
    width: "100%",
  },
  {
    img: "../../static/images/unicef.png",
    title: "UNICEF",
    link: "https://www.unicef.org/",
    width: "100%",
  },
  {
    img: "../../static/images/usaid.png",
    title: "USAID",
    link: "https://www.usaid.gov/",
    width: "100%",
  },
];
