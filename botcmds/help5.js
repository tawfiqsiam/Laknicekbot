const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  let channel = message.channel
  let target = message.mentions.users.first() || message.author;
  let embed = new Discord.RichEmbed()
  
  let help5Embed = embed
  .setColor("RANDOM")
  .addField("c!balance", "Shows you Candy Bank Account")
  .addField("c!pay <@User> <Ammount>", "Pay a user with an ammount of candies")
  .addField("--------------------------------", "--------------------------------")
  .addField("For Staff Commands do :", "**c!help-moderation**")
  .addField("For Helpful Commands do :", "**c!help-helpful**")
  .addField("For Other Bot Commands", "**c!help-bot**")
  .setFooter(`Requested by ${target.tag}`)
  
  message.channel.send(help5Embed)
  }

module.exports.help = {
    name: "help-currency", 
    aliases: []
  
}
