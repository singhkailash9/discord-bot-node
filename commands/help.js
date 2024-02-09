import { createEmbed } from '../utils/embed.js';

const helpCmd = (message, prefix) => {
    const testEmbed = createEmbed({
        title: 'Help',
        description: 'The list of help commands are as follows:',
        color: '#d32256',
        fields: [
            { name: 'meme', value: 'Shows a random meme from Reddit.' },
            { name: 'quote', value: 'Shows a random quote.' },
            { name: 'test', value: 'A test command for embed and bot status.' },
            { name: 'help', value: 'Lists all the help commands.' },
        ],
        footerText: `Bot Prefix: "${prefix}"`,
    });
    message.channel.send({ embeds: [testEmbed] });
};

export { helpCmd };
