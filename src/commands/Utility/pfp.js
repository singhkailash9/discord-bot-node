import { sendEmbed, sendText } from "../../utils/commandUtils.js";
import { createEmbed } from "../../utils/embed.js";
import { getAuthor } from "../../utils/getAuthor.js";
import { getMentionedUser } from "../../utils/mentions.js";

const pfpCmd = async (message) => {
    try {
        const user = await getMentionedUser(message, 'user');
        const author = await getAuthor(message);
        const pfpEmbed = createEmbed({
            title: `${user.username}'s Profile Picture`,
            description: "That's a great picture!",
            imageUrl: user.displayAvatarURL({ dynamic: true, size: 1024 }), // dynamic for gifs
            footerText: `Requested by ${author}`,
            color: '#d32256'
        });
        sendEmbed(message, pfpEmbed);
        // message.channel.send({ embeds: [pfpEmbed] })
    } catch (error) {
        console.error("Error in pfpCmd:", error);
        sendText(message, "A problem occured, try later.");
        // message.channel.send("A problem occured, try later.");
    }
}

export { pfpCmd };
