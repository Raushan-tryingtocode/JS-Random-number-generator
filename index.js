let x;

let randomnum;

document.getElementById("submit").onclick=function (){
    x = document.getElementById("x").value;
    x=Number(x);
    randomnum=Math.floor(Math.random()*x) + 1;

    document.getElementById("label1").textContent=randomnum;
}





