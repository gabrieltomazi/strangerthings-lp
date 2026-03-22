import NetflixLogo from '../../../assets/images/netflix-logo.svg'
import ClioLogo from '../../../assets/images/clio-logo.svg'
import FeverLogo from '../../../assets/images/fever-logo.svg'
import Dep1 from '../../../assets/images/img-dep1.webp'
import Dep2 from '../../../assets/images/img-dep2.webp'
import Dep3 from '../../../assets/images/img-dep3.webp'
import { Container } from './style'


export const SectionTestimonials = () => {

  

  return (
    <Container className="sectionTestimonials">
      <div className="logos">
        <img src={NetflixLogo} alt="Netflix logo" />
        <img src={ClioLogo} alt="Clio logo" />
        <img src={FeverLogo} alt="Fever logo" />
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <img src={Dep1} alt="testimonial1" />
          <p>"Guests are immersed into an original "Stranger Things" storyline...combines the
            special
            effects
            of a
            3D Universal Studios ride with a telekinetic escape room."</p>
        </div>
        <div className="testimonial">
          <img src={Dep2} alt="testimonial2" />
          <p>"Guests are immersed into an original "Stranger Things" storyline...combines the
            special
            effects
            of a
            3D Universal Studios ride with a telekinetic escape room."</p>
        </div>
        <div className="testimonial">
          <img src={Dep3} alt="testimonial3" />
          <p>"Guests are immersed into an original "Stranger Things" storyline...combines the
            special
            effects
            of a
            3D Universal Studios ride with a telekinetic escape room."</p>
        </div>
      </div>
    </Container>
  )
}