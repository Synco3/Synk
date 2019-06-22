const { Client, Collection } = require('discord.js');
const Discord = require("discord.js");
const client = new Client({ disableEveryone: true});
const fs = require('fs');
const config = require('./config');
client.commands = new Collection();
client.error = require('./utils/error.js').run;

fs.readdir('./events', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const eventFunction = require(`./events/${file}`);
        const eventName = file.split('.')[0];
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});

fs.readdir('./commands', (err, files) => {
    if (err) console.error(err);
    let jF = files.filter(f => f.split(".").pop() === "js");
    if (jF.length <= 0) {
        console.log(`\n No commands found!`);
        return;
    }
    jF.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        client.commands.set(props.help.name, props);

    });
});

client.login(config.token);