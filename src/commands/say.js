const Command = require("../structures/Command");

module.exports = new Command({
  name: "say",
  description: "says something",
  syntax: ".say (text)",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    message.reply(args[1]);
  },
});
