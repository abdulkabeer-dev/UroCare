import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Shield, Clock, Phone, CheckCircle, Star, Zap, Droplets, Moon, Flame, AlertCircle, Users, Scissors, RefreshCw, HeartHandshake, Baby } from 'lucide-react';
import SEO from '../components/SEO';
import { SERVICES, DOCTOR_INFO, TESTIMONIALS } from '../content';

const SYMPTOMS = [
  {
    id: 'pain',
    icon: <Zap size={24} />,
    label: 'Severe Side/Back Pain',
    condition: 'Kidney Stones',
    description: 'Sharp pain in the flank or back, often radiating to the groin, is a classic sign of kidney stones causing blockage.',
    urgency: 'High',
    link: '/treatment/endo-urology',
    color: 'bg-orange-100 text-orange-600'
  },
  {
    id: 'flow',
    icon: <Droplets size={24} />,
    label: 'Weak Urine Stream',
    condition: 'Enlarged Prostate (BPH)',
    description: 'Difficulty starting urination, a weak stream, or dribbling are common signs of prostate enlargement in men over 50.',
    urgency: 'Medium',
    link: '/treatment/endo-urology',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: 'blood',
    icon: <AlertCircle size={24} />,
    label: 'Blood in Urine',
    condition: 'Hematuria',
    description: 'Visible blood in urine (Hematuria) should never be ignored. It can indicate infections, stones, or tumors.',
    urgency: 'Urgent',
    link: '/appointment',
    color: 'bg-red-100 text-red-600'
  },
  {
    id: 'night',
    icon: <Moon size={24} />,
    label: 'Frequent Night Urination',
    condition: 'Nocturia',
    description: 'Waking up more than twice a night to urinate disrupts sleep and often signals prostate or bladder sensitivity issues.',
    urgency: 'Medium',
    link: '/treatment/endo-urology',
    color: 'bg-indigo-100 text-indigo-600'
  },
  {
    id: 'burn',
    icon: <Flame size={24} />,
    label: 'Burning Sensation',
    condition: 'Urinary Tract Infection',
    description: 'Pain or burning during urination (Dysuria) usually indicates an active infection in the urinary tract.',
    urgency: 'Medium',
    link: '/appointment',
    color: 'bg-amber-100 text-amber-600'
  },
  {
    id: 'fertility',
    icon: <Users size={24} />,
    label: 'Trouble Conceiving',
    condition: 'Male Infertility',
    description: 'If you have been trying to conceive for over a year without success, a male fertility evaluation is recommended.',
    urgency: 'Low',
    link: '/treatment/andrology',
    color: 'bg-green-100 text-green-600'
  }
];

