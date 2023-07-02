import { NavLink } from "react-router-dom"
import { useState } from "react"
import hamburger from '../assets/icons/icon-hamburger.svg'
import weblogo from "../assets/logo.svg"
import "./HamburgerMenu.css"


export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false)
    
    function toggleMenu () {
        setIsOpen(!isOpen)
    }

  return (
    <nav className="hamburger-menu">
            <NavLink to="/"><img src={weblogo} alt="logo" className="hamlogo"></img></NavLink>
            <img src={hamburger} alt="menu"onClick={toggleMenu} className="hamburger"></img>
            {isOpen && (
                <div className="menu">
                <NavLink to="/portfolio" onClick={toggleMenu}>Portfolio</NavLink>
                <NavLink to="/about" onClick={toggleMenu}>About Us</NavLink>
                <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
                </div>
            )}
    </nav>
  )
}
