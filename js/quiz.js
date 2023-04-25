let score = 0;
let qn = 0;
const restart = $("#restart");
const start = $("#start");
const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "Madrid", "Rome"],
        correctAnswer: "Paris",
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: ["Jupiter", "Saturn", "Neptune"],
        correctAnswer: "Jupiter",
    },
    {
        question: "What is the smallest country in the world?",
        answers: ["Monaco", "Vatican City", "San Marino"],
        correctAnswer: "Vatican City",
    },
    {
        question: "Where is MMDU located in India?",
        answers: ["Chandigah", "Delhi", "Mullana"],
        correctAnswer: "Mullana",
    },
    {
        question: "What is the full meaning of BCA as a course in MMDU?",
        answers: [
            "Bachelor of Computer Applications",
            "Bachelor of Cardiac Arrest",
            "Bachelor of Computer Science",
        ],
        correctAnswer: "Bachelor of Computer Applications",
    },
    {
        question: "Who is the head of the BCA department?",
        answers: ["Vivek Bhatnagar", "Gautam Kumar", "Dr Rattan"],
        correctAnswer: "Vivek Bhatnagar",
    },
];

restart.onclick = startQuiz;
start.onclick = startQuiz;

function startQuiz() {
    score = 0;
    qn = 0;
    $("#intro").addClass("hide");
    show_question();
}
function show_question() {
    $("#question").innerText = questions[qn]["question"];
    $("#answers").innerHTML = "";
    questions[qn]["answers"].forEach((element) => {
        $("#answers").append(
            `<div class="answer" onclick="answer(this)">${element}</div>`
        );
    });
}
function answer(node) {
    let answer = node.innerText;
    node.addClass("active");
    if (answer == questions[qn]["correctAnswer"]) {
        score++;
        node.addClass("right");
    } else {
        node.addClass("wrong");
    }
    qn++;
    setTimeout(() => {
        if (qn == questions.length) {
            $("#question").innerText = "";
            $("#answers").innerHTML = "";
            $("#intro").innerText = score + "/" + qn + "\nCorrect";
            $("#intro").removeClass("hide");
        } else {
            show_question();
        }
    }, 1000);
}
