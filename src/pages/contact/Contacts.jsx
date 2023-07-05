import hero from '../../assets/contact/mobile/image-hero.jpg'
import ContactDetails from './ContactDetails'
import ContactForm from './ContactForm'
import Footer from '../../pages/home/Footer'
export default function Contacts() {
  return (
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
  )
}
