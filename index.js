console.clear();

const Client = require("./src/Structures/Client");
const Command = require("./src/Structures/Command");

const client = new Client();
require("dotenv").config();

client.start(process.env.TOKEN);
