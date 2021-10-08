const Command = require("../structures/Command");

module.exports = new Command ({
    name: "ping",
    description: "shows the bot's ping",
    permission: "SEND_MESSAGES",

    async run(message, args, client) {
        
        message.reply(`Ping: ${client.ws.ping} ms.`);

    }
});