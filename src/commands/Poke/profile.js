// ability, height, weight, gender ratio and egg type
import { sendEmbed, sendText } from "../../utils/commandUtils.js";
import { createEmbed } from "../../utils/embed.js";

const profileFilter = async (message, pokeData) => {
    try {
        const pokeEmbed = createEmbed({
            title: 'ID, name',
            description: 'Profile of Pokemon',
            fields: '',
            footerText: "Displaying Profile",
            color: '#d32256'
        });
        await sendEmbed(message, pokeEmbed);
    } catch (err) {
        console.error(`Profile Filter Error: ${err}`);
        sendText(message, "Error dispalying Pokemon Profile.")
    }
}

export { profileFilter };
