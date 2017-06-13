const Discord = require('discord.js');

module.exports.ban = (client, message, args) => {
    // Eventually add ability to have a moderator role with custom permissions that can access this cmd
    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return;

    if (message.mentions.users.size == 0) return message.reply("You need to mention a user to ban.").catch(console.error);

    let banTarget = message.guild.member(message.mentions.users.first());
    if (!banTarget) return message.reply("The user you are trying to ban does not seem valid");

    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("I dont' have permission to ban this user").catch(console.error);

    banTarget.ban()
        .then(bannedMember => {
            return message.reply(`${bannedMember} was successfully banned from the server.`);
        })
        .catch(() => {
            return message.reply(`Could not ban that user, as I do not have permissions to do so.`)
        });
};