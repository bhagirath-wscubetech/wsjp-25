const fs = require('fs');

// create a new file or write a file
// fs.writeFile("public/index.html", "", (error) => {
//     if (error) console.log(error)
//     else console.log('file bani gai hai');
// })
// fs.writeFileSync("public/index.html","file write ho gai");

// console.log('Hello world');

// // read a file
// fs.readFile("public/index.html", "utf-8", (err, data) => {
//     if (err) console.log(err);
//     else console.log(data);
// })
const data = fs.readFileSync("public/index.html", "utf-8");

console.log('bahar log', data);

// delete a file
// fs.unlink("public/about.html", (err) => {
//     if(err) console.log(err);
//     else console.log('file deleted');
// })

// update
// fs.appendFile("public/index.html", "No idea", (err) => {
//     if (err) console.log(err);
//     else console.log("done");
// })