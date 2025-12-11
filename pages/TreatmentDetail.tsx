import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES } from '../content';
import SEO from '../components/SEO';
import { CheckCircle, AlertCircle, HelpCircle, Activity, Calendar } from 'lucide-react';

const TreatmentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <SEO 
        title={`${service.title} Treatment`} 
        description={service.shortDescription}
      />

      <div className="bg-slate-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <div className="text-sm text-slate-500 mb-6">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-blue-600">Treatments</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-800 font-medium">{service.title}</span>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{service.title}</h1>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  {service.overview}
                </p>
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 flex items-start gap-3">
                  <Activity className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Advanced Technology</h4>
                    <p className="text-blue-800 text-sm">{service.advancedTech}</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <AlertCircle className="text-red-500" size={20} /> Symptoms
                  </h3>
                  <ul className="space-y-3">
                    {service.symptoms.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-700">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <HelpCircle className="text-amber-500" size={20} /> Causes
                  </h3>
                  <ul className="space-y-3">
                    {service.causes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-700">
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Diagnosis & Treatment</h3>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-lg text-slate-800 mb-3">How we diagnose it</h4>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {service.diagnosis.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <CheckCircle size={16} className="text-blue-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-slate-800 mb-3">Treatment Options</h4>
                  <ul className="space-y-2">
                    {service.treatment.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700">
                         <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 text-sm font-bold">{idx + 1}</div>
                         <span className="mt-0.5">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {service.faqs && service.faqs.length > 0 && (
                 <div className="bg-white rounded-2xl shadow-sm p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
                    <div className="space-y-6">
                      {service.faqs.map((faq, index) => (
                        <div key={index} className="border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                          <h4 className="font-semibold text-slate-900 mb-2">{faq.question}</h4>
                          <p className="text-slate-600">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                 </div>
              )}

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              
              <div className="bg-white rounded-2xl shadow-sm p-6 border-t-4 border-blue-600 sticky top-24">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Need a Consultation?</h3>
                <p className="text-slate-600 mb-6 text-sm">
                  {service.whenToSee}
                </p>
                
                <div className="space-y-3">
                  <Link to="/appointment" className="block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                    Book Appointment
                  </Link>
                  <a href="tel:+15551234567" className="block w-full text-center border border-slate-300 text-slate-700 px-4 py-3 rounded-lg font-bold hover:bg-slate-50 transition">
                    Call Clinic
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-3 text-sm">Related Treatments</h4>
                  <div className="space-y-2">
                     {SERVICES.filter(s => s.id !== id).slice(0, 4).map(s => (
                        <Link key={s.id} to={`/treatment/${s.id}`} className="block text-sm text-blue-600 hover:underline">
                          {s.title}
                        </Link>
                     ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TreatmentDetail;