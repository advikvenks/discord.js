const Event = require("../structures/Event.js");

module.exports = new Event("ready", client => {
    console.log("da bot is ready");
});