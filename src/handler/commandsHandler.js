import commandList from '../config/commandsConfig.js';
import prefix from '../config/botPrefix.js';

const textCommandHandler = (message) => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;

    const [cmdName, ...args] = message.content.slice(prefix.length).split(/\s+/);
    const command = commandList[cmdName.toLowerCase()];

    if (command) {
        command.execute(message, args);
    } else {
        message.react('❓').catch(console.error);
    }
};

export { textCommandHandler as handler };
