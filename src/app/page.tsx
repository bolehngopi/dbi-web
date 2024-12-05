import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import { OurTeams } from '@/components/OurTeams';
import { Navbar } from '@/components/Navbar';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services/>
      <OurTeams />
      <Footer/>
    </>
  );
};

export default App;
