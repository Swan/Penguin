const config = require('../config/config.json');
const mongoose = require('mongoose');
const Guild = require('../models/guild');

const { help } = require('./help');

module.exports.execute = (client, message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(config.commandPrefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(config.commandPrefix.length);
    
    let args = message.content.split(" ").slice(1); 

    Guild.findOne({id: message.guild.id})
        .then((guild) => {
            let index = guild.commands.map(x => x.name).indexOf(command);

            // Check if the command is active and execute it.
            if (index != -1 && guild.commands[index].active) {
                switch(command) {
                    case 'help':
                        help(client, message, args);
                        break;
                }
            }
        });
};

