import './Hero.css'
import mobileImg1 from "../../assets/home/mobile/image-hero-paramour.jpg"
import hero1 from '../../assets/home/desktop/image-hero-paramour.jpg'
import hero2 from '../../assets/home/desktop/image-hero-seraph.jpg'
import hero3 from '../../assets/home/desktop/image-hero-federal.jpg'
import hero4 from '../../assets/home/desktop/image-hero-trinity.jpg'
import arrow from '../../assets/icons/icon-arrow.svg'
import { useState } from 'react'

import { NavLink } from "react-router-dom"


export default function Hero() {

  const [button1, setButton1] = useState(true)
  const [button2, setButton2] = useState(false)
  const [button3, setButton3] = useState(false)
  const [button4, setButton4] = useState(false)


function buttonHandler1 () {
    setButton1(true)
    setButton2(false)
    setButton3(false)
    setButton4(false)
  }

function buttonHandler2 () {
    setButton1(false)
    setButton2(true)
    setButton3(false)
    setButton4(false)
  }

  function buttonHandler3() {
    setButton1(false);
    setButton2(false);
    setButton3(true);
    setButton4(false);
  }
  
  function buttonHandler4() {
    setButton1(false);
    setButton2(false);
    setButton3(false);
    setButton4(true);
  }

  

  return (
    <>
      <div className="home-layout">
        <div className="overlay-text">
          <h2>Project <br></br>Paramour</h2>
          <p>Project made for an art museum near <br></br> Southwest London. Project Paramour is a<br></br>statement of bold, modern architecture.</p>
          <div className='button1'><NavLink to="/portfolio">See our Projects</NavLink></div>
        </div>
        <img src={mobileImg1} alt='img'></img>
      </div>

      <div className="home-layout-dekstop">
        <div className="overlay-text-dekstop">
          {button1 ? (
            <>
            <h2>Project <br></br>Paramour</h2>
            <p style={{marginBottom:'41px'}}>Project made for an art museum near Southwest London. <br></br>  Project Paramour is a statement of bold, modern <br></br> architecture.</p>
            <div className='button1-dekstop'><NavLink to="/portfolio">See our Projects </NavLink></div>
            </>
          ): button2 ? (
            <>
            <h2>Seraph<br></br>Station</h2>
            <p style={{marginBottom:'17px'}}>The Seraph Station project challenged us to design a <br></br> unique station that would transport people through time. <br></br>The result is a fresh and futuristic model inspired by space<br></br> stations.</p>
            <div className='button1-dekstop'><NavLink to="/portfolio">See our Projects </NavLink></div>
            </>
          ): button3 ? (
            <>
            <h2>Federal II<br></br>Tower</h2>
            <p style={{marginBottom:'41px'}}>A sequel theme project for a tower originally built in the <br></br> 1800s. We achieved this with a striking look of brutal <br></br>minimalism with modern touches.</p>
            <div className='button1-dekstop'><NavLink to="/portfolio">See our Projects </NavLink></div>
            </>
          ): button4 ? (
            <>
            <h2>Trinity Bank <br></br>Tower</h2>
            <p style={{marginBottom:'17px'}}>Trinity Bank challenged us to make a concept for a 84 story <br></br> building located in the middle of a city with a high <br></br> earthquake frequency. For this project we used curves to <br></br> blend design and stability to meet our objectives.</p>
            <div className='button1-dekstop'><NavLink to="/portfolio">See our Projects </NavLink></div>
            </>
          ):null}
          
        </div>
        <img src={button1 ? hero1 : button2 ? hero2 : button3 ? hero3 : button4 ? hero4 : null} alt='img'></img>
        <div className='hero-dekstop-buttons'>

          <div className='dekstop-box' style={{backgroundColor: button1 ? '#1B1D23':'white'}} onClick={buttonHandler1}>
            <h1 style={{color: button1 ? 'white' : '#1B1D23'}}>01</h1>
          </div>

          <div className='dekstop-box' style={{backgroundColor: button2 ? '#1B1D23':'white'}} onClick={buttonHandler2}>
            <h1 style={{color: button2 ? 'white' : '#1B1D23'}}>02</h1>
          </div>

          <div className='dekstop-box' style={{backgroundColor: button3 ? '#1B1D23':'white'}} onClick={buttonHandler3}>
            <h1 style={{color: button3 ? 'white' : '#1B1D23'}}>03</h1>
          </div>

          <div className='dekstop-box' style={{backgroundColor: button4 ? '#1B1D23':'white'}} onClick={buttonHandler4}>
            <h1 style={{color: button4 ? 'white' : '#1B1D23'}}>04</h1>
          </div>

          

        </div>
      </div>
    </>

    
  )
}
