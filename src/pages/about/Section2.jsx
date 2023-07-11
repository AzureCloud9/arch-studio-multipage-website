import './Section2.css'
import img from '../../assets/about/desktop/image-heritage.jpg'
export default function Section2() {
  return (
    <div className='section2-layout'>
        <div className='section2-leftside'>
            <h1>Our<br></br> Heritage</h1>
            <p>Founded in 2007, we started as a trio of architects. Our <br></br> complimentary skills and relentless attention to detail  <br></br>turned Arch into one of the most sought after boutique <br></br> firms in the country.
            <br></br>
            <br></br>
                Speciliazing in Urban Design allowed us to focus on<br></br> creating exceptional structures that live in harmony with<br></br> their surroundings. We consider every detail from every<br></br> surrounding element to inform our designs. 
            <br></br>
            <br></br>
                Our small team of world-class professionals provides input<br></br> on every project.</p>
        </div>
        <div className='section2-rightside'>
            <img src={img} alt='pic'></img>
        </div>

    </div>
  )
}
