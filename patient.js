const mongoose = require('mongoose');
let patientSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    doctorID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    age: {
        state: Number,
        validate: {
            validator: function (value) {
                return value > 0 && value < 120;
            },
            message: 'Age should be 0-120'
        }
    },
    date: {
        type: Date,
        default: Date.now
    },
    case: {
        state: String,
        validate: {
            validator: function (value) {
                return value >= 10;
            },
            message: 'Case description should be at least 10 words'
        }
    }
});
module.exports = mongoose.model('Patient', patientSchema);