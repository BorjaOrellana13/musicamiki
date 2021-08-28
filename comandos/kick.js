const Discord = require("discord.js");

module.exports = {
  name: "kick",
  alias: ["funas uwu"],

  execute(client, message, args){

    var perms = message.member.hasPermission("KICK_MEMBERS")
    if(!perms) return message.channel.send({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> No tienes permisos para esta acción"  } })

    const user = message.mentions.members.first()
    if(!user) return message.channel.send({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> Menciona a una persona para esta accion!" } })

    if (message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0)
    return message.channel.send({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> No puedes expulsar a una persona con tu mismo rol o superior" } })

    if (message.mentions.members.first().user.bot) return message.channel.send({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> No puedo avisar a los bots!" } });

    if(user === message.author) return message.channel.send({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> No puedes expulsarte a ti mismo!" } })

    var razon = args.slice(1).join(' ')
    if(!razon){
      razon = 'Razón no especificada!'
    }

    message.guild.member(user).kick(razon);

    const embed = new Discord.MessageEmbed()

    .setTitle("<a:Verify:876702736492687370>| Usuario expulsado con exito!")
    .setDescription(`El usuario <@${user.id}> ha sido expulsado!\nExpulsado por el Moderador ${message.author.tag}\nRazón: ${razon}`)
    .setColor("RED")
    .setTimestamp()
    

    message.channel.send(embed)
  
  }


}