const mongoose = require('mongoose');
let bookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    isbn: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    },
    created: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Book', bookSchema);