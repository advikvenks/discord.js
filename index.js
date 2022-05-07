console.clear();

const Client = require("./src/structures/Client.js");

const client = new Client();
const config = require("./config.js");

console.log(config.TOKEN)

// client.start(config.TOKEN);
