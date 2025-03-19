const quizData = [
    { question: "日本の首都は？", options: ["大阪", "京都", "東京", "福岡"], answer: "東京" },
    { question: "地球は何番目の惑星？", options: ["3番目", "5番目", "7番目", "2番目"], answer: "3番目" },
    { question: "富士山の高さは？", options: ["3776m", "4000m", "2500m", "5000m"], answer: "3776m" }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextButton = document.getElementById("next");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option, button);
        optionsEl.appendChild(button);
    });

    nextButton.disabled = true;
}

function checkAnswer(answer, button) {
    const correctAnswer = quizData[currentQuestion].answer;
    if (answer === correctAnswer) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    document.querySelectorAll("#options button").forEach(btn => btn.disabled = true);
    nextButton.disabled = false;
    scoreEl.textContent = `スコア: ${score}`;
}

nextButton.onclick = () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        questionEl.textContent = "クイズ終了！";
        optionsEl.innerHTML = "";
        nextButton.style.display = "none";
    }
};

loadQuestion();
