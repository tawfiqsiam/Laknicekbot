const Discord = require("discord.js");
let candys = require("../candys.json");

module.exports.run = async (bot, message, args) => {
  
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  candys[message.author.id].candys = candys[message.author.id].candys * 10000
  
  message.author.send("You unlocked an achivement! | **!The Code By Laknicek!** | x10000 candies recived!")
}

module.exports.help = {
    name: "LAKNICEKNIGHTCORE", 
    aliases: [] 
}
