const Discord = require("discord.js");

var PREEFIX = "D!";

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("The bot, D!help");
    console.log("Le bot est connecté");
});

bot.once("message", async function (message){
    if (message.author.equals(bot.user)) return; 

    if(!message.content.startsWith(PREFIX)) return; 

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()) {

    }
case "invite":
message.channel.send("test")
break;

//BREAK
//DEFAULT


});

bot.login("process.env.TOKEN");
