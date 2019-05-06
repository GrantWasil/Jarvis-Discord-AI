/* eslint-disable indent */
// require the discord.js module
const Discord = require('discord.js');

const { prefix, token } = require ('./config.json');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

// when the client sees a message, it checks if it's "!ping"
// if it is, it responds "Pong."
client.on('message', message => {
    if (message.content.startsWith(`${prefix}ping`)) {
        message.channel.send('Pong.');
    }
    else if (message.content === `${prefix}server`) {
        message.channel.send(`This server's name is: ${message.guild.name}`);
    }
});

// login to Discord with your app's token
client.login(token);
