const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {

  const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  let channel = message.channel
  let target = message.mentions.users.first() || message.author;
  let embed = new Discord.RichEmbed()
  let messageArray = message.content.split(" ")
  let cmd = messageArray[0]
  let yourmessage = args.join(" ");
  
  if(message.author.id !== `${config.ownerID}`) return message.channel.send(":x: | You cant use  the command : Add Role\nReason: You are not my owner!");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send(":x: | Can't find that user, yo!")
  let role = args.slice(1).join(" ");
  if(!role) return message.channel.send("Specify a role!");
  let gRole = message.guild.roles.find(r => r.name === role);
  if(!gRole) return message.channel.send(":x: | Couldn't find that role .-. .");
  
  if(rMember.roles.has(gRole.id)) return message.channel.send("They already have that role xD.");
  await(rMember.addRole(gRole.id));
  
  try{
    await console.log("OMG")
  }catch(e){
    console.log("Woah") 
     }
  console.log(role)
  
  message.channel.send(":white_check_mark: | Yayy Succesfully added The Role role ***UwU**! | :white_check_mark:")
}

module.exports.help = {
    name: "devrole", 
    aliases: ['addrole']
}
