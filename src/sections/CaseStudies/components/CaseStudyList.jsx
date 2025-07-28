// src/sections/CaseStudies/components/CaseStudyList.jsx

import CaseStudyCard from './CaseStudyCard';

const CaseStudyList = ({studies}) => {
  return (
    <div className="space-y-20">
      {studies.map((item) => (
        <CaseStudyCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CaseStudyList;