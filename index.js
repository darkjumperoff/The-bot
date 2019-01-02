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

client.on('message', async message => {
 
    if(message.content === "Friends"){
        message.reply(":heart:*Flemin Bilou Gaytora Tedy EModzz Tweesch Erwan Valentin SMZ_Timber Pirarennaol*:heart:")
        console.log("Le bot dit bonjour")
    }
    
    if(message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#CC0000")
        .setTitle("list of my commands!")
        .setDescription("all my commands D:")
        .setThumbnail(message.author.avatarURL)
        .addField("channel", "link of the channel of my creator")
        .addField("Friends","list of my friends <3")
        .addField("invite","get the link of the discord")
        .setTimestamp()
        message.channel.send(help_embed);
    }
   
});
bot.login(process.env.TOKEN);
