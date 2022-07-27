const db = require("../db");
const { Cabana } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const createCabana = async () => {
  const cabana = [
    {
      location: "on the Beach",
      type: "2 person",
      bookedDates: ["7/30/22", "8/02/22", "8/05/22"],
      price: "$200",
      // image: {},
    },
    {
      location: "off the Beach",
      type: "2 person",
      bookedDates: ["7/30/22", "8/02/22", "8/05/22"],
      price: "$100",
      // image: {},
    },
    {
      location: "on the Beach",
      type: "4 person",
      bookedDates: ["7/30/22", "8/02/22", "8/05/22"],
      price: "$400",
      // image: {},
    },
    {
      location: "off the Beach",
      type: "4 person",
      bookedDates: ["7/30/22", "8/02/22", "8/05/22"],
      price: "$300",
      // image: {},
    },
    {
      location: "on the Beach",
      type: "6 person",
      bookedDates: ["7/30/22", "8/02/22", "8/05/22"],
      price: "$600",
      // image: {},
    },
    {
      location: "off the Beach",
      type: "6 person",
      bookedDates: ["7/30/22", "8/02/22", "8/05/22"],
      price: "$500",
      // image: {},
    },
    {
      location: "on the Beach",
      type: "8 person",
      bookedDates: ["7/30/22", "8/02/22", "8/05/22"],
      price: "$800",
      // image: {},
    },
    {
      location: "off the Beach",
      type: "8 person",
      bookedDates: ["7/30/22", "8/02/22", "8/05/22"],
      price: "$700",
      // image: {},
    },
  ];
  await Cabana.insertMany(cabana);
  console.log("Bookings have been added");
};

const run = async () => {
  await createCabana();
  db.close();
};
run();
