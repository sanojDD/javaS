const parent = document.querySelector(".parent")
// console.log(parent);
// console.log(parent.children[1].innerHTML);//gives html collection
//loop

// for (let i = 0; i < parent.children.length; i++) {
//   console.log(parent.children[i].innerHTML )  
// }

parent.children[1].style.color = "red"
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

const day1 = document.querySelector(".day");
// console.log(day1);
// console.log(day1.parentElement);
// console.log(day1.nextElementSibling);

//nodes list
console.log("NODES: ", parent.childNodes);