// ====================
// ゲームについてもっと見る
// ====================

function showGameMessage() {
  const message = document.getElementById("game-message");

  message.textContent =
    "Unityを使って制作しました！反応速度を測定するゲームです。";
}


// ====================
// ランダム名言
// ====================

const quotes = [
  {
    text: "「失敗は成功のもと。」",
    author: "ことわざ"
  },
  {
    text: "「継続は力なり。」",
    author: "ことわざ"
  },
  {
    text: "「初心忘るべからず。」",
    author: "ことわざ"
  },
  {
    text: "「千里の道も一歩から。」",
    author: "ことわざ"
  },
  {
    text: "「明日は明日の風が吹く。」",
    author: "ことわざ"
  }
];


function drawQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  const selectedQuote = quotes[randomIndex];

  document.getElementById("quote").textContent =
    selectedQuote.text;

  document.getElementById("author").textContent =
    "― " + selectedQuote.author;
}
