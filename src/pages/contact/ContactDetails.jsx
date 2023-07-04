import './ContactDetails.css'
import map from '../../assets/contact/mobile/image-map.png'

export default function ContactDetails() {
  return (
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
   )
}
