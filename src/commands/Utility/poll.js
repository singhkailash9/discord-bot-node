import { getArgs, sendText } from "../../utils/commandUtils.js";

const pollCmd = async (message, margs) => {
    try {
        let topic, option1, option2, time;
        if(message.isCommand || message.commandName){
            topic =  await getArgs(message, margs, "topic");
            option1 =  await getArgs(message, margs, "option1");
            option2 =  await getArgs(message, margs, "option2");
            time =  await getArgs(message, margs, "time");
        } else if(margs.length > 3){
            [topic, option1, option2, time] = margs;
        } else {
            sendText(message, "Please provide valid syntax: poll <topic> <option1> <option2> <time>");
            return
        }
        sendText(message, "poll");
    } catch (error) {
        console.error("Error in pollCmd:", error);
        sendText(message, "A problem occurred, try later.");
    }
}

export { pollCmd };
