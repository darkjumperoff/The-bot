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
message.channel.send("",{
   embed:{
       color: 0xF0000
       author:message.author.name
       title:'',
       fields:[{
           name:"come test me"
           value:"https://discord.gg/gFXxhyw"
           inline: false
       }]
       footer: {
           footer:"share this link",
        
       },
   } 
});

break;

//BREAK
//DEFAULT





const Discord = require("discord.js");

var PREFIX = "!";

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("TutoBot, !help");
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
                color: 0xFF0000,
                author: message.author.name,
                title: '',
                fields: [{
                    name: "Lien d'invitation discord",
                    value: "https://discord.gg/CsH3kj",
                    inline: false
                }],
                footer: {
                    footer: "Partager ce lien à tous vos amis !",
                },
            }
        });
        break;
    }
});

bot.login(process.env.TOKEN);
 
