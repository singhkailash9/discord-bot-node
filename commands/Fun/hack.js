import { createEmbed } from "../../utils/embed.js";
import { getMentionedExclude } from "../../utils/mentions.js";

const hackCmd = async (message, args) => {
    try {
        const targetName = getMentionedExclude(message, args);

        let hackEmbed = createEmbed({
            title: `Hacking ${targetName}...`,
            description: "Locating IP address...",
            // imageUrl: "hack-gif",
            footerText: `Initiated by ${message.author.username}`,
        });

        let sentMessage = await message.channel.send({ embeds: [hackEmbed] });

        const steps = [
            "IP address located! Deploying trojan horse...",
            "Breaching defenses...",
            "Downloading data...",
            "Selling data to the dark web...",
            "Hack complete! Totally real and not a joke.",
        ];

        for (const step of steps) {
            await new Promise(resolve => setTimeout(resolve, 2000));

            hackEmbed = createEmbed({
                title: `Hacking ${targetName}...`,
                description: step,
                // imageUrl: "hack-gif",
                footerText: `Initiated by ${message.author.username}`,
            });

            await sentMessage.edit({ embeds: [hackEmbed] });
        }

    } catch (error) {
        console.error("Error in hackCmd:", error);
        message.channel.send("Cannot hack, try later.");
    }
}

export { hackCmd };
