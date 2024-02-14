// Get hybrid command author name
const getAuthor = async (message) => {
    try {
        // Check if it's a slash command
        const isSlash = message.isCommand;

        let username;
        if (isSlash) {
            // For slash commands, check if it's in a server/guild
            if (message.member && message.member.user) {
                username = message.member.user.username;
            } else if (message.user) { // For DMs
                username = message.user.username;
            }
        } else {
            // For text-based commands
            username = message.author.username;
        }
        return username;

    } catch (err) {
        console.error(`getAuthor Error: ${err}`);
        return null; // Return null on error
    }
};

export { getAuthor };