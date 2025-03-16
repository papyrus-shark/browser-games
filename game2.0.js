const bgm = document.getElementById("bgm");
const clickSound = document.getElementById("click-sound");

// 音量を設定
bgm.volume = 0.3;  // BGM音量を30%に設定
clickSound.volume = 0.2;  // クリック音の音量を20%に設定

// すべての問題を準備
const allQuestions = [
    { question: "日本の首都はどこ？", options: ["大阪", "東京", "京都", "福岡"], answer: 1 },
    { question: "地球は何番目の惑星？", options: ["3番目", "4番目", "5番目", "6番目"], answer: 0 },
    { question: "富士山の標高は？", options: ["3,776m", "2,500m", "4,001m", "3,000m"], answer: 0 },
    { question: "日本の国花は？", options: ["桜", "梅", "菊", "チューリップ"], answer: 0 },
    { question: "日本の最北端にある島は？", options: ["択捉島", "沖縄本島", "佐渡島", "屋久島"], answer: 0 },

    { question: "1+1=", options: ["0", "2", "3", "1"], answer: 1 },
            { question: "2+3=", options: ["5", "4", "6", "3"], answer: 0 },
            { question: "小学生が背負うものといえば何？", options: ["ランドセル", "おじさん", "ロケット", "借金"], answer: 0 },
            { question: "全然部活に来ない人のこと", options: ["部長", "帰宅部", "怨霊部員", "幽霊部員"], answer: 3 },
            { question: "Do you know yomogi?", options: ["yes", "はい", "もちろん", "うん"], answer: all },
    // 30問用意
];

// ゲーム状態の管理
let questions = [];
let currentQuestionIndex = 0;
let score = 0;

// ゲーム開始関数
function startGame() {
    document.getElementById("title-screen").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";

    // ランダムに5問選ぶ
    questions = allQuestions.sort(() => Math.random() - 0.5).slice(0, 5);
    score = 0;
    currentQuestionIndex = 0;
    loadQuestion();
}

// 問題を表示
function loadQuestion() {
    let q = questions[currentQuestionIndex];
    document.getElementById("question").innerText = q.question;
    document.querySelectorAll(".option").forEach((btn, index) => {
        btn.innerText = q.options[index];
    });
}

// 解答確認
function checkAnswer(selectedIndex) {
    clickSound.play();  // クリック音を鳴らす

    let q = questions[currentQuestionIndex];
    
    // 正解か不正解かを判定
    if (selectedIndex === q.answer) {
        score++;
        alert("正解！");
    } else {
        alert("不正解！");
    }

    // スコア表示の更新
    document.getElementById("score").innerText = `スコア: ${score}`;
    currentQuestionIndex++;

    // 次の問題へ、または終了
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert(`ゲーム終了！あなたのスコアは ${score} です。`);
        resetGame();
    }
}

// ゲームリセット
function resetGame() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("title-screen").style.display = "block";
}

// ページが読み込まれたときにタイトル画面を表示
document.getElementById("title-screen").style.display = "block";
