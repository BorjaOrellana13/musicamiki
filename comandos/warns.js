const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const warn = new db.crearDB('warn')

module.exports = {
  name: "warns",
  alias: [],

async execute (client, message, args){

    var perms = message.member.hasPermission("MANAGE_MESSAGES")
  if(!perms) return message.channel.send({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> No tienes permisos para esta acción!" } })
  
  if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> No tengo suficientes permisos para esta acción!" } })

  let person = message.mentions.members.first()

  if(!person) return message.channel.send({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> Debes mencionar a un usuario!" } })

  let quantity = await warn.obtener(`${message.guild.id}.${person.id}`)

  if(!warn.tiene(`${message.guild.id}.${person.id}`)){

    message.channel.send({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> El usuario mencionado no tiene warns!" } })

    return;

  }

  message.channel.send({ embed: { 
    color: 3447003,
    description: `<a:wumpuscry:878026581736583208> **${person}** tiene: **${quantity}** warns` } })

 }

} 