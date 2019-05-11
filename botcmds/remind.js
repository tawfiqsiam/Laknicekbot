const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  let possiblites = ["New Reminder!", "Reminder Set!", "Reminder!"]
  let result = possiblites[Math.floor(Math.random() * possiblites.length)]
  
  message.delete().catch();
  
  let normalE = new Discord.RichEmbed()
  .setTitle(result)
  .setDescription(`${args.join(" ")}`)
  .setColor("RANDOM")
  .setFooter("Your reminders are secured by Laknicek-Bot")
  
  message.channel.send("Reminder Created!")
  message.author.send(normalE)

  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~")
  console.log(message.author.tag)
  console.log(normalE.description)
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~")
  

  
}

module.exports.help = {
    name: "remind",
    aliases: ['reminder']
}
