const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  let supportEmbed = new Discord.RichEmbed()
  .setTitle("**Support/Tips**")
  .setDescription("**Those are tips if the bot is not working**")
  .setColor("RANDOM")
  .addField("If there are no logs of bans/kicks form Laknicek-Bot", "**Make a channel called logs**", true)
  .addField("If the ban / kick commands are not working", "**Be sure that the bot has Administrator Permissions**", true)
  .setAuthor(message.author.tag)

  message.author.send(supportEmbed);
  message.send("Support sent in DM's! :wink:");
}

module.exports.help = {
    name: "support", 
    aliases: []
}
