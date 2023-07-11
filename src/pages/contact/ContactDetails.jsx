import './ContactDetails.css'
import map from '../../assets/contact/mobile/image-map.png'
import mapdesktop from '../../assets/contact/desktop/image-map.png'
import Footer from '../home/Footer'
import ContactForm from './ContactForm'

export default function ContactDetails() {
  return (
    <>
    <div className='contact-details'>
        <h1>Contact<br></br>Details</h1>

        <div className='contact-box' style={{marginBottom:'40px'}}>
            <h2>Main Office</h2>
            <p>Mail : archone@mail.com</p>
            <p>Adress : 1892 Chenoweth Drive TN</p>
            <p>Phone : 123-456-3451</p>
            <h3>View on map</h3>
        </div>

        <div className='contact-box'>
            <h2>Office 2</h2>
            <p>Mail : archone@mail.com</p>
            <p>Adress : 3399 Wines Lane TX</p>
            <p>Phone : 832-123-4321</p>
            <h3>View on map</h3>
        </div>        

        <img src={map} alt='pic'></img>
    </div>

    <div className='contact-details-desktop'>

        <div className='contact-sides'>
            <div className='contact-leftside'>
                <h1>Contact<br></br>Details</h1>
            </div>

            <div className='contact-rightside'>
                <div className='contact-box-desktop'>
                    <h2>Main Office</h2>
                    <p>Mail : archone@mail.com</p>
                    <p>Adress : 1892 Chenoweth Drive TN</p>
                    <p>Phone : 123-456-3451</p>
                    <h3>View on map</h3>
                </div>

                <div className='contact-box-desktop'>
                    <h2>Office 2</h2>
                    <p>Mail : archone@mail.com</p>
                    <p>Adress : 3399 Wines Lane TX</p>
                    <p>Phone : 832-123-4321</p>
                    <h3>View on map</h3>
                </div>         
            </div>
        
    </div>
        <div className='map'>
            <img src={mapdesktop}style={{marginTop:'163px'}} alt='pic'></img>
        </div>

        
        <ContactForm/>
        <Footer/>
    </div>
    </>
   )
}
