var mainEl = document.getElementById('main');
var startBtn = document.querySelector(".start-button");
var timeEl = document.getElementById('countdown');

var questions 
var answers
var highScore








// Timer that counts down from 20
// function countdown() {
//     var timeLeft = 20;
  
//     // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//     var timeInterval = setInterval(function () {
//       // As long as the `timeLeft` is greater than 1
//       if (timeLeft > 1) {
//         // Set the `textContent` of `timerEl` to show the remaining seconds
//         timerEl.textContent = timeLeft + ' seconds remaining';
//         // Decrement `timeLeft` by 1
//         timeLeft--;
//       } else if (timeLeft === 1) {
//         // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
//         timerEl.textContent = timeLeft + ' second remaining';
//         timeLeft--;
//       } else {
//         // Once `timeLeft` gets to 0, set `timerEl` to an empty string
//         timerEl.textContent = '';
//         // Use `clearInterval()` to stop the timer
//         clearInterval(timeInterval);
//         // Call the `displayMessage()` function
//         displayMessage();
//       }
//     }, 20000);
//   }



//startBtn.addEventListener("click", startQuiz);
//






//code quiz needs a start button
//needs a timer
//needs questions
//when a question is answered incorrectly time is subtrackted from the clock
// after all questions answered or time hits zero it is game over
//need to figure out how to save initials and score