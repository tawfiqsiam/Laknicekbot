const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  let channel = message.channel
  let target = message.mentions.users.first() || message.author;
  let embed = new Discord.RichEmbed()
  
  let help3Embed = embed
  .setColor("RANDOM")
  .addField("c!serverinfo", "Shows the server's info")
  .addField("c!botinfo", "Shows the bot's info")
  .addField("c!avatar <@User>", "Shows your or other user's avatar")
  .addField("c!shorten <link> [Link Name]", "Makes a BIG link very samll") 
  .addField("c!id <@User or Blank>", "Shows your or the mentioned user\'s id") 
  .addField("--------------------------------", "--------------------------------")
  .addField("For Staff Commands do :", "**c!help-moderation**")
  .addField("For Fun do :", "**c!help-fun**")
  .addField("For Other Bot Commands do :", "**c!help-bot**")
  .addField("For Currency Commands do :", "**c!help-currency**")
  .setFooter(`Requested by ${message.author.tag}`)
  
  
  message.channel.send(help3Embed)
  
  
}

module.exports.help = {
    name: "help-helpful", 
    aliases: [] 
}
