const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
  
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  let embed = new Discord.RichEmbed()
  let channel = message.channel
  let target = message.mentions.users.first() || message.author;
  
  if(message.author.id !== `277829088461193216`) return message.reply("You're not my developer!")
    let dmsend = args.join(" ");
    message.channel.send(`:white_check_mark: | Sent to ${target.tag}`)
try{   
    await target.send(`Message from developer ${message.author.tag} : ` + `**${dmsend}**`)
  }catch(e){
    channel.send("Their Dms are locked!")
  }
  }

module.exports.help = {
    name: "devdm", 
    aliases: ['developerdm']
}
