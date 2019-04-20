const Discord = require("discord.js");
const config = require("../config.json");




module.exports.run = async (bot, message, args) => {
  
  const prefix = "c!";

  if(!message.content.startsWith(prefix))return;
  
  let yourmessage = args.join(" ");
  
  if(!args.join(" ")) return message.channel.send("You didnt set a game!");
  
  if(args.join(" ") && message.author.id == `${config.ownerID}`) {
  
  bot.user.setActivity(`${yourmessage}`, { type: "STREAMING" });
  
  message.channel.send(`The game was set to ->**${yourmessage}**<- !`)
  }
}

module.exports.help = {
    name: "status",
    aliases: ['playing', 'setgame']
}
