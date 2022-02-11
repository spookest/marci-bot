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
    if (message.content == 'marci' || message.content == 'Marci'){
        message.reply(`shut up bitch`)
    }

    if (message.content == 'rule34' || message.content == 'marci rule 34' || message.content == 'marci rule34' || 
        message.content == 'Marci rule34' || message.content == 'Marci rule 34'){
        message.reply(`shut up philip`)
    }
})

client.login(process.env.TOKEN)