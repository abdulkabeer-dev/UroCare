import React, { useState } from 'react';
import { ChevronDown, Phone, Calendar, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FAQ } from '../types';
import { DOCTOR_INFO } from '../content';

interface FAQAccordionProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  faqs: FAQ[];
  defaultOpenIndex?: number | null;
  className?: string;
  showContactCTA?: boolean;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({
  title = "Frequently Asked Questions",
  subtitle = "Direct, medically validated answers to common patient questions and clinical inquiries.",
  badge = "Patient FAQ & Help",
  faqs,
  defaultOpenIndex = 0,
  className = "",
  showContactCTA = true
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <section 
      className={`py-14 bg-slate-50 border-t border-slate-200/80 ${className}`} 
      aria-labelledby="faq-section-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          {badge && (
            <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-2">
              {badge}
            </div>
          )}
          <h2 
            id="faq-section-heading" 
            className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-base text-slate-600 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-btn-${index}`;
            const regionId = `faq-content-${index}`;

            return (
              <div 
                key={index}
                className={`bg-white rounded-xl border transition-all duration-200 ${
                  isOpen 
                    ? 'border-blue-300 shadow-sm' 
                    : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={regionId}
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-xl"
                >
                  <span className="font-semibold text-base sm:text-lg text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <span 
                    className={`mt-0.5 p-1 rounded-full text-slate-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'transform rotate-180 text-blue-600 bg-blue-50' : 'bg-slate-100'
                    }`}
                    aria-hidden="true"
                  >
                    <ChevronDown size={18} />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={regionId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 pb-5 sm:px-6 sm:pb-6 text-slate-600 leading-relaxed text-sm sm:text-base border-t border-slate-100 pt-4"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        {showContactCTA && (
          <div className="mt-10 bg-white border border-slate-200 rounded-xl p-5 sm:p-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <HelpCircle size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm sm:text-base">
                  Have a specific medical or surgical inquiry?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Speak directly with Dr. Vishnu's clinical team in Kurnool.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${DOCTOR_INFO.phone.split(',')[0].replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors whitespace-nowrap"
              >
                <Phone size={14} /> Call Clinic
              </a>
              <Link
                to="/appointment"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                <Calendar size={14} /> Book Appointment
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQAccordion;
