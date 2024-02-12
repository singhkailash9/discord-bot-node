import { hackCmd } from '../commands/Fun/hack.js';
import { memeCmd } from '../commands/Fun/meme.js';
import { quoteCmd } from '../commands/Fun/quote.js';
import { helpCmd } from '../commands/Misc/help.js';
import { testCmd } from '../commands/Misc/test.js';
import { defineCmd } from '../commands/Utility/define.js';
import { pfpCmd } from '../commands/Utility/pfp.js';
import { userInfoCmd } from '../commands/Utility/userinfo.js';

const commandList = {
    hack: {
        execute: hackCmd,
        description: 'Hack a user. Pass a username or mention them along with command.',
        category: 'Fun',
    },
    meme: {
        execute: memeCmd,
        description: 'Shows a random meme from Reddit.',
        category: 'Fun',
    },
    quote: {
        execute: quoteCmd,
        description: 'Shows a random quote.',
        category: 'Fun',
    },
    help: {
        execute: helpCmd,
        description: 'Help command to get started.',
        category: 'Misc',
        options: [
            {
                "name": "commandname",
                "description": "The command to get help for",
                "type": 3, // Type 3 is STRING
                "required": false
            }
        ]
    },
    test: {
        execute: testCmd,
        description: 'Test command for embed and bot status.',
        category: 'Misc',
    },
    define: {
        execute: defineCmd,
        description: 'Returns the definition of an English word.',
        category: 'Utility',
    },
    pfp: {
        execute: pfpCmd,
        description: 'Displays the profile picture of a user.',
        category: 'Utility',
    },
    userinfo: {
        execute: userInfoCmd,
        description: 'Displays the detailed information of a user.',
        category: 'Utility',
    },
};

export default commandList;
