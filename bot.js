const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
})

// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"
bot_secret_token = "NTQ3NzY5MzYzNDIwNDEzOTUy.D07lmQ.pSEetB9_naYqX1BEuiRZSpJ0x6g"

client.login(bot_secret_token)
