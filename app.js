const Discord = require('discord.js');
const config = require('./config/config.json');
const configuration = require('./config/configuration');
const commands = require('./commands/_commands');

const client = new Discord.Client();

configuration.start(client);

client.on('message', (message) => {
    commands.handle(client, message);
});

client.on('guildMemberRemove', (member) => {

});

client.on('guildMemberAdd', (member) => {

});

client.on('guildCreate', (guild) => {

});

client.on('guildDelete', (guild) => {

});