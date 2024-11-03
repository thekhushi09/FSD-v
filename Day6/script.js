let arr = [1,23,3,3,33,1,74,100];
// let newarray = arr.map((x) => x * 2);
// console.log(newarray);
// let even = arr.filter((x) => x % 2 == 0);
// console.log(even);
// let sum = arr.reduce((x,y) => x + y , 0);
// console.log(sum);

// Student Data Example;
let even = arr.filter((x) => x % 2 == 0).reduce((x,y) => x + y , 0);
console.log(even);
const students=[
    { name: 'alice',score:50},
    { name: 'bob',score:65},
    { name: 'charlie',score:80},
    { name: 'david',score:45},
    { name: 'alen',score:75},
];
let newar1 = students.filter((student) => student.score > 60);
console.log(newar1);
let newar2 = students.map((student) => student.score > 60);
console.log(newar2);
let newar3 = students.map((student) => student.score * 2);
console.log(newar3);

let newarr=students.filter((students)=>students.score>60)
.map((students)=>students.score*2)
.reduce((x,y)=>x+y,0);
console.log(newarr);

let newarr1=students.map((students)=>students.score>60);
console.log(newarr1);