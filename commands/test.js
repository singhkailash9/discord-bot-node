const { createEmbed } = require('../utils/embed');

const test_cmd = (message) => {
    const testEmbed = createEmbed({
        title: 'Title',
        description: 'This is an example embed.',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
        footerText: 'Footer',
        color: '#d32256'
    });
    message.channel.send({ embeds: [testEmbed] });
};

module.exports = { test_cmd };