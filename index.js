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

const userRoutes = require("./routes/user");

app.use("/api/user", userRoutes);

app.listen(8000, () => {
  console.log("Listening on port 8000");
})