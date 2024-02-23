import { getArgs, sendText } from "../../utils/commandUtils.js";
import { evaluate } from 'mathjs';

const mathCmd = async (message, margs) => {
    try {
        let args =  await getArgs(message, margs, "expression");
        let expression = Array.isArray(args) ? args.join('') : args;
        let answer = evaluate(expression);
        // console.log(answer);
        answer = answer==undefined ? "No expression was provided." : answer;
        sendText(message, `Result: ${answer}`);
    } catch (err) {
        console.error(`Math cmd Error: ${err}`);
        sendText(message, "Sorry, there was an error processing your mathematical expression.");
    }
};

export { mathCmd };