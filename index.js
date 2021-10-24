console.clear();
var port = process.env.PORT || 8080;

const Client = require("./src/structures/Client.js");

const client = new Client();
require("dotenv").config();

client.start(process.env.TOKEN);
