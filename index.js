console.clear();

const Client = require("./src/structures/Client.js");

const client = new Client();
const config = require("./config.json");

client.start(config.BOT_TOKEN);
