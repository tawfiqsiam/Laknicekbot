const Discord = require("discord.js");
const fs = require("fs");
let candys = require("../candys.json");

module.exports.run = async (bot, message, args) => {
  
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  if(!candys[message.author.id]){
  

    return message.reply("You don't have any candies!")
  };
  
  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  
  if(!candys[pUser.id]){
    candys[pUser.id] = {
      candys: 1
    };
  }
  
  
  let pCoins = candys[pUser.id].candys;
  let sCoins = candys[message.author.id].candys;
  
  if(sCoins < args[1]) return message.reply("You don't have enought coins!.");
  if(sCoins === "NaN") return message.channel.send("Reset me!")
  if(!sCoins) return message.channel.send(`You only have **${sCoins}** donuts. You need **${args[1]}** more donuts to do that`)
  
  candys[message.author.id] = {
    candys: sCoins - parseInt(args[1])
  };
  
  candys[pUser.id] = {
    candys: pCoins + parseInt(args[1])
  };
  
  let payEmbed = new Discord.RichEmbed()
  .setTitle("🍩 Transaction complete! 🍩")
  .setColor("RANDOM")
  .addField("Sender :", message.author.tag)
  .addField("Reciver :", pUser)
  .addField("🍩 Ammount :", `${args[1]} candies`)
  message.channel.send(payEmbed)
  
  fs.writeFile("./candys.json", JSON.stringify(candys), (err) => {
    if(err) console.log(err)
  });
  
  
  
}

module.exports.help = {
    name: "pay", 
    aliases: ['give']
}
