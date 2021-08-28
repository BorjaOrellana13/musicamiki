const Discord = require("discord.js");

module.exports = {
  name: "pause",
  alias: [],

  execute(client, message, args){

    const serverQueue = client.distube.getQueue(message)

    if(!message.member.voice.channel) return message.channel.send({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> Debes estar en un canal de voz para esta acción!" } })

    if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("Debes estar en el canal donde esta el bot para esta acción!")

    if(!serverQueue) return message.channel.send("No hay canciones reproduciendose")

    if(serverQueue.pause) return message.channel.send("La musica ya estaba pausada")

    client.distube.pause(message)

    message.channel.send("La cancion fue pausada")



  }


}