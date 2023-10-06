// const coding = ["java", "cpp", "js", "c"];

// const values = coding.forEach( (item) =>{
// // console.log(item);
// return item;
// })
// console.log(values);
//return undefined so we use filter
/*
const myNums  = [1,2,3,4,5,6,7,8,9,10];
const values = myNums.filter( (item) => {
  return item > 4
})
console.log(values);
*/

// const myNums  = [1,2,3,4,5,6,7,8,9,10];
// const values = myNums.forEach( (items) =>{
//   return items >=4;
// })
// console.log(values);
//output : undefined

//using for each

// const myNums  = [1,2,3,4,5,6,7,8,9,10];
// myNums.forEach( (items) =>{
//   if (items >= 4) {
//     console.log(items);
//   }

// })
/*
const newNums =[];
const myNums  = [1,2,3,4,5,6,7,8,9,10];

myNums.forEach( (items) => {
  if (items>=4) {
  newNums.push(items)
  }
})
console.log(newNums);
*/
//practise 
const books = [{
  title: "jungelbook", genre: "story", publish: 1990, edition: 2001
},
{
  title: "kabir singh", genre: "poem", publish: 1995, edition: 2002
},
{
  title: "tarzan", genre: "story", publish: 1996, edition: 2005
},
{
  title: "leo", genre: "article", publish: 2000, edition: 2008
},
{
  title: "KGF", genre: "movie", publish: 2018, edition: 2005
},
]

// const userBooks = books.filter( (bn) => {
//   return bn.genre === "story"
// })

// const userBooks = books.filter( (bk) => {
//   return bk.publish >= 2000 && bk.genre =="poem";
// })


// console.log(userBooks);
//map():return automatically
// const myNums = [1,2,3,4,5,6,7,8]

// const returnValue = myNums.map( (item) => {
// return item +  10;
// })
// console.log(returnValue);

//chaining
const myNums = [1, 2, 3, 4, 5, 6, 7, 8]
const finalValue = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 44

  )

// console.log(finalValue);
  //op of first returns to second one..


