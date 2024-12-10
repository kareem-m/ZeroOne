// scroll progress
const scroll = document.createElement("div");
scroll.classList.add("scroll")
document.body.appendChild(scroll);

let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

if (height > 330) {
  window.addEventListener("scroll", () => {
    let scrolltop = document.documentElement.scrollTop;
    scroll.style.width = `${(scrolltop / height) * 100}%`;
  });
}

// mouce cursor
for (let i = 0; i<=20; i++) {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  document.body.appendChild(circle);
}

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
  circles.forEach(function (circle) {
    circle.style.display = "none";
  });
}



circles.forEach(function (circle) {
  circle.x = 0;
  circle.y = 0;
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    circle.style.scale = (circles.length - index) / circles.length;
    circle.x = x;
    circle.y = y;
    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
  requestAnimationFrame(animateCircles);
}
animateCircles();


document.addEventListener('mouseover', (event) => {
  if (event.target.matches('a, button, [role="button"], input[type="button"], input[type="submit"], i, a p')) {
    circles.forEach(function (circle) {
      circle.style.width = '25px';
      circle.style.height = '25px';
      circle.style.backgroundColor = 'var(--main-color)';
    });
  }
});

document.addEventListener('mouseout', (event) => {
  if (event.target.matches('a, button, [role="button"], input[type="button"], input[type="submit"], i, a p')) {
    circles.forEach(function (circle) {
      circle.style.width = '15px';
      circle.style.height = '15px';
      circle.style.backgroundColor = 'white';
    });
  }
});


// Sticky navbar
const nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  nav.classList.toggle("sticky", window.scrollY > 0);
});

// navbar links
let menuIcon = document.querySelector("i.menu-icon"),
  menu = document.querySelector("ul.menu");

function toggleMenu(event) {
  event.stopPropagation();
  menu.classList.toggle('phone');
}

function hideMenu() {
  menu.classList.remove('phone');
}

menuIcon.addEventListener('click', toggleMenu);

document.addEventListener('click', hideMenu);

menu.addEventListener('click', function(event) {
  event.stopPropagation();
});

// changing letters effect
const spans = document.querySelectorAll(".letter-span");
const newLetters = ["#", "$", "^", "&"];
const cycleInterval = 200; // Time between each letter change
const cycleDelay = 3000; // Delay between cycles

spans.forEach((span) => {
  const originalLetter = span.textContent;
  let index = 0;
  let isDelaying = false;

  function changeLetters() {
    if (isDelaying) return;

    if (index < newLetters.length) {
      span.textContent = newLetters[index];
      index++;
    } else if (index === newLetters.length) {
      span.textContent = originalLetter;
      index = 0;
      
      isDelaying = true;
      setTimeout(() => {
        isDelaying = false;
      }, cycleDelay);
    }
  }

  setInterval(changeLetters, cycleInterval);
});

// loading
const load = document.querySelector(".load");
setTimeout(() => {
  load.classList.add("disappear");
}, 2000);

// All writes dynamic
const span = document.querySelector("footer .container p span");
span.innerHTML = new Date().getFullYear();

// Console message
console.log('%c Developed by: Eng. Kareem Elramady ', 'background: white; color: black; padding: 10px; border: 1px solid black; font-size: 16px; border-radius: 10px;');