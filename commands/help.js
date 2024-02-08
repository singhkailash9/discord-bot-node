const { createEmbed } = require('../utils/embed');

const helpCmd = (message, prefix) => {
    const testEmbed = createEmbed({
        title: 'Help',
        description: 'The list of help commands are as follows:',
        color: '#d32256',
        fields: [
            { name: 'test', value: 'A test command for embed and bot status.' },
            { name: 'help', value: 'Lists all the help commands.' },
        ],
        footerText: `Bot Prefix: "${prefix}"`,
    });
    message.channel.send({ embeds: [testEmbed] });
};

module.exports = { helpCmd };
