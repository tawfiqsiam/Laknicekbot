const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
 let toHide = args.join(" ")
 message.channel.send(`\*\*Spoiler Alert!\*\* \n \|\| ${toHide} \|\|`)
 
}

module.exports.help = {
    name: "spoiler", 
    aliases: ['hide']
}
