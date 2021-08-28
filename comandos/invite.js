const Discord = require("discord.js");

module.exports = {
  name: "invite",
  alias: ["f"],

  execute(client, message, args){

    const embed1 = new Discord.MessageEmbed()

    .setTitle("<a:Wumpus_hello:877001615540895754> Invitación!")
    .setDescription(`<:wumpuspijama:878025788568518746> Hola! Soy un bot que tiene el proposito de ayudar con la moderación si quieres de mi ayuda puedes invitarme con el link de abajo!\nLink de invitación: https://discord.com/oauth2/authorize?client_id=873252486083919882&scope=bot&permissions=8589934591`)
    .setColor("0x00ccff")
    .setImage("https://i.ibb.co/Bc9cj3r/60947454-2336189979782052-773523296476987392-n.jpg")
    .setTimestamp()
    

    message.channel.send(embed1)

  }


}