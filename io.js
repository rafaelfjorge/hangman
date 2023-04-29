import PromptSync from  "prompt-sync";
const prompt = PromptSync();

const print = text => console.log(text);

const newLine = () => console.log();

const read = text => prompt(text + " >> ");

export { print, newLine, read};