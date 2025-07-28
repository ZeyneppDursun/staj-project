// src/sections/CaseStudies/CaseStudies.jsx
import Heading from '../../components/common/Heading';
import case1 from '../../assets/case-1.png';
import case2 from '../../assets/case-2.png';
import case3 from '../../assets/case-3.png';
import CaseStudyList from './components/CaseStudyList';

const fallbackCaseStudies = [
  {
    id: 1,
    category: 'FINTECH',
    title: 'Work name here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: case1,
    buttonColor: 'bg-yellow-400 hover:bg-yellow-500 text-black',
    align: 'right',
    textColor: 'text-yellow-600',
  },
  {
    id: 2,
    category: 'EDTECH',
    title: 'Work name here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: case2,
    buttonColor: 'bg-blue-600 hover:bg-blue-700 text-white',
    align: 'left',
    textColor: 'text-blue-600',
  },
  {
    id: 3,
    category: 'PHARMA',
    title: 'Work name here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: case3,
    buttonColor: 'bg-green-500 hover:bg-green-600 text-white',
    align: 'right',
    textColor: 'text-green-600',
  },
];

const fallbackImages = [case1, case2, case3];

const CaseStudies = ({ data }) => {
  const { title, subtitle, cards, button} = data || {};
  
  // API'den gelen cards varsa onu kullan, yoksa fallback kullan
  const caseStudies = (cards.length ? cards : fallbackCaseStudies).map((card, index) => {
    const fallback = fallbackCaseStudies[index % fallbackCaseStudies.length];
    return {
      ...card,
      image: fallback.image,
      buttonColor: card.buttonColor || fallback.buttonColor,
      align: card.align || fallback.align,
      textColor: card.textColor || fallback.textColor,
    };
  });

  return (
    <section id="casestudies" className="bg-white text-black py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        <div className="text-center">
          <Heading
            title={title || "Case Studies"}
            subtitle={subtitle || "Solving user & business problems since last 15+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            center={true}
          />
        </div>

        <CaseStudyList studies={caseStudies} />
      </div>
    </section>
  );
};

export default CaseStudies;



/*
const CaseStudies = ({ data }) => {
  const { title, subtitle, cards, button} = data || {};

  // Ensure cards is an array, default to an empty array if undefined
  const apiCards = Array.isArray(cards) ? cards : [];

  const caseStudies = (apiCards.length ? apiCards : fallbackCaseStudies).map((card, index) => {
    const fallback = fallbackCaseStudies[index % fallbackCaseStudies.length];
    return {
      ...card, // Spread all properties from the current card (API or fallback)
      // Provide fallbacks for specific properties if they are missing or empty in 'card'
      image: card.image || fallback.image, // Use card.image if it exists, otherwise fallback
      buttonColor: card.buttonColor || fallback.buttonColor,
      align: card.align || fallback.align,
      textColor: card.textColor || fallback.textColor,
      category: card.category || fallback.category, // <-- Add this line for category fallback
      title: card.title || fallback.title, // Add title fallback if needed
      description: card.description || fallback.description, // Add description fallback if needed
    };
  });

  return (
    <section id="case-studies" className="bg-white text-black py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        <div className="text-center">
          <Heading
            title={title || "Case Studies"}
            subtitle={subtitle || "Solving user & business problems since last 15+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
            center={true}
          />
        </div>

        <CaseStudyList studies={caseStudies} />
      </div>
    </section>
  );
};*/