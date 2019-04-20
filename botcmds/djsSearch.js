const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
  
   const prefix = "c!";
  if(!message.content.startsWith(prefix))return;
  
  // Make sure you require node-fetch, because we will have to make an API request

const fetch = require('node-fetch');

// Define what the search query is, most likely, that would be args.join(' ')

const query = args.join(' ');

// You can construct a url from that, using this REST API

const url = `https://djsdocs.sorta.moe/main/stable/embed?q=${encodeURIComponent(query)}`;

// We need to fetch that url

fetch(url)

  // Get the JSON response

  .then(res => res.json())

  .then(embed => {

    // The request was make successfull, now let's see if there was a result found

    if(embed && !embed.error) {

      // Yes there was, let's send it!

      message.channel.send({ embed });

    } else {

      // Nope, no results found, let's let the user know

      message.reply(`I don't know mate, but "${query}" doesn't make any sense!`);

    }

  })

  .catch(e => {

    // Whoops, some error occured, let's log it and notify the user

    console.error(e);

    message.reply('Darn it! I failed!');

  })

 
}

module.exports.help = {
    name: "djs",
    aliases: []
}
