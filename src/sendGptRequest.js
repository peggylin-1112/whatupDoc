import { Configuration, OpenAIApi } from "openai";
import fs from "fs";
import { config } from 'dotenv';
config();

const configuration = new Configuration({
    organization: "org-HLBHH8urHyf4Zz4igd1egKAB",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const sendGptRequest = async (message) => {
    const completion = await openai.createChatCompletion({
        "model": "gpt-4",
        "messages": [{
            "role": "user", 
            "content": message,
        }],
        "temperature": 0.2,
    });

    const content = completion.data.choices[0].message.content;

    fs.writeFile('../response.txt', content, err => {
        if (err) {
          console.error(err);
        }
    });
}

export default sendGptRequest;