// If no user is mentioned then returns author
const getMentionedUser =  async(message, stringName) => {
    let mentionedUser;

    // For slash commands
    if (message.isCommand) {
        const userOption = message.options.getUser(stringName, false);
        mentionedUser = userOption ? userOption : message.user;
    } 
    // For text commands
    else if (message.mentions && message.mentions.users) {
        const firstMentionedUser = message.mentions.users.first();
        mentionedUser = firstMentionedUser ? firstMentionedUser : message.author;
    }

    return mentionedUser;
}

// Check mentions first then arguments else set to someone
// It excludes the user who run the command
const getMentionedExclude =  async (interaction, args, stringName) => {
    let mentionedName;

    // For slash commands
    if (interaction.isCommand) {
        const userOption = interaction.options.getUser(stringName, false);
        mentionedName = userOption ? userOption.username : "someone";
    } 
    // For text commands
    else {
        const firstMentionedUser = interaction.mentions.users.first();
        mentionedName = firstMentionedUser ? firstMentionedUser.username : args.length > 0 ? args[0] : "someone";
    }

    return mentionedName;
}

export { getMentionedUser, getMentionedExclude };
