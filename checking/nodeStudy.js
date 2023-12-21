// console.log('Trying to open calculator!');
// cp.execSync('calc');
// cp.execSync('start brave https:\\leetcode.com');


// let cp = require('child_process');
// let msg = cp.execSync('node ./checking/check.js');  // Use forward slash or double backslash
// console.log("Here is your msg: " + msg);

// let os=require("os");
// console.log(os.platform());
// console.log(typeof(os.arch()));
// console.log(os.networkInterfaces());


let fs=require('fs');
// let buffer = fs.readFileSync('./checking/check.js');
// console.log(buffer.toString('UTF-8')); // That's how we deal with binary buffer

// Now we are going to create, read, update, delete
// fs.openSync('./checking/abc.txt','w');
// fs.writeFileSync('./checking/abc.txt','we are very happy today and wish you are also good with the life');

// fs.appendFileSync('abc.txt','Hello world!') // add content to already exisiting file 

// // fs.mkdirSync('./checking/NewFolderNamkaran');
// let content=fs.readdirSync('checking');
// // console.log(content);

// for(let i=0;i<content.length;i++) {
//     console.log(content[i]);
//     //fs.unlinkSync('folder_name'+content[i]);
// }


//It is better to check whether file exist or not using//
// fs.existsSync()

// for(let i=1;i<=10;i++) {
//     let fileName=`./checking/NewFolderNamkaran/Lecture-${i}`;
//     fs.mkdirSync(fileName);
//     fs.writeFileSync(fileName + "\\"+"readme.md",`Hello world!`);
// }

// let path =require('path');
// // console.log(__dirname);
// let path_name=path.extname(path.join(__dirname,'./checking/check.js'));
// console.log(path_name);
// let bsName=path.basename(path.join(__dirname,'./checking/check.js'));
// console.log(bsName);


