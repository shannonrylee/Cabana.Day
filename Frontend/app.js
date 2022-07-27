import { useState } from "react";
import cabanaArray from "./models/Cabana";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [cabanas, setCabanas] = useState(cabanaArray);
  const [newBookings, setNewBookings] = useState({
    name: "",
    img: "",
    type: "",
    price: "",
    bookeddates: "",
    location: "",
  });
};
