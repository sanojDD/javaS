//for in loop
//in objects
/*
const myObject = {
js:"javascript",
cpp:"c++",
rb:"ruby"
}

for (const key in myObject) {
  // console.log(`${key} is for ${myObject[key]}`);
}
//for array
const programming =["js","cpp","java"]
for (const key in programming) {
  console.log(programming[key]);
}
*/
//for array:for each loop

// const coding= ["java","cpp","js","c"];

// coding.forEach( function ( index ) {
// // console.log(`The items is:${index}`);

// })
// //arrow fn
// coding.forEach( (items) => {
// console.log(items);
// })

// const coding= ["java","cpp","js","c"];
// function printMe(item){
// console.log(item);
// }

// coding.forEach(printMe)

// const coding = ["java", "cpp", "js", "c"];
// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

//[{} ,{}, {}]
//for database

const myCoding = [
  {
    languageName:"javascript",
    fileName:"js"
  },
  {
    languageName:"c++",
    fileName:"cpp"
  },
  {
    languageName:"ruby",
    fileName:"rb"
  }
]

myCoding.forEach( (item) =>{
// console.log(item.fileName);
})

//what forEach return == undefined
// const coding = ["java", "cpp", "js", "c"];

// const values = coding.forEach( (item) =>{
// // console.log(item);
// return item;
// })
// console.log(values);

