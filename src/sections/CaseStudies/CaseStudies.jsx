// src/sections/CaseStudies/CaseStudies.jsx

import Heading from '../../components/common/Heading';
import case1 from '../../assets/case-1.png';
import case2 from '../../assets/case-2.png';
import case3 from '../../assets/case-3.png';

import CaseStudyList from './components/CaseStudyList';

const caseStudies = [
  {
    id: 1,
    title: 'Work name here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'Fintech',
    image: case1,
    buttonColor: 'bg-yellow-400 hover:bg-yellow-500 text-black',
    align: 'right',
    textColor: 'text-yellow-600',
  },
  {
    id: 2,
    title: 'Work name here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'EdTech',
    image: case2,
    buttonColor: 'bg-blue-600 hover:bg-blue-700 text-white',
    align: 'left',
    textColor: 'text-blue-600',
  },
  {
    id: 3,
    title: 'Work name here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'Pharma',
    image: case3,
    buttonColor: 'bg-green-500 hover:bg-green-600 text-white',
    align: 'right',
    textColor: 'text-green-600',
  },
];

const CaseStudies = () => {
  return (
    <section id= "case-studies" className="bg-white text-black py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        <div className="text-center">
          <Heading
            title="Case Studies"
            subtitle="Solving user & business problems since last 15+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            center={true}
          />
        </div>

        <CaseStudyList studies={caseStudies} />
      </div>
    </section>
  );
};

export default CaseStudies;
