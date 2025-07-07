// App.jsx

import AppBar from "./components/common/AppBar";
import Hero from "./sections/Hero/Hero.jsx";
import CaseStudies from "./sections/CaseStudies/CaseStudies.jsx";
import Testimonials from "./sections/Testimonials/Testimonials.jsx";
import RecentWork from "./sections/RecentWork/RecentWork.jsx";
import GetInTouch from "./sections/GetInTouch/GetInTouch.jsx";

const sections = [<Hero />, <CaseStudies />, <Testimonials />, <RecentWork />, <GetInTouch />];

function App() {
  return (
    <>
      <AppBar />
      {sections.map((Section, index) => (
        <div key={index} className={index % 2 === 0 ? 'bg-black text-white' : 'bg-white text-black'}>
          {Section}
        </div>
      ))}
    </>
  );
} //her bölüm için farklı arka plan rengi. bölümleri sırayla gezen dizi

export default App;
