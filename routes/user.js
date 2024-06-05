const express = require("express");
const Model = require("../models/user");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Model.find({});
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

router.get("/:id", async (req, res) => {
  try {
    const data = await Model.find({ _id: req.params.id });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Data not found" });
  }
})

router.get("/phone/:phoneNumber", async (req, res) => {
  try {
    const data = await Model.find({ phoneNumber: req.params.phoneNumber });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Data not found" });
  }
})

router.post("/", async (req, res) => {
  try {
    const data = await Model.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
})

router.put("/:id", async (req, res) => {
  try {
    await Model.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
})

router.delete("/:id", async (req, res) => {
  try {
    await Model.findOneAndDelete({ _id: req.params.id });
    res.status(200).end();
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
})

module.exports = router;