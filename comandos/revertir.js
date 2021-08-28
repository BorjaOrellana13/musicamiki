const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

let cooldown = new Set();

module.exports = {
  name: "revertir", 
  alias: [""], 

execute (client, message, args){

  if(!args[0]) return message.channel.send('Escribe un texto para revertir')
    const revertir = args.join(' ').split('').reverse().join('')
    const embed = new MessageEmbed()
    .setTitle("<a:brillos:878022494601240606> Revertir")
    .setDescription(`<a:flecha:876702676027588618> La palabra revertida es:\n${revertir}`)
    .setColor("0x00ccff")
    .setTimestamp();

    message.channel.send(embed)

 }

}