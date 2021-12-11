// array declare
// let arr=[];
let arr=[1,2,3,4,5];
console.log(arr,"\n");
console.log(arr.length);
// let's see while loop//
/*let idx=arr.length;
while(idx--)
{
    console.log(arr[idx],"\n");
}
*/

// for adding at the end use push function
// for addin at the front use unshift function//
//remember .. we can add any data type value in this array//
arr.push("Hello world");
arr.unshift("kaise ho aap log: ");
console.log(arr);   // displaying all the values inside the array// 
console.log(arr.length);  // finding length of array//
console.log(arr[0].length);  // finding length of individual element //
console.log("\n");
// for removing //
// removing the last element use pop fucntion//
// removing the first element use shift function//
arr.pop();  // removed last element//
arr.shift();  // removed first element//
console.log(arr);   // display new array//

// splice and slice function... very important//
// slice
let new_array=arr.slice(2,4);  // strating index and ending index//
console.log(new_array);   /// copy defined section of array from original array //
console.log(arr); // original array didn't changed...

arr.splice(2,3); // starting index and how many numbers to delete after that start index/
console.log(arr); // be carefull... it'll change the original array//