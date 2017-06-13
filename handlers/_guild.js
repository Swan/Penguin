const Discord = require('discord.js');
const mongoose = require('mongoose');
const Guild = require('../models/guild');


module.exports.addGuild = (client, guild) => {
    Guild.create({
        id: guild.id,
        name: guild.name,
        // Add default command settings here -- Will be replaced with a default in the model
        commands: [
            {name: 'help', active: true},
            {name: 'setmuterole', active: true},
            {name: 'mute', active: true},
            {name: 'unmute', active: true}
        ],
        // Add default handler settings Here -- Will be replaced with a default in the model
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

