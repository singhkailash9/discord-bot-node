import { testCmd } from './commands/test.js';
import { helpCmd } from './commands/help.js';
import { memeCmd } from './commands/meme.js';
import { quoteCmd } from './commands/quote.js';
import { pfpCmd } from './commands/pfp.js';
import { hackCmd } from './commands/hack.js';

const prefix = '+';

const handler = (message) => {
    if (message.author.bot) return;

    if (message.content.startsWith(prefix)) {
        let [cmd_name, ...args] = message.content.trim().substring(prefix.length).split(/\s+/);
        cmd_name = cmd_name.toLowerCase();
        switch (cmd_name) {
            case 'test':
                testCmd(message);
                break;
            case 'help':
                helpCmd(message, args, prefix);
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
            case 'hack':
                hackCmd(message, args);
                break;
            default:
                // message.channel.send(`Not a valid command. Please try ${prefix}help`);
                message.react('❓')
                .catch(error => console.error(`Could not react to message: ${error}`));
        }
    };
}

export { handler }
