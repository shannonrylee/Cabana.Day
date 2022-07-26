const { createCabana } = require("../controllers");
const db = require("../db");
const { Cabana } = require("../models");
const Cabana = require("../models/Cabana");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const createCabana = async () => {
  const cabanas = [
    {
      location: ['on Beach', 'off Beach'],
      type: ['2 person', '4 person', '6 person', '8 person'],
      bookedDates: ['7/30/22', '8/02/22', '8/05/22'],
      image: { }
    },
  ];
  await Cabana.insertMany(cabanas);
  console.log("Bookings have been added");
};

const run = async => {
    await createCabana()
    db.close()
}
run()