const mongoose = require('mongoose');

module.exports = mongoose.model('Guild', new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    commands: [{
        name: {
            type: String,
        },
        active: Boolean,
    }],
    handlers: [{
        name: {
            type: String,
        },
        active: Boolean
    }],
    muteRole: {
        type: String, 
        default: null
    },
    isLogging: {
        type: Boolean,
        required: true,
        default: false
    },
    welcomeMsg: {
        type: String,
        default: null   
    },
    byeMsg: {
        type: String,
        default: null   
    },  
    dateAdded: {
        type: Date,
    }, 
}));