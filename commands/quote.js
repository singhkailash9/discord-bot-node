const { createEmbed } = require('../utils/embed');

const quoteCmd = async (message) => {
    try {
        const fetch = (await import('node-fetch')).default;
        let response = await fetch(process.env.QUOTE_API);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // the data is a dictionary
        let quoteData = await response.json();

        const quoteEmbed = createEmbed({
            title: "Quote:",
            description: quoteData[0]["q"],
            footerText: `Author: ${quoteData[0]["a"]}`,
            color: '#d32256'
        });
        message.channel.send({ embeds: [quoteEmbed] });
    } catch (error) {
        console.error("Failed to fetch quote:", error);
        message.channel.send("Sorry, I couldn't fetch a quote for you. 😢");
    }
};

module.exports = { quoteCmd };