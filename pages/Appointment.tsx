import React, { useState } from 'react';
import SEO from '../components/SEO';
import { DOCTOR_INFO } from '../content';
import { Calendar, Check, MessageCircle } from 'lucide-react';

const Appointment: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    date: '',
    time: 'Morning (9 AM - 12 PM)',
    reason: 'Consultation'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Clean the doctor's phone number
    const cleanNumber = DOCTOR_INFO.whatsapp.replace(/\D/g, '');
    const formattedNumber = cleanNumber.length === 10 ? `91${cleanNumber}` : cleanNumber;

    // 2. Create the Professional WhatsApp Template
    const message = `📅 *NEW APPOINTMENT REQUEST*

*Patient Details*
Name: ${formData.firstName} ${formData.lastName}
Phone: ${formData.phone}
Email: ${formData.email || 'Not provided'}

*Preferred Slot*
Date: ${formData.date}
Time: ${formData.time}

*Reason for Visit*
${formData.reason}

--------------------------------
Please confirm if this slot is available.`;

    // 3. Construct URL
    const url = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}`;

    // 4. Open WhatsApp
    window.open(url, '_blank');
    
    // 5. Show local success state
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <SEO 
        title="Book Appointment" 
        description="Schedule a consultation with Dr. Vishnu online via WhatsApp. Choose your preferred time slot for urology checkup."
      />

      <div className="bg-slate-50 min-h-screen py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {submitted ? (
            <div className="bg-white rounded-2xl shadow-sm p-12 text-center animate-fade-in">
               <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Check size={40} />
               </div>
               <h2 className="text-3xl font-bold text-slate-900 mb-4">Redirecting to WhatsApp...</h2>
               <p className="text-lg text-slate-600 mb-8">
                 We have opened WhatsApp for you. Please hit the <strong>Send</strong> button in the chat to complete your booking request.
               </p>
               <div className="bg-blue-50 p-4 rounded-lg mb-8 max-w-md mx-auto">
                 <p className="text-sm text-blue-800">
                   <strong>Didn't open?</strong> <br/>
                   <a 
                     href={`https://wa.me/${DOCTOR_INFO.whatsapp.replace(/\D/g, '').length === 10 ? '91' + DOCTOR_INFO.whatsapp.replace(/\D/g, '') : DOCTOR_INFO.whatsapp.replace(/\D/g, '')}`}
                     target="_blank"
                     rel="noreferrer"
                     className="underline font-bold"
                   >
                     Click here to open manually
                   </a>
                 </p>
               </div>
               <button onClick={() => { setSubmitted(false); setFormData({...formData, reason: 'Consultation'}); }} className="text-blue-600 font-semibold hover:underline">
                 Book another appointment
               </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Book an Appointment</h1>
                <p className="text-slate-600">Fill in the details below to request a slot via WhatsApp.</p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10 relative">
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex items-start gap-3 mb-6">
                    <MessageCircle className="text-green-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-green-900 text-sm">Instant Booking</h4>
                      <p className="text-green-800 text-xs">This form will redirect you to WhatsApp to send the details directly to Dr. Vishnu's team.</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">First Name *</label>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required 
                        className="w-full bg-white text-slate-900 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Last Name *</label>
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required 
                        className="w-full bg-white text-slate-900 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required 
                        className="w-full bg-white text-slate-900 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Email (Optional)</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white text-slate-900 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Date *</label>
                      <input 
                        type="date" 
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required 
                        className="w-full bg-white text-slate-900 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Time *</label>
                      <select 
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full bg-white text-slate-900 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      >
                        <option>Morning (9 AM - 12 PM)</option>
                        <option>Afternoon (12 PM - 4 PM)</option>
                        <option>Evening (4 PM - 7 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Reason for Visit</label>
                    <select 
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      className="w-full bg-white text-slate-900 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    >
                      <option>Consultation</option>
                      <option>Follow-up</option>
                      <option>Kidney Stone Pain</option>
                      <option>Prostate Checkup</option>
                      <option>Second Opinion</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-[#25D366] text-white font-bold py-4 rounded-lg hover:bg-[#128c7e] transition shadow-lg mt-4 flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} /> Request via WhatsApp
                  </button>

                  <p className="text-xs text-center text-slate-500 mt-4">
                    By submitting this form, you will be redirected to WhatsApp to send the details.
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