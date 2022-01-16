const Discord = require("discord.js");
const Client = require("./Client");

/**
 *
 * @param {Discord.Message} message
 * @param {string[]} args
 * @param {Client} client
 */
function RunFunction(message, args, client) {}

class Command {
  /**
   * @typedef {{name: string, description: string, syntax: string, permission: Discord.PermissionString,run: RunFunction}} CommandOptions
   * @param {CommandOptions} options
   */
  constructor(options) {
    this.name = options.name;
    this.description = options.description;
    this.syntax = options.syntax;
    this.run = options.run;
  }
}

module.exports = Command;
