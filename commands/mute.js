const Discord = require('discord.js');
const Guild = require('../models/guild');

module.exports.mute = (client, message, args) => {
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;

    if (message.mentions.users.size === 0) {
        return message.reply("You need to mention a user in order to mute them.");
    }

    let muteTarget = message.guild.member(message.mentions.users.first());
    if (!muteTarget) {
        return message.reply("The user you are trying to mute isn't valid.");
    }
    
    Guild.findOne({id: message.guild.id})
        .then((guild) => {
            muteTarget.addRole(guild.muteRole);
            muteTarget.setMute(true);
            // TODO: Add Embedded Message Here.
            client.channels.get(message.channel.id).sendMessage(`${muteTarget} was successfully muted from text/voice chat.`);
        })
        .catch((err) => {
            console.log(err);
        });
};