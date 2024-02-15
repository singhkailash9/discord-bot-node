// Hybrid (Slash and text based) command handling
const sendEmbed = async (message, embedData) => {
    try {
        if (message.isCommand) {
            await message.reply({ embeds: [embedData] });
        } else {
            return await message.channel.send({ embeds: [embedData] });
            // message.channel.send({ embeds: [embedData] });
        }
    } catch (err) {
        console.error(`CommandUtils Error: ${err}`);
    }
}

// Hybrid handling for editing embed
const editEmbed = async (message, oldMessage, newEmbed) => {
    try {
        // Slash cmd
        if (message.isCommand) {
            await message.editReply({ embeds: [newEmbed] });
        } else {
            // Text cmd
            await oldMessage.edit({ embeds: [newEmbed] });
        }
    } catch (err) {
        console.error(`editEmbed Error: ${err}`);
    }
}

// Hybrud handling for text based reply
const sendText = async (message, text) => {
    try {
        if (message.isCommand) {
            await message.reply(text);
        } else {
            message.channel.send(text);
        }
    } catch (err) {
        console.error(`CommandUtils Error: ${err}`);
    }
}

// Get hybrid args
const getArgs = async (message, mArgs, stringName) => {
    try {
        const isSlash = message.isCommand || message.commandName;
        let args = [];

        if (isSlash) {
            const commandOption = message.options?.getString(stringName);
            if (commandOption) args.push(commandOption);
            return args;
        } else {
            return mArgs;
        }
    } catch (err) {
        console.error(`CommandUtils Error: ${err}`);
    }
}

export { sendEmbed, sendText, getArgs, editEmbed };