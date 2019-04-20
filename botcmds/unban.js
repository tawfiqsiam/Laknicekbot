const Discord = require("discord.js") 

module.exports.run = async (bot, message, args) => {
	
  /* Split the message into an array with
   * [0] = the command (in this case 'unban')
   * [1] = the to-be unbanned member
   * [2..n] = the unban reason split on each spaceconst prefix = "c!";
  if(!message.content.startsWith(prefix))return;
   */
 

  // Removes the command from the message string


  // Slices the first element (which is the to-be unbanned user) 
  //   and combines the rest to create the unban reason
	
	const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
	
  let reason = args.slice(1).join(' ');

  bot.unbanReason = reason;
  bot.unbanAuth = message.author;
  let user = args[0];

  if (reason.length < 1) return message.reply('You must supply a reason for the unban.');
  if (!user) return message.reply('You must supply a User Resolvable, such as a user id.').catch(console.error);
  message.guild.unban(user);
};


module.exports.help = {
	name: "unban", 
        aliases: ['uba'] 
}
