const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
 
 // if(message.author.id != "350956268015452161" || "352815845707087872" || "402096246199943170") return message.channel.send("This feature is now premium only! Use \*\*c!premium\*\* to upgrade to premium!");
  
  
  //Start Vars
  let guildid = message.guild.id;
  let channelid = message.channel.id;
  let messageid = args[0]
  let content = await message.channel.fetchMessage(args[0])
  //End Vars
  
  message.channel.send(":white_check_mark: | Snipe Created!")
  message.author.send(`**New Snipe!**\nLink: https://discordapp.com/channels/${guildid}/${channelid}/${messageid}\n\`\`Content: ${content}\`\`\n`)
  
}

module.exports.help = {
    name: "snipe", 
    aliases: [] 
}
