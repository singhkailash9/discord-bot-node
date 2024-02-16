# Nodot

> Nodot is referred as Node bot

This project is a Discord bot built with Node.js. It is the revamped version of my previous Node.js bot. It uses ES6+ JavaScript and is better structured. The bot supports hybrid commands (both traditional text based and new slash based commands).

## Commands

### 1. Fun Commands:

- **Gif Sending:** Shares the related GIF from Tenor API using the query provided.
- **Meme Sharing:** Automatically fetches and shares meme using meme command.
- **Quote Command:** Fetches a random quote from the api using quote command.
- **Hack the user:** To hack someone, totally real and not a joke.

### 2. Poke Commands:

- **Pokemon Data:** Poke command to find information related to a pokemon. It displays Pokedex ID, Name, Type, description, species and the pokemon image. Use Poke command along with the name of the Pokemon.
- **Evolution line:** Displays the evolution line and evolution level of a Pokemon. To use this filter add it after the normal command using `-e` or `-evol`.
- **Pokemon Profile:** Shows the profile of a pokemon such as ability, height, weight, gender ratio and egg type. To use this filter add it after the normal command using `-p` or `-profile`.
- **Base stat:** Shows the base stat of a Pokemon such as HP, atk, def, sp.atk, sp.def and speed. To use this filter add it after the normal command using `-b` or `-base`.

**Note:** Using Filter for poke command Pikachu to see base stat, let's say prefix is `+` then the command will be: `+poke pikachu -b` and so on. Using filter is optional and only one can be used at a time.

### 3. Utility Commands:

- **Profile Picture:** Displays profile picture of the user using pfp command.
- **Define Command:** Displays definition of the word using define command.
- **Userinfo Command:** Displays the detailed information of a user.

### 4. Misc. Commands:

- **Help Command:** Help command to get started.
- **Test Commands:** To test the embed and if the bot is active.


(**Note:** This bot is in its early stages of development. I'm planning to add more features in future as I get more ideas. It is a passion project that I work on in my free time.)


## Installation

> Node.js is required to run the script or run the bot.

To get Nodot up and running on your local machine for development and testing purposes, follow these steps:

1. Clone the repository:

```
git clone https://github.com/singhkailash9/nodot-discord-bot.git
cd nodot-discord-bot
```

2. Install NPM packages:

```
npm install
```

3. Create a .env file in the root directory and add following variables:

```
DISCORD_TOKEN = your_discord_bot_token
TENOR_API = your_tenor_api
MEME_API = your_meme_api
QUOTE_API = your_quote_api
DICTIONARY_API = your_dictionary_api
```
> If you are using different API from me, make sure to modify fetch response in the corresponding commands.

4. To register the slash commands with the Discord API, run the following script:
```
node .\scripts\registerSlashCmd.js
```

## Usage

Start the bot by running:
```
node index.js
```

Now, the bot should be running and ready to respond to commands on your Discord server.


## Contributing

Any contributions are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

Many thanks to:

- [D3vd](https://github.com/D3vd) for the public Meme API.
- [Zenquotes](https://zenquotes.io/) for the public Quote API.
- [Dictionary API](https://dictionaryapi.dev/) for the public Dictionary API.
- [Tenor](https://tenor.com/) for the Tenor API.
- [Purukitto](https://github.com/Purukitto) for the Pokedex.