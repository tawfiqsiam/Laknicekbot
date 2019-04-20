const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  


  let channel = await message.guild.createChannel(`ticket-${message.author.username}`, "text").catch(ex => console.error);
  let reason = args.join(" ")  

  let group = message.guild.channels.find(c => c.name == "Tickets" && c.type == "category");
  
  let channelid = channel.id
  
  let embedo = new Discord.RichEmbed()
  .setTitle("✅ New ticket Created!")
  .setDescription(`Ticket created at: <#${channelid}>`)
  .setColor("RANDOM")
  
  let helbed = new Discord.RichEmbed()
  .setTitle("Ticket Created!")
  .setColor("RANDOM")
  .setDescription("Be patient! You will get help soon! Use c!close to close the ticket!")
  .addField("Reason", `${reason}`)
  
  if (!group) {
  message.guild.createChannel("Tickets", "category")
  channel.setParent(group.id)
  } else {
  channel.setParent(group.id)
  }


  
  
  
  const Roles = await message.member.roles.array()
  let AuthorRoles = message.guild.createRole({
    name: message.author.username
   }).catch(ex => console.log(ex));
  Roles.forEach(async(role) => {
    await channel.overwritePermissions(role, {
      READ_MESSAGES: false, 
      VIEW_CHANNEL: false
     }); 
   });
 let AuthorRole = message.guild.roles.find(r => r.name == `${message.author.username}`);

                                        
  await channel.overwritePermissions(message.author, {
    READ_MESSAGES: true, 
    VIEW_CHANNEL: true, 
    SEND_MESSAGES: true

   });

channel.send(helbed)
message.channel.send(embedo)
    return;

   };

module.exports.help = {
    name: "new", 
    aliases: ['ticket']
}
