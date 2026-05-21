import { ReactNode } from "react"
import BgMonsterImg from "../../assets/images/bgMonster.webp"

interface BgMonsterProps {
  children: ReactNode;
}

export function BgMonster({ children }: BgMonsterProps) {
  return (
    <div
      className="relative z-2 bg-[#0c0102] bg-center bg-cover before:content-[''] before:absolute before:inset-0 before:z-1 before:bg-linear-to-b before:from-[#0c0102] before:to-transparent before:to-90%"
      style={{ backgroundImage: `url(${BgMonsterImg})` }}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
