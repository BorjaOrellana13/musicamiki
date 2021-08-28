const Discord = require("discord.js");

module.exports = {
  name: "ban",
  alias: ["funa"],

  execute(client, message, args){

    var perms = message.member.hasPermission("BAN_MEMBERS")
    if(!perms) return message.channel.send({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> No tienes permisos para esta acción"  } })

    let user = message.mentions.members.first()
    if(!user) return message.channel.send({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> Debes mencionar a alguien!"  } })

    let banReason = args.join(' ').slice(22)
    if(!banReason) return message.channel.send({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> Debes poner alguna razón!" } })

    if (message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0)
    return message.channel.send({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> No puedes banear a una persona con tu mismo rol o superior" } })

    if (message.mentions.members.first().user.bot) return message.channel.send({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> No puedo avisar a los bots!" } });

    if(user === message.author) return message.channel.send({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> No puedes banearte a ti mismo!" } })

    user.ban({ reason: banReason })

    const embed = new Discord.MessageEmbed()

    .setTitle("<a:Verify:876702736492687370>| Usuario baneado con exito!")
    .setDescription(`El usuario <@${user.id}> ha sido baneado!\nBaneado por el Moderador ${message.author.tag}\nRazón: ${banReason}`)
    .setColor("RED")
    .setTimestamp()
    .setFooter("ConnectionBot", client.user.displayAvatarURL())
    
    message.channel.send(embed)

  }


}