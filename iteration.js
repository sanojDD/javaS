for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is the number");
  }
  // console.log(`index ${i}`);

}
// console.log(element);

for (let i = 1; i <= 10; i++) {
  // console.log(`outer loop ${i}`);

  for (let j = 1; j <= 10; j++) {
    // console.log(`inner loop ${j} outer loop ${i}`);
    // console.log(i + "*" + j + " = " + i * j);
  }
}
let myArray1 = ["Hela", "loki", "thor"]
for (let index = 0; index < myArray1.length; index++) {
  // console.log(`${myArray1.length}`);

  const element = myArray1[index];
  // console.log(element);

}

//break and continue
// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`detected ${index}`);
//     break;//break the control flow out of scope
//   }
//   console.log(`value of i is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    // console.log(`detected ${index}`);
    continue//skip for one condition 
  }
  // console.log(`value of i is ${index}`);
}