const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
  
  let channel = message.channel
  let target = message.mentions.users.first() || message.author;
  let embed = new Discord.RichEmbed()
  let users = bot.users;

  let searchTerm = args[0];
  if(!searchTerm) return message.channel.send("No search term provided.");

  let matches = users.filter(U => U.tag.toLowerCase().includes(searchTerm.toLowerCase()));
  

  let finduserEmbed = embed
  .setTitle("User Finder V2")
  .addField("Users : ", matches.map(u => u.tag))
 
  message.channel.send(finduserEmbed);
}

module.exports.help = {
    name: "finduser", 
    aliases: ['fu', 'find']
}
