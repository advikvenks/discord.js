console.clear()

const Client = require("./Structures/Client");
const Command = require("./Structures/Command");

const config = require("./data/config.json");
const token = config.token;

const client = new Client();

client.start(token);