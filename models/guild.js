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
        active: Boolean
    }],
    handlers: [{
        name: {
            type: String,
            unique: true
        },
        active: Boolean
    }],
    muteRole: {
        type: String, 
        unique: true,
        default: null
    },
    isLogging: {
        type: Boolean,
        required: true,
        default: false
    },
    welcomeMsg: Boolean,
    byeMsg: Boolean,  
    dateAdded: {
        type: Date,
    }, 
}));