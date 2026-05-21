import NetflixLogo from '../../assets/images/netflix-logo.svg'

export const Header = () => {
  return (
    <div className="w-full flex justify-between p-[4vw] absolute z-9">
      <h2>GC.</h2>
      <img src={NetflixLogo} alt="" />
    </div>
  )
}
