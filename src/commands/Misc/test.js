import { sendEmbed } from "../../utils/commandUtils.js";
import { createEmbed } from "../../utils/embed.js";

const testCmd = async (message) => {
    const testEmbed = createEmbed({
        title: 'Title',
        description: 'This is an example embed.',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
        footerText: 'Footer',
        color: '#d32256'
    });
    // Hybrid command
    sendEmbed(message, testEmbed);
};

export { testCmd };