const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {

  const prefix = "c!" || "pls ";

  if(!message.content.startsWith(prefix))return;
    
    let reddit = [
        "animemes",
        "MemesOfAnime",
        "animememes",
        "AnimeFunny"
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    message.channel.startTyping();
  
    randomPuppy(subreddit).then(async url => {
            await message.channel.send({
                files: [{
                    attachment: url,
                    name: 'meme.png'
                }]
            }).then(() => message.channel.stopTyping());
    }).catch(err => console.error(err));

};

module.exports.help = {
    name: "animememe", 
    aliases: ['ameme']
}
