var startBtn = document.querySelector("#start");
var timeEl = document.getElementById("time");
var mainEl = document.getElementById("main");
var initEl = document.getElementById("init");
var qArea = document.getElementById("Q-area");
var aArea = document.getElementById("A-area");
var secondsLeft = 90;
var a1Btn = document.getElementById("a1");
var a2Btn = document.getElementById("a2");
var a3Btn = document.getElementById("a3");
var a4Btn = document.getElementById("a4");
var form = document.getElementById("form");
var aBtn = document.querySelectorAll(".A-btn");
var feedback = document.getElementById("feedback");
var feedbackExpiration;
var message = document.getElementById("message");
var initials = document.getElementById("initials");
var inputField = document.getElementById("input");
var submitBtn = document.getElementById("submit");
var scoresArea = document.getElementById("scores-area");
var scoreList = document.getElementById("scorelist");
var reloadBtn = document.getElementById("reload");

// question arrays
var quizChunks = [
  {question: "The answer is the second one, this is a test.",
  ans1: "Nope",
  ans2: "Yes",
  ans3: "Ha",
  ans4: "Freezing",
  correct: "Yes"},

  {question: "What does API stand for?",
  ans1: "A Person Internal",
  ans2: "Active Pharmaceutical Ingredient",
  ans3: "Accelerated Paradigm Incinerator",
  ans4: "Application Programming Interfaces",
  correct: "Application Programming Interfaces"},

  {question: "What is JavaScript?",
  ans1: "It is a widely used scripting language that adds functionality and interactivity to a webpage.",
  ans2: "Coffee lovers special at the local store!",
  ans3: "This is the script writers use to make movies.",
  ans4: "JavaScript is html.",
  correct: "It is a widely used scripting language that adds functionality and interactivity to a webpage."},

  {question: "What does local storage do?",
  ans1: "Stores info onto your desktop",
  ans2: "Adds all passwords to all computers you have ever used, EVER",
  ans3: "Store data in the user's browser",
  ans4: "Stores data in hidden files that you can never find",
  correct: "Store data in the user's browser"},

  {question: "How cool is Lindsey?",
  ans1: "Very",
  ans2: "Only to unique cool people",
  ans3: "Ha whO", 
  ans4: "Why are we questioning this",
  correct: "Why are we questioning this"},
];

var current = 0;
var Q = quizChunks[current].question;
var A1 = quizChunks[current].ans1;
var A2 = quizChunks[current].ans2;
var A3 = quizChunks[current].ans3;
var A4 = quizChunks[current].ans4;

showInit();


function showInit(event) {
  initEl.classList.toggle("hide");
}

var timerInterval;

function setTime() {
  timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      endQuiz();
    }

  }, 1000);
}


startBtn.addEventListener("click", function() {
    setTime();
    showQuiz();
});


function showQuiz() {
  timeEl.classList.toggle("hide");
  timeEl.textContent = secondsLeft;
  initEl.classList.toggle( 'hide' );
  qArea.classList.toggle( 'hide' );
  aArea.classList.toggle( 'hide' );
  qArea.innerHTML = Q;
  a1Btn.innerHTML = A1;
  a2Btn.innerHTML = A2;
  a3Btn.innerHTML = A3;
  a4Btn.innerHTML = A4;
}



aArea.addEventListener("click", check);


function check(event) {
  var right = quizChunks[current].correct;
  
  if (event.target.textContent == right) {
    next();
    feedback.innerHTML = "Very GOOD";
    feedbackExpiration = setTimeout(function () {
      feedback.innerHTML = "";
    }, 1000);
  }
  else {
    punish(10);
    next();
    feedback.innerHTML = "But why";
    feedbackExpiration = setTimeout(function () {
      feedback.innerHTML = "";
    }, 1000);
    stopAtZero();
    timeEl.textContent = secondsLeft;
  };
}

function stopAtZero() {
  if (secondsLeft <= 0) {
    secondsLeft = 0;
  endQuiz();
}}

function punish(seconds) {
  secondsLeft -= seconds;
}

function hideFeedback() {
  clearTimeout(feedbackExpiration);
}


function next() {
  current++;
  hideFeedback();

  if (current < 5) {
    var Q = quizChunks[current].question;
    var A1 = quizChunks[current].ans1;
    var A2 = quizChunks[current].ans2;
    var A3 = quizChunks[current].ans3;
    var A4 = quizChunks[current].ans4;
 
    qArea.innerHTML = Q;
    a1Btn.innerHTML = A1;
    a2Btn.innerHTML = A2;
    a3Btn.innerHTML = A3;
    a4Btn.innerHTML = A4;
  }

  else {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(timerInterval);
  qArea.classList.toggle("hide");
  aArea.classList.toggle("hide");
  form.classList.toggle("hide");
  timeEl.classList.toggle("hide");
  message.textContent = 
  "Thank you for participating Your score is " + secondsLeft + ".";
  initials.textContent = 
  "Put your initials here, please be mature!"
}

submitBtn.addEventListener("click", record);


function record(event) {
  event.preventDefault();
  var input = inputField.value.trim();
  var score = secondsLeft;
  var game = {
    player: input,
    number: score,
  };
  var storedGames = JSON.parse(localStorage.getItem("storedgames"))||[];
  storedGames.push(game);
  localStorage.setItem("storedgames", JSON.stringify(storedGames));
  
  console.log(storedGames);
  showScores();
}



function showScores() {
  form.classList.toggle("hide");
  scoresArea.classList.toggle("hide");
  var storedGames = JSON.parse(localStorage.getItem("storedgames"))||[];
  storedGames.sort(function(a,b){
    return b.number - a.number
  });

  for(var i=0; i < storedGames.length; i++) {
 
      var createLi = document.createElement("li");
      createLi.textContent = storedGames[i].player + " " + storedGames[i].number;
      scoreList.appendChild(createLi);
  
  }
}

reloadBtn.addEventListener("click", reload);

function reload() {
  location.reload();
}