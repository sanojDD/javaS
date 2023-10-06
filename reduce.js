//reduce
//use accululator and current value
//acc:initial value(sum of items)
// 0 == initial value of acc

//  const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8]
// const myTotal = myNums1.reduce( function (acc, curVal) {
//   console.log(`acc:${acc} , currentValue: ${curVal}`);
//  return acc +curVal
// }, 0)
// console.log(`total : ${myTotal}`);

// reduce using arrow fn
//  const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8]

// const total = myNums1.reduce( (acc,curVal) => {
//   return acc + curVal;
// },0)
// console.log(total);

//example
const shoppingCard = [{
  itemname: "js",
  price:699
},
{
  itemname: "python",
  price:700
},
{
  itemname: "ruby",
  price:1000
},
{
  itemname: "data science",
  price:1990
},
]
//now add the the prices from the list
const finalValue1 = shoppingCard.reduce( (acc , curr) => {
  return acc + curr.price
},0)
console.log(finalValue1);
