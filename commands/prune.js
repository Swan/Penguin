const Discord = require('discord.js');
const Guild = require('../models/guild');

module.exports.prune = (client, message, args) => {
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return;

    if (args.length < 1) return message.reply("You must specify the amount of numbers you want to prune.");

    // If no user was mentioned, then delete messages from all users.
    if (message.mentions.users.size === 0) {
        message.channel.fetchMessages()
            .then((messages) => {         
                let messagesArray = messages.array();

                // In the event that the first arg given isn't a number.
                if (isNaN(parseInt(args[0]))) return message.reply("You must specify the number of messages you would like to prune.");

                message.channel.bulkDelete(parseInt(args[0]));
            })
            .catch((err) => {
                 console.log(err)
                return message.reply("Could not successfully prune messages");
            });
    // Prune messages from a specific user
    } else {
        let pruneTarget = message.guild.member(message.mentions.users.first());
        if (!pruneTarget) {
            return message.reply("The user you are trying to unmute isn't valid.");
        }

        message.channel.fetchMessages()
            .then((messages) => {
                let messagesArray = messages.array();

                // In the event that the first arg given isn't a number.
                if (isNaN(parseInt(args[1]))) return message.reply("You must specify the number of messages you would like to prune.");

                let msgs = [];
                let msgsFromPruneTarget = 0;
                for (let i = 0; i < messagesArray.length; i++) if (messagesArray[i].author.id == pruneTarget.id) {
                    if (msgsFromPruneTarget == parseInt(args[1])) break;
                    msgs.push(messagesArray[i]);
                    msgsFromPruneTarget++;    
                }
            
                message.channel.bulkDelete(msgs);

            })
            .catch((err) => {
                 console.log(err)
                return message.reply("Could not successfully prune messages");
            });        
    }
};