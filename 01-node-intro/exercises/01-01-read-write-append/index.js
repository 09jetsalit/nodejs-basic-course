import fs from "fs"

const data = "data.txt";

fs.writeFileSync(data , "Hello World\n");
fs.appendFileSync(data , "Second line");

const result = fs.readFileSync(data , "utf-8");
console.log(result);