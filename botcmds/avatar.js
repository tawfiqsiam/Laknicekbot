const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  let embed = new Discord.RichEmbed()
  let channel = message.channel
  let target = message.mentions.users.first() || message.author;
  let uicon = target.avatarURL;
  let avaEmbed = embed
  .setTitle(`${target.username}\*\*'s avatar picture! \*\*`)
  .setImage(uicon)

  channel.send(avaEmbed);
}

module.exports.help = {
    name: "avatar", 
    aliases: ['ava', 'pic']
}
