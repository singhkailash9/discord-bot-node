import { testCmd } from './commands/test.js';
import { helpCmd } from './commands/help.js';
import { memeCmd } from './commands/meme.js';
import { quoteCmd } from './commands/quote.js';
import { pfpCmd } from './commands/pfp.js';

const prefix = '+';

const handler = (message) => {
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
            case 'pfp':
                pfpCmd(message);
                break;
            default:
                message.channel.send(`Not a valid command. Please try ${prefix}help`);
        }
    };
}

export { handler }
