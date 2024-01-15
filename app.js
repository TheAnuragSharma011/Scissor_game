let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const ComputerChoicepara = document.querySelector("#Computer-score")

const genComputerChoice = () => {
    const option = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};
const drawGame = () => {
    //console.log(" Game was Draw.");
    msg.innerText = "Game was Draw.Play Again."
    msg.style.backgroundColor = "#081b31";
};
const showwinner = (userWin, userChoice, ComputerChoice) => {
    if (userWin) {
        userscore++;
        userscorepara.innerText = userscore;
        //console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${ComputerChoice}`;
        msg.style.backgroundColor = "green";

    } else{
        computerscore++;
        ComputerChoicepara.innerText = Computerscore;
        //console.log("You Lose");
        msg.innerText = `You Lose. ${computerscore} beats your ${userChoice};`
        msg.style.backgroundColor = "red";
    };
}
const playgame = (userChoice) =>
{
console.log("user choice = ", userChoice);
 //genrate computer choice -> 
 const ComputerChoice = genComputerChoice();
 console.log("Computer choice = ", ComputerChoice);

 if(userChoice === ComputerChoice){
    //draw game
drawGame();
 } else {
    let userWin = true;
    if(userChoice === "rock"){
        //scissors, paper
         userWin = ComputerChoice === "paper" ? false : true;
    } else if(userChoice === "paper"){
        //rock, scissors
        userWin = ComputerChoice === "scissors" ? false : true;

    } else{
        //rack, paper
        userWin = ComputerChoice === "rock" ? false : true;

    }
    showwinner(userWin,userChoice, computerscore);
 }
};

choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click", () => {
      const userChoice= choice.getAttribute("id");
        //console.log("choice was clicked", userChoice);
        playgame(userChoice);
    });


});