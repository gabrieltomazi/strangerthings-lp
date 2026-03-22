import { WrapperContent, Header, Hero, CitySection, SectionTestimonials, BgMonster, SectionThanks, Footer } from './components'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

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
