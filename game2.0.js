const quiz = [
    {
        question: 'Q1. よもぎの誕生日は？',
        choices: [
            '３月１４日',
            '２月１４日',
            '４月２１日',
            '８月１２日'
        ],
        correct: '３月１４日'
    },
    {
        question: 'Q2. よもぎに３万円借金している人物は誰？',
        choices: [
            '海軍大将',
            '今湶龍之介',
            'ロメ',
            'よもぎ'
        ],
        correct: 'ロメ'
    },
    {
        question: 'Q3. 「有り得ない話し⁉」で有名な力士といえば？',
        choices: [
            '朝青龍',
            '青朝龍',
            '加須の富士',
            '明徳（アッキー）'
        ],
        correct: '朝青龍'
    },龍
    {
        question: 'Q4. 小説「Crisis Heart」に出てくる神無月イアの正体は？',
        choices: [
            'たちゃんか',
            'イアのおばあちゃん',
            '近所のおばさん',
            '八千代'
        ],
        correct: '八千代'
    },
    {
        question: 'Q5. 納豆とミカンを一緒に食べるとどうなる？',
        choices: [
            'まずい',
            '黒い鞭状のエネルギーを放出する',
            'みかんが体内で発酵する',
            'トイレから出られなくなる'
        ],
        correct: 'まずい'
    },
    {
        question: 'Q6. 黒〇野さんのイラストを無断で使用している人物は？',
        choices: [
            'たやか',
            'かやた',
            'たかな',
            'たかや'
        ],
        correct: 'たかや'
    },
    {
        question: 'Q7. えぬの知り合いは？',
        choices: [
            'カエル',
            '青チャ',
            'カエルのぬいぐるみで遊んでいた人',
            'ヤギニキ'
        ],
        correct: 'カエルのぬいぐるみで遊んでいた人'
    },
    {
        question: 'Q8. 次のうち、たっけーの発言はどれ？',
        choices: [
            '感無量なんだだっけー',
            'ぼくの時代…来ちゃったかもだっけー☆☆',
            '福生に来たナリよ～',
            'たっけ～（笑）'
        ],
        correct: '感無量なんだだっけー'
    },
    {
        question: 'Q9. ピ〇チュウのメスの尻尾の形は？',
        choices: [
            '星',
            '六角形',
            '直角三角形',
            'ハート'
        ],
        correct: 'ハート'
    },
    {
        question: 'Q10. ２５＾２は６２５ですが、２４＾２の答えは？',
        choices: [
            '５８６',
            '５３６',
            '５５６',
            '５７６'
        ],
        correct: '５７６'
    },
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const button = document.getElementsByTagName('button');
const buttonLength = button.length;

const setupQuiz = () => {
    document.getElementById('question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength) {
        button[buttonIndex].textContent = quiz[quizIndex].choices[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert("正解！");
        score++;
    } else {
        window.alert("不正解！");
    }

    quizIndex++;

    if (quizIndex < quizLength) {
        setupQuiz();
    } else {
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    }
}

let handlerIndex = 0;
while(handlerIndex < buttonLength) {
    button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}