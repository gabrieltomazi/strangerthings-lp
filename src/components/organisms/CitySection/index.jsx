import gsap from "gsap";
import { Button } from "../../atoms/Button"
import { Container } from "./style"
import { useGSAP } from "@gsap/react";
import { useRef } from "react";



export const CitySection = () => {

  const sectionRef = useRef();

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
    <Container className="citySection" id="cities">
      <div className="title">
        <h2>ESCOLHA SUA CIDADE</h2>
        <Button>

          COMPRAR INGRESSO
        </Button>
      </div>
      <div className="cards" ref={sectionRef}>
        <div className="card">
          <h3>Sidney</h3>
          <p>INGRESSOS DISPONÍVEIS</p>
        </div>
        <div className="card">
          <h3>Cidade do México</h3>
          <p>INGRESSOS DISPONÍVEIS</p>
        </div>
        <div className="card">
          <h3>Yas Island</h3>
          <p>INGRESSOS DISPONÍVEIS</p>
        </div>
      </div>
    </Container>
  )


}