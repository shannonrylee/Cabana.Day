const db = require("../db");
const { Cabana } = require("../models");
const image = db.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

const createCabana = async () => {
  const cabana = [
    {
      location: "on the Beach",
      types: "2 person",
      bookedDates: ["7/30/22", "8/02/22", "8/05/22"],
      price: "$200",
    },
    {
      location: "off the Beach",
      types: "2 person",
      bookedDates: ["7/30/22", "8/02/22", "8/05/22"],
      price: "$100",
    },
    {
      location: "on the Beach",
      types: "4 person",
      bookedDates: ["7/30/22", "8/02/22", "8/05/22"],
      price: "$400",
    },
    {
      location: "off the Beach",
      types: "4 person",
      bookedDates: ["7/30/22", "8/02/22", "8/05/22"],
      price: "$300",
    },
    {
      location: "on the Beach",
      types: "6 person",
      bookedDates: ["7/30/22", "8/02/22", "8/05/22"],
      price: "$600",
    },
    {
      location: "off the Beach",
      types: "6 person",
      bookedDates: ["7/30/22", "8/02/22", "8/05/22"],
      price: "$500",
    },
    {
      location: "on the Beach",
      types: "8 person",
      bookedDates: ["7/30/22", "8/02/22", "8/05/22"],
      price: "$800",
    },
    {
      location: "off the Beach",
      types: "8 person",
      bookedDates: ["7/30/22", "8/02/22", "8/05/22"],
      price: "$700",
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
