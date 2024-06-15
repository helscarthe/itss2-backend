const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    phoneNumber: {
        required: true,
        type: String
    },
    packageID: {
        required: true,
        type: String
    },
    create_at: {
        default: Date.now(),
        type: Date
    }
});

module.exports = mongoose.model('Cart', schema);
