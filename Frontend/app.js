import { useState, useEffect } from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [cabanas, setCabanas] = useState();
  const initialState = {
    location: "",
    type: "",
    bookedDates: "",
    price: "",
  };
  const [formState, setFormState] = useState(initialState);

  useEffect(() => {
    const getCabana = async () => {
      try {
        let res = await axios.get("http://localhost:3001/api/cabana");
        console.log(res.data);
        setCabanas(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCabana();
  }, []);

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formState);
    setFormState(initialState);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        type="text"
        onChange={handleChange}
        value={formState.username}
      />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        onChange={handleChange}
        value={formState.password}
      />
      <button type="submit">Login</button>
    </form>
  );
};
export default App;
