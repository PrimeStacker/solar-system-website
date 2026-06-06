// PLANET DATA
const planets = {
  Mercury: "Smallest planet, extreme heat and cold.",
  Venus: "Hottest planet with toxic atmosphere.",
  Earth: "Our home planet with life.",
  Mars: "Red planet with giant volcanoes.",
  Jupiter: "Largest planet with giant storm.",
  Saturn: "Famous for beautiful rings.",
  Uranus: "Rotates sideways like a rolling ball.",
  Neptune: "Strongest winds in the solar system."
};

// SOUND
function play(id) {
  document.getElementById(id).play();
}

// PLANET CLICK
function showPlanet(name) {
  play("clickSound");
  document.getElementById("planetName").innerText = name;
  document.getElementById("planetInfo").innerText = planets[name];
}

// QUIZ
let currentAnswer = true;

const questions = [
  { q: "Mars is the hottest planet.", a: false },
  { q: "Earth has one moon.", a: true },
  { q: "Jupiter is the largest planet.", a: true },
  { q: "Venus is colder than Earth.", a: false }
];

let index = 0;

function loadQuestion() {
  document.getElementById("question").innerText = questions[index].q;
  currentAnswer = questions[index].a;
}

function answer(userAnswer) {
  if (userAnswer === currentAnswer) {
    play("correctSound");
    document.getElementById("quizResult").innerText = "Correct!";
  } else {
    play("wrongSound");
    document.getElementById("quizResult").innerText = "Wrong!";
  }

  index = (index + 1) % questions.length;
  setTimeout(loadQuestion, 1000);
}

loadQuestion();

// STARS ANIMATION
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = Array(100).fill().map(() => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 2
}));

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";

  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(drawStars);
}

drawStars();
