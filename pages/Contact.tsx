import React from 'react';
import { DOCTOR_INFO } from '../content';
import SEO from '../components/SEO';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with Dr. UroCare Specialist. Visit our clinic or book an appointment online."
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
                    <p className="text-slate-600">{DOCTOR_INFO.whatsapp}</p>
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
                    <h3 className="font-bold text-lg text-slate-900 mb-1">Clinic Hours</h3>
                    <p className="text-slate-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p className="text-slate-600">Sunday: Closed</p>
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
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="John Doe" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="+1 234..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                   <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white">
                      <option>General Inquiry</option>
                      <option>Book Appointment</option>
                      <option>Feedback</option>
                      <option>Other</option>
                   </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition shadow-lg">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;