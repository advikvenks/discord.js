const Command = require("../structures/Command");
const Discord = require("discord.js");

module.exports = new Command({
  name: "kick",
  description: "kicks a member",
  syntax: ".kick @ playername",
  permission: "KICK_MEMBERS",
  run(message, args, client) {
    message.reply(`${message.mentions.members.first()} has been kicked`);
    message.mentions.members.first().kick();
  },
});
