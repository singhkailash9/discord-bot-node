// evolution line and evolution level of a Pokemon
import { sendEmbed, sendText } from "../../utils/commandUtils.js";
import { createEmbed } from "../../utils/embed.js";

const evolutionFilter = async (message, pokeData) => {
    try {
        const pokeEmbed = createEmbed({
            title: 'ID, name',
            description: 'Evolution of Pokemon',
            fields: '',
            footerText: "Displaying Evolution",
            color: '#d32256'
        });
        await sendEmbed(message, pokeEmbed);
    } catch (err) {
        console.error(`Evolution Filter Error: ${err}`);
        sendText(message, "Error dispalying Evolution Line.")
    }
}

export { evolutionFilter };
