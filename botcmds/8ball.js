const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  if(!args[2]) return message.reply("Please ask a full question!");
  let replies = ["Yes", "No", "Maybe", "Maybe not", "Ask again later", "I don't know"];
  
  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(0).join(" ");
  
  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("RANDOM")
  .addField("Question :", question)
  .addField("Answer :", replies[result]);
  
  message.channel.send(ballembed)
    
}

module.exports.help = {
    name: "8ball", 
    aliases: ['8'] 
}
