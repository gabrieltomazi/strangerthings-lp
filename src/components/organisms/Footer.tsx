import NetflixLogo from '../../assets/images/netflix-logo.svg'
import FeverLogo from '../../assets/images/fever-logo.svg'
import FacebookFooter from '../../assets/images/footer-facebook.svg'
import InstagramFooter from '../../assets/images/footer-instagram.svg'
import TwitterFooter from '../../assets/images/footer-twitter.svg'
import PartnerFooter from '../../assets/images/footer-parceiro.svg'
import BgFooter from '../../assets/images/bg-footer.webp'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export const Footer = () => {

  const footerRef = useRef<HTMLElement>(null);

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
    <footer 
      ref={footerRef} 
      className="w-full flex flex-col bg-center bg-cover relative"
      style={{ backgroundImage: `url(${BgFooter})` }}
    >
      <div className="footerContent flex w-full p-[7vw]">
        <div className="footerLogo w-[30%]">
          <h3 className="text-[24px] font-normal tracking-[4px]">THE EXPERIENCE</h3>
          <h2 className="text-[3.7vw] font-benguiat">STRANGER THINGS</h2>
        </div>
        <div className="footerSections flex flex-1 justify-end gap-[6%] items-end">
          <div className="socials">
            <h3 className="text-[18px] font-medium mb-3">REDES SOCIAIS</h3>
            <ul className="flex flex-row gap-3">
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
            <h3 className="text-[18px] font-medium mb-3">PARCEIRO DE MÍDIA</h3>
            <img src={PartnerFooter} alt="" />
          </div>
          <div className="institutional">
            <h3 className="text-[18px] font-medium mb-3">INSTITUTIONAL</h3>
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

      <div className="footerLogos w-full flex justify-between px-[4vw]">
        <img src={NetflixLogo} alt="Netflix logo" />
        <img src={FeverLogo} alt="Fever logo" />
      </div>
      <div className="infiniteText flex w-max justify-end items-end overflow-hidden">
        <h3 className="text-[#bfbfbf] text-[12vw] font-benguiat mix-blend-color-dodge animate-infinite-text pl-[8vw]">THE EXPERIENCE </h3>
        <h3 className="text-[#bfbfbf] text-[12vw] font-benguiat mix-blend-color-dodge animate-infinite-text pl-[8vw]">THE EXPERIENCE </h3>
        <h3 className="text-[#bfbfbf] text-[12vw] font-benguiat mix-blend-color-dodge animate-infinite-text pl-[8vw]">THE EXPERIENCE </h3>
      </div>
    </footer>
  )
}