// let x=12;
// var x=12;                                         //redeclaration is allowed   

                                                                              
// function display(){
//     // alert("hello js");

//     console.log("hello js",x);
// }


// let x=14;       //redeclaration is not allowed


// console.log("hello js",x); 
// display();


let x=12.33;
let y="hello"
// console.log(typeof x);
// console.log(typeof y);


let obj={
    'name' : 'ram',
    id: 12
}

// console.log(typeof obj);


let arr=[12,13,14,15,16]
// console.log(typeof arr);


let a;
// console.log(typeof a)                // undefined


let z=Number('13');
let s=Number('14');
// console.log(z+s);
// console.log(typeof z);

let b=Boolean(0);                      //false
// console.log(b);      

"use strict"
let num='12';
// console.log(num)

// strict equality operator   (===)
let c=12;
let d="12";

// console.log(c==d);
// console.log(c===d);


// ARROW FUNCTION

let ar  = () => {
    console.log("hello")

};
ar();

let ar1  = (x,y) => {
    console.log(x+y);

};
ar1(10,5);


let arr1  = (x,y) => {
    return(x+y);

};
let res=arr1(10,5);
console.log(res);


let sayHi = () => console.log("hello");
sayHi();





