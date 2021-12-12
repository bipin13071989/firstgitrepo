// to run the javascroipt  file one should write 
 //    node filename.extension
// what is objects => it is a group of  key-value pair//
// let declare objecst//
//key: value   -> call it property//
//key: function -> call it method//
let cap={
    name:"steve",
    lastname:"rogers",
    address:{
        city:"manhanttan",
        state:"New york"
    },
    age:35,
    isAvenger:true,
    movies:["first avenger","Winter soldier","civil war"],
    sayHi: function(){
        console.log("Cap says Hii to all: ");
    }
};
// console.log(cap.name,"\n");
// console.log(cap.movies[1],"\n");
// console.log(cap.address,"\n");
// console.log(cap.sayHi,"\n");

/*
// set/update  //
console.log("Previous data: ",cap,"\n");
cap.age=60;
cap.isAvenger=false;
cap.friends=["Tony","Bruce","Peter parker","Bucky"] // adding another array//
console.log("New updated Objects :",cap);
// delete something from objects//
delete cap.address;
console.log("After deleting address: ",cap);
*/
// let's talk about for in loop
for(let i in cap)
{
    console.log(i,": ",cap[i]);
}

// accessing values from keys
console.log(cap["address"]);
// another method
let temp="address";
console.log(cap[temp]);
// let's suppose there is no key in the object.. then? //
console.log(cap.x); // it will print undefined //


