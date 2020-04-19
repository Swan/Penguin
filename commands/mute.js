const {Discord, RichEmbed} = require('discord.js');
const Guild = require('../models/guild');

module.exports.mute = (client, message, args) => {
    if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return;

    if (message.mentions.users.size === 0) {
        return message.reply("You need to mention a user in order to mute them.");
    }

    let muteTarget = message.guild.member(message.mentions.users.first());
    if (!muteTarget) {
        return message.reply("The user you are trying to mute isn't valid.");
    }
    
    Guild.findOne({id: message.guild.id})
        .then((guild) => {
            if (guild.muteRole == null) return message.reply("A mute role has not been set for this server. Please use `.setmuterole roleName`");
            muteTarget.addRole(guild.muteRole);
            muteTarget.setMute(true);
       
            // TODO: Add Embedded Message Here.
              const muteEmbed = new RichEmbed()
              .setTitle("Mute report")
              .setDescription("this is a report generated due to a member mute.")
              .addField(`Author`, `${message.author.username}`)
              .addField(`Mutee`, `${muteTarget}`)
              .setTimestamp(new Date())
              .setFooter(`${message.guild.name} Modlogs`, message.guild.iconURL)
              
              // by Kosmos#7368 :)
                 
            client.channels.get(message.channel.id).sendMessage(`${muteTarget} was successfully muted from text/voice chat.`);
        })
        .catch((err) => {
            console.log(err);
        });
};
