const Discord = require("discord.js");
const ytdl = require("ytdl-core")

module.exports.run = async (bot, message, args) => {
  
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
 //if(message.author.id !== "350956268015452161" || "352815845707087872" || "402096246199943170") return message.channel.send("This feature is now premium only! Use \*\*c!premium\*\* to upgrade to premium!");
  
if (!message.member.voiceChannel) return message.channel.send("Please join a voice channel first!");
  
if (!message.guild.me.voiceChannel) return message.channel.send("I\'m not connected to any channel!")
if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send("sorry, you aren\'t connected to the same channel.")

message.guild.me.voiceChannel.leave()

message.channel.send("Leaved the channel!")

}           

module.exports.help = {
    name: "stop",
    aliases: [] 
}
