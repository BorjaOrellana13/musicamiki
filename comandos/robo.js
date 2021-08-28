const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('megadb')
const dinero = new db.crearDB('dinero')

module.exports = {
    name: "robar",
    alias: [],

    
async execute (client, message, args) {

    const user = message.author

    if(!dinero.tiene(`${user.id}`)){
        dinero.establecer(`${user.id}`, 0)
    }
        
    const crimenes = [' Ha robado un banco', ' Ha robado una tienda de telefonos!', ' Ha robado un autolavado!', ' Ha robado una casa!', ' Ha robado un auto!', ' Ha robado una moto!', ' Ha robado un camion de envios!']

    const crimenesmalos = [' Ha robado un banco', ' Ha robado una tienda de telefonos!', ' Ha robado un autolavado!', ' Ha robado una casa!', ' Ha robado un auto!', ' Ha robado una moto!', ' Ha robado un camion de envios!']

    let resultadosbuenos = crimenes[Math.floor(Math.random() * crimenes.length)]

    let resultadosmalos = crimenesmalos[Math.floor(Math.random() * crimenesmalos.length)]

    let resultados = [resultadosbuenos, resultadosmalos, resultadosmalos]

    let resultadosfinal = resultados[Math.floor(Math.random() * resultados.length)]

    let dinerobueno = Math.floor(Math.random() * 175) + 200

    let dineromalo = Math.floor(Math.random() * -175) + -200

    if(resultadosfinal === resultadosbuenos){
        dinero.sumar(`${user.id}`, dinerobueno)

        const embed1 = new Discord.MessageEmbed()

        .setTitle("<a:wumpusp:878025388075384862> Resultado del robo")
        .setDescription(`**${user.tag} ${resultadosbuenos}** y gano **${dinerobueno}**`)
        .setColor("GREEN")

        message.channel.send(embed1)

        return;
    }

    if(resultadosfinal === resultadosmalos){
        dinero.sumar(`${user.id}`, dineromalo)

        const embed2 = new Discord.MessageEmbed()

        .setTitle("<a:wumpuscry:878026581736583208> Resultado del robo")
        .setDescription(`**${user} ${resultadosmalos}** y perdio **${dineromalo}**`)
        .setColor("RED")

        message.channel.send(embed2)

        return;
    }
 }
}