import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { WrapperContent } from './components/molecules/WrapperContent';
import { Header } from './components/molecules/Header';
import { BgMonster, CitySection, Footer, Hero, SectionTestimonials, SectionThanks } from './components';
import { useState } from 'react';
import { Preloader } from './components/organisms/Preloader';
import { useGSAP } from '@gsap/react';

function Home() {

  const [isLoading, setIsLoading] = useState(true)

  useGSAP(() => {
    if (isLoading) return;

    window.scrollTo(0, 0)

  }, [isLoading]);


  const handleScrollToCity = () => {
    const smoother = ScrollSmoother.get();

    if (smoother) {
      smoother.scrollTo("#cities", true, "top top")
    }
  }

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      <div className={isLoading ? "h-screen overflow-hidden opacity-0" : "opacity-100 transition-opacity duration-500"}>

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
      </div>
    </>
  )
}

export default Home
