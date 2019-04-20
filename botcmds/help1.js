const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  let channel = message.channel
  let target = message.mentions.users.first() || message.author;
  let embed = new Discord.RichEmbed()
  
  let help1Embed = embed
  .setTitle("Fun Commands!")
  .setColor("RANDOM")
  .addField("c!meme","Shows a MEME")
  .addField("c!dog ", "Shows a photo of a dog")
  .addField("c!cat ", "Shows a photo of a cat")
  .addField("c!ping ", "Shows bot ping.")
  .addField("c!time", "Shows the time")
  .addField("c!8ball <question>", "play 8ball")
  .addField("c!diceroll", "rolls a dice for you")
  .addField("c!weather <example : RO, Constanta>", "Shows the weather in a city")
  .addField("c!react <emoji>", " Bot reacts with ONLY default emojis!")
  .addField("c!report <@User> <Reason>", "Reports a user to Server Moderators")
  .addField("c!achievement <text>", "Makes a custom achievement and sends it") 
  .addField("--------------------------------", "--------------------------------")
  .addField("For Staff Commands do :", "**c!help-moderation**")
  .addField("For Helpful Commands do :", "**c!help-helpful**")
  .addField("For Other Bot Commands", "**c!help-bot**")
  .addField("For Currency Commands do :", "**c!help-currency**")
  .setFooter(`Requested by ${target.tag}`)
  
  channel.send(help1Embed)
}

module.exports.help = {
    name: "help-fun", 
    aliases: [] 
}
