//generating random number !

let minimum = 0, maximum = 1_00_00_000;
let randomGenerated = Math.floor(Math.random() * (maximum - minimum)) + minimum;


console.log(randomGenerated);

window.onload = function() {
    document.getElementById("OutPut").textContent = `${randomGenerated}`;
};

document.getElementById("Submmit").onclick = function(){
    minimum = document.getElementById("LowRange").value;
    maximum = document.getElementById("HighRange").value;

    randomGenerated = Math.floor(Math.random() * (maximum - minimum)) + minimum;
    document.getElementById("OutPut").textContent = `${randomGenerated}`;
}