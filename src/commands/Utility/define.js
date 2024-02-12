import { getArgs, sendEmbed, sendText } from "../../utils/commandUtils.js";
import { createEmbed } from "../../utils/embed.js";
import { fetchJSON } from "../../utils/fetch.js";
import { getAuthor } from "../../utils/getAuthor.js";

const defineCmd = async (message, margs) => {
    try {
        const args = await getArgs(message, margs, 'word');
        if (!args.length) {
            sendText(message, "Please provide a word to define.");
        }
        
        const word = args[0];
        const API_URL = process.env.DICTIONARY_API + word;
        let wordData = await fetchJSON(API_URL);

        if (!wordData.length) {
            sendText(message, "No definition found.");
        }

        const wordInfo = wordData[0];
        let description = wordInfo.origin ? `Origin: ${wordInfo.origin}\n` : '';
        wordInfo.meanings.forEach((meaning, index) => {
            description += `\n${index + 1}. (${meaning.partOfSpeech}) ${meaning.definitions.map(def => def.definition).join('\n ')}\n`;
        });

        const user = await getAuthor(message);
        const defineEmbed = createEmbed({
            title: `Definition of ${word}`,
            description: description.substring(0, 4096), // embed limits
            footerText: `Requested by ${user}.`,
            color: '#d32256'
        });
        
        sendEmbed(message, defineEmbed);
    } catch (error) {
        console.error("Error in defineCmd:", error);
        sendText(message, "A problem occurred, try later.");
    }
}

export { defineCmd };
