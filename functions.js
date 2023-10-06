// function adder(num1, num2) {
//   const num3 = num1 + num2
//   console.log(num3);
// }

function adder(num1, num2) {
  return num3 = num1 + num2
  // console.log("sanoj");
}

 const result = adder(3, 8)
//  console.log(result);

function loginUserMessage(username = 'a'){
  if (!username){
    // console.log("please user a username?");
    return
  }
  return `${username},just logged in`
}
// console.log(loginUserMessage("sanoj"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());

//rest and spread operator

function calculatecartprice(val1 ,val2,...num1){//rest operator
  return num1;
}
// console.log(calculatecartprice(200,300,400));
const user = {
  name:"sanoj",
  price:333,
}

function handleObject (anyObject){
  console.log(`username is ${anyObject.name}, price is ${anyObject.price}`);
}

// handleObject(user);

handleObject( {
  name:"spiderman",
  price:888
})

handleObject({
  name:"sanojDD",
  price:"priceless"
})
//array
const myArray = [1,3,4,5,6,7]

function returnsecondvalue(getArray){
return getArray[1]
}
// console.log(returnsecondvalue(myArray));

console.log(returnsecondvalue([1,2,3,4,5]));

//scope
