/*
 * This file should be used to update already existing documents with the new Guild Schema. 
 * Whenever something is added to the schema, run this file with the default value.
 */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const Guild = require('./models/guild');
const config = require('./config/config.json');

mongoose.connect(config.database)
    .then(() => {
        addCommand({name: 'prune', active: true});
    })
    .catch((err) => {
        throw new Error(err);
    })

/* 
 * Example usage -- {name: 'prune', active: true}
 * Command will get pushed onto the existing array.
 */
const addCommand = (cmd) => {
    if (typeof cmd !== 'object') throw new Error("The field must be specified as an object with it's key and default value");

    Guild.find({})
        .then((guilds) => {
            guilds.forEach((guild) => {
                guild.commands.push(cmd);
                guild.save();
                console.log(`All documents were successfully updated with the new default command. ${cmd}`);
            });
        })
        .catch((err) => {
            throw new Error(err);
        });
};