const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
    
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send(":warning: | Usage: c!ban @User <reason>");
    let bReason = args.join(" ").slice(22) 
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("No can do pal!");
    if(bUser.hasPermission("MANAGE_ROLES")) return message.channel.send("That person can't be banned!");
  
    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let banChannel = message.guild.channels.find(`name`, "logs");
    if(!banChannel) return message.channel.send("Can't find logs channel.");

    message.guild.member(bUser).ban(bReason)
    message.channel.send(`${bUser} has been banned by ${message.author} | Check #logs for info!`)
    banChannel.send(banEmbed)
}

module.exports.help = {
    name: "ban", 
    aliases: []
}
