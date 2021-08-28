const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('megadb')
const dinero = new db.crearDB('dinero')

module.exports = {
    name: "trabajar",
    alias: [],

async execute (client, message, args) {

    const user = message.author;

    if(!dinero.tiene(`${user.id}`))
    dinero.establecer(`${user.id}`, 0)

let random = Math.floor(Math.random() * 175) + 100

let trabajo = ["Carpintero", "Cerrajero", "Mecanico", "Pescador", "Albañil", "Plomero", "Soldador", "Taxista", "pastor", "agricultor", "conductor", "lechero", "Cocinero", "Lavandero", "Escultor", "Editor", "Obrero", "Locutor", "Escritor", "Vendedor", "Repartidor", "Cajero", "Vigilante", "Animador", "Frutero", "Artesano", "Youtuber", "Panadero", "Barbero", "Leñador", "Impresor", "Policia", "Cazador", "Peluquero","Bombero"]
let randomTrabajo = trabajo[Math.floor(Math.random() * trabajo.length)]

dinero.sumar(`${user.id}`, random)

const embed = new Discord.MessageEmbed()

.setTitle("<:arreglo:878063012777447464> Resultado del trabajo")
.setDescription(`**${user}** Trabajaste de **${randomTrabajo}** y ganaste **$${random}$** `)
.setColor("0x00ccff")

message.channel.send(embed)

 }
}