const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {

  

   const prefix = "c!";

  if(!message.content.startsWith(prefix))return;

   if(message.author.id !== `${config.ownerID}`) return
  
message.channel.send("Restarting")
bot.destroy()
bot.login(process.env.TOKEN).then(message.channel.send("Restarted!"));



}

module.exports.help = {

    name: "restart", 
    aliases: ['rs']

}
