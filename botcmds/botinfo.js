const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
    
let bicon = bot.user.displayAvatarURL
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Language", "JavaScript", true)
    .addField("Library", "Discord.js", true)
    .addField("Servers", `${bot.guilds.size} servers!`, true)
    .addField("Users", `${bot.users.size} users!`, true)
    .addField("Channels", `${bot.channels.size} channels!`, true) 
    .addField("Bot Name", bot.user.tag, true)
    .addField("Made by", "Cip 2.0#0355", true)
    message.channel.send(botembed);
    }

module.exports.help = {
    name: "botinfo", 
    aliases: ['binfo'] 
}
