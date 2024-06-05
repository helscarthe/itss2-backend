const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;

db.on('error', err => {
  console.log(err);
})

db.once('connected', () => {
  console.log("Connected to database");
})

const app = express();

app.use(cors());
app.use(express.json());

const routes = require("./routes/routes");

app.use("/api/SensorData", routes);

app.listen(8000, () => {
  console.log("Listening on port 8000");
})