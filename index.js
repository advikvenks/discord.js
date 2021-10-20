console.clear();

const Client = require("./src/Structures/Client.js");
const Command = require("./src/Structures/Command.js");

const client = new Client();
require("dotenv").config();

client.start(process.env.TOKEN);
