const Discord = require("discord.js");
const fs = require("fs");
let candys = require("../candys.json");


module.exports.run = async (bot, message, args) => {
  
 const prefix = "c!";
  if(!message.content.startsWith(prefix))return;  
  
let bank = candys[message.author.id].candys

if(bank < args[0]) return message.channel.send(":x: | Not enought candies!");
if(!args[0]) return message.channel.send("Please specify an ammount!")
if(!args[1]) return message.channel.send("Please choose a side!")
  
  let possiblites = ["Heads", "Tails"]
  let result = possiblites[Math.floor(Math.random() * possiblites.length)]
  if(args[1] != result){
        candys[message.author.id].candys = candys[message.author.id].candys -= parseInt(args[0])
        return message.channel.send(`${result}. You lost ${args[0]} candies.`)
    }
  let res = args[0] * 2
    candys[message.author.id].candys = candys[message.author.id].candys += parseInt(res)
    return message.channel.send(`${result}. You won ${res} candies.`)

}

module.exports.help = {
    name: "flip", 
    aliases: []
}


