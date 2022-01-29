//Day-39 mongodb task
const fs = require('fs');

console.log(process.argv)

fs.readdir(`${__dirname}/${process.argv[2]}`, (err, files) => {
    if (err) {
        console.log("error",err)
    } 
    else {
        console.log(files);
    }
})