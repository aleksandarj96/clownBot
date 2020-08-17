const Discord = require('discord.js')
const client = new Discord.Client()

const token = 'NzQzODU5NTc5OTM4NTM3NTE1.XzazOA.zlq6d9LgQ_kOaVbAekRaAXLmm14'
const prefix = '!'

const fs = require('fs')
client.commands = new Discord.Collection()


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js')) //Go into commands folder
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command)
}

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return; //if message start != ! and bot is author, do nothing. 

    const args = message.content.slice(prefix.length).split(/ +/) //To be able to send several commands or add arguments: !command argument
    const command = args.shift().toLowerCase()

    client.commands.get(command.toString()).execute(message, args)

    /*
    if(command === 'clown'){

        client.commands.get('clown').execute(message, args)

    }else if(command == 'git'){

        client.commands.get('git').execute(message, args)

    }else if(command == 'randomclown'){
git 
        client.commands.get('randomclown').execute(message, args)
        
    }
    */
    
})

client.login(token)

