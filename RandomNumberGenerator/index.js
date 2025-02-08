//generating random number !

let minimum = 1, maximum = 1_00_00_000;
let randomGenerated = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
document.getElementById("OutPut").textContent = `${randomGenerated}`;


console.log(randomGenerated);
window.onload = function(){
    window.onload = function() {
        document.getElementById("OutPut").textContent = `${randomGenerated}`;
    };

    document.getElementById("Submmit").onclick = function(){
        minimum = Number(document.getElementById("LowRange").value);
        maximum = Number(document.getElementById("HighRange").value);

        window.alert("Range Changed !");
    }

    document.getElementById("newSuffel").onclick = function(){
        randomGenerated = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        document.getElementById("OutPut").textContent = `${randomGenerated}`;
    }
}