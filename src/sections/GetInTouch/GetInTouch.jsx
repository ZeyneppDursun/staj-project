// src/sections/GetInTouch/GetInTouch.jsx

import Heading from '../../components/common/Heading';
import ContactForm from './components/ContactForm';
import FooterNote from './components/FooterNote';

const GetInTouch = () => {
  return (
    <section id="get-in-touch" className="bg-black text-white py-24 px-6">
      <div className="max-w-2xl mx-auto space-y-12 text-center">
        <Heading
          title="Get In Touch"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          center={true}
        />
        <ContactForm />
        <FooterNote />
      </div>
    </section>
  );
};

export default GetInTouch;
