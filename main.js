import { Configuration, OpenAIApi } from "openai";
import fs from "fs";
import { config } from 'dotenv';

config();

const configuration = new Configuration({
    organization: "org-HLBHH8urHyf4Zz4igd1egKAB",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const getTicketInfo = () => {
    return 'https://trello.com/c/JsjFJv9Z/3-calculate-vehicle-price-v2';
}

const getCode = () => {
    return fs.readFileSync('./PhpClass.php', 'utf8');
}

const ticketData = getTicketInfo();
const classData = getCode();

const createRequestMessage = (classData, ticketData) => {
    return `
    I have the following task ${ticketData}
    
    Does this code ${classData} complete this task? Please respond in json format, with the following:
    isValid: will be true if the task is complete.
    improvements: will give code improvements and give suggestions for clean code, it should give examples of all things that are wrong or missing.
    message: will be included if isValid is false, it will explain why the task is not completed. 
    documentation: will be included if isValid is true. The documentation should simplify the task and code to remind me at a later date what is happening.
    improved_code: will be included if isValid is true. This should be an improved version of the code.
    `;
}

const getGptMessage = async (classData, ticketData) => {
    const completion = await openai.createChatCompletion({
        "model": "gpt-4",
        "messages": [{
            "role": "user", 
            "content": createRequestMessage(classData, ticketData),
        }],
        "temperature": 0.2,
    });

    const content = completion.data.choices[0].message.content;

    fs.writeFile('./response.txt', content, err => {
        if (err) {
          console.error(err);
        }
    });
}

getGptMessage(classData, ticketData);

