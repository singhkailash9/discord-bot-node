import { REST, Routes } from 'discord.js';
import dotenv from 'dotenv';
import commandList from '../src/config/commandsConfig.js';

dotenv.config();

const commands = Object.entries(commandList).map(([key, { description, options }]) => {
    const command = {
        name: key,
        description,
    };
    if (options) {
        command.options = options;
    }
    return command;
});

const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
    try {
        console.log('Refreshing slash commands.');

        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID),
            { body: commands },
        );

        console.log('Loaded slash commands.');
    } catch (error) {
        console.error(error);
    }
})();
