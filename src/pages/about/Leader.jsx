import './Leader.css'
export default function Leader({title, rank, img}) {
  return (
    <div className='leader-box'>
        <img src={img} alt='pic'></img>
        <h1>{title}</h1>
        <p>{rank}</p>
    </div>
  )
}
