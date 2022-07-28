import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import CabanaList from "./components/CabanaList";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  const [cabana, setCabana] = useState("");

  useEffect(() => {
    async function getCabana() {
      const res = await axios.get(`http://localhost:3001/api/cabana`);
      setCabana(res.data.results);
    }
    getCabana();
  }, []);
  console.log(cabana);

  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cabanalist" element={<CabanaList cabana={cabana} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
