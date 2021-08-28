const Discord = require('discord.js');
const client = new Discord.Client();
const {Client, MessageEmbed, Collection, Guild } = require('discord.js');

require('dotenv').config();
const keepAlive = require("./server.js");
const Monitor = require("ping-monitor");

keepAlive();
const monitor = new Monitor({
  website: "https://darkofc123.cvizcayacanelon.repl.co",
  title: "MonitorBot",
  interval: 2
});

monitor.on("up", (res) => console.log(`${res.website} esta encendido.`));
monitor.on("down", (res) => console.log(`${res.website} se ha caido - ${res.statusMessage}`));
monitor.on("stop", (website) => console.log(`${website} se ha parado.`));
monitor.on("error", (error) => console.log(error));
//////////////presencia//////////////
client.on("ready", async (peo) => {
  
  const array = [
  {
    name: `${client.guilds.cache.size} servidores!`,
    type: `PLAYING`
  },
  {
    name: `c!help | Config|Support`,
    type: `PLAYING`
  },
  {
    name: `c!invite`,
    type: `PLAYING`
  }
]

    setInterval(() => {
        function presence() {
            client.user.setPresence({
              status: 'online',
                activity: array[Math.floor(Math.random() * array.length)],
            });
        }

        presence();
        
    }, 5000);

    console.log("Estoy listo!")

});

///////////////////HANDLER INICIO//////////////
const fs = require("fs");
let { readdirSync } = require("fs");

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./comandos").filter(file => file.endsWith(".js"))

for (const file of commandFiles){
  const command = require(`./comandos/${file}`);
  client.commands.set(command.name, command)
}

for(const file of readdirSync('./eventos')){
  if(file.endsWith('.js')){
    let fileName = file.substring(0, file.length - 3)

    let fileContents = require(`./eventos/${file}`)

    client.on(fileName, fileContents.bind(null, client))
  }
}

client.on("message", (message) => {

  let prefix = "c!"

  if(message.author.bot) return;

  if(!message.content.startsWith(prefix)) return;


  let usuario = message.mentions.members.first() || message.member;
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase();

let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));

if(cmd){
  cmd.execute(client, message, args)
}
///////////////////Bot music///////////////////

const Distube = require("distube")
client.distube = new Distube(client, {
  emitNewSongonly: true,
  serachSongs: false,
  leaveOnstop: true,
  leaveOnFinish: true,
  leaveOnEmpty: true
});

client.distube.on("addList", (message, queue, playlist) => {
  const embedaddList = new Discord.MessageEmbed()

  .setTitle("<a:version_campfire:878066533669158953> Playlist añadida:")
  .setDescription(`<a:F_oCD:878025306999496714> **${playlist.name}** - **${playlist.songs.length}** canciones!`)
  .setColor("0x00ccff")
  .setFooter("ConnectionBot", client.user.displayAvatarURL())

  message.channel.send(embedaddList)
})

client.distube.on("addSong", (message, queue, song) => {
  const embedaddSong = new Discord.MessageEmbed()

  .setTitle("<a:version_campfire:878066533669158953> Cancion añadida:")
  .setDescription(`<a:F_oCD:878025306999496714> **${song.name}** - **${song.formattedDuration}** canciones!`)
  .setColor("0x00ccff")
  .setFooter("ConnectionBot", client.user.displayAvatarURL())

  message.channel.send(embedaddSong)
})

client.distube.on("playSong", (message, queue, playsong) => {
  const embedplaySong = new Discord.MessageEmbed()

  .setTitle("<a:version_campfire:878066533669158953> Reproduciendo ahora:")
  .setDescription(`<a:F_oCD:878025306999496714> **${playsong.name}** - **${playsong.formattedDuration}**`)
  .setColor("0x00ccff")
  .setFooter("ConnectionBot", client.user.displayAvatarURL())

  message.channel.send(embedplaySong)
})

client.distube.on("playList", (message, queue, playlist) => {
  const embedaddList = new Discord.MessageEmbed()

  .setTitle("<a:version_campfire:878066533669158953> Reproduciendo playlist:")
  .setDescription(`<a:F_oCD:878025306999496714> **${playlist.name}**!`)
  .setColor("0x00ccff")
  .setFooter("ConnectionBot", client.user.displayAvatarURL())

  message.channel.send(embedaddList)
})

client.distube.on("error", (error) => {
  console.log(error)
})

///////////Bot music final////////////////
//////////////COMIENZO fchat//////////////
  if(message.content.startsWith(prefix + "ping")){
    const embed1 = new Discord.MessageEmbed()
    .setTitle("Ping!")
    .setDescription(`<a:Loading:876984031609225226> **Pong!** ${client.ws.ping}ms`)
    .setColor("RED")
    .setFooter("ConnectionBot")
    .setTimestamp()
    message.channel.send(embed1)
  //////////////CIERRE fchat/////////////

  }

});

client.login(process.env.TOKEN);