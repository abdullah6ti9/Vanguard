import { BusinessInfo } from '../types';

/**
 * EDITABLE BUSINESS CONFIGURATION
 * Replace the values below with your real contractor company information.
 */
export const businessInfo: BusinessInfo = {
  companyName: "Vanguard Craftsmen Contracting",
  tagline: "Precision Construction. Transparent Pricing. Built to Last.",
  phone: "5552348900",
  phoneFormatted: "(555) 234-8900",
  email: "estimates@vanguardcraftsmen.com",
  address: {
    street: "4850 Construction Blvd, Suite 200",
    city: "Metropolis",
    state: "CA",
    zip: "90210",
    fullAddress: "4850 Construction Blvd, Suite 200, Metropolis, CA 90210",
  },
  licenseNumber: "CSLB #1098421 (B-General Building)",
  insuranceCoverage: "$5,000,000 General Liability & Full Workers' Compensation",
  warrantyYears: 10,
  yearsInBusiness: 18,
  projectsCompleted: 850,
  customerRating: 4.9,
  reviewCount: 342,
  businessHours: {
    weekdays: "7:00 AM - 6:00 PM",
    saturday: "8:00 AM - 3:00 PM",
    sunday: "Closed (Emergency Repairs Available)",
  },
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    houzz: "https://houzz.com",
    googleMyBusiness: "https://google.com",
  },
  guarantees: [
    {
      title: "Fixed-Price Guarantee",
      description: "Detailed, line-item estimates upfront. No surprise add-ons or hidden fees unless you explicitly approve a scope change.",
      icon: "ShieldCheck",
    },
    {
      title: "On-Time Completion Commitment",
      description: "We set clear project milestones and stick to them. If we incur unapproved delays, we pay a daily credit.",
      icon: "Clock",
    },
    {
      title: "10-Year Structural Warranty",
      description: "We stand firmly behind our master craftsmanship with a comprehensive 10-year warranty on structural work.",
      icon: "Award",
    },
    {
      title: "Dust-Free & Clean Job Sites",
      description: "We use air filtration scrubbers, floor protection, and daily cleanup protocols to respect your living space.",
      icon: "Sparkles",
    },
    {
      title: "Full License & $5M Insurance",
      description: "Complete coverage protecting your home and property against any unforeseen liabilities.",
      icon: "FileCheck",
    },
  ],
};
