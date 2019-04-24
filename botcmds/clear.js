const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  if(message.author.id !== "277829088461193216") return message.reply("this command is for only the premium bot!") {
  
    if(!args[0]) return message.channel.send("Please enter a number")
  await message.delete();  
  message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(`Cleared ${args[0]} messages ***UwU***.`).then(msg => msg.delete(5000));
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
