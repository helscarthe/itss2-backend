const express = require('express');
const router = express.Router();
const Model = require('../models/data_package');

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

router.post("/", async (req, res) => {
    try {
      const data = await Model.create(req.body);
      res.status(201).json(data);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  })

router.get("/duration/:duration", async (req, res) => {
    try {
      const data = await Model.find({ duration: req.params.duration });
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ message: "Data not found" });
    }
})

router.get("/getname/:name", async (req, res) => {
  try {
    const Data = await Model.find({name: req.params.name});
    res.status(200).json(Data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

router.get("/names", async (req, res) => {
  try {
    const names = await Model.find({}).distinct('name');
    res.status(200).json(names);
  } catch (err) {
    res.status(500).json({ message: err.message });
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

module.exports = router;