// Define the questions and answers
const questions = [  {    question: "What is the capital of France?",    answers: {      a: "Paris",      b: "Madrid",      c: "Rome",    },    correctAnswer: "a",  },  
{    question: "What is the largest planet in our solar system?",    answers: {      a: "Jupiter",      b: "Saturn",      c: "Neptune",    },    correctAnswer: "a",  },  
{    question: "What is the smallest country in the world?",    answers: {      a: "Monaco",      b: "Vatican City",      c: "San Marino",    },    correctAnswer: "b",  },
{    question: "Where is MMDU located in India?", answers: { a: "Chandigah", b: "Delhi", c: "Mullana", }, correctAnswer: "c",   },
{    question: "What is the full meaning of BCA as a course in MMDU?", answers: {a: "Bachelor of Computer Applications", b: "Bachelor of Cardiac Arrest", c: "Bachelor of Computer Science"}, correctAnswer: "a", },
{    question: "Who is the head of the BCA department?", answers: { a: "Vivek Bhatnagar", b: "Gautam Kumar", c: "Dr Rattan", }, correctAnswer: "a", },

];

// Define variables for the quiz
let score = 0;
let currentQuestion = 0;

// Restart button
const restartButton = document.getElementById('restart-button');
console.log(restartButton);
restartButton.style.backgroundColor = 'green';

// Adding an event listener to restartButton
restartButton.addEventListener('click', function() {
  //Reset the quiz to its initial state
  currentQuestion = 0; //This sets current question back to its initial state
  score = 0; //This sets the score back to its initial state
// Display the first question again
displayQuestion(questions[currentQuestion]);
});

// Timer functionality
// const timer = document.getElementById('timer');
console.log(timer);
const timeRemainingSpan = document.getElementById("time-remaining");
const startQuizButton = document.getElementById("start-quiz-button");
// Setting the initial time remaining for the quiz
let timeRemaining = 60;

//Creating a function to start timer
function startTimer(){
  const timer = setInterval(() => {
    timeRemaining --;
    timeRemainingSpan.textContent = timeRemaining;

    if(timeRemaining <=0) {
      clearInterval(timer);
      timeRemainingSpan.textContent = "Quiz Over";
  
    }
  }, 10000);
  
} 

startQuizButton.addEventListener('click', () => {
  console.log('button clicked');
  startTimer();
});


  

// Display the current question and answer choices
const quizContainer = document.getElementById("quiz-container")
startQuizButton.addEventListener("click", function(){
  // show the quiz container and timer
  quizContainer.style.visibility = "visible";
  timer.style.visibility = "visible";
})
function displayQuestion() {
  const question = questions[currentQuestion];
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = `
    <h2>${question.question}</h2>
    <ul>
      <li>
        <label>
          <input type="radio" name="answer" value="a">
          ${question.answers.a}
        </label>
      </li>
      <li>
        <label>
          <input type="radio" name="answer" value="b">
          ${question.answers.b}
        </label>
      </li>
      <li>
        <label>
          <input type="radio" name="answer" value="c">
          ${question.answers.c}
        </label>
      </li>
    </ul>
    <button onclick="submitAnswer()">Submit</button>
  `;
}

// Submit the user's answer and check if it's correct
function submitAnswer() {
  const answer = document.querySelector('input[name="answer"]:checked').value;
  const question = questions[currentQuestion];
  if (answer === question.correctAnswer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    displayScore();
  }
}

// Display the user's score
function displayScore() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = `
    <h2>Your Score</h2>
    <p>You got ${score} out of ${questions.length} questions correct.</p>
  `;
}


// Start the quiz
displayQuestion();
