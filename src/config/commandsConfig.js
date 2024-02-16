import { gifCmd } from '../commands/Fun/gif.js';
import { hackCmd } from '../commands/Fun/hack.js';
import { memeCmd } from '../commands/Fun/meme.js';
import { quoteCmd } from '../commands/Fun/quote.js';
import { helpCmd } from '../commands/Misc/help.js';
import { testCmd } from '../commands/Misc/test.js';
import { pokeCmd } from '../commands/Poke/poke.js';
import { defineCmd } from '../commands/Utility/define.js';
import { pfpCmd } from '../commands/Utility/pfp.js';
import { userInfoCmd } from '../commands/Utility/userinfo.js';

const commandList = {
    gif: {
        execute: gifCmd,
        description: 'Sends a gif based on the query provided.',
        category: 'Fun',
        options: [
            {
                "name": "query",
                "description": "Type the query for gif you need.",
                "type": 3,
                "required": true
            }
        ],
    },
    hack: {
        execute: hackCmd,
        description: 'Hack a user. Pass a username or mention them along with command.',
        category: 'Fun',
        options: [
            {
                "name": "targetname",
                "description": "Mention the name of User to hack.",
                "type": 6,
                "required": false
            }
        ],
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
                "type": 3,  // Type 3 is string
                "required": false
            }
        ],
    },
    test: {
        execute: testCmd,
        description: 'Test command for embed and bot status.',
        category: 'Misc',
    },
    poke: {
        execute: pokeCmd,
        description: 'Returns the information related to the Pokemon.',
        category: 'Poke',
        options: [
            {
                "name": "pokename",
                "description": "The pokemon name to find information of",
                "type": 3,
                "required": true
            }
        ],
    },
    define: {
        execute: defineCmd,
        description: 'Returns the definition of an English word.',
        category: 'Utility',
        options: [
            {
                "name": "word",
                "description": "The word to look definition of",
                "type": 3,
                "required": true
            }
        ],
    },
    pfp: {
        execute: pfpCmd,
        description: 'Displays the profile picture of a user.',
        category: 'Utility',
        options: [
            {
                "name": "user",
                "description": "Mention a user to check profile picture.",
                "type": 6, // 6 is for USER (mentions)
                "required": false
            }
        ],
    },
    userinfo: {
        execute: userInfoCmd,
        description: 'Displays the detailed information of a user.',
        category: 'Utility',
        options: [
            {
                "name": "user",
                "description": "Name of user to display information of.",
                "type": 6,
                "required": false
            }
        ],
    },
};

export default commandList;
