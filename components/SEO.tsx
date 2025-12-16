import React, { useEffect } from 'react';
import { DOCTOR_INFO } from '../content';

interface SEOProps {
  title: string;
  description: string;
  schema?: object;
}

const SEO: React.FC<SEOProps> = ({ title, description, schema }) => {
  useEffect(() => {
    // 1. Title
    document.title = `${title} | ${DOCTOR_INFO.name}`;
    
    // 2. Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // 3. Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', window.location.href);

    // 4. Schema.org JSON-LD
    const scriptId = 'json-ld-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": DOCTOR_INFO.name,
      "image": "https://picsum.photos/400/500",
      "url": window.location.href,
      "telephone": DOCTOR_INFO.phone,
      "priceRange": "$$",
      "medicalSpecialty": [
        "Urology",
        "Renal Transplantation",
        "Andrology"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kalyani Clinic, Opp. Vishwabharathi Hospital, Gayathri Estates",
        "addressLocality": "Kurnool",
        "addressRegion": "Andhra Pradesh",
        "postalCode": "518001",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "10:00",
          "closes": "20:30"
        }
      ]
    };

    script.textContent = JSON.stringify(schema ? { ...baseSchema, ...schema } : baseSchema);

  }, [title, description, schema]);

  return null;
};

export default SEO;