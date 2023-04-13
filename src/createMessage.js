import getFiles from "./getFiles.js";
import getTicket from "./getTicket.js";

const createMessage = () => {
    const ticketLink = getTicket();
    const files = getFiles();

    let fileString = "";

    files.split(/\r?\n/).forEach(line =>  {
        fileString += `- ${line}`;
    });

    return `
    As a code reviewer you are able to review the code in these file links: ${fileString}
    You should use this trello task link ${ticketLink} and understand the requirements in the content.
        When reviewing the code in each file link you should ensure that the task requirements have been met. You will need to read all files to ensure you have a full understanding of what has been completed.
        Things to remember when doing a code review, is to ensure that the code is tested for any scenarios that the task has specified. The code should also be readable where classes have a single responsibility
        and no unused variables. 
    Please respond to the code review in json format, with the following:
        task: it will explain the task to achieve
        code: it will explain what php code has been found
        trelloTaskLink: it will show the contents of the trello task
        numberOfFiles: it will count the number of files that were reviewed
        filesReviewed: list the files reviewed with the code for each
        successRate: it will state how confident you are code reviewing this code
        isValid: will be true if the task is complete.
        hasTests: does the code contain tests 
        reviewOverview: give reasons as why you came to the conclusion of your code review
        message: will be included if isValid is false, it will explain exactly why the task was not completed correctly with reasons for each. 
        documentation: will be included if isValid is true. The documentation should simplify the task and code to remind me at a later date what is happening.
    `;
}

export default createMessage;