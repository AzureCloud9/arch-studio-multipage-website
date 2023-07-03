import './Featured.css'
import { NavLink } from "react-router-dom"
import img1 from '../../assets/portfolio/mobile/image-del-sol.jpg'
import img2 from '../../assets/portfolio/mobile/image-228b.jpg'
import img3 from '../../assets/portfolio/mobile/image-prototype.jpg'
import logo from '../../assets/logo.svg'

export default function Featured() {
  return (
    <div className="featured-Layout">
        <div style={{width:"100vw"}}>
            <h2>Featured</h2>
        </div>
        <div className='projects-layout'>
            <div className='box'>
                <h1></h1>
                <img src={img1} alt='img'></img>
            </div>

            <div className='box'>
                <h1></h1>
                <img src={img2} alt='img'></img>
            </div>

            <div className='box'>
                <h1></h1>
                <img src={img3} alt='img'></img>
            </div>

            <div className='button1' style={{width:"311px", marginBottom:'132px', marginLeft:"0px",}}><NavLink to="/portfolio">About Us</NavLink></div>
            <div className='boxlogo' >
                <div className='boxlogo2'>
                    <img src={logo} className='logobox' alt='img'></img>
                </div>
            </div>
        </div>
    </div>
  )
}
