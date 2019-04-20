const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  let target = message.mentions.users.first() || message.author;
  let inviteEmbed = new Discord.RichEmbed()
  .setTitle("Invitation!")
  .setDescription("\n[Click me](https://discordapp.com/oauth2/authorize?client_id=476743559912095755&permissions=2146958839&scope=bot) to invite the bot!\n\nOr:\n\nInvite the bot from my [Official Site](https://cipbot.weebly.com/cipbot.html)!\n\nRequested by:")
  .setColor("RANDOM")
  .setFooter(target.username, target.avatarURL)
 
  message.author.send(inviteEmbed)
  message.channel.send("Look in your DM's! :wink:")
}

module.exports.help = {
    name: "invite", 
    aliases: []
}
