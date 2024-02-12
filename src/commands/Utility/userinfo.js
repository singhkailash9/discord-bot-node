import { createEmbed } from "../../utils/embed.js";
import { getMentionedUser } from "../../utils/mentions.js";

const userInfoCmd = async (message) => {
    try {
        const mentionedUser = getMentionedUser(message);
        const user = mentionedUser.username;

        const member = await message.guild.members.fetch(mentionedUser.id);

        const userInfoEmbed = createEmbed({
            title: "User Info",
            description: `Details about ${user}`,
            fields: [
                { name: "Username", value: user, inline: true },
                { name: "Global name", value: mentionedUser.globalName ? mentionedUser.globalName : user , inline: true },
                { name: "ID", value: mentionedUser.id },
                { name: "Creation Date", value: mentionedUser.createdAt.toDateString(), inline: true },
                { name: "Guild Join Date", value: member.joinedAt.toDateString(), inline: true }
            ],
            footerText: `Requested by ${message.author.username}`,
            color: '#d32256'
        });
        message.channel.send({ embeds: [userInfoEmbed] });
    } catch (error) {
        console.error("Error in userInfoCmd:", error);
        message.channel.send("A problem occurred, try later.");
    }
}

export { userInfoCmd };
