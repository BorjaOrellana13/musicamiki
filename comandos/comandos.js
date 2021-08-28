const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "comandos",
  alias: ["comandoss"],

execute (client, message, args){

  const embed = new Discord.MessageEmbed()

  .setTitle("<a:Wumpus_hello:877001615540895754> Hola aqui estan los comandos que tengo ahora mismo!")
  .setDescription(`<:wumpus_leaf:878065641129656430> Por los momentos cuento con **${client.commands.size}** comandos!`)
  .setColor("0x00ccff")
  
  message.channel.send(embed)


 }
}