const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  let sEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Server Info")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
    .addField("**Guild Name:**", `${message.guild.name}`, true)
    .addField("**Guild Owner:**", `${message.guild.owner.user.tag}`, true)
    .addField("**Member Count:**", `${message.guild.memberCount}`, true)
    .addField("**Role Count:**", `${message.guild.roles.size}`, true)
    .addField("Created on", message.guild.createdAt, true)
    .addField("You joined", message.member.joinedAt, true)    
    .setFooter(`CipBot | Server Info`, bot.user.displayAvatarURL);
    message.channel.send({embed: sEmbed});
}

module.exports.help = {
    name: "serverinfo", 
    aliases: []
}
