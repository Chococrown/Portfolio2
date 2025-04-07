// script.js

let secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');
const attempts = document.getElementById('attempts');
const restartBtn = document.getElementById('restartBtn');

attempts.textContent = `โอกาสที่เหลือ: ${attemptsLeft}`;

guessBtn.addEventListener('click', () => {
  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "กรุณาใส่เลขระหว่าง 1 ถึง 100";
    return;
  }

  attemptsLeft--;

  if (guess === secretNumber) {
    message.textContent = `🎉 ถูกต้อง! เลขคือ ${secretNumber}`;
    endGame();
  } else if (attemptsLeft === 0) {
    message.textContent = `💥 หมดโอกาสแล้ว! คำตอบคือ ${secretNumber}`;
    endGame();
  } else {
    message.textContent = guess > secretNumber ? "📉 มากเกินไป!" : "📈 น้อยเกินไป!";
    attempts.textContent = `โอกาสที่เหลือ: ${attemptsLeft}`;
  }

  guessInput.value = "";
  guessInput.focus();
});

restartBtn.addEventListener('click', () => {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 10;
  message.textContent = "";
  attempts.textContent = `โอกาสที่เหลือ: ${attemptsLeft}`;
  guessInput.disabled = false;
  guessBtn.disabled = false;
  restartBtn.style.display = "none";
});

function endGame() {
  guessInput.disabled = true;
  guessBtn.disabled = true;
  restartBtn.style.display = "inline-block";
}
