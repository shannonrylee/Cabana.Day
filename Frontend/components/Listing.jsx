import {useNavigate} from 'react-router-dom'
import Link from 'react-router-dom'
const Listings = (props) => {

  let navigate = useNavigate()
  const showCabana = (cabanas) => {
    navigate(`${cabanas}`)

  }

  return (
    <div className="boat-grid">
      {
      props.cabanas.map((cabanas) => (
        <div onClick={() => showCabana(cabanas)} key={cabanas.id}>
          <h3>{cabanas.name}</h3>
          <Link to="/">Back</Link>
        </div>
      ))}
    </div>
    
  )
}

export default Listings
