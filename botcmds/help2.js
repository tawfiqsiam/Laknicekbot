const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  

   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
 
  let channel = message.channel
  let target = message.mentions.users.first() || message.author;
  let embed = new Discord.RichEmbed()
  
  let help2Embed = embed
  .setColor("RANDOM")
  .addField("c!kick <@user>", "Kicks the selected user from the server")
  .addField("c!ban <@user>", "Bans the selected user from the server")
  .addField("c!tempmute <@user> <time s/m/h/d>", "Temporary mute an user")
  .addField("c!clear <ammount> ( max is 100 messages )", "Clears an ammount of messages **!You can only delete messages that are under 14 days old!**")
  .addField("c!addrole <@User> <Role Name>", "Adds a role to a specifed user")
  .addField("c!removerole <@User> <Role Name>", "Removes a role from a specified user")
  .addField("c!announce <announcement>", "Server Announce something")
  .addField("--------------------------------", "--------------------------------")
  .addField("For Fun Commands do :", "**c!help-fun**")
  .addField("For Helpful Commands do :", "**c!help-helpful**")
  .addField("For Other Bot Commands do :", "**c!help-bot**")
  .addField("For Currency Commands do :", "**c!help-currency**")
  .setFooter(`Requested by ${target.tag}`)
  
  message.channel.send(help2Embed)
  }

module.exports.help = {
    name: "help-staff", 
    aliases: []
}
