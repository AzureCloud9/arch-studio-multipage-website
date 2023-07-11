import hero from '../../assets/about/mobile/image-hero.jpg'
import leaderpfp1 from '../../assets/about/desktop/avatar-jake.jpg'
import leaderpfp2 from '../../assets/about/desktop/avatar-thompson.jpg'
import leaderpfp3 from '../../assets/about/desktop/avatar-jackson.jpg'
import leaderpfp4 from '../../assets/about/desktop/avatar-maria.jpg'
import './About.css'
import Leader from './Leader'
import Footer from '../home/Footer'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

export default function About() {
  return (

<>
    <div className="about-layout">
        <div className='about-hero'>
            <div className='white-bar'></div>
            <img src={hero} alt='img'></img>
        </div>

        <div className='block1'>
            <h1>Your team of <br></br> professionals</h1>
            <p>Our small team of world-class <br></br>professionals will work with you every <br></br>step of the way. Strong relationships are <br></br> at the core of everything we do. This <br></br> extends to the relationship our projects <br></br>have with their surroundings.</p>
        </div>

        <div className='retangle'></div>

        <div className='block1' style={{marginBottom:'112px'}}>
            <h1>Our<br></br> Heritage</h1>
            <p>Founded in 2007, we started as a trio of <br></br>
                architects. Our complimentary skills and <br></br>
                relentless attention to detail turned Arch <br></br>
                into one of the most sought after <br></br>
                boutique firms in the country. 
                <br></br>
                <br></br>
                Speciliazing in Urban Design allowed us<br></br>
                to focus on creating exceptional <br></br>
                structures that live in harmony with their <br></br> 
                surroundings. We consider every detail <br></br>
                from every surrounding element to <br></br>
                inform our designs. 
                <br></br>
                <br></br>
                Our small team of world-class<br></br>
                professionals provides input on every<br></br>
                project.</p>
        </div>
        <div className='owners'>
            <h1 className='owners-title'>The <br></br> Leaders</h1>
            <div className='owners-boxes'>
                <Leader img={leaderpfp1} title={"Jake Richards"} rank={"Chief Architect"}/>
                <Leader img={leaderpfp2} title={"Thompson Smith"} rank={"Head of Finance"}/>
                <Leader img={leaderpfp3} title={"Jackson Rourke"} rank={"Lead Designer"}/>
                <Leader img={leaderpfp4} title={"Maria Simpson"} rank={"Senior Architect"}/>
            </div>
        </div>
        <Footer/>
    </div>

    <div className='about-layout-desktop'>
        <Section1/>
        <Section2/>
        <Section3/>
        <Footer/>
    </div>
</>
  )
}
