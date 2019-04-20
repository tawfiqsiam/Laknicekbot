const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  if(message.author.id !== "350956268015452161") return message.channel.send(":negative_squared_cross_mark: | You are not my developer!");
  
  if (message.guild.members.get(bot.user.id).hasPermission("CHANGE_NICKNAME") && message.guild.members.get(bot.user.id).hasPermission("CHANGE_NICKNAME")) {
        message.guild.members.get(bot.user.id).setNickname(`${args.join(" ")}`);
        message.channel.send(":white_check_mark: | Set! ")
    } else {
        message.channel.send("I dont have the permissons to change my nickname in this server.");
    }

 

  

}

module.exports.help = {

    name: "nickname", 
    aliases: ['botnick', 'botnickname']

}
