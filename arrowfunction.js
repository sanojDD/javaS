const user1 = {
  username:"sanoj",
  price:999,

  welcomemessage: function (){
    console.log(`${this.username} ,welcome to website`);

    // console.log(this);
  }


}
// user1.welcomemessage()
// user1.username = "arthur"
// user1.welcomemessage()

// console.log(this);

// function tea(){
//   // console.log(this);
// }
// tea()

//arrow fun
 const tea = () => {
  console.log(this);
}
// tea()

// const addNum = (num1 , num2) => {
//   return num1 + num2; //expicit return
// }
// console.log(addNum(2,4));

// const addNum = (num1 , num2) => num1 + num2;
// const addNum = (num1 , num2) => (num1 + num2); //implicit return
//returning object with arrow fun
const addNum = (num1 , num2) => ({username : "TeaLover"});

console.log(addNum(2,4));

