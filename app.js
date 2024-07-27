let userScore = 0;
let CompeScore =0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscor = document.querySelector("#user-score");
const compscor = document.querySelector("#comp-score");


const playGameByComp = ()=>{
    const options = ["rock","paper","scissor"];
   const randomIndex=  Math.floor(Math.random()*3);   /*this math class is inbuild in js .*/
return options[randomIndex];
}
const drawGame = ()=>{
    console.log("game was draw");
    msg.innerText = "game was draw";
    msg.style.backgroundColor = "grey";
};

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++
        userscor.innerText = userScore;
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
     CompeScore++
     compscor.innerText = CompeScore;
        msg.innerText = `you lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice)=>{
console.log("user Choice = ",userChoice);
const compChoice = playGameByComp();
console.log("compChoice",compChoice);
if(userChoice === compChoice){
drawGame();
}else{
    let userWin = true;{
       if(userChoice === "rock"){
       userWin =  compChoice === "paper"? false: true;
       } else if(userChoice === "paper"){
        userWin = compChoice === "scissor"? false: true;
       } else {
     userWin = compChoice === "rock" ? false: true;
       }
       showWinner(userWin,userChoice,compChoice);
    }
}
};


choices.forEach((choice) =>{
choice.addEventListener("click",()=>{
const userChoice =  choice.getAttribute("id");
playGame(userChoice);
})
})