import { createEmbed } from '../../utils/embed.js';
import { fetchJSON } from '../../utils/fetch.js';

const memeCmd = async (message) => {
    try {
        let memeData = await fetchJSON(process.env.MEME_API);

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
