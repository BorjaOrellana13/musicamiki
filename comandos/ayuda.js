const Discord = require("discord.js");

module.exports = {
  name: "ayuda",
  alias: ["help"],

  execute(client, message, args){

    const embedprincipal = new Discord.MessageEmbed()

    .setTitle("<a:Wumpus_hello:877001615540895754> Bienvenido al apartado de ayuda")
    .setDescription('<:Globo_blue:877002423351267339> Reacciona a los emojis para ir a su respectivo menu!\n\n> <a:flecha:876702676027588618> Reacciona en 🛠️ para ir al apartado de moderación\n\n> <a:flecha:876702676027588618>  Reacciona en 📚 para ir al apartado de utilidades\n\n> <a:flecha:876702676027588618> Reacciona en 🪙 para ir al apartado de economia\n\n> <a:flecha:876702676027588618> Reacciona en 🎮 para ir al apartado de diversion\n\n> <a:flecha:876702676027588618> Reacciona en ⚒️ para ir al apartado de server\n\n> <a:flecha:876702676027588618> Reacciona en 🔧 para volver a la pagina principal')
    .setColor("0x00ccff")
    .setImage("https://i.ibb.co/44HRV53/15325254-1254365724631155-5748705953019047924-o.png")
    .setFooter("ConnectionBot", client.user.displayAvatarURL())

    const embedmoderacion = new Discord.MessageEmbed()

    .setTitle("<a:Wumpus_hello:877001615540895754> Bienvenido al apartado de moderación!")
    .setDescription('`c!ban`\n> <a:flecha:876702676027588618> Banea a un usuario\n\n**`c!unban`**\n> <a:flecha:876702676027588618> Desbanea a un usuario\n\n`c!kick`\n> <a:flecha:876702676027588618> Kickea a un usuario\n\n`c!warn`\n> <a:flecha:876702676027588618> Warnea a un usuario\n\n`c!warns`\n> <a:flecha:876702676027588618> Mira los warns del usuario\n\n`c!comandos`\n> <a:flecha:876702676027588618> Mira los comandos actuales que tiene el bot')
    .setColor("RED")
    .setImage("https://i.ibb.co/bFh1czP/132029870-3735548386512864-1289271979529814460-n.jpg")
    .setFooter("ConnectionBot", client.user.displayAvatarURL())

    const embedutilidades = new Discord.MessageEmbed()

    .setTitle("<a:Wumpus_hello:877001615540895754> Bienvenido al apartado de utilidades!")
    .setDescription('<:arreglo:878063012777447464> __Utilidades para el usuario!__\n`c!avatar`\n> <a:flecha:876702676027588618> Ver el avatar de un usuario!\n\n`c!userinfo`\n> <a:flecha:876702676027588618> Ver la info de un usuario!\n\n`c!serverinfo`\n> <a:flecha:876702676027588618> Muestra la información del server!\n<:wumpuspijama:878025788568518746> __Utilidades basica!__\n`c!ping`\n> <a:flecha:876702676027588618> Muestra tu ping!\n\n`c!jumbo`\n> <a:flecha:876702676027588618> Ver los emojis mas grande!\n\n`c!invite`\n> <a:flecha:876702676027588618> Invita al bot a tu server!')
    .setColor("BLUE")
    .setImage("https://i.ibb.co/k0pv1sz/60947454-2336189979782052-773523296476987392-n.jpg")
    .setFooter("ConnectionBot", client.user.displayAvatarURL()) 

    const embedeconomia = new Discord.MessageEmbed()

    .setTitle("<a:Wumpus_hello:877001615540895754> Bienvenido al apartado de economia!")
    .setDescription('`c!billetera`\n> <a:flecha:876702676027588618> Ver tu billetera!\n\n`c!trabajar`\n> <a:flecha:876702676027588618> Trabaja con este comando!\n\n`c!robar`\n> <a:flecha:876702676027588618> Roba con este comando!')
    .setColor("GREEN")
    .setImage("https://i.ibb.co/GnvFTDw/134598325-3766017523465950-6612598003791523625-n.png")
    .setFooter("ConnectionBot", client.user.displayAvatarURL())

    const embeddiversion = new Discord.MessageEmbed()

    .setTitle("<a:Wumpus_hello:877001615540895754> Bienvenido al apartado de diversion!")
    .setDescription('`c!8ball`\n> <a:flecha:876702676027588618> Prueba tu suerte con la 8ball\n\n`c!revertir`\n> <a:flecha:876702676027588618> Usa este comando para revertit palabras\n\n`c!embed`\n> <a:flecha:876702676027588618> Usa este comando para crear embeds')
    .setColor("0xf1e03d")
    .setImage("https://i.ibb.co/dQtVN50/EY9gc-P0-Xk-AYHXex.jpg")
    .setFooter("ConnectionBot", client.user.displayAvatarURL())

     const embedmusica = new Discord.MessageEmbed()

    .setTitle("<a:Wumpus_hello:877001615540895754> Bienvenido al apartado de server!")
    .setDescription('Por los momentos no contamos con comandos vuelve mas tarde!')
    .setColor("0x4456b1")
    .setImage("https://i.ibb.co/dWYT1PJ/discord-users-and-funding-statistics.png")
    .setFooter("ConnectionBot", client.user.displayAvatarURL())

    message.channel.send(embedprincipal).then(msg => {

      msg.react('🛠️')
      msg.react('📚')
      msg.react('🪙')
      msg.react('🎮')
      msg.react('⚒️')
      msg.react('🔧')
      
      msg.awaitReactions((reaction, user) => {
        if(message.author.id !== user.id) return;
        if(reaction.emoji.name === '🔧'){
          msg.edit(embedprincipal)
        }

        if(reaction.emoji.name === '📚'){
          msg.edit(embedutilidades)
        }

        if(reaction.emoji.name === '🪙'){
          msg.edit(embedeconomia)
        }
        if(reaction.emoji.name === '🛠️'){
          msg.edit(embedmoderacion)
        }
        if(reaction.emoji.name === '🎮'){
          msg.edit(embeddiversion)
        }
        if(reaction.emoji.name === '⚒️'){
          msg.edit(embedmusica)
        }
      })
    })

  }


}