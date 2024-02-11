import { createEmbed } from "../../utils/embed.js";

const defineCmd = async (message, args) => {
    try {
        if (!args.length) {
            return message.channel.send("Please provide a word to define.");
        }
        
        const fetch = (await import('node-fetch')).default;
        const word = args[0];
        const API_URL = process.env.DICTIONARY_API + word;
        let response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let wordData = await response.json();

        if (!wordData.length) {
            return message.channel.send("No definition found.");
        }

        const wordInfo = wordData[0];
        let description = wordInfo.origin ? `Origin: ${wordInfo.origin}\n` : '';
        wordInfo.meanings.forEach((meaning, index) => {
            description += `\n${index + 1}. (${meaning.partOfSpeech}) ${meaning.definitions.map(def => def.definition).join('\n ')}\n`;
        });

        const defineEmbed = createEmbed({
            title: `Definition of ${word}`,
            description: description.substring(0, 4096), // embed limits
            footerText: `Requested by ${message.author.username}`,
            color: '#d32256'
        });
        
        message.channel.send({ embeds: [defineEmbed] });
    } catch (error) {
        console.error("Error in defineCmd:", error);
        message.channel.send("A problem occurred, try later.");
    }
}

export { defineCmd };
