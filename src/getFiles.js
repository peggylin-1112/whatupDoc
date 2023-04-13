import fs from "fs";

const getFiles = () => {
    return fs.readFileSync('./files.txt', 'utf8');
}

export default getFiles;