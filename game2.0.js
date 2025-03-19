const quizData = [
    { question: "日本の首都は？", options: ["大阪", "京都", "東京", "福岡"], answer: "東京" },
    { question: "地球は何番目の惑星？", options: ["3番目", "5番目", "7番目", "2番目"], answer: "3番目" },
    { question: "富士山の高さは？", options: ["3776m", "4000m", "2500m", "5000m"], answer: "3776m" },
    { question: "よもぎに３万円借金している人物は誰？", options: ["海軍大将", "ロメ", "今湶龍之介", "よもぎ"], answer: "ロメ" },
    { question: "「有り得ない話し⁉」で有名な力士といえば？", options: ["朝青龍", "青椒肉絲", "加須の富士", "明徳（アッキー）"], answer: "朝青龍" },
    { question: "小説「Crisis Heart」に出てくる神無月イアの正体は？", options: ["八千代", "事件の犯人", "零", "みけねこ"], answer: "八千代" },
    { question: "納豆とミカンを一緒に食べるとどうなる？", options: ["納豆が黒い鞭状のエネルギーを放出する", "みかんが発酵する", "まずい", "ロメになる"], answer: "まずい" },
    { question: "次のうち、たっけーの発言はどれ？", options: ["ぼくの時代…来ちゃったかもだっけー☆☆", "感無量なんだだっけー", "福生に来たナリよ～", "たっけ～（笑）"], answer: "感無量なんだだっけー" },
    { question: "ピ〇チュウのメスの尻尾の形は？", options: ["ハート", "星", "六角形", "直角三角形"], answer: "ハート" },
    { question: "２５＾２は６２５ですが、２４＾２の答えは？", options: ["586", "536", "556", "576"], answer: "576" },
    { question: "りんごを英語でなんという？", options: ["apply", "aplpe", "apple", "apppe"], ansew: "apple" }
    
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
