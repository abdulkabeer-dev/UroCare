import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../content';
import SEO from '../components/SEO';
import { ArrowRight, Zap, Scissors, RefreshCw, HeartHandshake, Shield, Users, Baby, Activity } from 'lucide-react';

const Services: React.FC = () => {
  
  const getIcon = (id: string) => {
    switch (id) {
      case 'endo-urology': return <Zap size={32} strokeWidth={1.5} />;
      case 'laparoscopic-procedures': return <Scissors size={32} strokeWidth={1.5} />;
      case 'reconstructive-urology': return <RefreshCw size={32} strokeWidth={1.5} />;
      case 'renal-transplantation': return <HeartHandshake size={32} strokeWidth={1.5} />;
      case 'uro-oncology': return <Shield size={32} strokeWidth={1.5} />;
      case 'andrology': return <Users size={32} strokeWidth={1.5} />;
      case 'paediatric-urology': return <Baby size={32} strokeWidth={1.5} />;
      default: return <Activity size={32} strokeWidth={1.5} />;
    }
  };

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

          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white rounded-xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition duration-300 flex flex-col items-start group">
                <div className="bg-blue-50 text-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                   {getIcon(service.id)}
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                  {service.shortDescription}
                </p>
                <Link 
                  to={`/treatment/${service.id}`} 
                  className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition"
                >
                  Learn More 
                  <ArrowRight size={18} />
                </Link>
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