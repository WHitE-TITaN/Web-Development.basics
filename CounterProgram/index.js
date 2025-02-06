// main js file
window.alert("PAGE REFRESHED WELCOME !");
console.log(`launch Successful`);
let counetr = 990;
let running = true;

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
    document.getElementById("Exit").onclick = function(){
        running = false;
    }
