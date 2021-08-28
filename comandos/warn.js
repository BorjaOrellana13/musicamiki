const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const warn = new db.crearDB('warn')

module.exports = {
  name: "warn",
  alias: [],

execute (client, message, args){

    var perms = message.member.hasPermission("MANAGE_MESSAGES")
  if(!perms) return message.channel.send("<a:wumpuscry:878026581736583208> Vaya...veo que no tienes permiso de usar uno de mis comandos!")
  
  if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> No tienes permisos para esta acción"  } })

  
  let person = message.mentions.users.first()

  if (message.mentions.users.first().id === message.author.id || args[0] === message.author.id) return message.reply({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> No puedes expulsar a una persona con tu mismo rol o superior" } })

  if (message.mentions.members.first().user.bot) return message.channel.send({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> No puedo avisar a los bots!" } });

  if(!person) return message.channel.send({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> Debes mencionar a un usuario!"  } })

  var reason = args.slice(1).join(" ")

  if(!reason){

    reason = "No especificaron"

  }

  if(!warn.tiene(`${message.guild.id}.${person.id}`))

  warn.establecer(`${message.guild.id}.${person.id}`, 0)

  warn.sumar(`${message.guild.id}.${person.id}`, 1)

const embedcanal = new Discord.MessageEmbed()

    .setTitle("<a:Verify:876702736492687370>| Usuario avisado con exito!")
    .setDescription(`El usuario <@${person.id}> ha sido avisado!\nAvisado por el Moderador ${message.author.tag}\nRazón: ${reason}`)
    .setColor("RED")
    .setTimestamp()
    .setFooter("ConnectionBot", client.user.displayAvatarURL())

    message.channel.send(embedcanal)

    const embedmd = new Discord.MessageEmbed()

    .setTitle("<:arreglo:878063012777447464>| Has sido advertido!")
    .setDescription(`Has sido advertido en el server **${message.guild.name}**!\nAdvertido por el moderador ${message.author.tag}\nRazón: ${reason}`)
    .setColor("RED")
    .setTimestamp()
    .setImage("https://i.ibb.co/LvgCM03/118764352-3415145445219828-6247332505553757166-n.png%22")
    .setFooter("ConnectionBot", client.user.displayAvatarURL())

    person.send(embedmd)

 }

} 