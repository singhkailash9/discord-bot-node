require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');
const { test_cmd } = require("./commands/test");
const { help_cmd } = require("./commands/help")

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
                test_cmd(message);
                break;
            case 'help':
                help_cmd(message, prefix);
                break;
            default:
                message.channel.send(`Not a valid command. Please try ${prefix}help`);
            }
        }
});

client.login(process.env.BOT_TOKEN);
