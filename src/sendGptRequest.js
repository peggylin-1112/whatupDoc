import { Configuration, OpenAIApi } from "openai";
import fs from "fs";
import chalk from "chalk";
import { config } from 'dotenv';
config();

const configuration = new Configuration({
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
        "temperature": 0,
    });

    const content = completion.data.choices[0].message.content;
    // console.log(JSON.parse(content));
    const parsedResponse = JSON.parse(content);

    const lastLetter = parsedResponse.confidenceRating;

    if (parsedResponse.isValid) {
        console.log(chalk.green('PR ready for review (confidence rating: ' + parsedResponse.confidenceRating + ')'))
    } else {
        console.log(chalk.red('PR needs improvements (confidence rating: ' + parsedResponse.confidenceRating + ')'))
    }
    
    console.log(' ');
    console.log('Review overview');
    console.log('----------');
    console.log(parsedResponse.reviewOverview);

    console.log(' ');
    if (!parsedResponse.isValid) {
        console.log('Additional comments');
        console.log('----------');
        console.log(parsedResponse.message);
    } else {
        console.log('Please see read.md for your generated documentation');
    }

    const docs = JSON.parse(content).documentation;

    fs.writeFile('./response.json', content, err => {
        if (err) {
        console.error(err);
        }
    });

    if (docs) {
        fs.writeFile('./read.md', docs, err => {
            if (err) {
            console.error(err);
            }
        });
    }
}

export default sendGptRequest;