import { ReactNode, MouseEvent } from 'react'
import { ArrowSvg } from './Arrow'

interface ButtonProps {
  children: ReactNode;
  onExploreClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}


export const Button = ({ children, onExploreClick }: ButtonProps) => {
  return (

    <button className='bg-white/15 items-center p-4 text-white text-[16px] flex gap-2.5 outline-none border-b border-solid border-white cursor-pointer'
      onClick={onExploreClick}>
      {children}
      <ArrowSvg />
    </button>
  )
}
