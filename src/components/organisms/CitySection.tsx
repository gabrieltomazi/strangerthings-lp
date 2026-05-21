import gsap from "gsap";
import { Button } from "../atoms/button"
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Card1 from "../../assets/images/card1.webp";
import Card2 from "../../assets/images/card2.webp";
import Card3 from "../../assets/images/card3.webp";

export const CitySection = () => {

  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".card", {
      opacity: 0,
      duration: 1,
      stagger: .9,
      scrollTrigger: {
        trigger: ".cards",
        scrub: true,
        start: "0% 80%",
        end: "100% 70%"
      }
    })

    gsap.from(".sectionThanks ul li", {
      opacity: 0,
      x: 40,
      duration: 0.5,
      filter: "blur(10px)",
      stagger: .2,
      scrollTrigger: {
        trigger: ".sectionThanks ul",
        start: "0% 80%",
        end: "100% 50%"
      }
    })
  })

  return (
    <section className="citySection flex flex-col w-full gap-16 px-[7vw] py-[7vw]" id="cities">
      <div className="title -mt-25 z-12 flex justify-between items-center">
        <h2>ESCOLHA SUA CIDADE</h2>

        <Button>
          COMPRAR INGRESSO
        </Button>

      </div>
      <div className="cards z-20 flex justify-between" ref={sectionRef}>
        <div
          className="card z-20 w-[32%] aspect-video bg-cover bg-center flex items-end justify-between p-5 transition-transform duration-400 ease-out hover:scale-110 cursor-pointer"
          style={{ backgroundImage: `url(${Card1})` }}
        >
          <h3>Sidney</h3>
          <p>INGRESSOS DISPONÍVEIS</p>
        </div>
        <div
          className="card z-20 w-[32%] aspect-video bg-cover bg-center flex items-end justify-between p-5 transition-transform duration-400 ease-out hover:scale-110 cursor-pointer"
          style={{ backgroundImage: `url(${Card2})` }}
        >
          <h3 className="max-w-25">Cidade do México</h3>
          <p>INGRESSOS DISPONÍVEIS</p>
        </div>
        <div
          className="card z-20 w-[32%] aspect-video bg-cover bg-center flex items-end justify-between p-5 transition-transform duration-400 ease-out hover:scale-110 cursor-pointer"
          style={{ backgroundImage: `url(${Card3})` }}
        >
          <h3>Yas Island</h3>
          <p>INGRESSOS DISPONÍVEIS</p>
        </div>
      </div>
    </section>
  )
}