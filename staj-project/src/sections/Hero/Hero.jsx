// src/sections/Hero/Hero.jsx

import HeroContent from './components/HeroContent';
import HeroImage from './components/HeroImage';
import BrandLogos from './components/BrandLogos';

const Hero = ({data}) => {
const { title, subtitle, button, cards} = data || {};
  return (
    <section id= "home" className="bg-black text-white min-h-screen">
      <div className="flex items-center px-6 py-20">
        <div className="grid md:grid-cols-2 items-center gap-16 max-w-6xl mx-auto w-full">
          <HeroContent title={title} subtitle={subtitle} button={button}/>
          <HeroImage />
        </div>
      </div>
      <BrandLogos cards={data.cards} />
    </section>
  );
};

export default Hero;
