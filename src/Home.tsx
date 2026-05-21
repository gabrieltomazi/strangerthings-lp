
import { BgMonster, CitySection, Footer, Header, Hero, SectionTestimonials, SectionThanks, WrapperContent } from './components';
import { useState } from 'react';
import { Preloader } from './components/organisms/Preloader';
import { useGSAP } from '@gsap/react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

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

        <WrapperContent isLoading={isLoading}>
          <Header />
          <Hero onExploreClick={handleScrollToCity} isLoading={isLoading} />

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
