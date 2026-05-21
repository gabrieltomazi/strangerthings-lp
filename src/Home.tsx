import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { WrapperContent } from './components/molecules/WrapperContent';
import { Header } from './components/molecules/Header';
import { BgMonster, CitySection, Footer, Hero, SectionTestimonials, SectionThanks } from './components';

function Home() {

  const handleScrollToCity = () => {
    const smoother = ScrollSmoother.get();

    if (smoother) {
      smoother.scrollTo("#cities", true, "top top")
    }
  }

  return (
    <WrapperContent>

      <Header />
      <Hero onExploreClick={handleScrollToCity} />

      <BgMonster>
        <CitySection />
        <SectionTestimonials />
      </BgMonster>

      <SectionThanks />
      <Footer />

    </WrapperContent>
  )
}

export default Home
