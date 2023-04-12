import { Configuration, OpenAIApi } from "openai";
import fs from "fs";
import { config } from 'dotenv';

config();

const configuration = new Configuration({
    organization: "org-HLBHH8urHyf4Zz4igd1egKAB",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const getClassString = () => {
    return fs.readFileSync('./some.php', 'utf8');
}

const getTicketInfo = () => {
    return fs.readFileSync('./ticket.txt', 'utf8');
}

const ticketData = getTicketInfo();
const classString = getClassString();

const getGptMessage = async (classString, ticketData) => {
    const completion = await openai.createChatCompletion({
        "model": "gpt-4",
        "messages": [{
            "role": "user", 
            "content": `Please check if this code ${classString} meets the requirements for this task ${ticketData}`,
        }],
    });

    const content = completion.data.choices[0].message.content;
    console.log(content);

    fs.writeFile('./response.txt', content, err => {
        if (err) {
          console.error(err);
        }
    });
}

console.log(await getGptMessage(ticketData, classString));
