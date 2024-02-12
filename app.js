import dotenv from 'dotenv';
dotenv.config();

import { Client, GatewayIntentBits } from 'discord.js';
import { handler } from './src/handler/commandsHandler.js';
import { slashHandler } from './src/handler/slashHandler.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on('messageCreate', message => {
  // text-based command handler
  handler(message);
});

client.on('interactionCreate', async interaction => {
  // slah command handler
  slashHandler(interaction);
});

client.once('ready', () => {
  console.log(`${client.user.tag} has logged in`);
});

client.login(process.env.BOT_TOKEN);
