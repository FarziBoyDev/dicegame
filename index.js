var res = document.querySelector("#result");
var p1 = document.querySelector("#name1");
var p2 = document.querySelector("#name2");
var d1 = document.querySelector("#dice1");
var d2 = document.querySelector("#dice2");
function gameprocess(){
    var name1 = prompt("Player 1 enter your name: ");
    p1.innerHTML = name1;
    if(name1.length===0){p1.innerHTML="Player 1";}
    var name2 = prompt("Player 2 enter your name: ");
    p2.innerHTML = name2;
    if(name2.length===0){p2.innerHTML="Player 2";}

    var num1 = Math.floor((Math.random()*6)+1);
    if(num1===1){
        d1.src = "./img/1.JPG";
    }
    if(num1===2){
        d1.src = "./img/2.JPG";
    }
    if(num1===3){
        d1.src = "./img/3.JPG";
    }
    if(num1===4){
        d1.src = "./img/4.JPG";
    }
    if(num1===5){
        d1.src = "./img/5.JPG";
    }
    if(num1===6){
        d1.src = "./img/6.JPG";
    }
    var num2 = Math.floor((Math.random()*6)+1);
    if(num2===1){
        d2.src = "./img/1.JPG";
    }
    if(num2===2){
        d2.src = "./img/2.JPG";
    }
    if(num2===3){
        d2.src = "./img/3.JPG";
    }
    if(num2===4){
        d2.src = "./img/4.JPG";
    }
    if(num2===5){
        d2.src = "./img/5.JPG";
    }
    if(num2===6){
        d2.src = "./img/6.JPG";
    }
    if(num1>num2){
        res.innerHTML=name1+", you won !!!";
    }else if(num1<num2){
        res.innerHTML=name2+", you won !!!";
    }else{
        res.innerHTML="Oops, it's a draw. (Try again?)";
    }

}
// document.querySelector("#result").onclick=gameprocess();
