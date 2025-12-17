import React, { useState } from 'react';
import { DOCTOR_INFO, EMAIL_CONFIG } from '../content';
import SEO from '../components/SEO';
import { MapPin, Phone, Mail, Clock, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    if (EMAIL_CONFIG.serviceId === "YOUR_SERVICE_ID_HERE") {
        setLoading(false);
        setError("Email configuration missing. Please contact administrator.");
        return;
    }

    try {
      const templateParams = {
        to_name: DOCTOR_INFO.name,
        from_name: formData.name,
        phone: formData.phone,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      };

      await emailjs.send(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.templateId,
        templateParams,
        EMAIL_CONFIG.publicKey
      );

      setSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
      });
    } catch (err) {
      console.error("Email send error:", err);
      setError("Something went wrong. Please try calling us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO 
        title="Contact Dr. Vishnu Vardhan Reddy | Urologist" 
        description="Book an appointment with Dr. Vishnu at Uro Andro Care, Kurnool. Check clinic timings and location."
      />

      <div className="bg-slate-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
            <p className="text-xl text-slate-600">
              We are here to assist you. Reach out to us for appointments and inquiries.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-sm p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">Clinic Address</h3>
                    <p className="text-slate-600 w-3/4">{DOCTOR_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">Phone & WhatsApp</h3>
                    <p className="text-slate-600">{DOCTOR_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600">{DOCTOR_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-1">Clinic Timings</h3>
                    <p className="text-slate-600 font-semibold">Mon - Sat:</p>
                    <p className="text-slate-600">Morning: 10:00 AM - 2:00 PM</p>
                    <p className="text-slate-600">Evening: 5:30 PM - 8:30 PM</p>
                    <p className="text-slate-500 mt-2 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>

               {/* Map Embed */}
               <div className="bg-slate-200 rounded-2xl overflow-hidden h-80 shadow-sm">
                  <iframe 
                    src={DOCTOR_INFO.mapUrl} 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen 
                    loading="lazy"
                    title="Clinic Map"
                  ></iframe>
               </div>
            </div>

            {/* Simple Contact Form */}
            <div className="bg-white rounded-2xl shadow-sm p-8 relative">
               {loading && (
                    <div className="absolute inset-0 bg-white/80 z-10 flex items-center justify-center rounded-2xl">
                        <Loader2 size={48} className="text-blue-600 animate-spin" />
                    </div>
                )}
              
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
              
              {success ? (
                  <div className="bg-green-50 text-green-800 p-6 rounded-xl flex flex-col items-center text-center">
                      <CheckCircle size={48} className="text-green-600 mb-3" />
                      <h3 className="font-bold text-lg">Message Sent!</h3>
                      <p className="mt-2">Thank you for contacting us. We will get back to you shortly.</p>
                      <button onClick={() => setSuccess(false)} className="mt-4 text-blue-600 font-semibold hover:underline">Send another message</button>
                  </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                        <div className="bg-red-50 text-red-700 p-3 rounded-lg flex items-center gap-2">
                            <AlertCircle size={18} /> {error}
                        </div>
                    )}
                    <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white text-slate-900 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
                        placeholder="John Doe" 
                    />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                        <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-white text-slate-900 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
                        placeholder="+91 98765..." 
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                        <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white text-slate-900 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
                        placeholder="john@example.com" 
                        />
                    </div>
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                    <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-white text-slate-900 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    >
                        <option>General Inquiry</option>
                        <option>Book Appointment</option>
                        <option>Feedback</option>
                        <option>Other</option>
                    </select>
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5} 
                        className="w-full bg-white text-slate-900 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
                        placeholder="How can we help you?"
                    ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition shadow-lg">
                    Send Message
                    </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;