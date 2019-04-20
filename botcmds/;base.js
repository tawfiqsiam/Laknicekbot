const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
  
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  console.log("Dis is the base command!");
}

module.exports.help = {
    name: "base",
    aliases: []
}
