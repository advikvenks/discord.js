const Command = require("../structures/Command");
const Discord = require("discord.js");
const fs = require("fs");

module.exports = new Command({
  name: "help",
  description: "displays commands",
  syntax: ".help",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    let list = "";
    fs.readdirSync("./src/commands")
      .filter((file) => file.endsWith("js"))
      .forEach((file) => {
        const command = require(`./${file}`);
        list =
          list +
          `\n${command.name} : ${command.description}, syntax: ${command.syntax}`;
      });
    message.reply(list);
    list = "";
  },
});
