import { MyButton } from './style'
import SetaBotao from '../../../assets/images/seta-botao.svg'


export const Button = ({ children, onClick, id }) => {
  return (

    <MyButton onClick={onClick}>
      {children}
      <img src={SetaBotao} alt="seta-botao" />
    </MyButton>
  )
}


