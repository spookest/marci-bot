const Discord = require('Discord.js')
require('dotenv').config()

const TOKEN = 'OTQxMzQxNjY2MzAyOTA2NDQx.YgUivg.Xp2AXBFJ6Z6sCiPVx_b4oHxFUwU'

const client = new Discord.Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES'
    ]
})

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`) 
})

client.on('messageCreate', (message) => {
    if (message.content == 'marci'){
        message.reply('shut the fuck up bitch')
    }
})

client.login(process.env.TOKEN)