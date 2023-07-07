import './Footer.css'
import { NavLink } from 'react-router-dom'
import footerlogo from '../../assets/logo.svg'
export default function Footer() {


  
  return (

    <>
      <div className='footer'>
          <div className='footer-links'>
              <NavLink style={{ marginTop: '93px' }} to="/portfolio">Portfolio</NavLink>
              <NavLink to="/about">About us</NavLink>
              <NavLink to="/contact">Contact</NavLink>
          </div>

          <div className='footer-button' style={{width:"252px", marginBottom:'48px', display:'flex', justifyContent:'center', alignItems:'center'}}><NavLink to="/portfolio">See Our Portfolio</NavLink></div>
      </div>

      <div className='footer-desktop'>
        <div className='boxlogo-desktop'>

              <div className='boxlogo2-desktop'>
                <img src={footerlogo} style={{color:"#FFF"}} className='logobox-desktop' alt='img'></img>
              </div>

        </div>

          <div className='footer-links-desktop'>
              <NavLink to="/portfolio">Portfolio</NavLink>
              <NavLink to="/about">About us</NavLink>
              <NavLink to="/contact">Contact</NavLink>
          </div>

          <div className='footer-button-desktop' ><NavLink to="/portfolio">See Our Portfolio</NavLink></div>
      </div>
    </>
    
  )
}
