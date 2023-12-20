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
let buffer = fs.readFileSync('./checking/check.js');
console.log(buffer.toString('UTF-8')); // That's how we deal with binary buffer

