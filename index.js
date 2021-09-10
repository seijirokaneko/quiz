// クイズリスト
const quiz = [{
        question: '宮崎県発祥の有名な料理といえば？', //問題
        answers: [　 //選択肢
            '味噌カツ',
            'ドライカレー',
            'ピーマンの肉詰め',
            'チキン南蛮'
        ],
        correct: 'チキン南蛮'　 //答え
    },
    {
        question: '5Gを初めて対応したiphoneと言えば？',
        answers: [
            'iphone8',
            'iphoneX',
            'iphone11',
            'iphon12'
        ],
        correct: 'iphon12'
    },
    {
        question: '次の車メーカーのうち国内の車メーカーはどれ？',
        answers: [
            'VolksWagen',
            'BMW',
            'Lexus',
            'Audi'
        ],
        correct: 'Lexus'
    },
    {
        question: '麻雀の役で役満であるものは次のうちどれ？',
        answers: [
            '嶺上開花',
            '七対子',
            '清老頭',
            '小三元'
        ],
        correct: '清老頭'
    },
    {
        question: 'プログラミング言語でiOSアプリ開発に特化した言語はどれ？',
        answers: [
            'java',
            'python',
            'swift',
            'GO'
        ],
        correct: 'swift'
    },
    {
        question: '47都道府県で海に面していないのは次のうちどれ？',
        answers: [
            '山形県',
            '埼玉県',
            '和歌山県',
            '佐賀県'
        ],
        correct: '埼玉県'
    },
    {
        question: '漫画「進撃の巨人」でエレンの父の職業は？',
        answers: [
            '弁護士',
            '教師',
            '教祖',
            '医者'
        ],
        correct: '医者'
    },
    {
        question: '次のうち京都にある寺はどれ？',
        answers: [
            '鹿苑寺',
            '鶴岡八幡宮',
            '伊勢神宮',
            '東大寺'
        ],
        correct: '鹿苑寺'
    },
    {
        question: 'つくばエクスプレス線で、上り「南千住駅」の次は何駅？',
        answers: [
            '新御徒町',
            '北千住',
            '浅草',
            '秋葉原'
        ],
        correct: '浅草'
    },
    {
        question: 'サッカーチーム「ユベントス」に所属していない選手はどれ？',
        answers: [
            'ディマリア',
            'ディバラ',
            'クリスティアーノ・ロナウド',
            'エジル'
        ],
        correct: 'エジル'
    },
    {
        question: 'NBAの18~19シーズンのMVP選手はだれ？',
        answers: [
            'ジェームズ・ハーデン',
            'ヤニス・アデトクンボ',
            'カワイ・レナード',
            'トレイ・ヤング'
        ],
        correct: 'ヤニス・アデトクンボ'
    },
    {
        question: '次の温泉街のうち、群馬県にあるものはどれ？',
        answers: [
            '伊香保温泉',
            '白浜温泉',
            '下呂温泉',
            '別府温泉'
        ],
        correct: '伊香保温泉'
    },
    {
        question: 'ヨーロッパの国でないものは次のうちどれ？',
        answers: [
            'ハンガリー',
            'ペルー',
            'フィンランド',
            'チェコ'
        ],
        correct: 'ペルー'
    },
    {
        question: '漫画「アイシールド２１」でヒル魔のポジションは次のうちどれ',
        answers: [
            'クォーターバック',
            'ランニングバック',
            'レシーバー',
            'ライン'
        ],
        correct: 'クォーターバック'
    },
    {
        question: '通称「海のミルク」と呼ばれる食べ物は？',
        answers: [
            '白子',
            'あん肝',
            '牡蠣',
            'キャビア'
        ],
        correct: '牡蠣'
    },
    {
        question: '三郷市に無いショッピング施設はどれ？',
        answers: [
            'コストコ',
            'ララポート',
            'IKEA',
            'イオン'
        ],
        correct: 'イオン'
    },
    {
        question: 'アニメ「氷菓」の舞台となっている都道府県は？',
        answers: [
            '新潟県',
            '長野県',
            '山梨県',
            '岐阜県'
        ],
        correct: '岐阜県'
    },
    {
        question: 'バラエティ番組「クイズ☆タレント名館」の司会を務める芸人は？',
        answers: [
            'ロンドンブーツ１号２号',
            'おぎやはぎ',
            '有吉',
            'バナナマン'
        ],
        correct: 'ロンドンブーツ１号２号'
    },
    {
        question: '乃木坂４６のメンバーで2期生メンバーは次のうちだれ？',
        answers: [
            '斎藤飛鳥',
            '北野日奈子',
            '与田祐希',
            '遠藤さくら'
        ],
        correct: '北野日奈子'
    },
    {
        question: '「太陽のたまご」と呼ばれるフルーツは何？',
        answers: [
            'ドリアン',
            'マスカット',
            'マンゴー',
            'キウイ'
        ],
        correct: 'マンゴー'
    },
    {
        question: '次の絵のうち、バンクシーが手掛けた作品はどれ？',
        answers: [
            '愛は夜空に',
            '真珠の耳飾りの少女',
            '赤とオレンジ',
            'デルタ・ミュー'
        ],
        correct: '愛は夜空に'
    },
    {
        question: 'ロックバンド「ワンオクロック」の曲でないものはどれ？',
        answers: [
            'goodgoodbye',
            '69',
            '欠落オートメーション',
            'SHAMROCK'
        ],
        correct: 'SHAMROCK'
    },
    {
        question: 'フランス発祥のファッションブランドは次のうちどれ？',
        answers: [
            'カルティエ',
            'ラルフローレン',
            'フェンディ',
            'プラダ'
        ],
        correct: 'カルティエ'
    }
];

const quizLength = quiz.length;　 //クイズ数 全問題"quiz.length"
let quizRandom = Math.floor(Math.random() * quiz.length);　 //ランダム問題所得
let quizCount = 0;　 //何問目
let quizScore = 0;　 //クイズスコア

const $button = document.getElementsByTagName('button');　 //ボタン取得
const buttonLength = $button.length;　 //ボタン数、選択肢数

let p = document.querySelector('.quiz-answer p');


// クイズの問題文、選択肢
const setupQuiz = () => {
    document.getElementById('quiz-question').textContent = quiz[quizRandom].question;　 //問題文取得

    let answerCount = 0;
    while (answerCount < buttonLength) {
        $button[answerCount].textContent = quiz[quizRandom].answers[answerCount];　 //選択肢取得
        answerCount++;
    }
}

setupQuiz();

// クリックアクション
let handleCount = 0;
while (handleCount < buttonLength) {
    $button[handleCount].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handleCount++;
}

// 正誤判定
const clickHandler = (e) => {
    if (quiz[quizRandom].correct === e.target.textContent) {　 //正解アクション
        p.innerHTML = '正解！！';
        quizScore++;
    } else {　 //不正解アクション
        p.innerHTML = '残念...正解は「' + quiz[quizRandom].correct + '」です';
    }


    quizCount++;

    if (quizCount < quizLength) {　 //次の問題

        quiz.splice(quizRandom, 1);

        quizRandom = Math.floor(Math.random() * quiz.length);　 //ランダム問題所得
        setupQuiz();
    } else {　 //クイズ終了
        p.innerHTML = '終了！あなたの正解率は' + quizScore + '/' + quizLength + 'です';
    }
}