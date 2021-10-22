const Event = require("../structures/Event");

module.exports = new Event("messageCreate", (client, message) => {
  if (message.author.bot) return;

  if (!message.content.startsWith(client.prefix)) return;

  const args = message.content.substring(client.prefix.length).split(/ +/);

  const command = client.commands.find((cmd) => cmd.name == args[0]);

  if (!command) return message.reply(`${args[0]} is not a command`);

  command.run(message, args, client);

  const permission = message.member.permissions.has(command.permission);

  if (!permission)
    return message.reply(
      `you do not have ${command.permission} to use this command`
    );
});
