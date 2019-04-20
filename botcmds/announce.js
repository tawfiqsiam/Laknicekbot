const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  const prefix = "c!";
  if(!message.content.startsWith(prefix))return;

  
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: | You cant use command : Announce\nReason: You dont have Administrator permission!")
      const text = args.slice(0).join(" ");
      if (text.length < 0) return message.channel.send("Can't announce nothing!");
      message.delete().catch();
      let ANEmbed = new Discord.RichEmbed()
      .setColor("#ffc0cb")
      .setTitle("💢Server Announcement!💢")
      .setDescription(`**${text}**`)
      .addField("Announced By 👉🏻 :", message.author.username);
      message.channel.send(ANEmbed)
}

module.exports.help = {
    name: "announce", 
    aliases: []
}
