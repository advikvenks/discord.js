const Command = require("../structures/Command");

module.exports = new Command({
  name: "hack",
  description: "hacks a user",
  permission: "SEND_MESSAGES",

  async run(message, args, client) {
    message.channel.send(
      `${
        message.mentions.members.first().user.username
      }'s ip address is ${Math.floor(Math.random() * 10)}${Math.floor(
        Math.random() * 10
      )}.${Math.floor(Math.random() * 10)}${Math.floor(
        Math.random() * 10
      )}${Math.floor(Math.random() * 10)}.${Math.floor(
        Math.random() * 10
      )}${Math.floor(Math.random() * 10)}.${Math.floor(
        Math.random() * 10
      )}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`
    );
  },
});
