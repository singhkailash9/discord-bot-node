import { getArgs, sendEmbed, sendText } from "../../utils/commandUtils.js";
import { createEmbed } from "../../utils/embed.js";

const pollCmd = async (message, margs) => {
    try {
        let topic, options;
        if(message.isCommand || message.commandName){
            topic =  await getArgs(message, margs, "topic");
            options =  await getArgs(message, margs, "options");
        } else if(margs.length > 1){
            topic = margs[0];
            options = margs[1];
        } else {
            sendText(message, "Please provide valid syntax: poll <topic> <options> separated by | ");
            return
        }
        let choices = options.split("|").map(option => option.trim());
        // TODO: create embed msg with choices and reaction as 1,2,3...
        let pollEmbed = createEmbed({
            title: 'Title',
            description: 'This is an example embed.',
            footerText: 'Footer',
            color: '#d32256'
        });
        // TODO: create reactions based on number of options
        console.log(topic, options, choices);

        sendEmbed(message, pollEmbed);
    } catch (error) {
        console.error("Error in pollCmd:", error);
        sendText(message, "A problem occurred, try later.");
    }
}

export { pollCmd };
