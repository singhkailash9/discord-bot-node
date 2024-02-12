import commandList from '../../config/commandsConfig.js';
import { createEmbed } from "../../utils/embed.js";
import prefix from "../../config/botPrefix.js"

const helpCmd = (message, args) => {
    if (args.length > 0) {
        // Help for a specific command
        const commandName = args[0].toLowerCase();
        const commandInfo = commandList[commandName];
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
        let fields = [];
        Object.entries(commandList).forEach(([commandName, cmd]) => {
            const category = cmd.category || 'Misc';
            if (!fields.some(f => f.name === category)) {
                fields.push({ name: category, value: '', inline: false });
            }
            const field = fields.find(f => f.name === category);
            field.value += `\`${prefix}${commandName}\`: ${cmd.description}\n`;
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
