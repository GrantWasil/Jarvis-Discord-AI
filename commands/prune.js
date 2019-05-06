/* eslint-disable brace-style */
module.exports = {
	name: 'prune',
	description: 'Deletes up to X messages',
	execute(message, args) {
		// Adds one to the argument to account for the command itself
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		} else if (amount < 1 || amount > 100) {
			return message.reply('you need to input a number between 1 and 99.');
		} else {
			// .bulkDelete can error out with messages older than two weeks
			message.channel.bulkDelete(amount, true).catch(err => {
				console.error(err);
				message.channel.send('there was an error trying to prune messages in the channel');
			});
		}
	},
};