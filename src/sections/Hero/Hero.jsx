// src/sections/Hero/Hero.jsx

import HeroContent from './components/HeroContent';
import HeroImage from './components/HeroImage';
import BrandLogos from './components/BrandLogos';

const Hero = () => {
  return (
    <section id= "home" className="bg-black text-white min-h-screen">
      <div className="flex items-center px-6 py-20">
        <div className="grid md:grid-cols-2 items-center gap-16 max-w-6xl mx-auto w-full">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
      <BrandLogos />
    </section>
  );
};

export default Hero;