const Home: React.FC = () => {
  const [activeSymptom, setActiveSymptom] = useState<string | null>(null);
  const featuredServices = SERVICES.slice(0, 6);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'endo-urology': return <Zap size={24} />;
      case 'laparoscopic-procedures': return <Scissors size={24} />;
      case 'reconstructive-urology': return <RefreshCw size={24} />;
      case 'renal-transplantation': return <HeartHandshake size={24} />;
      case 'uro-oncology': return <Shield size={24} />;
      case 'andrology': return <Users size={24} />;
      case 'paediatric-urology': return <Baby size={24} />;
      default: return <Activity size={24} />;
    }
  };

  return (
    <>
      <SEO 
        title="Best Urologist in Kurnool | Dr. Vishnu Vardhan Reddy" 
        description="Dr. N. Vishnu Vardhan Reddy is a leading Urologist in Kurnool, specializing in RIRS, Kidney Transplants, Andrology, and Laparoscopic Surgery."
      />
      
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20 lg:py-32 overflow-hidden">
        {/* Updated Background Image: Medical Abstract/Blue Cells */}
        <img 
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80" 
          alt="Medical Background" 
          className="absolute inset-0 z-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
          loading="lazy"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-blue-800 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
                Expert Urological Care
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Advanced Kidney, Andrology & <span className="text-blue-200">Transplant Care</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-lg">
                Specializing in "No Cut, No Hole" Kidney Stone surgeries, Renal Transplantation, and Male Infertility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/appointment" className="bg-white text-blue-700 px-8 py-3.5 rounded-full font-bold shadow-lg hover:bg-blue-50 transition flex justify-center items-center gap-2">
                  Book Appointment <ArrowRight size={18} />
                </Link>
                <a href={`tel:${DOCTOR_INFO.phone.split(',')[0]}`} className="bg-transparent border-2 border-white text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/10 transition flex justify-center items-center gap-2">
                  <Phone size={18} /> Call Now
                </a>
              </div>
            </div>
            <div className="hidden md:block relative">
               <div className="absolute -inset-4 bg-white/10 rounded-full blur-2xl"></div>
               {/* Updated Foreground Image: Doctor/Surgeon Portrait */}
               <img 
                src="https://vexfore.com/wp-content/uploads/2025/12/gemini-3-pro-image-preview-2k-nano-banana-pro_a_adjust_the_image_lig-e1766060246402.png" 
                alt="Doctor Portrait" 
                className="relative rounded-3xl shadow-2xl border-4 border-white/20 mx-auto w-3/4 object-cover"
                loading="lazy"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Card */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <img 
                src="https://vexfore.com/wp-content/uploads/2025/12/gemini-3-pro-image-preview-2k-nano-banana-pro_a_professional_photogr.png" 
                alt={DOCTOR_INFO.name} 
                className="rounded-xl shadow-md w-full object-cover object-top h-96" 
                loading="lazy"
              />
            </div>
            <div className="md:w-2/3 space-y-4">
              <h2 className="text-3xl font-bold text-blue-900">Meet {DOCTOR_INFO.name}</h2>
              <p className="text-blue-600 font-semibold text-lg">{DOCTOR_INFO.title}</p>
              <p className="text-slate-600 leading-relaxed">
                {DOCTOR_INFO.philosophy}
              </p>
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="font-medium text-slate-700">MCh Urology</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="font-medium text-slate-700">Ex-Consultant NIMS</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="font-medium text-slate-700">Renal Transplant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="font-medium text-slate-700">No Cut, No Hole</span>
                </div>
              </div>
              <Link to="/about" className="inline-block text-blue-600 font-semibold hover:text-blue-800 transition">
                Read Full Profile &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Anatomy Diagram Section */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900">Complete Urological Care</h2>
            <p className="text-slate-600 mt-2">Covering all aspects of the urinary and male reproductive systems</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50">
            {/* 
              NOTE: To display the specific image provided, please save it as 'urology-diagram.png' 
              in your public folder or update the src below to the image URL.
            */}
            <img 
              src="/urology-diagram.png" 
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://vexfore.com/wp-content/uploads/2025/12/Dr.-Vishnu-Clinic.png";
              }}
              alt="Urology Organs Diagram: Kidneys, Ureters, Bladder, Prostate, Testes, Epididymis" 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Interactive Symptom Checker */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-blue-900">Interactive Symptom Checker</h2>
            <p className="text-slate-600 mt-2">Tap on a symptom to see potential causes and recommendations.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {SYMPTOMS.map((symptom) => (
                <button
                  key={symptom.id}
                  onClick={() => setActiveSymptom(activeSymptom === symptom.id ? null : symptom.id)}
                  className={`p-6 rounded-xl border transition-all duration-300 flex flex-col items-center justify-center text-center gap-3 h-40 shadow-sm ${
                    activeSymptom === symptom.id
                      ? 'bg-blue-600 border-blue-600 text-white shadow-lg scale-105'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <div className={`p-3 rounded-full ${activeSymptom === symptom.id ? 'bg-white/20' : symptom.color}`}>
                    {symptom.icon}
                  </div>
                  <span className="font-semibold text-sm sm:text-base">{symptom.label}</span>
                </button>
              ))}
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 h-full p-8 relative overflow-hidden transition-all">
                {activeSymptom ? (
                  <div className="animate-fade-in space-y-4">
                    {SYMPTOMS.filter(s => s.id === activeSymptom).map(s => (
                      <React.Fragment key={s.id}>
                        <div className="flex items-center gap-3 mb-2">
                           <div className={`p-2 rounded-lg ${s.color}`}>{s.icon}</div>
                           <h3 className="text-2xl font-bold text-blue-900">{s.condition}</h3>
                        </div>
                        
                        <div className="space-y-4">
                          <p className="text-slate-600 leading-relaxed text-lg">{s.description}</p>
                          
                          <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                             <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Urgency Level</span>
                             <div className={`text-lg font-bold ${s.urgency === 'Urgent' || s.urgency === 'High' ? 'text-red-600' : 'text-blue-600'}`}>
                                {s.urgency} Action Recommended
                             </div>
                          </div>

                          <div className="pt-2 flex flex-col sm:flex-row gap-3">
                            <Link to={s.link} className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                              View Treatment
                            </Link>
                            <Link to="/appointment" className="flex-1 border-2 border-slate-200 text-slate-700 text-center py-3 rounded-lg font-bold hover:border-blue-600 hover:text-blue-600 transition">
                              Book Checkup
                            </Link>
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-8">
                    <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-300">
                      <Activity size={40} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-400">No Symptom Selected</h3>
                      <p className="text-slate-400 max-w-xs mx-auto mt-2">Select a symptom from the grid to interpret your health signs.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Conditions We Treat</h2>
            <p className="text-slate-600 mt-2">Comprehensive urological care for men, women, and children</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 border border-slate-100 flex flex-col">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                  {getServiceIcon(service.id)}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 mb-4 flex-grow">{service.shortDescription}</p>
                <Link to={`/treatment/${service.id}`} className="text-blue-600 font-medium hover:text-blue-800 flex items-center gap-1 mt-auto">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-block border border-slate-300 bg-white text-slate-700 px-6 py-3 rounded-full font-medium hover:bg-slate-50 transition">
              View All Treatments
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Why Choose Us?</h2>
            <p className="text-slate-600 mt-2">Dedicated to excellence in patient care and clinical outcomes</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Advanced Technology</h3>
              <p className="text-slate-600">Using the latest Holmium Laser and Laparoscopic equipment for minimal scarring.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Activity size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Care</h3>
              <p className="text-slate-600">Experienced MCh Urologist & Renal Transplant Surgeon.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Quick Recovery</h3>
              <p className="text-slate-600">Day-care procedures available for kidney stones ensuring you return to work faster.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Infinite Horizontal Scroll */}
      <section className="py-20 bg-blue-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <h2 className="text-3xl font-bold">Patient Stories</h2>
          <p className="text-blue-200 mt-2">Read what our patients have to say about their experience</p>
        </div>
        
        <div className="relative w-full">
          {/* Gradient Overlay for Fade Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-blue-900 z-10 hidden md:block"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-blue-900 z-10 hidden md:block"></div>
          
          <div className="flex animate-scroll gap-6 w-max px-4">
            {/* Duplicate list to create seamless loop */}
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div 
                key={`${t.id}-${i}`} 
                className="w-72 md:w-96 bg-[#0e6079] p-8 rounded-xl border border-blue-700/50 flex-shrink-0 shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < t.rating ? "currentColor" : "none"} className={i < t.rating ? "" : "text-blue-700"} />
                  ))}
                </div>
                <p className="text-blue-50 italic mb-8 leading-relaxed text-lg font-light">"{t.text}"</p>
                <div className="border-t border-blue-700/30 pt-4 mt-auto">
                  <h4 className="font-bold text-white text-lg">{t.name}</h4>
                  <p className="text-sm text-blue-300 font-medium">{t.condition}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Prioritize Your Health Today</h2>
          <p className="text-lg text-slate-600 mb-8">
            Don't let urological issues affect your quality of life. Schedule a consultation with Dr. Vishnu for a personalized treatment plan.
          </p>
          <Link to="/appointment" className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-blue-700 transition inline-flex items-center gap-2">
            Book an Appointment Now <CalendarIcon />
          </Link>
        </div>
      </section>
    </>
  );
};

// Simple Icon component to avoid import issues if not needed elsewhere
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);

export default Home;