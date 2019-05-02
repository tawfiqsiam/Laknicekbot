const Discord = require("discord.js");
let candys = require("../candys.json");

module.exports.run = async (bot, message, args) => {

  const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  let target = message.mentions.users.first() || message.author;
  if(!candys[target.id]){
    candys[target.id] = {
      candys: 1000
    };
  }
  
  let bank = candys[message.author.id]
  
  let uDonuts = candys[target.id].candys;
  let donutEmbed = new Discord.RichEmbed()
  .setTitle("Candy Bank Account!")
  .setColor("RANDOM")
  .setDescription(`🍬 Hey **${target.tag}**\n\nYou have ${uDonuts} Candies ***UwU**! 🍬`)
  .setFooter("🍬🚐 Want more candies? Then come to this van 🚐🍬 :)")
  
  message.channel.send(donutEmbed)

}

module.exports.help = {
    name: "balance", 
    aliases: ['bal', 'bank', 'wallet']
}
