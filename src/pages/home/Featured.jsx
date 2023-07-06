import './Featured.css'
import { NavLink } from "react-router-dom"
import img1 from '../../assets/portfolio/mobile/image-del-sol.jpg'
import img2 from '../../assets/portfolio/mobile/image-228b.jpg'
import img3 from '../../assets/portfolio/mobile/image-prototype.jpg'
import img1desktop from '../../assets/portfolio/desktop/image-del-sol.jpg'
import img2desktop from '../../assets/portfolio/desktop/image-228b.jpg'
import img3desktop from '../../assets/portfolio/desktop/image-prototype.jpg'

import logo from '../../assets/logo.svg'

export default function Featured() {
  return (
    <>
      <div className="featured-Layout">
        <div style={{ width: "100vw" }}>
          <h2>Featured</h2>
        </div>
        <div className='projects-layout'>
          <div className='box'>
            <h1>Project Del Sol</h1>
            <NavLink to='/portfolio'>view all projects</NavLink>
            <img src={img1} alt='img'></img>
          </div>

          <div className='box'>
            <h1>228B Tower</h1>
            <NavLink to='/portfolio'>view all projects</NavLink>
            <img src={img2} alt='img'></img>
          </div>

          <div className='box'>
            <h1>Le Prototype</h1>
            <img src={img3} alt='img'></img>
            <NavLink to='/portfolio'>view all projects</NavLink>
          </div>

          <div className='button1' style={{ width: "311px", marginBottom: '132px', marginLeft: "0px" }}><NavLink to="/portfolio">About Us</NavLink></div>
          <div className='boxlogo'>
            <div className='boxlogo2'>
              <img src={logo} className='logobox' alt='img'></img>
            </div>
          </div>
        </div>
      </div>


      {/* Desktop */}

    <div className="featured-Layout-desktop">
      <div className='title-button'>
        <h1>Featured</h1>
        <div className='see-all-btn'><p>See All</p></div>
      </div>
      <div className='featured-boxes-desktop'>

      <div className='box-desktop' style={{marginLeft:'165px'}}>
            <h1>Project Del Sol</h1>
            <NavLink to='/portfolio'>view all projects</NavLink>
            <img src={img1desktop} alt='img'></img>
      </div>
      <div className='box-desktop' >
            <h1>228B Tower</h1>
            <NavLink to='/portfolio'>view all projects</NavLink>
            <img src={img2desktop} alt='img'></img>
      </div>
      <div className='box-desktop' >
            <h1>Le Prototype</h1>
            <NavLink to='/portfolio'>view all projects</NavLink>
            <img src={img3desktop} alt='img'></img>
      </div>

          
      </div>
    </div>


    </>
    
  )
}
