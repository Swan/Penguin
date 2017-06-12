const Discord = require('discord.js');
const Guild = require('../models/guild');

// @ Admin Command
module.exports.setMuteRole = (client, message, args) => {
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;

    let muteRoleId = null;
    // Loop through the guild's roles, and find the matching role.
    for (let i = 0; i < message.guild.roles.array().length; i++) {
        if (args[0].toLowerCase() === message.guild.roles.array()[i].name.toLowerCase()) {
            muteRoleId = message.guild.roles.array()[i].id;
            break;
        }
    }

    // Add mute role to database
    Guild.findOne({id: message.guild.id})
        .then((guild) => {
            guild.muteRole = muteRoleId;
            guild.save();
            console.log(`Successfully set mute role: ${muteRoleId} for Guild: ${message.guild.id}`);
            // TODO: Add Embedded message here.
            message.reply("Successfully set mute role."); 
        })
        .catch((err) => {
            console.log(err);
            // TODO: Add Embedded message here.
            message.reply("Could not set mute role successfully.");
        });
};