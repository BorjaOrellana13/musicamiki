const Discord = require("discord.js");

module.exports = {
  name: "jumbo",
  alias: ["emojis"],

  execute(client, message, args){

    if(!args[0]) return message.channel.send({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> Debes poner un emoji!"  } })

    let emoji = message.guild.emojis.cache.find(x => x.name === 
    args[0].split(":")[1])
    if(!emoji) return message.channel.send({ embed: { 
    color: 3447003,
    description: "<a:flecha:876702676027588618> Ese no es un emoji valido!"} })

    const embed = new Discord.MessageEmbed()
    .setTitle("<a:brillos:878022494601240606> Emoji!")
    .setImage(emoji.url)
    .setColor("RANDOM")

    message.channel.send(embed)
  }


}