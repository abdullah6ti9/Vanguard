import { ServiceArea } from '../types';

export const serviceAreasData: ServiceArea[] = [
  {
    id: "metro-central",
    cityName: "Metropolis & Westside",
    countyName: "Metropolitan County",
    zipCodes: ["90210", "90211", "90212", "90401", "90402", "90403", "90049", "90077"],
    featuredProjectTitle: "Bel Air Open-Concept Kitchen & Santa Monica Addition",
    isPrimaryZone: true,
    description: "Our core headquarters service area. Fast 30-minute emergency team response, dedicated field superintendents, and daily site visits.",
  },
  {
    id: "pasadena-valleys",
    cityName: "Pasadena & East Foothills",
    countyName: "Foothills County",
    zipCodes: ["91101", "91105", "91108", "90027", "90068"],
    featuredProjectTitle: "Pasadena Hills Master Spa Bath Sanctuary",
    isPrimaryZone: true,
    description: "Specializing in historic craftsman homes, mid-century restorations, structural earthquake retrofitting, and custom room expansions.",
  },
  {
    id: "calabasas-encino",
    cityName: "Calabasas & San Fernando Valley",
    countyName: "Valley District",
    zipCodes: ["91302", "91303", "91361", "91362", "90046"],
    featuredProjectTitle: "James Hardie Siding Overhaul & Mid-Century Gut Renovation",
    isPrimaryZone: true,
    description: "Comprehensive home upgrades including wildfire-resistant fiber cement siding, GAF architectural roofs, and custom swimming pool ADU buildouts.",
  },
  {
    id: "coastal-malibu",
    cityName: "Malibu & Coastal Ridge",
    countyName: "Coastal District",
    zipCodes: ["90265", "90272", "90266", "90274", "90275"],
    featuredProjectTitle: "Trex Outdoor Decking & Custom Coastal Additions",
    isPrimaryZone: false,
    description: "High-end coastal construction engineered against salt-air corrosion, hillside soil movement, and strict coastal commission regulations.",
  },
];
