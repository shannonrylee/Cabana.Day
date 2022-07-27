import { useState } from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [cabanas, setCabanas] = useState(cabanaArray)

  const handleLogin = () => toggleLogin (true)
  const handleLogout = () => toggleLogin (false)



useEffect(()=>{
  async  getRides(){
    const res = await axios.get(`/rideTime.js/rides`)
    setRides(res.data.results)
  }
  getRides()
},[])
console.log(rides)
}
return (
  <div className="App">
    <header>
      <Nav />
    </header>
    <main>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/listing" element={<Listing cabanas={cabanas} />} />
        {/* <Route path="" */}
      </Routes>
    </main>
  </div>
);
