const Discord = require('discord.js');
const config = require('./config/config.json');
const configuration = require('./config/configuration');
const _commands = require('./commands/_commands');

const _guild = require('./handlers/_guild');

const client = new Discord.Client();

configuration.start(client);

client.on('message', (message) => {
    _commands.execute(client, message);
});

client.on('guildCreate', (guild) => {
    _guild.addGuild(client, guild);
});

client.on('guildDelete', (guild) => {
    _guild.removeGuild(client, guild);
});