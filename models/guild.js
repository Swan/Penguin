const mongoose = require('mongoose');

module.exports = mongoose.model('Guild', new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    commands: [{
        name: {
            type: String,
            unique: true
        },
        channel: String,
        active: Boolean
    }],
    handlers: [{
        name: {
            type: String,
            unique: true
        },
        channel: String,
        active: Boolean
    }],
    dateAdded: {
        type: Date,
    }, 
}));