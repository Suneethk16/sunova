import React from 'react';
import { HeroGeometric } from './components/ui/shape-landing-hero';
import SunovaHero from './components/SunovaHero';
import About from './components/About';
import ServicesShowcase from './components/ServicesShowcase';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import SunovaFooter from './components/SunovaFooter';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="App">
      {/* Global animated background */}
      <HeroGeometric mode="background" />
      <SunovaHero />
      <About />
      <ServicesShowcase />
      <Process />
      <Testimonials />
      <Contact />
      <SunovaFooter />
      <Analytics />
    </div>
  );
}

export default App;
