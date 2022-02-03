// hover over the function... it will show descirption of that element ...read carefully 

// how to print anything//
console.log("Bipin kumar Jha: "); 
// how to declare variable, it is just like python decalring system... we can use (let,var,const)
// no need to define data type, compiler will automatically detect the data type//
/*
let a;
console.log(a); // output will show undefined , because it is not containing something//
a=10;
console.log("This is integer data type: ", a); // it will print 10 which is numeric ...
a="hello world"
console.log("This is string data type:",a);// this time a is string data type.
a=10.01
console.log("This is float data type: ",a);// this time it is float //
// let's talk about primitive data types : string, boolean, null, number, undefined, BigInt..etc;
console.log(typeof(a));// this is the way to know the data type of a variable.... just like python//
for(let i=0;i<10;i++) // same as the java and c++
{
    console.log(i+1);   
}
*/



// let's write swapping of two no.'s program//
/*var _a=10;
var b=20;
var temp=_a;
_a=b;
b=temp;
console.log("A is :",_a,"B is : ",b);  // this will print a=20 and b=10//
*/



// let's do another program, is_prime//
/*var pri=23;
var pri1=4;
var flag=true;
for(var i=2;i<pri;i++)
{
    if(pri%i==0)
    {
        console.log(i,"\n");
        flag=false;
    }
}
if(flag==true)
{
    console.log("Is it a prime number:",pri);
}else{
    console.log("Not a  prime number: ",pri);
}
*/


// let's code fizzz buzz//
/*for(let i=1;i<=20;i++)
{
    if(i%3==0){
        console.log(i," Fizz\n");
    }
    else if(i%5==0)
    {
        console.log(i," Buzz\n");
    }
    else if(i%3==0 && i%5==0)
    {
        console.log(i, "FizzBuzz\n");
    }else{
        console.log(i,"\n");
    }
}
*/


// Now we gonna talk about the non primitive data types,, like arrat sobjects ,, functions
//let's first see function//
function hello(){   // function definition//
    console.log("this function is working: ");
}
hello(); // function calling

function add(a, b){   //function defintion of paramterized function//
    // we don't need to defined the type of parameter ,,neither we need to worry about return//
    console.log("Sum of these two number is",a+b,"\n");
}
add(5,7);  //function call with paramters//