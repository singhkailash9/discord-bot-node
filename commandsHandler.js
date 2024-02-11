import { testCmd } from './commands/Misc/test.js';
import { helpCmd } from './commands/Misc/help.js';
import { memeCmd } from './commands/Fun/meme.js';
import { quoteCmd } from './commands/Fun/quote.js';
import { pfpCmd } from './commands/Utility/pfp.js';
import { hackCmd } from './commands/Fun/hack.js';
import { userInfoCmd } from './commands/Utility/userinfo.js';

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
            case 'userinfo':
                userInfoCmd(message);
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
