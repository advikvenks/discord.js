const Command = require("../structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
  name: "shuffle",
  description: "random cube shuffle (. = prime)",
  syntax: ".shuffle (number of moves)",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    moves = [
      "l ",
      "l. ",
      "u ",
      "u. ",
      "r ",
      "r. ",
      "d ",
      "d. ",
      "f ",
      "f. ",
      "b ",
      "b. ",
    ];
    movesnumber = parseInt(args[1]);
    shuffle = "";
    function repeat(func, times) {
      for (x = 0; x < times; x++) {
        random();
      }
    }
    function random() {
      shuffle = shuffle + moves[Math.floor(Math.random() * 12)];
    }
    repeat(random(), movesnumber);
    message.reply(shuffle);
  },
});
