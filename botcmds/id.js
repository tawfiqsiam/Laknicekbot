const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
//get id of an user  
  
   const prefix = "c!";

  if(!message.content.startsWith(prefix))return;
  
let target = message.mentions.users.first() || message.author

idEmbed = new Discord.RichEmbed()
.setTitle(target.id)
.setColor("RANDOM")
.setDescription(`Target name : ${target.tag}`)

message.channel.send(idEmbed)

}

module.exports.help = {
    name: "id", 
    aliases: [] 
}
