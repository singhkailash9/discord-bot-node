import { getArgs, sendEmbed, sendText } from "../../utils/commandUtils.js";
import { createEmbed } from "../../utils/embed.js";

const pollCmd = async (message, margs) => {
    try {
        let topic, options;      
        if(message.isCommand || message.commandName){
            topic =  await getArgs(message, margs, "topic");
            topic = topic.toString();
            options =  await getArgs(message, margs, "options");
            options =  options.toString();
        } else if(margs.length > 1){
            topic = margs.shift();
            options = margs.join("");
        } else {
            sendText(message, "Please provide valid syntax: poll <topic> <options> separated by | ");
            return
        }
        let choices = options.split("|").map(option => option.trim());
        let pollChoices = choices.map((choice, index) =>`${index + 1}. ${choice} \n`);
        let desc = pollChoices.join("");
        let pollEmbed = createEmbed({
            title: topic,
            description: desc,
            footerText: 'React to vote',
            color: '#d32256'
        });
        // TODO: create reactions based on number of options

        sendEmbed(message, pollEmbed);
    } catch (error) {
        console.error("Error in pollCmd:", error);
        sendText(message, "A problem occurred, try later.");
    }
}

export { pollCmd };
