const Discord = require("discord.js");
const fs = require("fs");
let candys = require("../candys.json");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {

   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  if(message.author.id !== `${config.ownerID}`) return message.reply("You're not my developer! || YOU JUST GET FUCKED BY A BOT ||")
  
  let channel = message.channel
  let target = message.mentions.users.first() || message.author;
  let embed = new Discord.RichEmbed()
  
  if(!args[0]) return message.channel.send("Usage : c!devadd <ammount> @User")
      
 candys[target.id].candys = candys[message.author.id].candys += parseInt(args[0])
  
  let dcEmbed = embed
  .setTitle("Candies Added!")
  .setColor("RANDOM")
  .addField(`🍬 | Added x${args[0]} candies to user ${target.tag}!`, "Complete!")
  .setFooter("Dev Command!")

  channel.send(dcEmbed)
}

module.exports.help = {
    name: "devadd", 
    aliases: ['add']
}
