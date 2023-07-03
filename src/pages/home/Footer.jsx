import './Footer.css'
import { NavLink } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-links'>
            <NavLink style={{ marginTop: '93px' }} to="/portfolio">Portfolio</NavLink>
            <NavLink to="/about">About us</NavLink>
            <NavLink to="/contact">Contacts</NavLink>
        </div>

        <div className='footer-button' style={{width:"252px", marginBottom:'48px', display:'flex', justifyContent:'center', alignItems:'center'}}><NavLink to="/portfolio">See Our Portfolio</NavLink></div>
    </div>
  )
}
