import commandList from '../../config/commandsConfig.js';
import { createEmbed } from "../../utils/embed.js";
import prefix from "../../config/botPrefix.js";
import { getArgs, sendEmbed, sendText } from '../../utils/commandUtils.js';

const helpCmd = async (message, messageArgs) => {
    const args = await getArgs(message, messageArgs, 'commandname');

    if (args.length > 0) {
        const commandName = args[0].toLowerCase();
        const commandInfo = commandList[commandName];
        if (commandInfo) {
            const detailedEmbed = createEmbed({
                title: `Help for ${commandName}`,
                description: commandInfo.description,
                color: '#d32256',
                footerText: `Usage: ${prefix}${commandName} ${commandInfo.options?.map(opt => opt.required ? `<${opt.name}>` : `[${opt.name}]`).join(' ') || ''}`, // Adjust for showing command options
            });
            await sendEmbed(message, detailedEmbed);
        } else {
            await sendText(message, "Command not found.");
        }
    } else {
        let fields = [];
        Object.entries(commandList).forEach(([commandName, cmd]) => {
            const category = cmd.category || 'Misc';
            if (!fields.some(f => f.name === category)) {
                fields.push({ name: category, value: '', inline: false });
            }
            const field = fields.find(f => f.name === category);
            field.value += `\`${commandName}\`: ${cmd.description}\n`;
        });

        const helpEmbed = createEmbed({
            title: 'Help',
            description: 'The list of available commands are as follows:',
            color: '#d32256',
            fields: fields,
            footerText: `Use "${prefix}help <command>" to get more info on a specific command.`,
        });
        await sendEmbed(message, helpEmbed);
    }
};

export { helpCmd };
