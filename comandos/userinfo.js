const Discord = require("discord.js");

module.exports = {
  name: "userinfo",
  alias: ["info"],

  execute(client, message, args){

    let estados = {
      "online": "En línea",
      "idle": "Ausente",
      "dnd": "No molestar",
      "offline": "Desconectado/invisible"
    };

    const member = message.mentions.members.first() || message.member;

    function formatDate (template, date){
    var tiempo = 'YYYY:MM:DD:HH:mm:ss'.split(':')
    date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
    return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {

    }, template)
    }

    const embedinfo = new Discord.MessageEmbed()

    .setColor("0x00ccff")
    .setDescription(`<:wumpuspijama:878025788568518746> **Información de ${member}:**`)
    .addField(`<:Wumpus_1:877892471189811220> **Nombre:**`, `**${member.user.tag}**`)
    .addField("<:reglas:878063159544541224> **ID:**", `**${member.user.id}**`)
    .addField("<a:PartyWumpus:878025160144343111> **Unión al server:**", formatDate('DD/MM/YYYY, a las HH:MM:SS', member.joindAt))
    .addField("<a:brillos:878022494601240606> **ROLES:**", member.roles.cache.map(roles => `\`${roles.name}\``).join(', '))
    .addField("<:wumpusboost:878026747063455774> **Boost?:**", member.premiumSince ? 'Usuario Booster' : 'Usuario no booster')
    .setImage("https://i.ibb.co/wwH82NN/microsoft-discord.jpg")
    .setThumbnail(member.user.displayAvatarURL( {format: 'png', dynamic: true} ))

    message.channel.send(embedinfo)

  }


}