import React from 'react';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { OurTeams } from '@/components/OurTeams';
import { Services } from '@/components/Services';

const App: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <OurTeams />
    </>
  );
};

export default App;
