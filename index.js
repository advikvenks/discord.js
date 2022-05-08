console.clear();

const Client = require("./src/structures/Client.js");

const client = new Client();
require("dotenv").config();

client.start(process.env.BOT_TOKEN);
