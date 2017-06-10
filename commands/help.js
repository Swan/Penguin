const Discord = require('discord.js');

module.exports.help = (client, message, args) => {
    message.author.sendEmbed(new Discord.RichEmbed()
        .setTitle(`Thank you for using Penguin Bot!`)
        .setColor(0x44B6EC)
        .setThumbnail(`https://juicy.eggplants.org/kfhv0y.jpg`)
        .setTimestamp()
        .addField(`Information`, `Hey there! My name is Penguin.\n` +
                                `I'm a nifty little Discord bot developed by [Swan](https://github.com/Swan)!\n` +
                                `The project is open-source which means anyone can contribute!`)
        .addField(`Commands`, `The following is the list of commands you can use!\n\n` +
                                `**;help** - Displays the message you are seeing right now.`)
    ).catch((err) => {
        message.reply(`Unfortunately I could not send you the help message. Are your privacy settings on?`);
    });
};