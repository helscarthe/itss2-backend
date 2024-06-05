const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  phoneNumber: {
    required: true,
    type: String
  }
})

module.exports = mongoose.model('User', schema);