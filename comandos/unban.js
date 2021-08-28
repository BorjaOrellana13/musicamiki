const Discord = require("discord.js");
const client = new Discord.Client();
const {Client, MessageEmbed } = require ('discord.js');

module.exports = {
  name: "unban",
  alias: ["el funas"],

  async execute(client, message, args){

    var perms = message.member.hasPermission("BAN_MEMBERS")
    if(!perms) return message.channel.send({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> No tienes permisos para esta acción!" } })

    let userID = args[0];
    if(!userID) return message.channel.send({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> Debes mencionar una ID para esta acción!" } })
    
    const member = await client.user.fetch(userID)

    message.guild.fetchBans().then(bans => {
      if(bans.size === 0) return message.channel.send({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> El servidor no tiene ningun miembro baneadoo!" } })

      let bUser = bans.find(b => b.user.id == userID)
      if(!bUser) return message.channel.send({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> Ese miembro no esta baneado!" } })

    message.guild.members.unban(bUser.user).then(() => { 

     embedunban = new Discord.MessageEmbed()

    .setTitle("<a:Verify:876702736492687370>| Usuario desbaneado con exito!")
    .setColor("RED")
    .setTimestamp()
    .setFooter("ConnectionBot", client.user.displayAvatarURL())
  
    message.channel.send(embedunban)
    })
    
    })

  }

}  

