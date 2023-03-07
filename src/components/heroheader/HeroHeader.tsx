import Navbar from "../navbar/Navbar"
import HeroDescription from "./HeroDescription"
import "./heroheader.scss"

const HeroHeader = () => {
  return (
    <div className="hero_wrapper ">
      <div className="overlay position-absolute w-100"></div>
      <Navbar/>
     <HeroDescription/>
        
    </div>
  )
}

export default HeroHeader