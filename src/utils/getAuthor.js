// Get hybrid command author name
const getAuthor = async (message) => {
    try {
        // In guild/server slash cmd: message.member.user.username
        const guildUser = message.member.user.username;

        // In DM slash cmd: message.user.username;
        // Text-based: message.author.username

        const isSlash = message.isCommand;
        let username = isSlash ? guildUser ? guildUser : message.user.username : message.author.username;
        return username;

    } catch (err) {
        console.error(`getAuthor Error: ${err}`);
    }
}

export { getAuthor };