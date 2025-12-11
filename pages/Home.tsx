import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Shield, Clock, Phone, CheckCircle, Star, Zap, Droplets, Moon, Flame, AlertCircle, Users } from 'lucide-react';
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
    link: '/treatment/kidney-stones',
    color: 'bg-orange-100 text-orange-600'
  },
  {
    id: 'flow',
    icon: <Droplets size={24} />,
    label: 'Weak Urine Stream',
    condition: 'Enlarged Prostate (BPH)',
    description: 'Difficulty starting urination, a weak stream, or dribbling are common signs of prostate enlargement in men over 50.',
    urgency: 'Medium',
    link: '/treatment/bph',
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
    link: '/treatment/bph',
    color: 'bg-indigo-100 text-indigo-600'
  },
  {
    id: 'burn',
    icon: <Flame size={24} />,
    label: 'Burning Sensation',
    condition: 'Urinary Tract Infection',
    description: 'Pain or burning during urination (Dysuria) usually indicates an active infection in the urinary tract.',
    urgency: 'Medium',
    link: '/treatment/uti',
    color: 'bg-amber-100 text-amber-600'
  },
  {
    id: 'fertility',
    icon: <Users size={24} />,
    label: 'Trouble Conceiving',
    condition: 'Male Infertility',
    description: 'If you have been trying to conceive for over a year without success, a male fertility evaluation is recommended.',
    urgency: 'Low',
    link: '/treatment/male-infertility',
    color: 'bg-green-100 text-green-600'
  }
];

const Home: React.FC = () => {
  const [activeSymptom, setActiveSymptom] = useState<string | null>(null);
  const featuredServices = SERVICES.slice(0, 6);

  return (
    <>
      <SEO 
        title="Best Urologist | Kidney Stone & Prostate Specialist" 
        description="Dr. Ananya Sharma is a leading Urologist providing advanced care for Kidney Stones, Prostate Enlargement, and Infertility with laser technology."
      />
      
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://picsum.photos/1920/1080')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-blue-800 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
                Expert Urological Care
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Advanced Kidney, Prostate & <span className="text-blue-200">Urinary Care</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-lg">
                Minimally invasive laser treatments for faster recovery. Trusted by thousands of patients for compassionate and effective care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/appointment" className="bg-white text-blue-700 px-8 py-3.5 rounded-full font-bold shadow-lg hover:bg-blue-50 transition flex justify-center items-center gap-2">
                  Book Appointment <ArrowRight size={18} />
                </Link>
                <a href={`tel:${DOCTOR_INFO.phone}`} className="bg-transparent border-2 border-white text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/10 transition flex justify-center items-center gap-2">
                  <Phone size={18} /> Call Now
                </a>
              </div>
            </div>
            <div className="hidden md:block relative">
               <div className="absolute -inset-4 bg-white/10 rounded-full blur-2xl"></div>
               <img 
                src="https://picsum.photos/600/600?random=1" 
                alt="Doctor Portrait" 
                className="relative rounded-3xl shadow-2xl border-4 border-white/20 mx-auto w-3/4 object-cover"
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
              <img src="https://picsum.photos/400/500?random=2" alt={DOCTOR_INFO.name} className="rounded-xl shadow-md w-full object-cover h-80" />
            </div>
            <div className="md:w-2/3 space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">Meet {DOCTOR_INFO.name}</h2>
              <p className="text-blue-600 font-semibold text-lg">{DOCTOR_INFO.title}</p>
              <p className="text-slate-600 leading-relaxed">
                {DOCTOR_INFO.philosophy}
              </p>
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="font-medium text-slate-700">{DOCTOR_INFO.experience}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="font-medium text-slate-700">Board Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="font-medium text-slate-700">Advanced Laser Tech</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="font-medium text-slate-700">Patient Centric</span>
                </div>
              </div>
              <Link to="/about" className="inline-block text-blue-600 font-semibold hover:text-blue-800 transition">
                Read Full Profile &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Symptom Checker */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Interactive Symptom Checker</h2>
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
                           <h3 className="text-2xl font-bold text-slate-900">{s.condition}</h3>
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
            <h2 className="text-3xl font-bold text-slate-900">Conditions We Treat</h2>
            <p className="text-slate-600 mt-2">Comprehensive urological care for men, women, and children</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 border border-slate-100 flex flex-col">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Activity size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
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
            <h2 className="text-3xl font-bold text-slate-900">Why Choose Us?</h2>
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
              <p className="text-slate-600">Over 15 years of specialized experience in complex urological procedures.</p>
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

      {/* Testimonials */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Patient Stories</h2>
            <p className="text-blue-200 mt-2">Read what our patients have to say about their experience</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-blue-800 p-6 rounded-xl border border-blue-700">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-blue-100 italic mb-6">"{t.text}"</p>
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-sm text-blue-300">{t.condition}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Prioritize Your Health Today</h2>
          <p className="text-lg text-slate-600 mb-8">
            Don't let urological issues affect your quality of life. Schedule a consultation with Dr. Sharma for a personalized treatment plan.
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