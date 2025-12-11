import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Calendar, Check } from 'lucide-react';

const Appointment: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <SEO 
        title="Book Appointment" 
        description="Schedule a consultation with Dr. Sharma online. Choose your preferred time slot for urology checkup."
      />

      <div className="bg-slate-50 min-h-screen py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {submitted ? (
            <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
               <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Check size={40} />
               </div>
               <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Received!</h2>
               <p className="text-lg text-slate-600 mb-8">
                 Thank you for booking an appointment. Our team will contact you shortly to confirm your time slot.
               </p>
               <button onClick={() => setSubmitted(false)} className="text-blue-600 font-semibold hover:underline">
                 Book another appointment
               </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Book an Appointment</h1>
                <p className="text-slate-600">Fill in the details below and we will get back to you to confirm your slot.</p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex items-start gap-3 mb-6">
                    <Calendar className="text-blue-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-blue-900 text-sm">Note</h4>
                      <p className="text-blue-800 text-xs">Please arrive 15 minutes before your scheduled appointment time. Bring any previous medical reports.</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">First Name *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Last Name *</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
                      <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Email (Optional)</label>
                      <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Date *</label>
                      <input required type="date" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Time *</label>
                      <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white">
                        <option>Morning (9 AM - 12 PM)</option>
                        <option>Afternoon (12 PM - 4 PM)</option>
                        <option>Evening (4 PM - 7 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Reason for Visit</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white">
                      <option>Consultation</option>
                      <option>Follow-up</option>
                      <option>Kidney Stone Pain</option>
                      <option>Prostate Checkup</option>
                      <option>Second Opinion</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition shadow-lg mt-4">
                    Confirm Booking Request
                  </button>

                  <p className="text-xs text-center text-slate-500 mt-4">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Appointment;