const Discord = require("discord.js");
const PREFIX = "!!" // prefix untuk bot kalian

var bot = new Discord.Client();

// events
bot.on("ready",function(){
    bot.user.setGame("Hi, I'm Ready To Take Orders"); // btw, ini udah Depreceated :v
    console.log(`${bot.user.username} sudah diHidupkan`);
});

bot.on("message", function(message) {
    if(!message.guild) return; // ini juga membuat bot kalian tidak merespons di DM
    if(message.author.bot) return; // ini akan membuat bot tidak berfungsi jika bukan manusia 
    if(!message.content.startsWith(PREFIX)) return; // ini membuat  Bot tidak merespon jika tidak memakai prefix

    var args = message.content.substring(PREFIX.length).split(" ");
    var command = args[0].toLowerCase();

//commands//
    if(command == "ping") { // perintah
        message.channel.send("What's Up Motherfucker!!");
    }
});

//bot login
bot.login("NzA4NzYwNjYwMDc0Mjk5NDM0.XrctqA.-qcDv8KkUWDAb7AoBQTBpDWFJAc");
