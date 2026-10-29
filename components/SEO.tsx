import React, { useEffect } from 'react';
import { DOCTOR_INFO } from '../content';
import { FAQ } from '../types';

interface SEOProps {
  title: string;
  description: string;
  faqs?: FAQ[];
  schema?: object;
  pageType?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, faqs, schema, pageType = "MedicalWebPage" }) => {
  useEffect(() => {
    const fullTitle = `${title} | ${DOCTOR_INFO.name}`;
    const currentUrl = window.location.href;

    // 1. Title
    document.title = fullTitle;
    
    // 2. Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // 3. OpenGraph tags
    const setMetaTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMetaTag('og:title', fullTitle);
    setMetaTag('og:description', description);
    setMetaTag('og:url', currentUrl);
    setMetaTag('og:type', 'website');
    setMetaTag('og:site_name', "Dr. Vishnu's Uro Andro Care");

    // 4. Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', currentUrl);

    // 5. Schema.org JSON-LD (@graph with Physician, MedicalWebPage, and FAQPage)
    const scriptId = 'json-ld-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const physicianId = `${window.location.origin}/#physician`;
    const webpageId = `${currentUrl}#webpage`;

    const physicianEntity = {
      "@type": "Physician",
      "@id": physicianId,
      "name": DOCTOR_INFO.name,
      "description": `${DOCTOR_INFO.title} (${DOCTOR_INFO.qualifications}), ${DOCTOR_INFO.experience}`,
      "url": window.location.origin,
      "telephone": DOCTOR_INFO.phone,
      "priceRange": "$$",
      "medicalSpecialty": DOCTOR_INFO.specializations,
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
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "10:00",
          "closes": "14:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "17:30",
          "closes": "20:30"
        }
      ]
    };

    const medicalWebPageEntity = {
      "@type": pageType,
      "@id": webpageId,
      "url": currentUrl,
      "name": fullTitle,
      "description": description,
      "isPartOf": {
        "@type": "MedicalOrganization",
        "name": "Dr. Vishnu's Uro Andro Care",
        "url": window.location.origin
      },
      "about": {
        "@id": physicianId
      },
      "specialty": "Urology",
      "inLanguage": "en"
    };

    const graphEntities: any[] = [physicianEntity, medicalWebPageEntity];

    if (faqs && faqs.length > 0) {
      const faqEntity = {
        "@type": "FAQPage",
        "@id": `${currentUrl}#faq`,
        "name": `${title} - Frequently Asked Questions`,
        "isPartOf": {
          "@id": webpageId
        },
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };
      graphEntities.push(faqEntity);
    }

    if (schema) {
      graphEntities.push(schema);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": graphEntities
    };

    script.textContent = JSON.stringify(structuredData, null, 2);

  }, [title, description, faqs, schema, pageType]);

  return null;
};

export default SEO;