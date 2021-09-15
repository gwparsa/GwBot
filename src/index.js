const Discord = require("discord.js");
    const { MessageEmbed } = require("discord.js");
        const { Collection, Client } = require("discord.js");
            const { token} = require("./config.json");
                const config = require("./config.json");
                    const client = new Discord.Client({ disableEveryone: true });

        client.on("ready", () => {
            client.user.setPresence({ activity: { name: `Type gw!help` , type: 'COMPETING'}, status: 'dnd' })
                console.log('> Bot Activity Set Shod !');
        });
            client.on('ready', () => {
                console.log("> "+`${client.user.username} Login Kard !`);
            });

client.on('message', (message) => {
        if (message.author.bot) return;
            console.log(`[${message.author.tag}] >> ${message.content}`);
    if (message.content === 'salam') {
        message.reply(' Salam Azizm! Khosh Umadi.')     
    }
        if (message.content === 'yo') {
            message.reply(' Salam Azizm! Khosh Umadi.')     
        }
            if (message.content === 'slm') {
                message.reply(' Salam Azizm! Khosh Umadi.')     
            }
                if (message.content === 'سلام') {
                    message.reply(' Salam Azizm! Khosh Umadi.')     
                }
                    if (message.content === 'hello') {
                        message.reply(' Salam Azizm! Khosh Umadi.')     
                    }
                        if (message.content === 'hi') {
                            message.reply(' Salam Azizm! Khosh Umadi.')     
                        }
                    if (message.content === 'Salam') {
                        message.reply(' Salam Azizm! Khosh Umadi.')     
                    }
                if (message.content === 'Yo') {
                    message.reply(' Salam Azizm! Khosh Umadi.')     
                }
            if (message.content === 'Slm') {
                message.reply(' Salam Azizm! Khosh Umadi.')     
            }
        if (message.content === 'Hello') {
            message.reply(' Salam Azizm! Khosh Umadi.')     
        }
    if (message.content === 'Hi') {
        message.reply(' Salam Azizm! Khosh Umadi.')     
    }
});

client.login(token)
    console.log("> Bot Roshan Shod !");
        console.log("> WebSite > https://gwparsa.ir");
            console.log("> Dar Hal Login Kardan...");
                console.log("> Log Faal Shod !");
