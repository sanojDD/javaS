//immediately invoked function expression
// used to prevent from the pollution of global scope

(function chiya() {
  console.log("DB connected");
//named iife
})();//put semicolon to end first iife function
// chiya()

// (function) (execution) eg. (chiya)()
//iife using arrow function
//unnamed or simple iife

((name) => {
  // console.log(`DB2 connected mr. ${name}`);
})('Dahal');


// function fullAdder (num1,num2,num3){
//   resultAdder = (num1+num2+num3)
//   return resultAdder;
// }
// console.log(fullAdder(1,2,3));

(theFullAdder = (string) => {
  if (string == "sanoj") {
  console.log("welcome Boss");    
  }
})("sanoj")
// theFullAdder("sanoj")