import React from 'react';
import SunovaHero from './components/SunovaHero';
import Benefits from './components/Benefits';
import Process from './components/Process';
import ServicesShowcase from './components/ServicesShowcase';
import Portfolio from './components/Portfolio';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import SunovaFooter from './components/SunovaFooter';
import { HeroGeometric } from './components/ui/shape-landing-hero';
import CalModal from './components/CalModal';

function App() {
  return (
    <div className="App">
      {/* Global geometric animated background */}
      <HeroGeometric mode="background" />
      <CalModal />
      <SunovaHero />
      <Benefits />
      <Process />
      <ServicesShowcase />
      <Portfolio />
      <Comparison />
      <Pricing />
      <FAQ />
      <SunovaFooter />
    </div>
  );
}

export default App;