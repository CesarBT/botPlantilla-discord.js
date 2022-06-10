const Discord = require("discord.js")
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const fs = require("fs")
let { readdirSync } = require("fs")
const path = require("path")
const config = require("./config.json")

client.commands = new Discord.Collection()
const commandFiles = fs.readdirSync("./comandos").filter(file => file.endsWith("js"))

for(const file of commandFiles){
    const command = require(`./comandos/${file}`)
    client.commands.set(command.name, command)

}

const events = fs.readdirSync("./eventos").filter(file => file.endsWith("js"))
for(const file of events){
    const event = require(path.join(__dirname, "eventos", file));
    client.on(event.name, (...arg) => event.run(client, ...arg));
}


client.login(config.token)

