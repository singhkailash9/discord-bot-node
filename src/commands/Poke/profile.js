// ability, height, weight, gender ratio and egg type
import { sendEmbed, sendText } from "../../utils/commandUtils.js";
import { createEmbed } from "../../utils/embed.js";

const profileFilter = async (message, pokeData) => {
    try {
        const eggTypes = pokeData.profile.egg.join(', ');

        const abilities = pokeData.profile.ability.map(([abilityName, isHidden]) => 
            `${abilityName} ${isHidden === "true" ? "(Hidden Ability)" : ""}`
        ).join(', ');

        const gender = pokeData.profile.gender.split(":");
        const genderValue = `Male: ${gender[0]} % \n Female: ${gender[1]} %`;

        const pokeEmbed = createEmbed({
            title: `ID: ${pokeData.id}`,
            description: `__**${pokeData.name.english}**__`,
            imageUrl: pokeData.image.thumbnail,
            fields: [
                { name: "__Height__", value: pokeData.profile.height, inline: true },
                { name: "__Weight__", value: pokeData.profile.weight, inline: true },
                { name: "__Egg Types__", value: eggTypes, inline: false },
                { name: "__Abilities__", value: abilities, inline: false },
                { name: "__Gender Ratio__", value: genderValue, inline: true },
            ],
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
