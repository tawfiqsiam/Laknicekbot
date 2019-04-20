const Discord = require("discord.js");
let candys = require("../candys.json");

module.exports.run = async (bot, message, args) => {
  
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  candys[message.author.id].candys = candys[message.author.id].candys * 999999999999
  
  message.author.send("You unlocked an achivement! | **Mega Secret Cheat Code By Laknicek** | x999999999999 candies recived!")
}

module.exports.help = {
    name: "AABBCC-112233-DDEEFF-445566-CHEAT_CODE", 
    aliases: [] 
}
