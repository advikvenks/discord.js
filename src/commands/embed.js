const Command = require("../structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
  name: "embed",
  description: "makes an embed",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    const embed = new Discord.MessageEmbed();
    const member = message.mentions.members.first();
    embed
      .setTitle(`random embed`)
      .setAuthor(message.author.username, "https://discord.js.org/")
      .setDescription(`text \nlink: [link](https://discord.js.org)`)
      .setColor("WHITE")
      .setTimestamp(message.createdTimestamp);
    message.reply({ embeds: [embed] });
  },
});
