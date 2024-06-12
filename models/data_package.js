const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  price: {
    type: Number,
    required: true
},
cashback: {
    type: Number,
    required: true
},
data_limit: {
    type: String,
    required: true
},
duration: {
    type: String,
    required: true
}
})

module.exports = mongoose.model('Data_package', schema);