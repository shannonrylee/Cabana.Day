const cabanaList = (props) => {

        console.log(props)
        return( 
          <div>
            {
              props.rides.map((cabanas)=>(
                <div key={cabanas.id}
                  className="card">
                  <h3>{cabanas.location}</h3>
                  <h4>{cabanas.types}</h4>
                  <h4>{cabanas.price}</h4>
                  <h4>{cabanas.bookedDates}</h4>
                </div>
              ))
            }
          </div>
        )
      }
      
      export default cabanaList