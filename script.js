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
    text: "「米は炊きたてのほうがいいですからね。」",
    author: "米仙人"
  },
  {
    text: "「ナッツトラクターコレクター。」",
    author: "ナッツ農家"
  },
  {
    text: "「無知だからさ、無理。」",
    author: "ネクラテス"
  },
  {
    text: "「脂身のほうが多いと損した気分。」",
    author: "美食家ケヴィン"
  },
  {
    text: "「東京ドイツ村って全部ウソだよね。」",
    author: "千葉日本パーク"
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
