const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const ms = require("ms");
const superagent = require("superagent");
const weather = require("weather-js");
const prefix = 'c!';
const moment = require("moment");
const { readdir } = require("fs");
const os = require("os");
const config = require("./config.json")



bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

const load = dir => {
    readdir(dir, (err, files) => {
        if(err) throw err;
        const jsfiles = files.filter(f => f.endsWith('.js'));

        jsfiles.forEach(f => {
            delete require.cache[require.resolve(`${dir}${f}`)];

            const props = require(`${dir}${f}`);
            //console.log(`Preparing commands... `);
            
            bot.commands.set(props.help.name, props);
            if (props.help.aliases) props.help.aliases.forEach(alias => bot.aliases.set(alias, props.help.name));
        });
    });
}

load("./botcmds/");


bot.on("ready", async () => {
  console.log(`[BOT] Commands Loaded! \n[BOT] Online on ${bot.guilds.size} servers!`);
  bot.user.setStatus(`online`)
});

bot.on("message", async message => {
    if (message.author.bot || message.channel.type != "text") return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (!message.content.startsWith(prefix)) return;

    
let command;

if (bot.commands.has(cmd)) {
        command = bot.commands.get(cmd);
    } else if (bot.aliases.has(cmd)) {
        command = bot.commands.get(bot.aliases.get(cmd));
    }

    if(command) command.run(bot, message, args);

    


bot.on("error", console.error);





  // MESSAGE LOGGER //
  //if (message.channel.type == "text") return;
  //console.log(`Server : ${message.guild.name} | Channel : #${message.channel.name} | User : ${message.author.tag} | Message : ${message.content}\n`);
  //console.log(`User : ${message.author.tag} | Message : ${message.content}\n\n`);
  
  // END OF MESSAGE LOGGER //
  
  let channel = message.channel
  let target = message.mentions.users.first() || message.author;
  let embed = new Discord.RichEmbed()
  let messageArray = message.content.split(" ")
  
  let candys = require("./candys.json");
  
  if(!candys[message.author.id]){
    candys[message.author.id] = {
      candys: 0
    }
  }
  
  let donutAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  
  if(donutAmt === baseAmt){
    candys[message.author.id] = {
      candys: candys[message.author.id].candys + donutAmt
    };
  fs.writeFile("./candys.json", JSON.stringify(candys), (err) => {
    if (err) console.log(err)
  });
  let donutEmbed = embed
  .setAuthor(message.author.username)
  .setColor("RANDOM")
  .addField("🍬", `${donutAmt} candys added!`)
  
  //message.channel.send(donutEmbed).then(msg => {msg.delete(5000)});
  }
  
  
  /*
  
  if(cmd === `${prefix}eval`) {
   
    if(message.author.id !== `${config.ownerID}`) return message.reply("You're not my developer!")

     
      

  try {
    var code = args.join(" ");
    var evaled = eval(code);
    
    if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled);
    
    let iferr = clean(evaled);
  } catch(err) {
    if (err) {
      iferr = (`\`ERROR\` \`\`\`x1\n${clean(err)}\n\`\`\``);
    
  }
  let evalEmbed = embed
 .setTitle("Evaluation")
 .addField("Input 📥", `${code}`)
 .addField("Output 📤", `${iferr}`) 
 
  message.channel.send(evalEmbed);
 return;
  }
    

  function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/` /g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  } else {
        return text;
  }
   } 
   } */
});




bot.login(process.env.TOKEN);
