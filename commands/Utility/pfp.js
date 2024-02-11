import { createEmbed } from "../../utils/embed.js";
import { getMentionedUser } from "../../utils/mentions.js";

const pfpCmd = (message) => {
    try {
        const user = getMentionedUser(message);
        const pfpEmbed = createEmbed({
            title: `${user.username}'s Profile Picture`,
            description: "That's a great picture!",
            imageUrl: user.displayAvatarURL({ dynamic: true, size: 1024 }), // dynamic for gifs
            footerText: `Requested by ${user.username}`,
            color: '#d32256'
        });
        message.channel.send({ embeds: [pfpEmbed] })
    } catch (error) {
        console.error("Error in pfpCmd:", error);
        message.channel.send("A problem occured, try later.");
    }
}

export { pfpCmd };
