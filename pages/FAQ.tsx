import React from 'react';
import { FAQS } from '../content';
import SEO from '../components/SEO';
import { HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
  return (
    <>
      <SEO 
        title="Frequently Asked Questions" 
        description="Common questions about urology, surgeries, recovery, and insurance accepted by Dr. Sharma."
      />

      <div className="bg-slate-50 min-h-screen py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
             <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <HelpCircle size={32} />
             </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-slate-600">
              Find answers to common concerns about urological health and procedures.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-3">
                   <span className="text-blue-200 text-2xl leading-none -mt-1">Q.</span>
                   {faq.question}
                </h3>
                <div className="pl-8 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center bg-white p-8 rounded-xl shadow-sm border border-slate-100">
             <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
             <p className="text-slate-600 mb-6">We're here to help. Contact our clinic directly.</p>
             <Link to="/contact" className="text-blue-600 font-bold hover:underline">Contact Support</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;