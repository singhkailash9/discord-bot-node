import { getArgs, sendText } from "../../utils/commandUtils.js";
import { handleKm } from "./convertFn/handleKm.js";
import { handleMeters } from "./convertFn/handleMeters.js";
import { handleMiles } from "./convertFn/handleMiles.js";

const convertCmd = async (message, margs) => {
    try {
        const isSlash = message.isCommand || message.commandName;
        let from_unit, to_unit, conversionValue;
        if (!isSlash && margs.length > 2) {
            [from_unit, to_unit, conversionValue] = margs;
            from_unit = from_unit.toLowerCase();
            to_unit = to_unit.toLowerCase();
            conversionValue = parseFloat(conversionValue);
        } else {
            from_unit = await getArgs(message, margs, "from_unit");
            to_unit = await getArgs(message, margs, "to_unit");
            conversionValue = parseFloat(await getArgs(message, margs, "value"));
        }

        if (isNaN(conversionValue)) {
            sendText(message, "Please provide a valid number for conversion.");
            return;
        }

        let response = `Conversion from ${from_unit} to ${to_unit} not supported.`;
        let convertedValue;

        const kmArray = ["kilometers", "kms", "km"];
        const mArray = ["meters", "meter", "m"];
        const milesArray = ["miles", "mile"];

        // const convert_to = kmArray.includes(to_unit) ? "kilometers" : milesArray.includes(to_unit) ? "miles" : "meters";

        if(kmArray.includes(from_unit)){
            const convert_to = mArray.includes(to_unit) ? "meters" : milesArray.includes(to_unit) ? "miles" : undefined;
            convertedValue = handleKm(convert_to, conversionValue);
        } else if (milesArray.includes(from_unit)){
            const convert_to = kmArray.includes(to_unit) ? "kilometers" : milesArray.includes(to_unit) ? "meters" : undefined;
            convertedValue = handleMiles(convert_to, conversionValue);
        } else if (mArray.includes(from_unit)){
            const convert_to = kmArray.includes(to_unit) ? "kilometers" : milesArray.includes(to_unit) ? "miles" : undefined;
            convertedValue = handleMeters(convert_to, conversionValue);
        }
        if (convertedValue !== undefined) {
            response = `${conversionValue} ${from_unit} is ${convertedValue.toFixed(2)} ${to_unit}.`;
        }
        await sendText(message, response);

    } catch (err) {
        console.error(`convertCmd Error: ${err}.`)
    }
};

export { convertCmd };