import { sendEmbed, sendText } from "../../utils/commandUtils.js";
import { createEmbed } from "../../utils/embed.js";
import { fetchJSON } from '../../utils/fetch.js';

const quoteCmd = async (message) => {
    try {
        // the data is a dictionary
        let quoteData = await fetchJSON(process.env.QUOTE_API);

        const quoteEmbed = createEmbed({
            title: "Quote:",
            description: quoteData[0]["q"],
            footerText: `Author: ${quoteData[0]["a"]}`,
            color: '#d32256'
        });
        sendEmbed(message, quoteEmbed);
    } catch (error) {
        console.error("Failed to fetch quote:", error);
        sendText(message, "Sorry, I couldn't fetch a quote for you. 😢");
    }
};

export { quoteCmd };