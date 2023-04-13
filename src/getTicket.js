import fs from "fs";

const getTicket = () => {
    return fs.readFileSync('./ticket.txt', 'utf8');
}

export default getTicket;