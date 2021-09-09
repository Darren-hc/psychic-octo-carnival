const mongoose = require('mongoose');
let doctorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: String
    },
    dob: {
        type: Date
    },
    address: {
        state: String,
        validate: {
            validator: function (value) {
                return value >= 2 && value <= 3;
            },
            message: 'State should be 2-3 characters'
        },
        suburb: String,
        street: String,
        unit: Number
    },
//   age : { type: Number, min: 5, max: 20 }, 
    numPatients: {
        type: Number
    }
});
module.exports = mongoose.model('Doctor', doctorSchema);