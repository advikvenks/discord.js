const Command = require("../structures/Command");
const Discord = require("discord.js");

module.exports = new Command({
  name: "ban",
  description: "bans a member",
  syntax: ".ban @ playername",
  permission: "BAN_MEMBERS",
  run(message, args, client) {
    const member = message.mentions.members.first();
    member.ban();
    message.reply(`${member} has been banned`);
  },
});
