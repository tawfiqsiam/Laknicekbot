const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  let embided = new Discord.RichEmbed()
 .setTitle(`Listing Roles for guild ${message.guild.name}`) 
 .setDescription(`${message.guild.roles.map(r => r.name).join("\n")}`);
  
  message.channel.send(embided)
}

module.exports.help = {
    name: "roles", 
    aliases: ['listroles']
}
