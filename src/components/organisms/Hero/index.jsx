
import { Container } from "./style"
import HeroBackMobile from '../../../assets/images/hero_backmobile.webp'
import HeroFrontMobile from '../../../assets/images/hero_frontmobile.webp'
import HeroBack from '../../../assets/images/hero_back.webp'
import HeroFront from '../../../assets/images/hero_front.webp'
import { Button } from "../../atoms/Button"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/SplitText"
import gsap from "gsap"


export const Hero = ({ onExploreClick }) => {


  const heroRef = useRef();

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

    <Container className="hero" ref={heroRef}>

      <picture data-speed=".7">
        <source media="(max-width: 600px)" srcSet={HeroBackMobile} />
        <img src={HeroBack} alt="" />
      </picture>

      <picture>
        <source media="(max-width: 600px)" srcSet={HeroFrontMobile} />
        <img src={HeroFront} alt="" />
      </picture>

      <div className="left" data-speed="1.5">
        <h3>THE EXPERIENCE</h3>
        <h1>STRANGER THINGS</h1>
      </div>

      <div className="right" data-speed="1.5">
        <p className="splitText" >Descubra os seus poderes e vire o herói de sua própria aventura!</p>
        <Button className="direct" onClick={onExploreClick}>
          ESCOLHA SUA CIDADE
        </Button>
      </div>

    </Container>
  )

}



