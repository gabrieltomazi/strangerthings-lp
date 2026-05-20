import { ReactNode, MouseEvent } from 'react'
import ArrowSvg from './arrow'

interface ButtonProps {
  children: ReactNode;
  onExploreClick: (event: MouseEvent<HTMLButtonElement>) => void;
}


export const Button = ({ children, onExploreClick }: ButtonProps) => {
  return (

    <button className='bg-black/15 text-white text-[16px] flex gap-2.5 outline-none p-4 border-b border-solid border-white cursor-pointer'
      onClick={onExploreClick}>
      {children}
      <ArrowSvg />
    </button>
  )
}


