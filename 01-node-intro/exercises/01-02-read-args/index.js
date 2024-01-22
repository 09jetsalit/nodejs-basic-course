import fs from "fs";

const args = process.argv;
const data = "data.txt";

fs.writeFileSync(data , args[2] + "\n")
fs.appendFileSync(data , args[3] )