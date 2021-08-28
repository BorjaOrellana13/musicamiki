const Discord = require("discord.js");

module.exports = {
  name: "serverinfo",
  alias: ["info"],

  execute(client, message, args){

    const embed = new Discord.MessageEmbed()

    .setTitle("📚 Información del server!")
    .setThumbnail(message.guild.iconURL())
    .setAuthor(message.guild.name, message.guild.iconURL())
    .setColor("0x00ccff")
    .addField('<:reglas:878063159544541224> **Id**', message.guild.id)
    .addField('<:arreglo:878063012777447464> **Día de creación**', message.guild.joinedAt)
    .addField('<a:version_campfire:878066533669158953> **Región**', message.guild.region)
    .addField('<a:F_Icon_Crown:878063922706513930> **Dueño**', message.guild.owner)
    .addField('<:wumpus_leaf:878065641129656430> **Miembros**', message.guild.memberCount, true)
    .addField('<:Bot:878048317932699658> **Bots**', message.guild.members.cache.filter(m => m.user.bot).size)
    .addField('<a:brillos:878022494601240606> **Emojis**', message.guild.emojis.cache.size)
    .addField('<a:WumpusNitr0:878026982414245888> **Boosts**', message.guild.premiumSubscriptionCount.toString())
    .addField('<:Pincel_Wumpus:876283860080541716> **Roles**',        message.guild.roles.cache.size, true)
    .setImage("https://i.ibb.co/cwKS5WV/discord-users-and-funding-statistics.png")

    message.channel.send(embed)

  }


}