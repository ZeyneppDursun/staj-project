// src/sections/Hero/components/HeroContent.jsx
//sol kısımdaki HeroContent bileşeni

import Heading from '../../../components/common/Heading';
import Button from '../../../components/common/Button';

const HeroContent = ({title, subtitle, button}) => {
  return (
    <div className="space-y-8">
      <Heading
        title={title || "Welcome to Our Website"} 
        subtitle={subtitle || "Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        center={false}
      />

      <Button
        className="bg-[#3F8E00] hover:bg-[#348e00cb] text-white px-8 py-3 rounded-md font-semibold transition-colors"
        style={{
          filter: "drop-shadow(0 4px 6px rgba(98, 186, 27, 0.7))",
        }}
      >
        {button || "Let's get started >"}
      </Button>
    </div>
  );
};

export default HeroContent;


