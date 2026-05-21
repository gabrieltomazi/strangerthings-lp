import NetflixLogo from '../../assets/images/netflix-logo.svg'
import ClioLogo from '../../assets/images/clio-logo.svg'
import FeverLogo from '../../assets/images/fever-logo.svg'
import Dep1 from '../../assets/images/img-dep1.webp'
import Dep2 from '../../assets/images/img-dep2.webp'
import Dep3 from '../../assets/images/img-dep3.webp'

export const SectionTestimonials = () => {

  return (
    <section className="sectionTestimonials flex flex-col w-full px-[7vw] py-[7vw]">
      <div className="logos flex justify-between items-end z-10">
        <img src={NetflixLogo} alt="Netflix logo" />
        <img src={ClioLogo} alt="Clio logo" />
        <img src={FeverLogo} alt="Fever logo" />
      </div>
      <div className="testimonials z-100 mt-15.5 flex justify-between">
        <div className="testimonial w-[30%]">
          <img src={Dep1} alt="testimonial1" />
          <p>"Guests are immersed into an original "Stranger Things" storyline...combines the
            special
            effects
            of a
            3D Universal Studios ride with a telekinetic escape room."</p>
        </div>
        <div className="testimonial w-[30%]">
          <img src={Dep2} alt="testimonial2" />
          <p>"Guests are immersed into an original "Stranger Things" storyline...combines the
            special
            effects
            of a
            3D Universal Studios ride with a telekinetic escape room."</p>
        </div>
        <div className="testimonial w-[30%]">
          <img src={Dep3} alt="testimonial3" />
          <p>"Guests are immersed into an original "Stranger Things" storyline...combines the
            special
            effects
            of a
            3D Universal Studios ride with a telekinetic escape room."</p>
        </div>
      </div>
    </section>
  )
}