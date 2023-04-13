import getPrInfo from "./pullRequests.js";

const createMessage = (prLink) => {
    const prInfo = getPrInfo(prLink);

    const ticketLink = prInfo.trello;

    let fileString = "";

    prInfo.files.forEach(line =>  {
        fileString += `- ${line}`;
    });

    return `
    As a code reviewer you are able to review the code in these files: ${fileString}
    You should open this trello task link ${ticketLink} and understand the requirements in the content.
    When reviewing the code in each file you should ensure that the task requirements have been met and the code can achieve all scenarios specified in the task. You will need to read all files to ensure you have a full understanding of what has been completed.
    Things to remember when doing a code review, the code must meet all requirements for the given task, to ensure that the code is tested for any scenarios that the task has specified. The code should also be readable where classes have a single responsibility. 
    Please respond to the code review in json format, with the following:
        confidenceRating: it will state how confident you are as a percentage of your review and understanding of this code
        isValid: will be true if the task is complete.
        hasTests: does the code contain tests 
        reviewOverview: give reasons as why you came to the conclusion of your code review
        message: will be included if isValid is false, it will list all missing requirments and tasks and explain exactly why the task was not completed correctly. 
        documentation: will be omitted if isValid is false. The documentation should simplify the task and code to remind me at a later date what is happening. The documentation should also explain how we can add new requirements to the code and comply to the open-closed principle. Please write this as nicely formatted and verbose markdown.
    `;
}

export default createMessage;