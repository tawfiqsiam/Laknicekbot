const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

     const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
    
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user.");
    let reason = args.slice(1).join(" ")

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#15f153")
    .addField("Reported user", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", reason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Please create a channel called reports first");
    
    
      message.delete().catch(O_o=>{});
      reportschannel.send(reportEmbed);
}

module.exports.help = {
    name: "report", 
    aliases: ["r"]
}
