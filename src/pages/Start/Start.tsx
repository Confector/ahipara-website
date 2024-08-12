import React from 'react';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import Title from '@/pages/Start/Title/Title';
import Offer from '@/pages/Start/Offer/Offer';
import Skills from '@/pages/Start/Skills/Skills';
import About from '@/pages/Start/About/About';
import Contact from '@/pages/Start/Contact/Contact';

const Start = () => {
  return (
    <div>
      <Header />
      <Title />
      <Offer />
      <Skills />
      <About />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default Start;
