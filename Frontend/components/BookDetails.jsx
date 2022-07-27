import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const BookDetails = (props) => {

  const [cabana, setCabana] = useState('')

let { id } = useParams() 

useEffect(() => {
  let selectedCabana = props.cabanas.find(
    (cabana) => cabana.id === parseInt(id)
  )
  setCabana(selectedCabana)
}, [props.cabanas, id])


  return cabana ? (
    <div className="detail">
      <div className="detail-header">
        <img src={cabana.img} alt={cabana.name} />
        <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1>Name: {cabana.name}</h1>
          <h1>Date of Arrival: {cabana.bookedDate}</h1>
        </div> 
      </div>
      <div className="info-wrapper">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
         <h3>Type: {cabana.type}</h3>
          <h3>Location: {cabana.location}</h3>
          <h3>Price: {cabana.price}</h3>
        </div>
        <p>{cabana.description}</p>
        <Link to="">Back</Link>
      </div>
    </div>
  ) : null;
}

export default BookDetails
