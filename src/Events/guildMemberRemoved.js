const Event = require("../structures/Event");

const Discord = require("discord.js");

module.exports = new Event("guildMemberRemove", (client, member) => {
  const channel = member.guild.channels.cache.find((c) => c.name == "general");

  if (!channel) return;

  const embed = new Discord.MessageEmbed();

  embed
    .setTitle("member left")
    .setColor("DARK_RED")
    .setAuthor(member.user.tag)
    .setThumbnail(member.user.avatarURL())
    .addField("User Joined", member.joinedAt.toUTCString());

  channel.send({ embeds: [embed] });
});
