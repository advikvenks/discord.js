const Command = require("../structures/Command");

module.exports = new Command({
  name: "clear",
  description: "clears messages",
  syntax: ".clear number of messages",
  permission: "MANAGE_MESSAGES",
  async run(message, args, client) {
    const amount = args[1];

    if (!amount || isNaN(amount))
      return message.reply(`${amount} is not a number`);

    const amountParsed = parseInt(amount);

    if (amountParsed > 101) return message.reply("too many messages");

    message.channel.bulkDelete(amountParsed + 1);

    const msg = await message.channel.send(`${amountParsed} messages deleted`);

    setTimeout(() => msg.delete(), 5000);
  },
});
