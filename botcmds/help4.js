const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  let channel = message.channel
  let target = message.mentions.users.first() || message.author;
  let embed = new Discord.RichEmbed()
  
  let help4Embed = embed
  .setColor("RANDOM")
  .addField("c!invite", "Invite the bot to your server!")
  .addField("--------------------------------", "--------------------------------")
  .addField("For Staff Commands do :", "**c!help-moderation**")
  .addField("For Helpful Commands do :", "**c!help-helpful**")
  .addField("For Fun Commands", "**c!help-fun**")
  .addField("For  Commands do :", "**c!help-currency**")
  .setFooter(`Requested by ${target.tag}`)
  
  message.channel.send(help4Embed)
  }

module.exports.help = {
    name: "help-bot", 
    aliases: []
}
