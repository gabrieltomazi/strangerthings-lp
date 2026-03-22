import NetflixLogo from '../../../assets/images/netflix-logo.svg'
import FeverLogo from '../../../assets/images/fever-logo.svg'
import FacebookFooter from '../../../assets/images/footer-facebook.svg'
import InstagramFooter from '../../../assets/images/footer-instagram.svg'
import TwitterFooter from '../../../assets/images/footer-twitter.svg'
import PartnerFooter from '../../../assets/images/footer-parceiro.svg'
import { Container } from './style'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


export const Footer = () => {

  const footerRef = useRef();


  useGSAP(() => {
    gsap.from("footer", {
      y: -150,
      immediateRender: false,
      scrollTrigger: {
        trigger: "footer",
        scrub: true,
        invalidateOnRefresh: true,
        end: "100% 100%"
      }

    })
  })



  return (
    <Container ref={footerRef}>
      <div className="bgFooter">
      </div>
      <div className="footerContent">
        <div className="footerLogo">
          <h3>THE EXPERIENCE</h3>
          <h2>STRANGER THINGS</h2>
        </div>
        <div className="footerSections">
          <div className="socials">
            <h3>REDES SOCIAIS</h3>
            <ul>
              <a>
                <li><img src={FacebookFooter} alt="Facebook" /></li>
              </a>
              <a>
                <li><img src={InstagramFooter} alt="Instagram" /></li>
              </a>
              <a>
                <li><img src={TwitterFooter} alt="Twitter" /></li>
              </a>
            </ul>
          </div>
          <div className="partner">
            <h3>PARCEIRO DE MÍDIA</h3>
            <img src={PartnerFooter} alt="" />
          </div>
          <div className="institutional">
            <h3>INSTITUTIONAL</h3>
            <nav>
              <ul>
                <a>
                  <li>Contato</li>
                </a>
                <a>
                  <li>Imprensa</li>
                </a>
                <a>
                  <li>Parcerias</li>
                </a>
                <a>
                  <li>Influenciadores</li>
                </a>
              </ul>
            </nav>
          </div>
        </div>

      </div>


      <div className="footerLogos">
        <img src={NetflixLogo} alt="Netflix logo" />
        <img src={FeverLogo} alt="Fever logo" />
      </div>
      <div className="infiniteText">
        <h3>THE EXPERIENCE </h3>
        <h3>THE EXPERIENCE </h3>
        <h3>THE EXPERIENCE </h3>
      </div>
    </Container>
  )

}