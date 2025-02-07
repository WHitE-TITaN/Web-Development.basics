// main js file
window.alert("PAGE REFRESHED WELCOME !");
let UserName = window.prompt("User Name pls!");
console.log(UserName);
console.log(`launch Successful`);
let counetr = 0;
let running = true;

document.getElementById("name").textContent = `${UserName} Score Counter!`;
document.getElementById("Counter").textContent = counetr;

    document.getElementById("increment").onclick = function(){
        counetr++;
        document.getElementById("Counter").textContent = counetr;
    }

    document.getElementById("reset").onclick = function(){
        counetr = 0;
        document.getElementById("Counter").textContent = counetr;
    }

    document.getElementById("decrement").onclick = function(){
        counetr--;
        document.getElementById("Counter").textContent = counetr;
    }
