const Discord = require('discord.js');
const Guild = require('../models/guild');

module.exports.unmute = (client, message, args) => {
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;

    if (message.mentions.users.size === 0) {
        return message.reply("You need to mention a user in order to unmute them.");
    }

    let unmuteTarget = message.guild.member(message.mentions.users.first());
    if (!unmuteTarget) {
        return message.reply("The user you are trying to unmute isn't valid.");
    }
    
    Guild.findOne({id: message.guild.id})
        .then((guild) => {
            if (guild.muteRole == null) return message.reply("A mute role has not been set for this server. Please use `.setmuterole roleName`");
            unmuteTarget.removeRole(guild.muteRole);
            unmuteTarget.setMute(false);
            // TODO: Add Embedded Message Here.
            client.channels.get(message.channel.id).sendMessage(`${unmuteTarget} was successfully unmuted from text/voice chat.`);
        })
        .catch((err) => {
            console.log(err);
        });
};