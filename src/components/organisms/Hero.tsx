import HeroBackMobile from '../../assets/images/hero_backmobile.webp'
import HeroFrontMobile from '../../assets/images/hero_frontmobile.webp'
import HeroBack from '../../assets/images/hero_back.webp'
import HeroFront from '../../assets/images/hero_front.webp'
import { Button } from "../atoms/button"
import { useRef, MouseEvent } from "react"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/SplitText"
import gsap from "gsap"

interface HeroProps {
  onExploreClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Hero = ({ onExploreClick }: HeroProps) => {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".hero", {
      opacity: 0,
      duration: 1
    })

    gsap.from("picture:nth-child(1)", {
      y: -60,
      duration: 2
    })

    gsap.from("picture:nth-child(2)", {
      y: 200,
      duration: 2
    })

    const split = new SplitText(".splitText", {
      type: "lines, chars",
      linesClass: "split-line"
    });

    gsap.from(split.chars, {
      y: 40,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      scrollTrigger: {
        trigger: ".splitText",
        start: "top 85%",
      }
    });
  })

  return (
    <section
      className="hero w-full h-screen flex items-center justify-between px-[7vw] pb-[7vw] pt-0 relative bg-cover bg-position-[50%_0%] before:content-[''] before:absolute before:inset-0 before:z-2 before:bg-linear-to-b before:from-transparent before:from-60% before:to-[#0c0102]"
      ref={heroRef}
    >
      <picture data-speed=".7" className="w-full h-full absolute z-1 left-0 top-0 [&>img]:w-full [&>img]:h-full [&>img]:object-cover [&>img]:absolute">
        <source media="(max-width: 600px)" srcSet={HeroBackMobile} />
        <img src={HeroBack} />
      </picture>

      <picture className="w-full h-full absolute z-1 left-0 top-0 [&>img]:w-full [&>img]:h-full [&>img]:object-cover [&>img]:absolute">
        <source media="(max-width: 600px)" srcSet={HeroFrontMobile} />
        <img src={HeroFront} />
      </picture>

      <div className="left w-[30%] z-3 mb-40" data-speed="1.5">
        <h3 className="text-[2vw] font-normal tracking-[4px] ">THE EXPERIENCE</h3>
        <h1 className="text-[3.7vw] font-benguiat">STRANGER THINGS</h1>
      </div>

      <div className="right w-[30%] z-3 flex flex-col items-end mb-40" data-speed="1.5">
        <p className="splitText text-[2vw] mb-8 text-end">Descubra os seus poderes e vire o herói de sua própria aventura!</p>
        <Button onExploreClick={onExploreClick}>
          ESCOLHA SUA CIDADE
        </Button>
      </div>
    </section>
  )
}