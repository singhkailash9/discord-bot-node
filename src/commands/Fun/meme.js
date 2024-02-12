import { sendEmbed, sendText } from "../../utils/commandUtils.js";
import { createEmbed } from "../../utils/embed.js";
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
        sendEmbed(message, memeEmbed);
    } catch (error) {
        console.error("Failed to fetch meme:", error);
        sendText(message, "Sorry, I couldn't fetch a meme for you. 😢");
    }
};

export { memeCmd };
