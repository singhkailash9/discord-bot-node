import { editEmbed, sendEmbed, sendText } from "../../utils/commandUtils.js";
import { createEmbed } from "../../utils/embed.js";
import { getAuthor } from "../../utils/getAuthor.js";
import { getMentionedExclude } from "../../utils/mentions.js";

const hackCmd = async (message, args) => {
    try {
        const targetName = await getMentionedExclude(message, args, 'targetname');
        const author = await getAuthor(message);

        let hackEmbed = createEmbed({
            title: `Hacking ${targetName}...`,
            description: "Locating IP address...",
            // imageUrl: "hack-gif",
            footerText: `Initiated by ${author}`,
        });
        
        let sentMessage = await sendEmbed(message, hackEmbed);
        // let sentMessage = await message.channel.send({ embeds: [hackEmbed] });

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
                footerText: `Initiated by ${author}`,
            });

            await editEmbed(message, sentMessage, hackEmbed);
            // await sentMessage.edit({ embeds: [hackEmbed] });
        }

    } catch (error) {
        console.error("Error in hackCmd:", error);
        sendText(message, "Cannot hack, try later.");
        // message.channel.send("Cannot hack, try later.");
    }
}

export { hackCmd };
