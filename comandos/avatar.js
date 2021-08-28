const Discord = require("discord.js");

module.exports = {
  name: "avatar",
  alias: ["pong"],

  execute(client, message, args){

    let miembro = message.mentions.users.first()
    if (!miembro) {
      const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
      .setImage(`${message.author.displayAvatarURL({ dynamic: true, size : 1024 })}`)
      .setColor(0xDBF7FD)
      .setTitle("**Avatar**");
      message.channel.send(embed);
    } else {
      const embed = new Discord.MessageEmbed()
      .setAuthor(miembro.username, miembro.displayAvatarURL())
      .setImage(`${miembro.displayAvatarURL({ dynamic: true, size : 1024 })}`)
      .setColor(0xDBF7FD)
      .setTitle("**Avatar**");
      message.channel.send(embed);

};

  }


}