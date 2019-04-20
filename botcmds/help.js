const Discord = require("discord.js");
const fs = require("fs")

module.exports.run = async (bot, message, args) => {
 
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  let helpembed = new Discord.RichEmbed()
  .setTitle("👉🏼~Command Handler By Laknicek!~👈🏼")
  .setColor("RANDOM")
  .setDescription(`Prefix is 👉🏼 \`\`c!\`\`\nUsage 👉🏼 : **c!help-<module>**\n👉🏼To get help with a specified module!\n\n**Available Modules** :🙌🏼 currency, fun , staff , helpful ,🙌 bot\n\nExample 👉🏼: **c!help-fun**`)
  .setFooter(`Requested by 👉🏼 ${message.author.tag}`)
  
  message.channel.send(helpembed)
  
}

module.exports.help = {
    name: "help",
    aliases: [] 
}
