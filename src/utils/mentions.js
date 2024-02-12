// If no user is mentioned then returns author
function getMentionedUser(message) {
    const firstMentionedUser = message.mentions.users.first();
    const mentionedUser = firstMentionedUser ? firstMentionedUser : message.author;
    return mentionedUser;
}

// Check mentions first then arguments else set to someone
// It excludes the user who run the command
function getMentionedExclude(message, args) {
    const firstMentionedUser = message.mentions.users.first();
    const mentionedName = firstMentionedUser ? firstMentionedUser.username : args.length > 0 ? args[0] : "someone";
    return mentionedName;
}

export { getMentionedUser, getMentionedExclude };
