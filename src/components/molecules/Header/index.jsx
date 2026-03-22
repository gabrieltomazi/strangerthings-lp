import NetflixLogo from '../../../assets/images/netflix-logo.svg'
import { Container } from './style.js'


export const Header = () => {
  return (

    <Container>
      <h2>GC.</h2>
      <img src={NetflixLogo} alt="" />
    </Container>

  )

}