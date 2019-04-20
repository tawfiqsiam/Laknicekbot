const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  let target = message.mentions.users.first() || message.author;
  let inviteEmbed = new Discord.RichEmbed()
  .setTitle("Invitation!")
  .setDescription("\n[Click me](https://discordapp.com/api/oauth2/authorize?client_id=551044385735835648&permissions=0&scope=bot) to invite the bot!\n\nOr:\n\nInvite the bot from my [Official Site](https://cipbot.weebly.com/cipbot.html)!\n\nRequested by:")
  .setColor("RANDOM")
  .setFooter(target.username, target.avatarURL)
 
  message.author.send(inviteEmbed)
  message.channel.send("Look in your DM's! :wink:")
}

module.exports.help = {
    name: "invite", 
    aliases: []
}
