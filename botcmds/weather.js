const Discord = require("discord.js");
const weather = require("weather-js");
const botconfig = process.env

module.exports.run = async(bot, message, args) => {
  
  const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result){
    if(err) console.log(err);

    if(!args[0] || args[0] == "help") return message.channel.send(`Usage: c!weather <location>`);



  var current = result[0].current;
  var location = result[0].location;

  let wembed = new Discord.RichEmbed()
   .setDescription(`**${current.skytext}**`)
   .setAuthor(`Weather info for ${current.observationpoint}`)
   .setThumbnail(current.imageURL)
   .setColor(botconfig.green)
   .addField("Timezone", `UTC${location.timezone}`, true)
   .addField("DegreeType", location.degreetype, true)
   .addField("Temperature", `${current.temperature} degrees`, true)
   .addField("Feels Like", `${current.feelslike} degrees`, true)
   .addField("Winds", `${current.winddisplay}`, true)
   .addField("Humidity", `${current.humidity}%`, true)
   .setFooter("With the help of ⎝⧹๖̶̶̶ζ[Laknicek]⧸⎠#0279")
   .setTimestamp();


     message.channel.send(wembed);

  });


}

module.exports.help = {
  name: "weather", 
  aliases: [] 
}
