// game.js
const levels = [
    [
        { question: "What is 2 + 2?", answer: "4" },
        { question: "What is the oppisite of down?", answer: "up" },
        { question: "Whats the babys name?", answer: "grace" }
    ],
    [
        { question: "What is 3 + 5?", answer: "8" },
        { question: "What is your bothers name?", answer: "isaiah" },
        { question: "Who loves you more mommy or daddy?", answer: "daddy" },
        { question: "What is 4 x 4?", answer: "16" }
    ],
    [
        { question: "What is 12 / 4?", answer: "3" },
        { question: "What country is your father?", answer: "ecuador" },
        { question: "What color is the sky?", answer: "blue" },
        { question: "my daddy is so cu..?", answer: "cute" },
        { question: "Who is the most beautiful girls in the world?", answer: "elizabeth" }
    ]
];

let currentLevel = 0;
let currentQuestionIndex = 0;

function displayQuestion() {
    if (currentLevel < levels.length && currentQuestionIndex < levels[currentLevel].length) {
        const questionObj = levels[currentLevel][currentQuestionIndex];
        document.getElementById('question').innerText = questionObj.question;
        document.getElementById('answer').value = '';
        document.getElementById('message').innerText = '';
    } else if (currentLevel < levels.length - 1) {
        showAnimation("keep going!");
        currentLevel++;
        currentQuestionIndex = 0;
        setTimeout(displayQuestion, 2000);
    } else {
        showAnimation("You did it!");
        document.getElementById('question-container').innerHTML = "<p>Congratulations! You've completed all levels!</p>";
        document.getElementById('level').innerText = '';
    }
    document.getElementById('level').innerText = `Level: ${currentLevel + 1}, Question: ${currentQuestionIndex + 1}`;
}

function submitAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswer = levels[currentLevel][currentQuestionIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        document.getElementById('message').innerText = 'Incorrect, try again!';
    }
}

function showAnimation(message) {
    const animationMessage = document.getElementById('animation-message');
    animationMessage.innerText = message;
    animationMessage.style.display = 'block';
    setTimeout(() => {
        animationMessage.style.display = 'none';
    }, 2000);
}

// Initialize the game by displaying the first question
displayQuestion();
