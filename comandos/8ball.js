const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "8ball",
  alias: [""],

execute (client, message, args){

  let mensaje = args.slice().join(" ")
  if(!mensaje) return message.channel.send("Necesito que me digas una pregunta!");

  let respuestas = ["En mi opinion, si","Es cierto","Puede ser","Probablemente","Buen pronostico","La verdad no lo se","Sin duda","Si","Si definitivamente","Debes confiar en ello","Respuesta vaga, vuelve a intentarlo","Pregunta en otro momento","Sera mejor que no te lo diga ahora","Puede ser","No cuentes con ello","no","Muy dudoso"]

  const ball = new Discord.MessageEmbed()

  .setTitle("🎱 8ball")
  .setDescription(`<:pregunta:878024881135030314> **Pregunta:**\n${mensaje}\n\n<a:brillos:878022494601240606> **Respuesta:**\n${respuestas[( Math.floor(Math.random() * respuestas.length))]}`)
  .setColor("0x00ccff")
  message.channel.send({ embed : ball })

 }

}