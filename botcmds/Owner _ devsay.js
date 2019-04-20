const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  if(message.author.id !== "350956268015452161") return message.reply("You're not my developer!")
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(`Developer ${message.author} said : ${botmessage}`)

}

module.exports.help = {
    name: "devsay", 
    aliases: ['devmessage']
}
