const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  let channel = message.channel
  let target = message.mentions.users.first() || message.author;
  let embed = new Discord.RichEmbed()
  let messageArray = message.content.split(" ")
  let cmd = messageArray[0]
  let yourmessage = args.join(" ");
  
  if(message.author.id !== "410495079439007755") return message.channel.send(":x: | You cant use  the command : Remove Role\nReason: You dont have Manage Roles perm!");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send(":x: | Can't find that user, yo!")
  let role = args.slice(1).join(" ");
  if(!role) return message.channel.send("Specify a role!");
  let gRole = message.guild.roles.find(r => r.name === role);
  if(!gRole) return message.channel.send(":x: | Couldn't find that role.");
  
  if(!rMember.roles.has(gRole.id)) return message.channel.send("They don't have that role.");
  await(rMember.removeRole(gRole.id));
  
  try{
    await console.log("Wubbaduck")
  }catch(e){
  console.log("Remove role")
  }
  console.log(role)
  
  message.channel.send(":white_check_mark: | Succesfully removed role!")
  
}

module.exports.help = {
    name: "devunrole", 
    aliases: ['dunrole']
}
