import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, MapPin, Mail, Facebook, Twitter, Linkedin, Instagram, ArrowUp, Send } from 'lucide-react';
import { DOCTOR_INFO } from '../content';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Dr.', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQs', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Handle Scroll to Top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    // Use the WhatsApp number from content, strip non-digits
    const cleanNumber = DOCTOR_INFO.whatsapp.replace(/\D/g, '');
    // Ensure country code (assuming India +91 if 10 digits)
    const formattedNumber = cleanNumber.length === 10 ? `91${cleanNumber}` : cleanNumber;
    
    const message = chatMessage.trim() || "Hello, I would like to book an appointment or have a query.";
    const url = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
    setIsChatOpen(false);
    setChatMessage('');
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Top Bar - Using Secondary Color */}
      <div className="bg-blue-900 text-white py-2 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2"><Phone size={14} className="text-blue-400" /> {DOCTOR_INFO.phone}</span>
            <span className="flex items-center gap-2"><Mail size={14} className="text-blue-400" /> {DOCTOR_INFO.email}</span>
          </div>
          <div className="flex space-x-4">
             <span className="bg-blue-800 px-3 py-0.5 rounded text-xs font-semibold tracking-wider">Emergency 24/7 Available</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Placeholder */}
            <Link to="/" className="flex items-center">
               <img 
                  src="https://vexfore.com/wp-content/uploads/2025/12/2-e1765877073142.jpg" 
                  alt="Dr. Vishnu UroCare Logo" 
                  className="h-16 w-auto object-contain"
               />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    isActive(link.path) ? 'text-blue-600' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/appointment"
                className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <Calendar size={16} /> Book Appointment
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-600 hover:text-blue-600 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg h-screen overflow-y-auto pb-20">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    isActive(link.path) 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-slate-100 mt-4">
                <Link
                  to="/appointment"
                  className="block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold shadow-md active:bg-blue-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Appointment
                </Link>
              </div>
              <div className="pt-6 flex justify-center space-x-6 text-slate-400">
                  <a href="#" className="hover:text-blue-600"><Facebook size={24} /></a>
                  <a href="#" className="hover:text-blue-600"><Twitter size={24} /></a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer - Using Secondary Color */}
      <footer className="bg-blue-900 text-slate-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <Link to="/" className="inline-block mb-4 bg-white rounded-lg p-2">
               <img 
                  src="https://vexfore.com/wp-content/uploads/2025/12/2-e1765877073142.jpg" 
                  alt="Dr. Vishnu UroCare Logo" 
                  className="h-12 w-auto object-contain"
                  loading="lazy"
               />
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Leading urology clinic providing advanced care for kidney stones, prostate health, and male infertility using state-of-the-art technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition" aria-label="Instagram"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition">About the Doctor</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition">Treatments</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400 transition">Health Blog</Link></li>
              <li><Link to="/faq" className="hover:text-blue-400 transition">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span>{DOCTOR_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400 flex-shrink-0" />
                <span>{DOCTOR_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400 flex-shrink-0" />
                <span>{DOCTOR_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
             <h3 className="text-white text-lg font-bold mb-4">Find Us</h3>
             <div className="w-full h-32 bg-slate-800 rounded-lg overflow-hidden border border-blue-800">
                <iframe 
                  src={DOCTOR_INFO.mapUrl} 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy"
                  title="Clinic Location"
                ></iframe>
             </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>&copy; 2025 Dr. Vishnu's Uro Andro Care. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Developed by <a href="https://www.firststepdigitalagency.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 font-medium hover:text-white transition-colors">FirstStep Digital Agency</a>
          </p>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      
      {/* Scroll to Top - Right Bottom */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>

      {/* WhatsApp Chat Widget - Left Bottom */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-4">
        {/* Chat Popup */}
        {isChatOpen && (
          <div className="bg-white rounded-xl shadow-2xl border border-slate-100 w-72 overflow-hidden mb-2 animate-in slide-in-from-bottom-5 duration-300 origin-bottom-left">
            <div className="bg-[#25D366] p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="w-5 h-5 brightness-0 invert" />
                 <h3 className="font-bold text-sm">Chat with Us</h3>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)} 
                className="hover:bg-black/10 rounded-full p-1 transition"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>
            <div className="p-4 bg-slate-50">
              <p className="text-xs text-slate-500 mb-3 bg-white p-2 rounded border border-slate-100 shadow-sm inline-block">
                Hello! 👋 <br/> How can we help you today?
              </p>
              <form onSubmit={handleWhatsAppSend}>
                  <textarea
                    className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#25D366] focus:border-transparent outline-none resize-none shadow-sm"
                    rows={3}
                    placeholder="Type your message..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    autoFocus
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-[#25D366] text-white font-bold py-2.5 rounded-lg mt-3 flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition shadow-md active:scale-95"
                  >
                    Send on WhatsApp <Send size={16} />
                  </button>
              </form>
            </div>
          </div>
        )}

        {/* WhatsApp Toggle Button */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-[#25D366] p-0 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center w-14 h-14 relative group"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            alt="WhatsApp" 
            className="w-8 h-8"
          />
        </button>
      </div>
    </div>
  );
};

export default Layout;