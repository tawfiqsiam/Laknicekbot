const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
message.channel.send("This ticket will close in 5 seconds!");
  
setTimeout(function (){message.channel.delete()
}, 5000)

  const AuthorRole = message.guild.roles.find("name", message.author.username)

  
  message.member.removeRole(AuthorRole);
  message.guild.roles.find("name", AuthorRole.name).delete();
  
}

module.exports.help = {
    name: "close",
    aliases: ['complete']
} 

