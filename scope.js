function one() {
  const username = "Sandy"
  function two() {
    const website = "vscode.com"
    console.log(username);
  }
  // console.log(website);
  two()

}
// one()

if (true) {
  const username = "sandy";
  if (username === "sandy") {
    const website = "monday"
    console.log(website + username);

  }
  // console.log(website); 
}
// console.log(username);

console.log(addOne(8));

function addOne(value){
 return value = value + 1 ;
}
//hoisting
// console.log(addTwo(5)); gives error
const addTwo = function (value){
  return value + 2;
}
console.log(addTwo(5));
