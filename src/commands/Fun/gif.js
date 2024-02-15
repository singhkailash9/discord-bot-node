import { getArgs, sendEmbed, sendText } from "../../utils/commandUtils.js";
import { createEmbed } from "../../utils/embed.js";
import { fetchJSON } from "../../utils/fetch.js";

const gifCmd = async(message, margs)=>{
    try {
        const args = await getArgs(message, margs, 'query');
        const TENOR_URL = `https://g.tenor.com/v2/search?q=${args}&key=${process.env.TENOR_API}`
        const gifData = await fetchJSON(TENOR_URL);
        const randomNum = Math.floor(Math.random() * 16);
        const gifURL = gifData.results[randomNum].media_formats.gif.url;
        const gifDescription = gifData.results[randomNum].content_description;
        const gifEmbed = createEmbed({
            title: "Here's the GIF I found...",
            description: gifDescription,
            imageUrl: gifURL,
            footerText: `Gif for ${args}`,
        });
        sendEmbed(message, gifEmbed)
  } catch (err) {
    sendText(message, "Sorry! Couldn't get gif for you !!");
    console.error(`gifCmd Error: ${err}`);
  }
}

export { gifCmd };
