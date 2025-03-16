// クイズの問題と選択肢
const questions = [
    {
        question: "日本の首都はどこですか？",
        options: ["京都", "大阪", "東京", "福岡"],
        answer: 2 // 正解は「東京」
    },
    {
        question: "太陽系の惑星で一番大きいのはどれですか？",
        options: ["地球", "火星", "木星", "金星"],
        answer: 2 // 正解は「木星」
    },
    {
        question: "1+1=",
        options: ["1", "2", "3", "4"],
        answer: 1 // 正解は「2」
    },
    
    // 追加の問題をここに追加できます
    {
        question: "2+3=", 
        options: ["5", "4", "6", "3"],
         answer: 0
    },
    { 
       question: "小学生が背負うものといえば何？",
        options: ["ランドセル", "おじさん", "ロケット", "借金"], 
        answer: 0 
   },
   { 
       question: "全然部活に来ない人のこと", 
       options: ["部長", "帰宅部", "怨霊部員", "幽霊部員"], 
       answer: 3 
   },
   { 
       question: "Do you know yomogi?", 
       options: ["yes", "はい", "もちろん", "うん"], answer: any 
   },
];

// 初期状態
let currentQuestionIndex = 0;
let score = 0;

// ゲームを開始する関数
function startGame() {
    // タイトル画面を隠し、クイズ画面を表示
    document.getElementById("title-screen").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";

    // 最初の問題を読み込む
    loadQuestion();
}

// 問題を表示する関数
function loadQuestion() {
    let q = questions[currentQuestionIndex];
    document.getElementById("question").innerText = q.question;  // 問題文を表示

    // 選択肢をボタンに設定
    document.querySelectorAll(".option").forEach((btn, index) => {
        btn.innerText = q.options[index];  // 各ボタンに選択肢を設定
    });
}

// 答えを確認する関数
function checkAnswer(selected) {
    let q = questions[currentQuestionIndex];

    // 正解かどうかを判定
    if (selected === q.answer) {
        score++;
        alert("正解！");
    } else {
        alert("不正解。");
    }

    // 次の問題に進む
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        // 問題が終わったらスコアを表示
        document.getElementById("quiz-container").style.display = "none";
        alert("ゲーム終了！ あなたのスコアは " + score + " です！");
        document.getElementById("title-screen").style.display = "block";
        currentQuestionIndex = 0;  // 最初から始めるためにインデックスをリセット
        score = 0;  // スコアをリセット
    }
}
