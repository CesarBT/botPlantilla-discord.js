const Discord = require("discord.js")

module.exports = {
    name: "ping",
    alias: [],

async execute (client, message, args){
    message.reply("pong")
}
}