process.on('unhandledRejection', (reason, promise) => {let e = reason});process.on('rejectionHandled', (promise) => {let e = promise});process.on("uncaughtException", (err, origin) => {let e = err});process.on('uncaughtExceptionMonitor', (err, origin) => {let e = err});    
const chalk = require("chalk")
require('dotenv').config()
var fs = require("fs")
const readline = require('readline');
const {Client, MessageEmbed, WebhookClient, Interaction} = require("discord.js-selfbot-v13");
const internal = require("stream");
const webhook = new WebhookClient({url: process.env.webhook})
async function log(text) {
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    console.log(chalk.cyanBright("[Log] ") + chalk.blueBright(`[${year}/${month}/${date} - ${hours}:${minutes}:${seconds}] `) + chalk.blackBright(">> [ ") + chalk.hex("#c7c7c7")(text) + chalk.blackBright(" ]"))
    const embed = new MessageEmbed()
        .setTitle("Logs")
        .setDescription("```"+text+"```")
        .setTimestamp()
        .setColor("WHITE")
    webhook.send({content:" ", embeds: [embed]})
    
}

async function error(text) {
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    console.log(chalk.red("[Error] ") + chalk.blueBright(`[${year}/${month}/${date} - ${hours}:${minutes}:${seconds}] `) + chalk.blackBright(">> [ ") + chalk.red(text) + chalk.blackBright(" ]"))
    const embed = new MessageEmbed()
    .setTitle("Error")
    .setDescription("```"+text+"```")
    .setTimestamp()
    .setColor("RED")
webhook.send({content:" ", embeds: [embed]})

}

async function warn(text) {
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    console.log(chalk.yellow("[Warning] ") + chalk.blueBright(`[${year}/${month}/${date} - ${hours}:${minutes}:${seconds}] `) + chalk.blackBright(">> [ ") + chalk.yellow(text) + chalk.blackBright(" ]"))
    const embed = new MessageEmbed()
        .setTitle("Logs")
        .setDescription("```"+text+"```")
        .setTimestamp()
        .setColor("YELLOW")
    webhook.send({content:" ", embeds: [embed]})

}

console.clear()
console.log("\n")
console.log(chalk.magenta("░█████╗░██████╗░██████╗░░█████╗░██╗░░██╗    ███████╗░█████╗░██████╗░███╗░░░███╗███████╗██████╗░\n██╔══██╗██╔══██╗██╔══██╗██╔══██╗██║░██╔╝    ██╔════╝██╔══██╗██╔══██╗████╗░████║██╔════╝██╔══██╗\n██║░░██║██████╔╝██║░░██║███████║█████═╝░    █████╗░░███████║██████╔╝██╔████╔██║█████╗░░██████╔╝\n██║░░██║██╔══██╗██║░░██║██╔══██║██╔═██╗░    ██╔══╝░░██╔══██║██╔══██╗██║╚██╔╝██║██╔══╝░░██╔══██╗\n╚█████╔╝██║░░██║██████╔╝██║░░██║██║░╚██╗    ██║░░░░░██║░░██║██║░░██║██║░╚═╝░██║███████╗██║░░██║\n░╚════╝░╚═╝░░╚═╝╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝    ╚═╝░░░░░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░░░░╚═╝╚══════╝╚═╝░░╚═╝"))
console.log(chalk.cyan("\nCoded by @m87115 & @1ogi"))
console.log("______________________________________________________________________________________________\n\n")


if (fs.existsSync("tokens.txt")) {
    fs.readFile('tokens.txt', function(err, data) {
        if (!data.toString()) return warn("tokens.txt is empty, reading tokens from .env file ")
        try {
            log("started reading tokens.txt")
            const fileStream = fs.createReadStream('tokens.txt');
            const rl = readline.createInterface({
                input: fileStream,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                run(line)
            });
            rl.on('close', () => {
                log("finished reading tokens.txt, starting to read .env")
                if (!process.env.tokens) return warn("no tokens in env")
                try {
                const envarray = process.env.tokens.split("\n")
                for (const item of envarray) {
                    run(item)
                }
                log("Finished reading .env")
            } catch {
                warn("No tokens in .env file")
            }
            });
            
            } catch {
                warn("No tokens in tokens.txt file, starting to read tokens from .env")
        }
           
        })
         
}

