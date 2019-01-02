const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("The bot, D!help");
    console.log("Le bot est connecté");
});

bot.login("NTI5Nzg3Mzg1NDg4MDgwODk3.Dw4e_g.LjAkFH8t4M9ZmMXpALKYFsY80no");
