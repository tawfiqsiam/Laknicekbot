const Discord = require("discord.js");

const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  
 let msg = await message.channel.send("Generating...")

    let {body} = await superagent
    .get(`https://api-to.get-a.life/meme`)
    //console.log(body.file)
    if(!{body}) return message.channel.send("I broke! Try again.")

        let mEmbed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`MEMEZ From 2002 UwU!`, message.guild.iconURL)
        .setImage(body.url)
        .setTimestamp()
        .setFooter(`Laknicek Bot`, bot.user.displayAvatarURL)

        message.channel.send({embed: mEmbed})
}

module.exports.help = {

    name: "secret_meme", 
    aliases: []

}




