const Command = require("../structures/Command");
const Discord = require("discord.js");

module.exports = new Command({
  name: "kick",
  description: "kicks a member",
  permission: "KICK_MEMBERS",
  run(message, args, client) {
    message.mentions.members.first().kick();
    message.reply(`${message.mentions.members.first()} has been kicked`);
  },
});
