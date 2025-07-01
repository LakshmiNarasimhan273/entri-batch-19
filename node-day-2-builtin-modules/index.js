// File system
const fs = require("fs");

// Step-1 :- Write data to a file
fs.writeFile('example.txt', 'Hello user, welcome to backend development', (err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log("File written successfully");    
});

// Step-2 :- Read the same file
fs.readFile('example.txt', 'utf8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(data);    
});