const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  

   const prefix = "c!";

  if(!message.content.startsWith(prefix))return;

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Sorry But Laknicek Don't Alow You To use This Command! :(");
let target = message.mentions.channels.first()
let botmsg = args.slice(1).join(" ")

message.delete().catch()

  if(!target) return message.channel.send("Please mention a channel first");
                                         
  
target.send(botmsg);

}

module.exports.help = {

    name: "say", 
    aliases: []

}
