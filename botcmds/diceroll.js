const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
    let numbers = ["1", "2", "3", "4", "5", "6"];

    let result = Math.floor((Math.random() * numbers.length));
    
    let diceEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("RANDOM")
    .addField("Number", `${result}`)

    message.channel.send(diceEmbed)

}

module.exports.help = {
    name: "diceroll", 
    aliases: ['roll', 'dice']
}
