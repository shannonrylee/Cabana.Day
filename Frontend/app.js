import { useState, useEffect } from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [cabanas, setCabanas] = useState([]);

  useEffect(() => {
    const getCabana = async () => {
     await axios.get("http://localhost:3001/api/cabana").then(res) => {
        console.log(res);
        setCabanas(res.data.cabanas);
        console.log(cabanas)
      }
      getCabana();
    }
  }, []);

  return (
    <div>
        <div className="cabanas">
          {cabanas.map((cabana) => (
            <CabanaList
              key={cabanas.name}
              name={cabanas.name}
              cabanaType={cabanas.type}
              location={cabanas.location}
              dates={cabanas.bookedDates}
              onClick={() => navigate(`/cabana/${cabanas._id}`)}
            />
          ))}
          <button>
            <Link to="/">Back</Link>
          </button>
        </div>
        </div>
  );
};
export default App;
