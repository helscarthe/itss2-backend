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
  
  module.exports = router;