import hero from '../../assets/contact/mobile/image-hero.jpg'
import ContactDetails from './ContactDetails'
import ContactForm from './ContactForm'
import Footer from '../../pages/home/Footer'
import Section1 from '../about/Section1'
import img from '../../assets/contact/desktop/image-hero.jpg'
export default function Contacts() {
  return (
  <>
    <div className="about-layout">
        <div className='about-hero'>
            <div className='white-bar'></div>
            <img src={hero} alt='img'></img>
        </div>

        <div className='block1'>
            <h1>Tell us about <br></br>your project</h1>
            <p>We’d love to hear more about your <br></br> project. Please, leave a message below <br></br> or give us a call. We have two offices, <br></br> one in Texas and one in Tennessee. If you <br></br> find yourself nearby, come say hello!</p>
        </div>

        <div className='retangle'></div>
        
        <ContactDetails/>
        <ContactForm/>
        <Footer/>
    </div>

    <div className='about-layout-desktop'>
      <div className='section1-Layout'>
          <img src={img} alt='img'></img>
          <h1 style={{marginLeft:'255px'}}>Contact</h1>
          <div className='text-layout-desktop'>
              <h2>Tell us about<br></br>your project</h2>
              <p>Our small team of world-class professionals will work with <br></br> you every step of the way. Strong relationships are at the <br></br> core of everything we do. This extends to the relationship <br></br> our projects have with their surroundings.</p>
          </div>
      </div>
    </div>
  </>
  )
}
