import { useState } from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [cabanas, setCabanas] = useState(cabanaArray);


return (
  <div className="App">
    <header>
      <Nav />
    </header>
    <main>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="listing" element={ <Listing cabanas={cabanas}/>} />
        <Route path=""
      </Routes>
    </main>
  </div>
)