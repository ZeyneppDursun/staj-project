// App.jsx
import { useQuery, gql } from '@apollo/client'
import AppBar from "./components/common/AppBar";
import Hero from "./sections/Hero/Hero.jsx";
import CaseStudies from "./sections/CaseStudies/CaseStudies.jsx";
import Testimonials from "./sections/Testimonials/Testimonials.jsx";
import RecentWork from "./sections/RecentWork/RecentWork.jsx";
import GetInTouch from "./sections/GetInTouch/GetInTouch.jsx";

const sections = [<Hero />, <CaseStudies />, <Testimonials />, <RecentWork />, <GetInTouch />];

const GET_SECTIONS_AND_CARDS = gql`
  query {
    sections(order_by: { order: asc }) {
      title
      subtitle
      image
      button
      name
    }
    cards {
      title
      description
      image
      button
      name
    }
  }
`

function App() {
  const { loading, error, data } = useQuery(GET_SECTIONS_AND_CARDS)

  const menus = data?.sections?.map(section => {
    return {name: section?.name,
      href: `#${section?.name.toLowerCase().replace(/\s+/g, '-')}`,
    }
  })

    if (loading) return <div className="container">Loading...</div>
    if (error) return <div className="container">Error: {error.message}</div>
  
  return (
    <>
      <AppBar menus={menus}/>

      {sections.map((Section, index) => (
        <div key={index} className={index % 2 === 0 ? 'bg-black text-white' : 'bg-white text-black'}>
          {Section}
        </div>
      ))}
    </>
  );
} //her bölüm için farklı arka plan rengi. bölümleri sırayla gezen dizi

export default App;
