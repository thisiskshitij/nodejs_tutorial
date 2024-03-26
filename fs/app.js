const fs = require('fs');
// // create file
// // write and read file
// fs.writeFile('example.txt', "this is an example", (err) => {
//     if (err)
//         console.log(err);
//     else {
//         console.log('File successfully created')
//         fs.readFile('example.txt','utf-8',(err, file) => {
//             if (err)
//                 console.log(err);
//             else
//                 console.log(file);
//         })
//     }
// });


// fs.rename('example.txt','example2.txt',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('successfully renamed the file');
// })

// fs.appendFile('example2.txt',' Some data being appended',(err)=>{
//     if(err)
//         console.log(err)
//     else
//         console.log("\n Succesfully appended data to file")
// })

fs.unlink('example2.txt',(err)=>{
    if (err)
        console.log(err);
    else
        console.log("Succesfully delete the file");
})