const Discord = require("discord.js");
let candys = require("../candys.json");

module.exports.run = async (bot, message, args) => {
  
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  candys[message.author.id].candys = candys[message.author.id].candys * 1337
  
  message.author.send("You unlocked an achivement! | **!Secret Cheat Code By Laknicek!** | x1337 candies recived!")
}

module.exports.help = {
    name: "DISCORD_HACK_CHEAT_CODE_GET_132231", 
    aliases: []
}
