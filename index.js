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
        message.content == 'Marci rule 34' || message.content == 'marci rule 34' || 
        message.content == 'Marci rule34' || message.content == 'Marci rule 34'){
        message.channel.send(`https://cdn.discordapp.com/attachments/941366925643120682/942368932893970432/index_2.gif`)
    }

    if (message.content == 'tetris' || message.content == 'Tetris'){
        message.channel.send(`do not play tetris`)
    }
        
    if (message.content == 'philip' || message.content == 'Philip'){
        const messages = [
                        'https://cdn.discordapp.com/attachments/335051631810838538/942311626734968832/squl4h.mp4', 
                        'https://media.discordapp.net/attachments/445241749229535233/941809991231369226/Screen_Shot_2022-02-12_at_7.36.38_AM.png',
                        'https://media.discordapp.net/attachments/445241749229535233/942380261390299136/philip_4.png',
                        'https://media.discordapp.net/attachments/445241749229535233/942378525997011004/philip_11.png',
                        'https://media.discordapp.net/attachments/445241749229535233/942373907112022036/philip_9.png',
                        'https://media.discordapp.net/attachments/445241749229535233/942370305433825320/philip_10.png',
                        'https://media.discordapp.net/attachments/445241749229535233/942348273597960232/philip_2.png',
                        'https://media.discordapp.net/attachments/445241749229535233/942348249086459924/philip_7.png',
                        'https://media.discordapp.net/attachments/445241749229535233/942348226793725983/philip_6.png',
                        'https://cdn.discordapp.com/attachments/445241749229535233/942154669034201148/philip_3.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941811767825301515/unknown.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941804140370231406/Screen_Shot_2022-02-12_at_7.13.22_AM.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941913831259635712/unknown-27.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941807219077419109/unknown.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941934359424958505/unknown.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941954244074950676/Screen_Shot_2022-02-12_at_7.24.18_AM.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941809991231369226/Screen_Shot_2022-02-12_at_7.36.38_AM.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941959568236351498/unknown-29.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941807416729813034/unknown.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941807431112089650/Screen_Shot_2022-02-12_at_7.26.27_AM.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941807483943526420/unknown.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941807559940141116/unknown.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941807977374040185/unknown.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941808259684262008/Screen_Shot_2022-02-12_at_7.29.45_AM.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941808518917394522/unknown.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941806395324497990/unknown.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941805835393327125/unknown.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941805651993182229/unknown.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941805567448584212/Screen_Shot_2022-02-12_at_7.19.03_AM.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941805449039208558/unknown.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941805020058378280/unknown.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941804584811257948/unknown.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941804556461961236/unknown.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941804399083262002/Screen_Shot_2022-02-12_at_7.14.25_AM.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941804305260875796/unknown.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941804211287502888/unknown.png?width=374&height=669',
                        'https://media.discordapp.net/attachments/445241749229535233/941803962212974592/unknown.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941804012913717338/unknown.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941803892893708298/unknown.png?width=411&height=670',
                        'https://media.discordapp.net/attachments/445241749229535233/941803856164163614/Screen_Shot_2022-02-12_at_7.12.14_AM.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941803833896628274/unknown.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941803726769893436/Screen_Shot_2022-02-12_at_7.11.44_AM.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941803506321465374/unknown.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941803261030191134/Screen_Shot_2022-02-12_at_7.09.53_AM.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941803170194153502/Screen_Shot_2022-02-12_at_7.09.31_AM.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941802975272247356/unknown.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941802875980505118/unknown.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941802842249896028/unknown.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941802638696128512/Screen_Shot_2022-02-12_at_7.07.24_AM.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941802509977149440/Screen_Shot_2022-02-12_at_7.06.53_AM.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941802308470206474/unknown.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941802196406771722/Screen_Shot_2022-02-12_at_7.05.39_AM.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941801839509270638/Screen_Shot_2022-02-12_at_7.04.13_AM.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941801768973639702/unknown.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941801576991952996/unknown.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941801352093372426/unknown.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941801397895200798/unknown.png',
                        'https://media.discordapp.net/attachments/445241749229535233/941800927151661177/unknown.png',
                        ]
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        message.channel.send(randomMessage)
    }

    /*
    fs.readdir('./image/philip/', (err, files) => {
        const randImage = files[Math.floor(Math.random() * files.length)];
        if (message.content == 'philip' || message.content == 'Philip' || message.content == 'anti christ gaming'){
            message.channel.send({files: ["./image/philip/"+randImage]})
        }
    */

    if (message.content == 'marci' || message.content == 'Marci'){
        const messages = ['shut up bitch', 'bet those shoes raggedy', 'no', '🤔', '🗿', 'i will brutally beat you to death','https://cdn.discordapp.com/attachments/941366925643120682/942365801124593744/longer_marci.gif', ]
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        message.channel.send(randomMessage)
    }

    if (message.content == 'who eat da chicken'){
        const messages = ['https://preview.redd.it/qnjywlcddjw71.png?width=501&format=png&auto=webp&s=6443d4a4a136a84105cb57a3273e948a1ba73110']
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        message.channel.send(randomMessage)
    }
})

client.login(TOKEN)