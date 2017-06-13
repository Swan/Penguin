const Discord = require('discord.js');
const mongoose = require('mongoose');
const Guild = require('../models/guild');


module.exports.addGuild = (client, guild) => {
    Guild.create({
        id: guild.id,
        name: guild.name,
        commands: [
            {name: 'help', active: true},

            {name: 'setmuterole', active: true},
            {name: 'smr', active: true},

            {name: 'mute', active: true},
            {name: 'm', active: true},

            {name: 'unmute', active: true},
            {name: 'um', active: true},

            {name: 'kick', active: true},
            {name: 'k', active: true},

            {name: 'ban', active: true},
            {name: 'b', active: true}
        ],
        handlers: []
    }).then((createdGuild) => {
        console.log(`Guild: #${guild.id} was successfully added to the database.`);
    });
};

module.exports.removeGuild = (client, guild) => {
    Guild.findOneAndRemove({id: guild.id})
        .then((removedGuild) => {
            console.log(`Guild: #${guild.id} was successfully removed from the database.`);
        })
        .catch((err) => {
            console.log(err);
        })
};

