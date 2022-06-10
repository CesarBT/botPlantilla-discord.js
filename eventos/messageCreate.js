const config = require("../config.json")
module.exports = {
    name: "messageCreate",
    run(client, message){
    if(message.channel.type === "dm") return;
    if(message.author.bot) return;

    let prefix = config.prefix

    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase() 

    let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command))
    if(cmd){
        cmd.execute(client, message, args)
    }
    }
}