import React, { useState, useMemo } from 'react';
import { FAQS, DOCTOR_INFO } from '../content';
import SEO from '../components/SEO';
import { HelpCircle, Search, ChevronDown, Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const CATEGORIES = [
  "All",
  "General",
  "Kidney Stones",
  "Prostate & Bladder",
  "Transplant",
  "Andrology",
  "Paediatrics"
];

const FAQ: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = useMemo(() => {
    return FAQS.filter(faq => {
      const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
      const matchesSearch = !searchQuery.trim() || 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  return (
    <>
      <SEO 
        title="Frequently Asked Questions (FAQ) | Urology Care Kurnool" 
        description={`Direct answers to common questions regarding kidney stone laser surgery, prostate treatments, male infertility, and appointments with ${DOCTOR_INFO.name}.`}
        faqs={FAQS}
      />

      <div className="bg-slate-50 min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-full mb-4">
              <HelpCircle size={28} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Find clear, medically validated answers to common questions about urological health, laser surgeries, and clinic procedures with {DOCTOR_INFO.name}.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setOpenIndex(0);
              }}
              placeholder="Search by symptom, treatment, or topic (e.g. kidney stone, RIRS, prostate, cost)..."
              className="w-full bg-white text-slate-900 pl-11 pr-4 py-3.5 rounded-xl border border-slate-200/90 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm sm:text-base transition"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setOpenIndex(0);
                }}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200/90 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List */}
          {filteredFaqs.length > 0 ? (
            <div className="space-y-3">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const buttonId = `faq-item-${index}`;
                const regionId = `faq-answer-${index}`;

                return (
                  <div 
                    key={index} 
                    className={`bg-white rounded-xl border transition-all duration-200 ${
                      isOpen ? 'border-blue-300 shadow-sm' : 'border-slate-200/90 hover:border-slate-300'
                    }`}
                  >
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={regionId}
                      onClick={() => toggleAccordion(index)}
                      className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-xl"
                    >
                      <div className="space-y-1 pr-2">
                        {faq.category && (
                          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                            {faq.category}
                          </span>
                        )}
                        <h3 className="text-base sm:text-lg font-semibold text-slate-900 leading-snug">
                          {faq.question}
                        </h3>
                      </div>
                      <span 
                        className={`p-1 rounded-full text-slate-500 transition-transform duration-200 shrink-0 mt-0.5 ${
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
          ) : (
            <div className="bg-white rounded-xl p-10 text-center border border-slate-200 text-slate-500">
              <p className="text-base font-semibold text-slate-700 mb-1">No matching questions found</p>
              <p className="text-sm">Try searching for other terms like "kidney", "surgery", "transplant", or "timings".</p>
              <button 
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="mt-4 px-4 py-2 bg-blue-50 text-blue-600 text-xs font-semibold rounded-lg hover:bg-blue-100 transition"
              >
                Reset Filters
              </button>
            </div>
          )}
          
          {/* Still Have Questions CTA */}
          <div className="mt-12 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Still Have Questions?</h3>
              <p className="text-slate-600 text-sm sm:text-base">
                Our clinical coordinator is available to answer any questions regarding appointments, procedures, or reports.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${DOCTOR_INFO.phone.split(',')[0].replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors whitespace-nowrap"
              >
                <Phone size={16} /> Call Clinic
              </a>
              <Link
                to="/appointment"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                <Calendar size={16} /> Book Appointment
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default FAQ;