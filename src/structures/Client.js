const Discord = require("discord.js");

const intents = new Discord.Intents(32767);

const Command = require("./Command");

const config = require("../data/config.json");

const Event = require("./Event")

const fs = require("fs");

class Client extends Discord.Client {
    constructor() {
        super({intents});

        /**
         * @type {Discord.Collection<string, Command>}
         */
        this.commands = new Discord.Collection;
        this.prefix = config.prefix
    }

    start(token) {
        fs.readdirSync("./src/commands").filter(file => file.endsWith("js")).forEach(file => {
            /**
             * @type {Command}
             */
            const command = require(`../commands/${file}`);
            console.log(`Command ${command.name} loaded`);
            this.commands.set(command.name, command);
        });
        this.login(token);
        fs.readdirSync("./src/Events").filter(file => file.endsWith("js")).forEach(file => {
            /**
             * @type {Event}
             */
            const event = require(`../Events/${file}`)
            console.log(`Event ${event.event} loaded`)
            this.on(event.event, event.run.bind(null, this));
        });
        this.login(token);
    }
}

module.exports = Client;