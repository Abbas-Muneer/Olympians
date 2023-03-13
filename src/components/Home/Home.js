import React from 'react';
import '../../App.css';
import Cards from '../Home/Cards';
import HeroSection from '../Home/HeroSection';
import Footer from '../Home/Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
