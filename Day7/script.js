// sayhello=()=>{                                             //callback function
//     console.log("hello")
// };

// console.log("task started"); 
// sayhello();
// console.log("task end");


console.log("start");
setTimeout(()=> {
    console.log("first task");
    setTimeout(()=> {
        console.log("second task");
        setTimeout(()=>{
            console.log("third task");
        },3000);
    },2000);
},1000);
console.log("end");




