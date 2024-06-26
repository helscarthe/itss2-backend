const express = require('express');
const router = express.Router();
const Model = require('../models/Cart');

router.get("/", async (req, res) => {
    try {
      const data = await Model.find({});
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ message: err.message });
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

router.get("/phoneNumber/:phoneNumber", async (req, res) => {
    try {
      const data = await Model.find({ phoneNumber: req.params.phoneNumber });
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ message: "Data not found" });
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