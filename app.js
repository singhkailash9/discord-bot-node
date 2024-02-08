require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');
const { testCmd } = require("./commands/test");
const { helpCmd } = require("./commands/help");
const { memeCmd } = require('./commands/meme');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const prefix = '+';

client.once('ready', () => {
	console.log(`${client.user.tag} has logged in`);
});

client.on('messageCreate', message => {
    if (message.author.bot) return;

    if (message.content.startsWith(prefix)) {
		const [cmd_name, ...args] = message.content.trim().substring(prefix.length).split(/\s+/);
        switch (cmd_name) {
            case 'test':
                testCmd(message);
                break;
            case 'help':
                helpCmd(message, prefix);
                break;
            case 'meme':
                memeCmd(message);
                break;
            default:
                message.channel.send(`Not a valid command. Please try ${prefix}help`);
            }
        }
});

client.login(process.env.BOT_TOKEN);
