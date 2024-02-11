import { createEmbed } from '../../utils/embed.js';

const memeCmd = async (message) => {
    try {
        const fetch = (await import('node-fetch')).default;
        let response = await fetch(process.env.MEME_API);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let memeData = await response.json();

        const memeEmbed = createEmbed({
            title: memeData.title,
            description: memeData.postLink,
            imageUrl: memeData.url,
            footerText: `Author: ${memeData.author}`,
            color: '#d32256'
        });
        message.channel.send({ embeds: [memeEmbed] });
    } catch (error) {
        console.error("Failed to fetch meme:", error);
        message.channel.send("Sorry, I couldn't fetch a meme for you. 😢");
    }
};

export { memeCmd };
