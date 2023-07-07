import { NavLink } from "react-router-dom"



export default function Box({title, date, img}) {
  return (

  <>
    <div className="portfolio-layout">
      <div className='portfolio-box'>
          <h1>{title}</h1>
          <NavLink to='/portfolio'>{date}</NavLink>
          <img src={img} alt='img'></img>
        </div>
    </div>

    <div className="portfolio-layout-desktop">
      <div className='portfolio-box-desktop'>
          <h1>{title}</h1>
          <NavLink to='/portfolio'>{date}</NavLink>
          <img src={img} alt='img'></img>
        </div>
    </div>


  </>
    
    )
}
