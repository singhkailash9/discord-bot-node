import commandList from '../config/commandsConfig.js';

const slashCommandHandler = async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;
    const command = commandList[commandName];

    try {
        if (command) {
            await command.execute(interaction);
        }
    } catch (err) {
        console.error(`SlashCmd Error: ${err}`);
    }
};

export { slashCommandHandler as slashHandler };
