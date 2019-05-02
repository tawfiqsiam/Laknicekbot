const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  if(message.member.hasPermission("MANAGE_MESSAGES") || message.author.id == "277829088461193216") {
  
    if(!args[0]) return message.channel.send("Please enter a number")
  await message.delete();  
  message.channel.bulkDelete(args[0]).then(() => {
embed=discord.Embed(description="✅ The Message's Has Been Deleted! ✅"color=0xeec8ed)
embed.set_thumbnail(url="https://cdn.discordapp.com/attachments/550360899165224971/573479523157278723/ytchannelicon.png.jpg")
embed.set_footer(text="By Me ***UwU***")
await self.bot.say(embed=embed)
    });
    return
   } else {
     return message.channel.send("You are missing the delete permission! ") 
} 
   }

module.exports.help = {
    name: "clear", 
    aliases: ['delete']
}
