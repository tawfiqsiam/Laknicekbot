const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  if(message.author.id !== "350956268015452161") return message.reply(":x: | You're not my developer!")
    message.delete().catch();
  
  let cheatEmbed = new Discord.RichEmbed()
  .setTitle("Cheat Codes :)")
  .setColor("RANDOM")
  .addField("c!**LAKNICEKFREE** = x1000 Candies", "Working!")
  .addField("c!**LAKNICEKNIGHTCORE** = x10000 Candies", "Working!")
  .addField("c!**DISCORD_HACK_CHEAT_CODE_GET_132231** = x1337", "Working!")
  .addField("c!**AABBCC-112233-DDEEFF-445566-CHEAT_CODE** = x999999999999", "Working!")
  
  message.author.send(cheatEmbed);
  
}

module.exports.help = {
    name: "iWantCheatCodesNow", 
    aliases: []
}
