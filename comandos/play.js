const Discord = require("discord.js");
const distube = require("distube")

module.exports = {
  name: "play",
  alias: [""],

  execute(client, message, args){

    const cancion = args.join(" ")
    if(!cancion) return message.channel.send({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> Debes escribir una cancion!" } })

    if(!message.member.voice.channel) return message.channel.send({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> Debes estar en un canal de voz!" } })

    if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> Debes estar en el canal donde esta el bot para esta acción!" } })
    
    client.distube.play(message, cancion);

  }


}