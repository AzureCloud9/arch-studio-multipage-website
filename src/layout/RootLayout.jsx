import { NavLink, Outlet } from "react-router-dom"
import weblogo from "../assets/logo.svg"
import "./RootLayout.css"
import HamburgerMenu from "../components/HamburgerMenu"
import ScrollToTop from '../components/ScrollToTop'

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
          <nav>
            <ScrollToTop/>  
            <NavLink to="/"><img src={weblogo} alt="logo" style={{}}></img></NavLink>
            <NavLink to="Portfolio" className="portfolio-link">Portfolio</NavLink>
            <NavLink to="about" className="about-link">About Us</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </nav>
          <HamburgerMenu/>
        </header>



        <main>
          <Outlet />
        </main>
    </div>
  )
}

