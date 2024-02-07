const { EmbedBuilder } = require('discord.js');

function createEmbed({ title = '', description = '', imageUrl = '', color = '#d32256', footerText = '' , fields = ''}) {
    const embed = new EmbedBuilder()
        .setTitle(title)
        .setDescription(description)
        .setColor(color)
        .setTimestamp();

    if (fields) embed.setFields(fields);
    if (imageUrl) embed.setImage(imageUrl);
    if (footerText) embed.setFooter({ text: footerText });

    return embed;
}

module.exports = { createEmbed };