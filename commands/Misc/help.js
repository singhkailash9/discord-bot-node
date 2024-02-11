import { createEmbed } from '../../utils/embed.js';

let commands = {
    "Fun": [
        { name: "meme", description: "Shows a random meme from Reddit." },
        { name: "quote", description: "Shows a random quote." },
        { name: "hack", description: "Hack a user. \nPass a username or mention them along with command." }
    ],
    "Utility": [
        { name: "pfp", description: "Displays the profile picture of a user." }
    ],
    "Misc": [
        { name: "help", description: "Help command." },
        { name: "test", description: "A test command for bot." }
    ],
};

const helpCmd = (message, args, prefix) => {
    if (args.length > 0) {
        // Help for a specific command
        const commandName = args[0].toLowerCase();
        const commandInfo = Object.values(commands).flat().find(cmd => cmd.name === commandName);
        if (commandInfo) {
            const detailedEmbed = createEmbed({
                title: `Help for ${commandName}`,
                description: commandInfo.description,
                color: '#d32256',
                footerText: `Usage: ${prefix}${commandName}`,
            });
            message.channel.send({ embeds: [detailedEmbed] });
        } else {
            message.channel.send("Command not found.");
        }
    } else {
        // General help to show all commands
        const fields = Object.entries(commands).map(([category, cmds]) => {
            return { name: category, value: cmds.map(cmd => `\`${cmd.name}\``).join(', ') };
        });

        const helpEmbed = createEmbed({
            title: 'Help',
            description: 'The list of available commands are as follows:',
            color: '#d32256',
            fields: fields,
            footerText: `Use "${prefix}help <command>" to get more info on a specific command.`,
        });
        message.channel.send({ embeds: [helpEmbed] });
    }
};

export { helpCmd };
