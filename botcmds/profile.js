const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
    let target = message.mentions.users.first() || message.author;
    let uicon = target.avatarURL;
  
  let tbot = target.bot
if (tbot === true) {
    tbot = "Yes";
  } else {
    tbot = "No";
  }
  
  const status = {

  online: "Online",

  idle: "Idle",

  dnd: "Do Not Disturb",

  offline: "Offline/Invisible"

};
  
    let uinfoEmbed = new Discord.RichEmbed()
        .setTitle("**User Info**")
        .setColor("RANDOM")
        .setThumbnail(uicon)
        .addField("Account Name:", target.username)       
        .addField("Full Username", target.tag)
        .addField("ID", target.id)
        .addField("Is bot", tbot)
        .addField("Status", `${status[target.presence.status]}`, true)
	
        .addField("Playing", `${target.presence.game ? `${target.presence.game.name}` : "not playing anything."}`, true)

        
        .addField("Account Created At", target.createdAt)
        //.addField("Joined At", target.member.joinedAt)
        
        message.channel.send(uinfoEmbed)
}

module.exports.help = {
    name: "profile", 
    aliases: ['user', 'card']
}
