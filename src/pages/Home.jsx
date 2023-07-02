import './Home.css'
import mobileImg1 from "../assets/home/mobile/image-hero-paramour.jpg"
import { NavLink } from "react-router-dom"


export default function Home() {
  return (
    <div className="home-layout">
      <div className="overlay-text">
        <h2>Project <br></br>Paramour</h2>
        <p>Project made for an art museum near <br></br> Southwest London. Project Paramour is a<br></br>statement of bold, modern architecture.</p>
        <div className='button1'><NavLink to="/projects">See our Projects</NavLink></div>
      </div>
      <img src={mobileImg1} alt='img'></img>

    </div>
  )
}
