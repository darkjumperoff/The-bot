const Discord = require("discord.js");

var PREFIX = "D!";

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("The bot, D!help");
    console.log("Le bot a bien ete connecte");
});

bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()) {
        case "invite":
        message.channel.send("", {
            embed: {
                color: 0xF0000,
                author: message.author.name,
                title: '',
                fields: [{
                    name: "come test me! ",
                    value: "https://discord.gg/gFXxhyw",
                    inline: false
                }],
                footer: { 
                    footer: "share thislink with your friends !",
                },
            }
        });
        break;
    }
  
});

bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()) {
        case "channel":
        message.channel.send("", {
            embed: {
                color: 0xF0000,
                author: message.author.name,
                title: '',
                fields: [{
                    name: "the channel of my creator",
                    value: "https://www.youtube.com/channel/UCDt-Z_j3Wzm5YU1Z47_hNjA?view_as=subscriber",
                    inline: false
                }],
                footer: { 
                    footer: "share thislink with your friends !",
                },
            }
        });
        break;
    }
  
});

bot.login(process.env.TOKEN);
