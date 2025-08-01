// src/sections/Testimonials/Testimonials.jsx
import Heading from '../../components/common/Heading';
import TestimonialCard from './components/TestimonialCard'; 
import testimonial1 from '../../assets/testimonial-1.png';
import testimonial2 from '../../assets/testimonial-2.png';
import testimonial3 from '../../assets/testimonial-3.png';
import testimonial4 from '../../assets/testimonial-4.png';

const fallbackTestimonials = [
  {
    id: 1,
    name: 'Client Name',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: testimonial1,
  },
  {
    id: 2,
    name: 'Client Name',
    text: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: testimonial2,
  },
  {
    id: 3,
    name: 'Client Name',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: testimonial3,
  },
  {
    id: 4,
    name: 'Client Name',
    text: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: testimonial4,
  },
];

const Testimonials = ({ data }) => {
  const { title, subtitle, cards } = data || {};
    const testimonials = (cards.length ? cards : fallbackTestimonials).map((card, index) => {
    const fallback = fallbackTestimonials[index % fallbackTestimonials.length];
    return {
      ...card,
      image: fallback.image,
    };
  });

  return (
    <section id="testimonials" className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Başlık */}
        <div className="text-center">
          <Heading
            title={title || "Testimonials"}
            subtitle={subtitle || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            center={true}
          />
        </div>

        {/* Kartlar */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              name={item.name}
              text={item.text || item.description} 
              image={item.image}
              title={item.title} 
              description={item.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;