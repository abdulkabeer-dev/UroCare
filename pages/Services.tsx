import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../content';
import SEO from '../components/SEO';
import { ArrowRight, Activity } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <>
      <SEO 
        title="Urology Treatments & Services" 
        description="Comprehensive list of urology services offered including Kidney Stones, Prostate Cancer, BPH, and Male Infertility treatments."
      />

      <div className="bg-slate-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Treatments & Services</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We offer advanced diagnostic and therapeutic services for a wide range of urological conditions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col">
                <div className="h-48 bg-slate-200 relative overflow-hidden">
                   <img 
                    src={`https://picsum.photos/600/400?random=${service.id.length}`} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <h3 className="text-white text-xl font-bold">{service.title}</h3>
                   </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                    {service.shortDescription}
                  </p>
                  <Link 
                    to={`/treatment/${service.id}`} 
                    className="group flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition"
                  >
                    View Treatment Details 
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Not sure what you need?</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Schedule a consultation with our experts to discuss your symptoms and get a proper diagnosis.
            </p>
            <Link to="/appointment" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-50 transition">
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;