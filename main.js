import { config } from 'dotenv';
import createMessage from "./src/createMessage.js";
import sendGptRequest from "./src/sendGptRequest.js";
config();

const prLink = process.argv[2];

sendGptRequest(createMessage(prLink));
