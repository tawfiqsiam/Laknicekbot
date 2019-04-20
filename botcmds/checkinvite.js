const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
const members = message.guild.members.filter(member => member.user.presence.game && /(discord\.(gg|io|me|li)\/.+|discordapp\.com\/invite\/.+)/i.test(member.user.presence.game.name));
  return message.channel.send(members.map(member => `\`${member.id}\` ${member.displayName}`).join("\n") || "Nobody has an invite link as game name.");
}

module.exports.help = {
    name: "checkinvite", 
    aliases: ['invitestatus'] 
}
