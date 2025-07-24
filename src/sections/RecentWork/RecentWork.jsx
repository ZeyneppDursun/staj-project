import Heading from '../../components/common/Heading';
//import Button from '../components/common/Button';
import work1 from '../../assets/recent-work-1.png';
import work2 from '../../assets/recent-work-2.png';
import WorkCard from './components/WorkCard'; 

const works = [
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

const RecentWork = () => {
  return (
    <section id="recent-work" className="bg-white text-black py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Başlık */}
        <div className="text-center">
          <Heading
            title="Recent Work"
            subtitle="Solving user & business problems since last 15+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            center={true}
          />
        </div>

        {/* Kartlar */}
        <div className="grid md:grid-cols-2 gap-8 items-start relative">

          {/* Sol Ok */}
          <button className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 hidden md:block">
            <span className="text-2xl text-gray-400 hover:text-black">&lt;</span>
          </button>

          {works.map((work) => (
            <WorkCard
              key={work.id}
              title={work.title}
              description={work.description}
              image={work.image}
            />
          ))}

          {/* Sağ Ok */}
          <button className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 hidden md:block">
            <span className="text-2xl text-gray-400 hover:text-black">&gt;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
