import fs from "fs";


const read = fs.readFileSync( "data.txt" , "utf-8");
console.log(read);