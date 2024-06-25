yourTurn = 0;
compTurn = 0;
let choices = [0, "Rock", "Paper", "Scissor"];
let rock = document.querySelector(".rock");
let yourChoice = document.querySelector(".yourSelection");
let compChoice = document.querySelector(".compSelection");
rock.addEventListener("click", () => {
  yourTurn = 1;
  compTurn = Math.floor(Math.random() * 3) + 1;
  yourChoice.innerText = "You chose " + choices[yourTurn];
  compChoice.innerText = "Computer chose " + choices[compTurn];
  checkResult();
});
let paper = document.querySelector(".paper");
paper.addEventListener("click", () => {
  yourTurn = 2;
  compTurn = Math.floor(Math.random() * 3) + 1;
  yourChoice.innerText = "You chose " + choices[yourTurn];
  compChoice.innerText = "Computer chose " + choices[compTurn];
  checkResult();
});

let scissor = document.querySelector(".scissor");
scissor.addEventListener("click", () => {
  yourTurn = 3;
  compTurn = Math.floor(Math.random() * 3) + 1;
  yourChoice.innerText = "You chose " + choices[yourTurn];
  compChoice.innerText = "Computer chose " + choices[compTurn];
  checkResult();
});
//rock  1
//paper 2
//scissors 3
let youWin = 0;
let compWin = 0;
function checkResult() {
  let res = document.querySelector(".result");
  let yScore = document.querySelector(".yourScore");
  let cScore = document.querySelector(".compScore");
  if (yourTurn === compTurn) {
    res.innerText = "Draw";
    res.style.backgroundColor = "gray";
  } else if (yourTurn === 1 && compTurn === 3) {
    res.innerText = "You won!";
    res.style.backgroundColor = "green";
    youWin++;
    yScore.innerText = youWin;
  } else if (yourTurn === 1 && compTurn === 2) {
    res.innerText = "Computer won!";
    res.style.backgroundColor = "red";
    compWin++;
    cScore.innerText = compWin;
  } else if (yourTurn === 2 && compTurn === 1) {
    res.innerText = "You won!";
    res.style.backgroundColor = "green";
    youWin++;
    yScore.innerText = youWin;
  } else if (yourTurn === 2 && compTurn === 3) {
    res.innerText = "Computer won!";
    res.style.backgroundColor = "red";
    compWin++;
    cScore.innerText = compWin;
  } else if (yourTurn === 3 && compTurn === 2) {
    res.innerText = "You won!";
    res.style.backgroundColor = "green";
    youWin++;
    yScore.innerText = youWin;
  } else if (yourTurn === 3 && compTurn === 1) {
    res.innerText = "Computer won!";
    res.style.backgroundColor = "red";
    compWin++;
    cScore.innerText = compWin;
  }
  let reset = document.querySelector(".reset");
  reset.addEventListener("click", () => {
    yScore.innerText = 0;
    cScore.innerText = 0;
    youWin = 0;
    compWin = 0;
    res.innerText = "Pick Your Move";
    res.style.backgroundColor = "rgb(144,217,224)";
    yourChoice.innerText = "Your Choice";
    compChoice.innerText = "Computer's Choice";
  });
}
