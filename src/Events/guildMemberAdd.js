const Event = require("../structures/Event");

const Discord = require("discord.js");

module.exports = new Event("guildMemberAdd", (client, member) => {
  const channel = member.guild.channels.cache.find((c) => c.name == "general");

  if (!channel) return;

  const embed = new Discord.MessageEmbed();

  embed
    .setTitle("new member")
    .setColor("GREEN")
    .setAuthor(member.user.tag)
    .setThumbnail(member.user.avatarURL())
    .setTimestamp(member.joinedTimestamp)
    .addFields(
      {
        name: "account created",
        value: member.user.createdAt.toUTCString(),
        inline: true,
      },
      {
        name: "user joined",
        value: member.joinedAt.toUTCString(),
        inline: true,
      }
    );

  channel.send({ embeds: [embed] });
});
