const config = require('../config/config.json');
const mongoose = require('mongoose');
const Guild = require('../models/guild');

const { help } = require('./help');

const { setMuteRole } = require('./setmuterole');
const { mute } = require('./mute');
const { unmute } = require('./unmute');
const { kick } = require('./kick');
const { ban } = require('./ban');
const { prune } = require('./prune');

module.exports.execute = (client, message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(config.commandPrefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(config.commandPrefix.length);
    
    let args = message.content.split(" ").slice(1); 

    // This prevents a crash with the bot. In case the message was sent in a private message.
    if (!message.guild) {
        switch(command) {
            case 'help':
                return help(client, message, args);
        }
        return message.reply("Why are you trying to use commands outside of a guild?");
    }

    Guild.findOne({id: message.guild.id})
        .then((guild) => {
            let index = guild.commands.map(x => x.name).indexOf(command);

            // Check if the command is active and execute it.
            if (index != -1 && guild.commands[index].active) {
                switch(command) {
                    // General Commands
                    case 'help':
                        help(client, message, args);
                        break;
                    // Admin Commands
                    case 'setmuterole':
                    case 'smr':
                        setMuteRole(client, message, args);
                        break;
                    case 'mute':
                    case 'm':
                        mute(client, message, args);
                        break;
                    case 'unmute':
                    case 'um':
                        unmute(client, message, args);
                        break;
                    case 'kick':
                    case 'k':
                        kick(client, message, args);
                        break;
                    case 'ban':
                    case 'b':
                        ban(client, message, args);
                        break;
                    case 'prune':
                    case 'purge': 
                        prune(client, message, args);
                        break;
                    // Fun Commands
                }
            }
        });
};
