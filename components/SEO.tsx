import React, { useEffect } from 'react';
import { DOCTOR_INFO } from '../content';

interface SEOProps {
  title: string;
  description: string;
  schema?: object;
}

const SEO: React.FC<SEOProps> = ({ title, description, schema }) => {
  useEffect(() => {
    document.title = `${title} | ${DOCTOR_INFO.name}`;
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Schema
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
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Medical Park",
        "addressLocality": "Health City",
        "postalCode": "560001",
        "addressCountry": "US"
      },
      "priceRange": "$$",
      "medicalSpecialty": "Urology"
    };

    script.textContent = JSON.stringify(schema ? { ...baseSchema, ...schema } : baseSchema);

  }, [title, description, schema]);

  return null;
};

export default SEO;