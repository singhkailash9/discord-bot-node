import { sendText } from "../../utils/commandUtils.js";

const pollCmd = async (message) => {
    try {
        sendText(message, "poll");
    } catch (error) {
        console.error("Error in pollCmd:", error);
        sendText(message, "A problem occurred, try later.");
    }
}

export { pollCmd };
