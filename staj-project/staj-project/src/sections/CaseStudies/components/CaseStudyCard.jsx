// src/sections/CaseStudies/components/CaseStudyCard.jsx

import Button from '../../../components/common/Button';

const CaseStudyCard = ({ item }) => {

  return (
    <div className="grid md:grid-cols-2 items-center gap-12">
      <div className={`space-y-4 ${item.align === 'left' ? 'md:order-2' : ''}`}>
        <span
          className={`text-xs font-semibold uppercase px-2 py-1 rounded bg-gray-100 inline-block ${item.textColor}`}
        >
          {item.category}
        </span>
        {item.title && <h3 className="text-xl font-bold">{item.title}</h3>}
        {item.description && <p className="text-gray-600 text-sm">{item.description}</p>}
        <Button className={`${item.buttonColor} px-6 py-2 rounded font-semibold text-sm`}>
          {item.button || 'View case study >'} 
        </Button>
      </div>

      <div className={item.align === 'left' ? 'md:order-1' : ''}>
        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="rounded-xl w-full shadow-md"
          /> )}
      </div>
    </div>
  );
};

export default CaseStudyCard;



