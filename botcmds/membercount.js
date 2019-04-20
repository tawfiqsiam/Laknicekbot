const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
 let membercount = new Discord.RichEmbed()
 .setTitle(`Displaying Member counter for server ${message.guild.name}`)
 .addField(`Online Members`, `${message.guild.members.filter(member => member.presence.status === 'online').size}`, true) 


 .addField(`Idle Members`, `${message.guild.members.filter(member => member.presence.status === 'idle').size}`, true)
 
 .addField(`Do not disturb Members`, `${message.guild.members.filter(member => member.presence.status === 'dnd').size}`, true)
 .addField(`Offline Members`, `${message.guild.members.filter(member => member.presence.status === 'offline').size}`, true)
 .addField(`Total Users`, `${message.guild.members.filter(member => member.user).size}`, true)
 .addField(`Human Users`, `${message.guild.members.filter(member => !member.user.bot).size}`, true)
 .addField(`Bots`, `${message.guild.members.filter(member => member.user.bot).size}`, true)
 
 message.channel.send(membercount)
 
}

module.exports.help = {
    name: "members", 
    aliases: ['users', 'membercount'] 
}
