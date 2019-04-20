const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send(":warning: | Usage: c!kick @User <reason>");
  let kReason = args.join(" ").slice(22) 
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
  if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("~Kick~")
  .setColor("#e56b00")
  .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
  .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Kicked In", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", kReason);
  
  let kickChannel = message.guild.channels.find(`name`, "logs");
  if(!kickChannel) return message.channel.send("Can't find logs channel.");

  message.guild.member(kUser).kick(kReason);
  message.channel.send(`${kUser} has been kicked by ${message.author} | Check ${kickChannel} for info!`)
  kickChannel.send(kickEmbed);
}

module.exports.help = {
    name: "kick", 
    aliases: []
}
