export type PageRoute = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'projects' 
  | 'service-areas' 
  | 'reviews' 
  | 'faq' 
  | 'contact';

export interface BusinessInfo {
  companyName: string;
  tagline: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    fullAddress: string;
  };
  licenseNumber: string;
  insuranceCoverage: string;
  warrantyYears: number;
  yearsInBusiness: number;
  projectsCompleted: number;
  customerRating: number;
  reviewCount: number;
  businessHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  socialLinks: {
    facebook: string;
    instagram: string;
    houzz: string;
    googleMyBusiness: string;
  };
  guarantees: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  iconName: string;
  popular?: boolean;
  features: string[];
  typicalTimeline: string;
  startingPriceRange: string;
  processSteps: string[];
  faqs: { question: string; answer: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'kitchens' | 'bathrooms' | 'renovations' | 'additions' | 'exteriors' | 'commercial';
  categoryLabel: string;
  location: string;
  completionDate: string;
  duration: string;
  budgetRange: string;
  sqft: number;
  shortDescription: string;
  fullStory: string;
  heroImage: string;
  beforeImage?: string;
  afterImage?: string;
  gallery: string[];
  keyFeatures: string[];
  clientQuote?: {
    text: string;
    clientName: string;
    neighborhood: string;
  };
}

export interface TestimonialItem {
  id: string;
  customerName: string;
  location: string;
  projectType: string;
  rating: number;
  date: string;
  comment: string;
  verifiedCustomer: boolean;
  avatarUrl?: string;
  projectPhotoUrl?: string;
}

export interface FaqItem {
  id: string;
  category: 'quote-pricing' | 'timeline-process' | 'permits-licenses' | 'warranties-quality' | 'general';
  categoryLabel: string;
  question: string;
  answer: string;
}

export interface ServiceArea {
  id: string;
  cityName: string;
  countyName: string;
  zipCodes: string[];
  featuredProjectTitle?: string;
  isPrimaryZone: boolean;
  description: string;
}

export interface QuoteFormData {
  projectType: string;
  scopeDetails: string[];
  zipCode: string;
  timeline: string;
  budgetRange: string;
  projectDescription: string;
  contactInfo: {
    name: string;
    phone: string;
    email: string;
    preferredContactMethod: 'phone' | 'email' | 'text';
  };
}
