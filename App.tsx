import React from 'react';
import { HashRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import TreatmentDetail from './pages/TreatmentDetail';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import FAQ from './pages/FAQ';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="treatment/:id" element={<TreatmentDetail />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;