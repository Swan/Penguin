const Discord = require('discord.js');

module.exports.kick = (client, message, args) => {
    // Eventually add ability to have a moderator role with custom permissions that can access this cmd
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return;

    if (message.mentions.users.size == 0) return message.reply("You need to mention a user to kick.").catch(console.error);

    let kickTarget = message.guild.member(message.mentions.users.first());
    if (!kickTarget) return message.reply("The user you are trying to kick does not seem valid");

    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I dont' have permission to kick this user").catch(console.error);

    kickTarget.kick()
        .then(kickedMember => {
            return message.reply(`${kickedMember} was successfully kicked from the server.`);
        })
        .catch(console.error);
};