// src/sections/RecentWork/RecentWork.jsx
import Heading from '../../components/common/Heading';
import WorkCard from './components/WorkCard';
import work1 from '../../assets/recent-work-1.png';
import work2 from '../../assets/recent-work-2.png';
import { useRef } from 'react';
import { useState } from 'react';

const fallbackWorks = [
  {
    id: 1,
    title: 'Work name here',
    description: 'Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.',
    image: work1,
  },
  {
    id: 2,
    title: 'Work name here',
    description: 'Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut.',
    image: work2,
  },
];

const RecentWork = ({ data }) => {
  const { title, subtitle, cards } = data || {};

  const works = (cards?.length ? cards : fallbackWorks).map((card, index) => {
    const fallback = fallbackWorks[index % fallbackWorks.length];
    return {
      ...card,
      image: fallback.image,
    };
  });

  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.firstChild?.offsetWidth || 320;
    const maxIndex = works.length - 1; // son kart indexi

    let newIndex = currentIndex;

    if (direction === 'left') {
      newIndex = Math.max(0, currentIndex - 1);
    } else {
      newIndex = Math.min(maxIndex, currentIndex + 1);
    }

    setCurrentIndex(newIndex);

    container.scrollTo({
      left: newIndex * cardWidth,
      behavior: 'smooth', // istersen 'auto' yapabilirsin
    });
  };

  return (
    <section id="recentwork" className="bg-white text-black py-24 px-6">
      <div className="max-w-xl mx-auto space-y-16 relative">

        {/* Başlık */}
        <div className="text-center">
          <Heading
            title={title || "Recent Work"}
            subtitle={
              subtitle ||
              "Solving user & business problems since last 15+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            center={true}
          />
        </div>

        {/* Kartlar (Wrapper) */}
        <div className="relative overflow-hidden">

          {/* Sol Ok */}
          {works.length > 1 && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 rounded-full p-2 shadow"
            >
              <span className="text-2xl text-gray-600 hover:text-black">&lt;</span>
            </button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-10"
          >
            {works.map((item) => (
              <div
                key={item.id}
                className="min-w-full snap-start flex-shrink-0"
              >
                <WorkCard
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  button={item.button}
                />
              </div>
            ))}
          </div>

          {/* Sağ Ok */}
          {works.length > 1 && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 rounded-full p-2 shadow"
            >
              <span className="text-2xl text-gray-600 hover:text-black">&gt;</span>
            </button>
          )}
        </div>

      </div>
    </section>
  );
};

export default RecentWork;
