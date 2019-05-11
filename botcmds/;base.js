const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
  
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  console.log("LAKNICEK JOIN THE DISCORD SERVER NOW THEY CALLING YOU!!");
}

module.exports.help = {
    name: "Warn",
    aliases: []
}
