console.clear();

import Client from "./src/Structures/Client.js";

const client = new Client();
require("dotenv").config();

client.start(process.env.TOKEN);
