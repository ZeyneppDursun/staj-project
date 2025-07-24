// src/sections/Hero/components/HeroImage.jsx
// sağ kısımdaki HeroImage bileşeni

import Avatar from '../../../components/common/Avatar';
import HeroPhoto from '../../../assets/hero-photo.PNG';

const HeroImage = () => {
  return (
    <div className="flex justify-center md:justify-end">
      <Avatar src={HeroPhoto} alt="Hero" size={300} />
    </div>
  );
};

export default HeroImage;
