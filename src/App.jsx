// App.jsx - Çoklu cards_id için
import { useQuery, gql } from '@apollo/client'
import AppBar from "./components/common/AppBar";
import Hero from "./sections/Hero/Hero.jsx";
import CaseStudies from "./sections/CaseStudies/CaseStudies.jsx";
import Testimonials from "./sections/Testimonials/Testimonials.jsx";
import RecentWork from "./sections/RecentWork/RecentWork.jsx";
import GetInTouch from "./sections/GetInTouch/GetInTouch.jsx";

const GET_SECTIONS_AND_CARDS = gql`
  query {
    sections(order_by: { order: asc }) {
      id
      name
      title
      subtitle
      image
      button
      cards_id
    }
    cards {
      id
      title
      description
      image
      button
      name
      category
      badge
    }
  }
`;
      
function App() {
  const { loading, error, data } = useQuery(GET_SECTIONS_AND_CARDS)

  if (loading) return <div className="container">Loading...</div>
  if (error) return <div className="container">Error: {error.message}</div>

  const cardsById = data?.cards?.reduce((acc, card) => {
    acc[card.id] = card;
    return acc;
  }, {}) || {};

  const sectionsWithCards = data?.sections?.map(section => {
    let sectionCards = [];
    
    if (section.cards_id) {
      if (Array.isArray(section.cards_id)) {
        sectionCards = section.cards_id.map(id => cardsById[id]).filter(Boolean);
      }
      else if (typeof section.cards_id === 'string') {
        try {
          const cardIds = JSON.parse(section.cards_id);
          sectionCards = cardIds.map(id => cardsById[id]).filter(Boolean);
        } catch (e) {
          sectionCards = [cardsById[section.cards_id]].filter(Boolean);
        }
      }
      // Eğer cards_id tek bir sayı ise
      else {
        sectionCards = [cardsById[section.cards_id]].filter(Boolean);
      }
    }

    return {
      ...section,
      cards: sectionCards
    };
  }) || [];

  const menus = sectionsWithCards?.map(section => ({
    name: section?.name,
    href: `#${section?.name.toLowerCase().replace(/\s+/g, '-')}`,
  }))

  return (
    <>
      <AppBar menus={menus}/>

      {sectionsWithCards && sectionsWithCards.map((section, index) => (
        <div key={`${section.name}-${index}`} className={index % 2 === 0 ? 'bg-black text-white' : 'bg-white text-black'}>
          {section.name === "Home" && <Hero data={section} />}
          {section.name === "CaseStudies" && <CaseStudies data={section} />}
          {section.name === "Testimonials" && <Testimonials data={section} />}
          {section.name === "RecentWork" && <RecentWork data={section} />}
          {section.name === "GetInTouch" && <GetInTouch data={section} />}
        </div>
      ))}
    </>
  );
} 

export default App;