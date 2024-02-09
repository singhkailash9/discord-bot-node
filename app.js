import dotenv from 'dotenv';
dotenv.config();

import { Client, GatewayIntentBits } from 'discord.js';
import { testCmd } from './commands/test.js';
import { helpCmd } from './commands/help.js';
import { memeCmd } from './commands/meme.js';
import { quoteCmd } from './commands/quote.js';

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
            case 'quote':
                quoteCmd(message);
                break;
            default:
                message.channel.send(`Not a valid command. Please try ${prefix}help`);
            }
        }
});

client.login(process.env.BOT_TOKEN);
