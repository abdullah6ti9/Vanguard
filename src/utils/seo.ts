import { businessInfo } from '../data/businessInfo';
import { faqData } from '../data/faqData';
import { servicesData } from '../data/servicesData';

export function updatePageMeta(title: string, description: string) {
  document.title = `${title} | ${businessInfo.companyName}`;

  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', description);
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": businessInfo.companyName,
    "image": "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80",
    "telePhone": businessInfo.phoneFormatted,
    "email": businessInfo.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessInfo.address.street,
      "addressLocality": businessInfo.address.city,
      "addressRegion": businessInfo.address.state,
      "postalCode": businessInfo.address.zip,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.0522,
      "longitude": -118.2437
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "08:00",
        "closes": "15:00"
      }
    ],
    "priceRange": "$$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": businessInfo.customerRating.toString(),
      "reviewCount": businessInfo.reviewCount.toString()
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "General Contracting Services",
      "itemListElement": servicesData.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.shortDescription
        },
        "position": index + 1
      }))
    }
  };
}

export function generateFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function injectJsonLdSchema() {
  let scriptTag = document.getElementById('json-ld-schema');
  if (!scriptTag) {
    scriptTag = document.createElement('script');
    scriptTag.id = 'json-ld-schema';
    scriptTag.setAttribute('type', 'application/ld+json');
    document.head.appendChild(scriptTag);
  }

  const schemas = [generateLocalBusinessSchema(), generateFaqSchema()];
  scriptTag.textContent = JSON.stringify(schemas);
}
