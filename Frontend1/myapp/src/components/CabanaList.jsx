import {useNavigate} from 'react-router-dom'
import Link from 'react-router-dom'
const CabanaList = (props) => {

  let navigate = useNavigate()
  const showCabana = (cabana) => {
    navigate(`${cabana.id}`)

  }

  return (
    <div className="show">
      {
      props.boats.map((cabana) => (
        <div className="card" onClick={() => showCabana(cabana)} key={cabana.id}>
          <img style={{ display: 'block' }} src={cabana.img} alt={cabana.name} />
          <h3>{cabana.name}</h3>
          {/* <Link to="/">Back</Link> */}
        </div>
      ))}
    </div>
    
  )
}

export default CabanaList