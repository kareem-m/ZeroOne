// star background
for (let i = 0; i < 50; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;
  star.style.animationDelay = `${Math.random() * 3}s`;
  document.body.appendChild(star);
}


// Loading
const loading = document.querySelector(".loading");
const texts = ["اهلا", "hello", "Bonjour", "Merhaba", "Ciao", "नमस्ते", "你好", "こんにちは", "Привет"];
let index = 0;

function changeText() {
  if (index < texts.length) {
    loading.textContent = texts[index];
    index++;
    setTimeout(changeText, 250);
  } else if (index == texts.length) {
    loading.classList.add("hidden");
  }
}
changeText();