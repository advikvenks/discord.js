const Command = require("../structures/Command");

var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
module.exports = new Command({
  name: "meme",
  description: "Gets a random meme from reddit!",
  permission: "SEND_MESSAGES",
  async run(message, args, client) {
    return __awaiter(this, void 0, void 0, function* () {
      const Discord = require("discord.js");
      const fetch = require("node-fetch");
      const data = yield fetch(
        "http://meme-api.herokuapp.com/gimme/cleanmemes"
      ).then((res) => res.json());
      const embed = new Discord.MessageEmbed()
        .setTitle(data.title)
        .setURL(data.postLink)
        .setImage(data.url)
        .setFooter(data.ups + " upvotes")
        .setTimestamp()
        .setColor("#EC123E");
      yield message.reply({ embeds: [embed] });
    });
  },
});
