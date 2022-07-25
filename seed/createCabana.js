const { createCabana } = require("../controllers");
const db = require("../db");
const { Cabana } = require("../models");
const Cabana = require("../models/Cabana");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const createCabana = async () => {
  const cabanas = [
    {
      location: ['onBeach', 'offBeach'],
      type: [''],
      bookedDates: [{ type: String }],
      image: { type: String }
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