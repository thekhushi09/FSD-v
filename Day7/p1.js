//*************************************************promise***************************************
// const mypromise=new Promise((resolve,reject)=>{      
//     setTimeout(()=>{
//         let success=true;
//     if(success){
//         resolve("Data Send successfully");}
//         else{
//             reject("data failed to send");
//         }

//     },2000);      
    
// });

// mypromise.then((message)=> {                   //fulfilled
//     console.log("data recieve " + message);

// })
// .catch((err)=>{                                 //rejected
//     console.log("failed to fetch "+err);
// });



// function task(message,delay){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log(message);
//             resolve();
//         },delay);
//     });
// }

// task("first task comleted",1000)
//   .then(()=>task("second task comleted",2000))
//   .then(()=>task("third task comleted",3000))
//   .then(()=>task("4 task is completed"),4000);




//*******************************fetching data using promise*********************************

function fetchdata(){
    return new Promise((resolve, reject)=>{
        const students=[
            { name: 'alice',score:50},
            { name: 'bob',score:65},
            { name: 'charlie',score:80},
            { name: 'david',score:45},
            { name: 'alen',score:75},
        ];
        setTimeout(()=>{
            resolve(students);
        },3000);


    });
}
fetchdata()
  .then((data)=>{
    let sum=data.map((x)=>x.score).reduce((x,y)=>x+y,0);
    
    console.log(sum);
  })
  .catch((err)=>{
    console.log(err);
  });




