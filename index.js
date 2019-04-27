const Discord = require("discord.js");

var PREFIX = "H!";

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("HumanTechBot, H!help");
    console.log("Le bot a bien ete connecte");
});

bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()) {
        case "Studio":
        message.channel.send("", {
            embed: {
                color: 0xF0000,
                author: message.author.name,
                title: '',
                fields: [{
                    name: "The official link of the Studio ",
                    value: "https://discord.gg/RCNguqk",
                    inline: false
                }],
                footer: { 
                    footer: "share this link with your friends !",
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
        case "creator":
        message.channel.send("", {
            embed: {
                color: 0xF0000,
                author: message.author.name,
                title: '',
                fields: [{
                    name: "our channel ",
                    value: "https://www.youtube.com/channel/UCXZgcCfp2fUdk7WoduVxS3Q",
                    inline: false
                }],
                footer: { 
                    footer: "share this link with your friends !",
                },
            }
        });
        break;
    }
  
});
bot.on('message',message =>{
    if(message.content === prefix + "info"){
        message.reply("this is the official bot of the studio made by darkjumper);
        console.log("commande effectuée");
    }
   

    if(message.content === prefix + "help"){
        message.channel.sendMessage("list of commands: H!info|H!invite|H!creator|H!Friends|Idea");
        console.log("commande effectuée");
        
    }

    if(message.content === prefix + "Friends"){
        message.reply(":heart:*Tedy EModzz Misterpanda  Erwan Valentin *:heart");
        console.log("commande effectuée");
    }

    if(message.content === prefix + "idea"){
        message.reply("if you have somes idea tell us ;)")
        console.log("commande effectuée")
    }
    
    if(message.content === prefix + "Launcher"){
        message.reply("The launcher for our game is here https://discord.gg/RP2QjhB ^^")
        console.log("commande effectuée")
    }


});

bot.login(process.env.TOKEN);
