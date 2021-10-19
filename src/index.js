console.clear();

const Client = require("./Structures/Client");
const Command = require("./Structures/Command");

const client = new Client();
require("secrets");

client.start(process.env.CLIENT_TOKEN);
