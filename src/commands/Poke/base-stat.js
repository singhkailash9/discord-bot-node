// base stat of a Pokemon such as HP, atk, def, sp.atk, sp.def and speed
import { sendEmbed, sendText } from "../../utils/commandUtils.js";
import { createEmbed } from "../../utils/embed.js";

const baseStatFilter = async (message, pokeData) => {
    try {
        let fieldsData = Object.entries(pokeData.base).map(([key, value]) => {
            return { name: key, value: value.toString(), inline: true };
        });
        const pokeEmbed = createEmbed({
            title: `ID: ${pokeData.id}`,
            description: pokeData.name.english,
            fields: fieldsData,
            footerText: "Displaying Base Stat",
            color: '#d32256'
        });
        await sendEmbed(message, pokeEmbed);
    } catch (err) {
        console.error(`Base Stat Error: ${err}`);
        sendText(message, "Error dispalying stats.")
    }
}

export { baseStatFilter };
