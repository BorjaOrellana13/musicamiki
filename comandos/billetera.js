const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('megadb')
const dinero = new db.crearDB('dinero')

module.exports = {
    name: "billetera",
    alias: [],

async execute (client, message, args) {

    const user = message.author || message.mentions.members.first()

    if(!dinero.tiene(`${user.id}`)){
        dinero.establecer(`${user.id}`, 0)
    }

    const member = message.mentions.members.first() || message.member;

    const cantidad = await dinero.obtener(`${user.id}`)

    const embed = new Discord.MessageEmbed()

    .setTitle('<:Earlysupporter:878046861196419122> Tu billetera.')
    .setAuthor(message.author.tag, member.user.displayAvatarURL())
    .addField(`Billetera de:`, `${member}`)
    .addField(`<:thonks:879559472610148383> Dinero:`, `Tienes ${cantidad} dolares`)
    .setColor("0x00ccff")

    message.channel.send(embed)

 }
}