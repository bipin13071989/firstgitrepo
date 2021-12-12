// let's talk about strings/
let singleQuote='Hi my name is bipin kumar jha'; 
let doubleQuote="Hi my name is bipin kumar jha";
//both single and double quote are same  ...
console.log(singleQuote,"\n");
console.log(doubleQuote,"\n");
// print substring//
console.log(singleQuote.substring(2,11));
// charAt function used for getting character at the particular index...
let temp=singleQuote.charAt(7); // carefull... temp is string not character.
console.log(typeof(temp)); // it will print string...
// if want to retrive ascii code of that particular char//
console.log(singleQuote.charCodeAt(7));// will print 97//
console.log("\n",temp);

// important fucntions//
//split and join//
let arrStr=singleQuote.split('i');// it will split string on the basis of 'i', and it will return array of string..
console.log(arrStr);
// what is we donot write anything in parameter 
let arrString=singleQuote.split(''); // it will split all the character//
console.log(arrString);

// trim function//
let str=" Hello world ";
let str1=singleQuote.split("i");
console.log(str,"\n");
console.log(str.trim());  // remove whitespaces present at the front and end//
// join
let tem=str1.join("+"); // join fucntion only works for array..//
console.log(str1);
console.log("hello world: ");
