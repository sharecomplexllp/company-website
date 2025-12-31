import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Leadership } from './pages/Leadership';
import { Team } from './pages/Team';
import { AxisFranchise } from './pages/AxisFranchise';
import { WhyChooseUs } from './pages/WhyChooseUs';
import { Testimonials } from './pages/Testimonials';
import { Contact } from './pages/Contact';
export function App() {
  return <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/team" element={<Team />} />
          <Route path="/axis-franchise" element={<AxisFranchise />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>;
}