const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "embed",
  alias: [],

execute (client, message, args){

	var perms = message.member.hasPermission("MANAGE_MESSAGES")
	if(!perms) return message.channel.send({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> No tienes permisos para esta acción"  } })

	let texto = args.join(' ');
	if(!texto) return message.channel.send({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> Debes escribir lo que quieres que aparezca en el Embed!\nEjemplo: titulo >> descripcion >> footer >> color en codigo `0xCodigo`"  } })
	let opciones = texto.split(' >> ')

	const embed = new Discord.MessageEmbed()

	.setTitle(opciones[0])
	.setDescription(opciones[1])
	.setFooter(opciones[2])
	.setColor(opciones[3])

	message.channel.send(embed)

 }

}