if (!fs.existsSync("tokens.txt")) {
    warn("tokens.txt is not available, reading tokens from .env file ")
}

async function run(token) {
    if (!token || token === "" || token === " ") return
    const client = new Client({checkUpdate: false})
    client.on('ready', async ()=>{
        log(`${client.user.username} is ready and started farming`)
        const channel = client.channels.cache.get(process.env.channel)
        await channel.sendSlash('789861815211393055', 'mine') 
        
        setTimeout(async () => {
            await channel.sendSlash('789861815211393055', 'sell')  
        }, 3000) 
        setTimeout(async () => {
            await channel.sendSlash('789861815211393055', 'dozdi') 
        }, 6000) 
        setTimeout(async () => {
            await channel.sendSlash('789861815211393055', 'kar') 
        }, 9000) 
        setTimeout(async () => {
            await channel.sendSlash('789861815211393055', 'safar')
        }, 12000) 
        setTimeout(async () => {
            await channel.sendSlash('789861815211393055', 'kheirie give') 
        }, 15000) 
        setTimeout(async () => {
            await channel.sendSlash('789861815211393055', 'stream start')
        }, 18000) 
        setTimeout(async () => {
            await channel.sendSlash('789861815211393055', 'clan money') 
        }, 21000) 


        setInterval(async () => {
            await channel.sendSlash('789861815211393055', 'dozdi') 
        },610000)
        setInterval(async ()=> {
            await channel.sendSlash('789861815211393055', 'mine') 
        
            setTimeout(async () => {
                await channel.sendSlash('789861815211393055', 'sell')  
            }, 3000) 
            setTimeout(async () => {
                await channel.sendSlash('789861815211393055', 'kar') 
            }, 6000) 
            setTimeout(async () => {
                await channel.sendSlash('789861815211393055', 'safar')
            }, 9000) 
            setTimeout(async () => {
                await channel.sendSlash('789861815211393055', 'kheirie give') 
            }, 12000) 
            setTimeout(async () => {
                await channel.sendSlash('789861815211393055', 'stream start')
            }, 15000) 
            setTimeout(async () => {
                await channel.sendSlash('789861815211393055', 'clan money') 
            }, 18000) 
    
        }, 3610000)

    })
    client.on('messageCreate', async (message)=>{
        if (message.channel.id !== process.env.channel) return;
        if (message.author.id !== "789861815211393055") return;
        if (message.interaction.user.id !== client.user.id) return;
        if (message.interaction.commandName === 'sell') {
            setTimeout(async ()=> {
                await message.clickButton();

            }, 250)
        }
        if (message.interaction.commandName === "dozdi") {
            const password = message.embeds[0].fields[0].value.slice(28, -2);
            const btns = message.components[0].components
            for (const btn of btns) {
                if (btn.label === password) {
                    setTimeout(async ()=> {
                        await message.clickButton(btn.customId)
                    }, 250)
                }
            }
        }

    })
    client.on('messageCreate', async (message)=>{
        if (message.content.indexOf(process.env.prefix) !== 0) return;
        if (message.author.id !== process.env.ownerid) return; 
    
      
        const args = message.content.slice(process.env.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase()

        if (command === "pay") {
            if (args[0] === "owner") {
                await message.channel.sendSlash('789861815211393055', 'komak', process.env.ownerid , args[1])
            } else {
                await message.channel.sendSlash('789861815211393055', 'komak', args[0] , args[1])
            }
        }
        if (command === "run") {
            await message.channel.sendSlash('789861815211393055', args.join(" "))
        }
    
    })
    client.login(token)
}