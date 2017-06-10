const config = require('../config/config.json');
const mongoose = require('mongoose');

const { help } = require('./help');

module.exports.handle = (client, message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(config.commandPrefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(config.commandPrefix.length);
    
    let args = message.content.split(" ").slice(1); 

    switch(command) {
        // General Commands
        case 'help':
            help(client, message, args);
            break;
    }
};