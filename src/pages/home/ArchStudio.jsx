import "./ArchStudio.css"
import sideimg from '../../assets/home/desktop/image-welcome.jpg'

export default function ArchStudio() {
  return (
    <>
      <div className="archstudio">
          <h2>Welcome to <br></br> Arch Studio</h2>
          <p>We have a unique network and skillset to <br></br> help bring your projects to life. Our small <br></br> team of highly skilled individuals <br></br> combined with our large network put us <br></br>in a strong position to deliver <br></br> exceptional results.<br></br>

          Over the past 10 years, we have worked <br></br> on all kinds of projects. From stations to <br></br> high-rise buildings, we create spaces <br></br>that inspire and delight. <br></br>
          
          We work closely with our clients so that <br></br> we understand the intricacies of each <br></br> project. This allows us to work in <br></br> harmony the surrounding area to create <br></br>truly stunning projects that will stand the <br></br> test of time.</p>
      </div>

      <div className="archstudio-desktop">
        <h1>Welcome</h1>
        <div className="archstudio-desktop-box">
          <div className="archstudio-desktop-box1"> 
            <h2>Welcome to <br></br> Arch Studio</h2>
            <p>We have a unique network and skillset to help bring your <br></br> projects to life. Our small team of highly skilled individuals <br></br> combined with our large network put us in a strong <br></br>  position to deliver xceptional results.<br></br>
            <br></br>
            Over the past 10 years, we have worked on all kinds of <br></br>  projects. From stations to high-rise buildings, we create<br></br>  spaces that inspire and delight. <br></br>
            <br></br>
            We work closely with our clients so that we understand the <br></br>  intricacies of each project. This allows us to work in <br></br> harmony the surrounding area to create truly stunning <br></br>  projects that will stand the test of time.</p>
          </div>
          <div>
            <img src={sideimg}  alt="img"></img>
          </div>
        </div>
      </div>

    </>
    
  )
}
