import './Section1.css'
import img1 from '../../assets/about/desktop/image-hero.jpg'
export default function Section1() {
  return (
    <div className='section1-Layout'>
        <img src={img1} alt='img'></img>
        <h1>About</h1>
        <div className='text-layout-desktop'>
            <h2>Your team of<br></br>professionals</h2>
            <p>Our small team of world-class professionals will work with <br></br> you every step of the way. Strong relationships are at the <br></br> core of everything we do. This extends to the relationship <br></br> our projects have with their surroundings.</p>
        </div>
    </div>
  )
}
