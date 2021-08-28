const Discord = require("discord.js");

module.exports = {
  name: "ayudatest",
  alias: ["helptest"],

  execute(client, message, args){

    const embedprincipal = new Discord.MessageEmbed()

    .setTitle("<a:Penguin:880241725099110450> Bienvenido al apartado de ayuda")
    .setDescription('Reacciona a los emojis para ir a su respectivo menu!\n\nReacciona en 💣 para ir al apartado de `antiraid`\n\nReacciona en 📚 para ir al apartado de `backup`\n\nReacciona en 🛠️ para ir al apartado de `configuracion`\n\nReacciona en 🛡️ para ir al apartado de `moderacion`\n\nReacciona en 💸 para ir al apartado de `economia`\n\nReacciona en 🔧 para volver a la pagina principal')
    .setColor("0x00ccff")
    .setFooter("Ozwaldo", client.user.displayAvatarURL())

    const embedantiraid = new Discord.MessageEmbed()

    .setTitle("<a:Penguin:880241725099110450> Bienvenido al apartado de antiraid!")
    .setDescription('<a:pinguino4:880252167011831859> Por los momentos no contamos con comandos de `antiraid` vuelva mas tarde!')
    .setColor("RED")
    .setFooter("Ozwaldo", client.user.displayAvatarURL())

    const embedbackup = new Discord.MessageEmbed()

    .setTitle("<a:Penguin:880241725099110450> Bienvenido al apartado de backup!")
    .setDescription('`x!backup`\nUsa este comando para hacer un backup\n\n`x!notecreate`\nCrea una nota\n\n`x!notelist`\nVer tus notas creadas\n\n`x!nuke`\nElimina todos los mensajes del chat')
    .setColor("BLUE")
    .setFooter("Ozwaldo", client.user.displayAvatarURL()) 

    const embedconfiguracion = new Discord.MessageEmbed()

    .setTitle("<a:Penguin:880241725099110450> Bienvenido al apartado de configuracion!")
    .setDescription('`x!canalsgr`\nSelecciona el canal donde las sugerencias seran enviadas\n\n`x!sugerencia`\nUsa este comando para mandar una sugerencia\n\n`x!commands`\nUsa este comando para ver cuantos comandos tiene el bot\n\n`x!embed`\nHas un embed')
    .setColor("0x4456b1")
    .setFooter("Ozwaldo", client.user.displayAvatarURL())

    const embedmoderacion = new Discord.MessageEmbed()

    .setTitle("<a:Penguin:880241725099110450> Bienvenido al apartado de moderacion!")
    .setDescription('`x!ban`\nUsa este comando para banear a usuarios\n\n`x!clear`\nUsa este comando para eliminar mensajes\n\n`x!kick`\nUsa este comando para expulsar a usuarios\n\n`c!mute`\nUsa este comando para mutear a un usuario\n\n`x!setmuterole`\nUsa este comando para seleccionar un rol para el mute\n\n`x!unban`\nUsa este comando para desbanear a una persona')
    .setColor("0xf1e03d")
    .setFooter("Ozwaldo", client.user.displayAvatarURL())

     const embedeconomia = new Discord.MessageEmbed()

    .setTitle("<a:Penguin:880241725099110450> Bienvenido al apartado de economia!")
    .setDescription('`x!bal`\nUsa este comando para ver tu dinero\n\n`x!crime`\nUsa este comando para robar\n\n`x!work`\nUsa este comando para trabajar')
    .setColor("0xf1e03d")
    .setFooter("Ozwaldo", client.user.displayAvatarURL())

    message.channel.send(embedprincipal).then(msg => {

      msg.react('💣')
      msg.react('📚')
      msg.react('🛠️')
      msg.react('🛡️')
      msg.react('💸')
      msg.react('🔧')
      
      msg.awaitReactions((reaction, user) => {
        if(message.author.id !== user.id) return;
        if(reaction.emoji.name === '🔧'){
          msg.edit(embedprincipal)
        }

        if(reaction.emoji.name === '📚'){
          msg.edit(embedbackup)
        }

        if(reaction.emoji.name === '💸'){
          msg.edit(embedeconomia)
        }
        if(reaction.emoji.name === '💣'){
          msg.edit(embedantiraid)
        }
        if(reaction.emoji.name === '🛡️'){
          msg.edit(embedmoderacion)
        }
        if(reaction.emoji.name === '🛠️'){
          msg.edit(embedconfiguracion)
        }
      })
    })

  }


}