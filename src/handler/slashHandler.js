import { testCmd } from "../commands/Misc/test.js";

const slashHandler = async(interaction)=>{
    if (!interaction.isCommand()) return;
    
      const { commandName } = interaction;
    
      if (commandName === 'test') {
          await testCmd(interaction);
      }
} 

export { slashHandler };
