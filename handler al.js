const Discord = require("discord.js");

module.exports = {
  name: "",
  alias: [""],

  execute(client, message, args){

    message.channel.send(`Pong! **${client.ws.ping}ms**`)

  }


}