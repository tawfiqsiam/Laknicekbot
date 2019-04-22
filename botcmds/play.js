const Discord = require("discord.js");
const ytdl = require("ytdl-core")

module.exports.run = async (bot, message, args) => {
  
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
 //if(message.author.id !== "277829088461193216" || "352815845707087872" || "402096246199943170") return message.channel.send("This feature is now premium only! Use \*\*c!premium\*\* to upgrade to premium!");
  
if (!message.member.voiceChannel) return message.channel.send("Please join a voice channel first!");
  
if (message.guild.me.voiceChannel) return message.channel.send("Already playing a song, please use c!stop to stop the song.")
  
if (!args[0]) return message.channel.send("Please specify an url.")
  
let validate = await ytdl.validateURL(args[0]);
  
if(!validate) return message.channel.send("Sorry, please input a valid url.")  
  
let connection = await message.member.voiceChannel.join();
  
let dispacher = await connection.playStream(ytdl(args[0], { filter: 'audioonly' }));
  
let info = await ytdl.getInfo(args[0]);
  
message.channel.send(`Now playing: ${info.title}`);
  
}           

module.exports.help = {
    name: "play", 
    aliases: []
}
