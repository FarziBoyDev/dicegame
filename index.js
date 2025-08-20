var player1 = prompt("Player 1, Enter your Name:");
player1 = player1.slice(0,1).toUpperCase()+player1.slice(1,player1.length);
document.querySelector("#p1").textContent=player1;
var player2 = prompt("Player 2, Enter your Name:");
player2 = player2.slice(0,1).toUpperCase()+player2.slice(1,player2.length);
document.querySelector("#p2").textContent=player2;
var p1Score = 0;
var p2Score = 0;
let checker;
do {
  checker = prompt("Enter max score (numbers only):");
} while (isNaN(checker) || checker.trim() === "" || Number(checker) <= 0);

checker = Number(checker);

document.getElementById("pl1").innerHTML=player1+"'s score is: "+p1Score;
document.getElementById("pl2").innerHTML=player2+"'s score is: "+p2Score;
sim();
document.getElementById("area").addEventListener("click", function(){
    var number1 = Math.random()*6;
    var number2 = Math.random()*6;
    var random1 = Math.floor(number1) + 1;
    var random2 = Math.floor(number2) + 1;
    document.querySelector("h3").textContent="Max point: "+checker;
    for(var x = 1; x<=6; x++)
    {
        if(random1===x)
            {
            document.querySelector(".img1").setAttribute("src","./images/dice"+x+".png")
            }
        if(random2===x)
            {
            document.querySelector(".img2").setAttribute("src","./images/dice"+x+".png")
            }
    }
    let dice1 = document.querySelector(".img1");
    let dice2 = document.querySelector(".img2");
    dice1.classList.remove("roll-effect");
    dice2.classList.remove("roll-effect");
    void dice1.offsetWidth; // restart trick
    void dice2.offsetWidth;
    dice1.classList.add("roll-effect");
    dice2.classList.add("roll-effect");
    if(random1>random2)
    {
        p1Score++;
        document.querySelector("h1").textContent="🚩 "+player1+" Wins!";
        document.getElementById("pl1").textContent=player1+"'s score is: "+p1Score;
    }
    else if(random1<random2)
    {
        p2Score++;
        document.querySelector("h1").textContent=player2+" Wins! 🚩";
        document.getElementById("pl2").textContent=player2+"'s score is: "+p2Score;  
    }
    else
    {
        document.querySelector("h1").textContent="🏳️ Draw! 🏳️";
    }
    if(p1Score>p2Score){document.querySelector("h2").textContent=player1+" is Winning!";}
    else if(p1Score<p2Score){document.querySelector("h2").textContent=player2+" is Winning!";}
    else if(p1Score===p2Score){document.querySelector("h2").textContent="Nobody is Winning 😲";}    
    if(p1Score==checker)
    {
    document.querySelector(".container").innerHTML="<h1></h1>";
    document.querySelector(".container h1").textContent=player1+" won!!!!";
    document.querySelector(".container h1").classList.add("zooming-effect");
    }
    if(p2Score==checker)
    {
    document.querySelector(".container").innerHTML="<h1></h1>";
    document.querySelector(".container h1").textContent=player2+" won!!!!";
    document.querySelector(".container h1").classList.add("zooming-effect");
    }
}
);
function sim(){
    var number1 = Math.random()*6;
    var number2 = Math.random()*6;
    var random1 = Math.floor(number1) + 1;
    var random2 = Math.floor(number2) + 1;
    document.querySelector("h3").textContent="Max point: "+checker;
    for(var x = 1; x<=6; x++)
    {
        if(random1===x)
            {
            document.querySelector(".img1").setAttribute("src","./images/dice"+x+".png")
            }
        if(random2===x)
            {
            document.querySelector(".img2").setAttribute("src","./images/dice"+x+".png")
            }
    }
    let dice1 = document.querySelector(".img1");
    let dice2 = document.querySelector(".img2");
    dice1.classList.remove("roll-effect");
    dice2.classList.remove("roll-effect");
    void dice1.offsetWidth; // restart trick
    void dice2.offsetWidth;
    dice1.classList.add("roll-effect");
    dice2.classList.add("roll-effect");
    if(random1>random2)
    {
        p1Score++;
        document.querySelector("h1").textContent="🚩 "+player1+" Wins!";
        document.getElementById("pl1").textContent=player1+"'s score is: "+p1Score;
    }
    else if(random1<random2)
    {
        p2Score++;
        document.querySelector("h1").textContent=player2+" Wins! 🚩";
        document.getElementById("pl2").textContent=player2+"'s score is: "+p2Score;  
    }
    else
    {
        document.querySelector("h1").textContent="🏳️ Draw! 🏳️";
    }
    if(p1Score>p2Score){document.querySelector("h2").textContent=player1+" is Winning!";}
    else if(p1Score<p2Score){document.querySelector("h2").textContent=player2+" is Winning!";}
    else if(p1Score===p2Score){document.querySelector("h2").textContent="Nobody is Winning 😲";}

    if(p1Score==checker)
    {
    document.querySelector(".container").innerHTML="<h1></h1>";
    document.querySelector(".container h1").textContent=player1+" won!!!!";
    document.querySelector(".container h1").classList.add("zooming-effect");
    }
    if(p2Score==checker)
    {
    document.querySelector(".container").innerHTML="<h1></h1>";
    document.querySelector(".container h1").textContent=player2+" won!!!!";
    document.querySelector(".container h1").classList.add("zooming-effect");
    }
}
