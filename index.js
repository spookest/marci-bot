const Discord = require('Discord.js')
const { TOKEN } = require('./config.json')
const fs = require('fs');

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
    if (message.content == 'rule34' || message.content == 'rule 34' ||
        message.content == 'Rule34' || message.content == 'Rule 34' ||
        message.content == 'R34' || message.content == 'r34' ||
        message.content == 'Marci rule 34' || message.content == 'marci Rule 34' || 
        message.content == 'Marci rule34' || message.content == 'Marci rule 34'){
        message.channel.send(`shut up philip`)
    }

    if (message.content == 'tetris'){
        message.channel.send(`do not play tetris`)
    }
        
    if (message.content == 'who is philip' || message.content == 'Who is Philip' || 
    message.content == 'who is arci' || message.content == 'Who is Marci'){
    message.channel.send({files: ['https://cdn.discordapp.com/attachments/445241749229535233/941806890193653780/Screen_Shot_2022-02-12_at_7.24.18_AM.png', 'https://media.discordapp.net/attachments/445241749229535233/941807483943526420/unknown.png', 'https://cdn.discordapp.com/attachments/445241749229535233/941806395324497990/unknown.png']})
    }

    fs.readdir('./image', (err, files) => {
        const randImage = files[Math.floor(Math.random() * files.length)];
        if (message.content == 'philip' || message.content == 'Philip' || message.content == 'anti christ gaming'){
            message.channel.send({files: ["./image/"+randImage]})
        }

        if (message.content == 'marci' || message.content == 'Marci'){
            const messages = ['shut up bitch', 'bet those shoes raggedy', 'no', '🤔', '🗿', {files: ['https://c.tenor.com/uDE93MDgYakAAAAC/marci-judging.gif']}]
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            message.channel.send(randomMessage)
        }
    })
})

client.login(TOKEN)