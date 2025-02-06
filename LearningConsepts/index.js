console.log(`Hello !`);
window.alert(`REFRESHED ! 🔔`);

//commment here ! 
/* Comment here !*/

document.getElementById("txtFromJS").textContent = `hi this outPut is from JavaScript !`;

document.getElementById("txtFromJSP").textContent = `hi this outPut is from JavaScript !`;

//variable declaration ! -> 

let x = "WHitE-TITaN";
console.log(x);

let age = 21;
console.log(`your age is ${age} !!`);

console.log(typeof age); // the typeof function returns the data type of the variable !

//setting the text content to the variable;
document.getElementById("my_name").textContent = x;
document.getElementById("my_age").textContent = age;

//Maths !;
let variable = 10;

console.log(variable);
console.log(variable += 10);

variable *= 10;
console.log(variable);

//taking input with window prompt !;
/*let userInput = window.prompt("Enter your user name !");
console.log(userInput);*/
let userName;
document.getElementById("submit").onclick = function(){
    userName = document.getElementById("userName").value;
    document.getElementById("my_name").textContent = `HELLO ${userName}`;
    console.log(userName); 
}