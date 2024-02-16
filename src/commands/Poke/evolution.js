// evolution line and evolution level of a Pokemon
import { sendEmbed, sendText } from "../../utils/commandUtils.js";
import { createEmbed } from "../../utils/embed.js";

const evolutionFilter = async (message, pokedex, pokeData) => {
    try {
        let evolutionInfo = [];

        // Handle previous evolution, if any
        if (pokeData.evolution.prev) {
            const prev = pokeData.evolution.prev;
            const prevPokemon = pokedex.find(p => p.id == prev[0]);
            evolutionInfo.push(`Evolves from __**${prevPokemon.name.english}**__ - ${prev[1]}`);
        }

        // Handle next evolution(s), if any
        if (pokeData.evolution.next) {
            const nextEvolutions = pokeData.evolution.next.map(evolution => {
                const nextPokemon = pokedex.find(p => p.id == evolution[0]);
                return `Evolves into __**${nextPokemon.name.english}**__ - ${evolution[1]}`;
            });
            evolutionInfo = evolutionInfo.concat(nextEvolutions);
        }

        // If no evolutions
        if (evolutionInfo.length === 0) {
            evolutionInfo.push("No evolution");
        }

        const fields = evolutionInfo.map(info => ({ name: "Evolution", value: info, inline: false }));

        const pokeEmbed = createEmbed({
            title: `ID: ${pokeData.id}`,
            description: `__**${pokeData.name.english}**__`,
            fields: fields,
            imageUrl: pokeData.image.thumbnail,
            footerText: "Displaying Evolution",
            color: '#d32256'
        });
        await sendEmbed(message, pokeEmbed);
    } catch (err) {
        console.error(`Evolution Filter Error: ${err}`);
        sendText(message, "Error displaying Evolution Line.");
    }
}

export { evolutionFilter };
