const Discord = require('discord.js');
const config = require('./config.json');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Responsible for connecting and configuring the bot.
module.exports.start = (client) => {
    client.login(config.token)
        .then(() => {mongoose.connect(config.database)})
        .then(() => {client.user.setStatus('dnd')})
        .then(() => {client.user.setGame(config.playingGame + client.guilds.array().length + ' servers')})
        .then(() => {
            console.log(`\n----------------------\n\n` +
                        `Connection: Penguin has connected succesfully!\n` +
                        `Started at: ${client.readyAt}\n` + 
                        `User: ${client.user}\n` +
                        `Playing Game: ${config.playingGame}\n` + 
                        `Owner Discord Id: ${config.ownerDiscordId}\n` +
                        `Uptime: ${client.uptime}ms\n` +
                        `Guilds: ${client.guilds.array().length}\n` +
                        `Channels: ${client.channels.array().length}\n` +
                        `\n----------------------\n`)
        })
        .catch((err) => {throw new Error(err);});
};