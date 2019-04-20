const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

   const prefix = "c!";

if(!message.content.startsWith(prefix))return;
  
  let {body} = await superagent
    .get(`http://aws.random.cat/meow`);

    let catEmbed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle("Cat 🐱")
    .setImage(body.file);

    return message.channel.send(catEmbed);
}

module.exports.help = {
    name: "cat", 
    aliases: ['gatto', 'kitty']
}
