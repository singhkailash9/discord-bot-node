import dotenv from 'dotenv';
dotenv.config();

import { Client, GatewayIntentBits } from 'discord.js';
import { handler } from './commandsHandler.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('messageCreate', message => {
    handler(message);
});
client.once('ready', () => {
    console.log(`${client.user.tag} has logged in`);
});

client.login(process.env.BOT_TOKEN);
