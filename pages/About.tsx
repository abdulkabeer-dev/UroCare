import React from 'react';
import { DOCTOR_INFO } from '../content';
import SEO from '../components/SEO';
import { Award, BookOpen, User, Users, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      <SEO 
        title={`About ${DOCTOR_INFO.name} | Urologist Kurnool`} 
        description={`Learn more about ${DOCTOR_INFO.name}, a highly experienced urologist and renal transplant surgeon specializing in kidney stones and prostate care.`}
      />
      
      <div className="bg-slate-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Header */}
            <div className="bg-blue-600 text-white p-8 md:p-12 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">About The Doctor</h1>
              <p className="text-blue-100 max-w-2xl mx-auto">Combining medical expertise with a compassionate approach to patient care.</p>
            </div>

            <div className="grid md:grid-cols-12 gap-12 p-8 md:p-12">
              {/* Image Column */}
              <div className="md:col-span-4">
                <img 
                  src="https://vexfore.com/wp-content/uploads/2025/12/gemini-3-pro-image-preview-2k-nano-banana-pro_a_professional_photogr.png" 
                  alt={DOCTOR_INFO.name} 
                  className="w-full h-auto rounded-xl shadow-lg mb-6" 
                  loading="lazy"
                />
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-4">Quick Facts</h3>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <User size={16} className="text-blue-600" /> 
                      <span>{DOCTOR_INFO.experience}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Award size={16} className="text-blue-600" /> 
                      <span>{DOCTOR_INFO.qualifications}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <BookOpen size={16} className="text-blue-600" /> 
                      <span>Reg: {DOCTOR_INFO.regNo}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Content Column */}
              <div className="md:col-span-8 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">{DOCTOR_INFO.name}</h2>
                  <p className="text-xl text-blue-600 font-medium mb-4">{DOCTOR_INFO.title}</p>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {DOCTOR_INFO.philosophy}
                  </p>
                  <p className="text-slate-600 leading-relaxed mt-4">
                    Dr. Vishnu provides comprehensive urological care using advanced minimally invasive techniques, ensuring early recovery for patients. He has specialized expertise in Endourology, Reconstructive Urology, Paediatric Urology, Laparoscopic Surgery, Andrology, and Renal Transplantation. He also serves as a Consultant Urologist and Andrologist at Ashwini Hospital.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <BookOpen size={20} className="text-blue-600" /> Specializations
                    </h3>
                    <ul className="space-y-2">
                      {DOCTOR_INFO.specializations.map((spec, index) => (
                        <li key={index} className="flex items-start gap-2 text-slate-600">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <Award size={20} className="text-blue-600" /> Memberships
                    </h3>
                    <ul className="space-y-2">
                      {DOCTOR_INFO.memberships.map((mem, index) => (
                        <li key={index} className="flex items-start gap-2 text-slate-600">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></span>
                          {mem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {DOCTOR_INFO.achievements && (
                  <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                    <h3 className="text-lg font-bold text-yellow-800 mb-3 flex items-center gap-2">
                      <Star size={20} className="text-yellow-600" /> Achievements
                    </h3>
                    <ul className="space-y-2">
                      {DOCTOR_INFO.achievements.map((ach, index) => (
                         <li key={index} className="flex items-start gap-2 text-slate-700">
                            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2"></span>
                            {ach}
                         </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;