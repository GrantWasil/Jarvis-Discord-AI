module.exports = {
	name: 'kick',
	description: 'Fake Kick a user',
	args: true,
	usage: '<user>',
	guildOnly: true,
	cooldown: 5,
	execute(message, args) {
		const taggedUser = message.mentions.users.first();

		message.channel.send(`You wanted to kick: ${taggedUser.username}`);
	},
};