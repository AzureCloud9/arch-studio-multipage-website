import "./Hero2.css"
import { NavLink } from "react-router-dom"
import hero2img from "../../assets/home/mobile/image-small-team.jpg"
import hero2imgdekstop from '../../assets/home/desktop/image-small-team.jpg'

export default function Hero2() {
  return (
    <>
    <div className="hero2-section">
        <div className="overlay-text2">
            <h2>Small team, <br></br> big ideas</h2>
            <div className='button1'><NavLink to="/about">About Us</NavLink></div>
        </div>
        <img src={hero2img} alt="img"></img>
    </div>

    <div className="hero2-section-desktop">
        <div className="overlay-text2-desktop">
            <h2>Small team, <br></br> big ideas</h2>
            <div className='button1-desktop'><NavLink to="/about">About Us</NavLink></div>
        </div>
        <img src={hero2imgdekstop} alt="img"></img>
    </div>

    </>
  )
}
