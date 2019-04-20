const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  if(message.author.id !== "277829088461193216") return message.reply("You're not my developer... the developer is Laknicek!")
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(`Developer ${message.author} said : ${botmessage}`)

}

module.exports.help = {
    name: "devsay", 
    aliases: ['devmessage']
}
