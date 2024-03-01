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
        let numberOfOptions = choices.length;
        if(numberOfOptions > 9){
            sendText(message, "Maximum options can be 9");
            return
        }

        let pollChoices = choices.map((choice, index) =>`${index + 1}. ${choice} \n`);
        let desc = pollChoices.join("");
        let pollEmbed = createEmbed({
            title: topic,
            description: desc,
            footerText: 'React to vote',
            color: '#d32256'
        });

        let sentMessage = await sendEmbed(message, pollEmbed);
        let emojis = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣'];

        for (let i = 0; i < numberOfOptions; i++) {
            await sentMessage.react(emojis[i]);
        }

    } catch (error) {
        console.error("Error in pollCmd:", error);
        sendText(message, "A problem occurred, try later.");
    }
}

export { pollCmd };
