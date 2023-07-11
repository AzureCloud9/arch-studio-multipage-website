import Leader from './Leader'
import leaderpfp1 from '../../assets/about/desktop/avatar-jake.jpg'
import leaderpfp2 from '../../assets/about/desktop/avatar-thompson.jpg'
import leaderpfp3 from '../../assets/about/desktop/avatar-jackson.jpg'
import leaderpfp4 from '../../assets/about/desktop/avatar-maria.jpg'
import './Section3.css'

export default function Section3() {
  return (
    <div className='section3-layout'>
        <div className='section3-leftside'>
            <h1>The<br></br>leaders</h1>
        </div>
        <div className='section3-rightside'>
            <div className='row'>
                <Leader img={leaderpfp1} title={"Jake Richards"} rank={"Chief Architect"}/>
                <Leader img={leaderpfp2} title={"Thompson Smith"} rank={"Head of Finance"}/>
            </div>
            <div className='row'>
                <Leader img={leaderpfp3} title={"Jackson Rourke"} rank={"Lead Designer"}/>
                <Leader img={leaderpfp4} title={"Maria Simpson"} rank={"Senior Architect"}/>
            </div>
        </div>
    </div>
  )
}
