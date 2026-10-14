let currentSubject = "";
let currentSection = "";
let currentLevel = "";
let currentQuestions = [];
let currentIndex = 0;
let userAnswers = [];
let timerInterval = null;
let secondsElapsed = 0;

const subjectTitles = {
  english: "📖 English",
  gk: "🌍 General Knowledge",
  gs: "📚 General Studies",
  math: "🧮 Mathematics"
};

// ========== SUBJECT SELECT ==========
function selectSubject(subject) {
  currentSubject = subject;
  document.getElementById("section-title").textContent = subjectTitles[subject];

  const sections = Object.keys(questionsDB[subject].sections);
  const list = document.getElementById("sections-list");
  list.innerHTML = "";

  sections.forEach(sec => {
    const btn = document.createElement("button");
    btn.className = "section-btn";
    btn.textContent = sec;
    btn.onclick = () => selectSection(sec);
    list.appendChild(btn);
  });

  showScreen("section-screen");
}

function backToSubjects() {
  currentSubject = "";
  currentSection = "";
  showScreen("start-screen");
}

// ========== SECTION SELECT ==========
function selectSection(section) {
  currentSection = section;
  document.getElementById("level-title").textContent = section;
  showScreen("level-screen");
}

function backToSections() {
  currentSection = "";
  showScreen("section-screen");
}

// ========== START QUIZ ==========
function startQuiz(level) {
  currentLevel = level;
  const data = questionsDB[currentSubject].sections[currentSection];

  if (level === "mixed") {
    const all = [...data.easy, ...data.moderate, ...data.hard];
    currentQuestions = shuffle(all);
  } else {
    currentQuestions = shuffle([...data[level]]);
  }

  currentIndex = 0;
  userAnswers = new Array(currentQuestions.length).fill(null);
  secondsElapsed = 0;

  document.getElementById("level-badge").textContent =
    level === "mixed" ? "Mixed" : level.charAt(0).toUpperCase() + level.slice(1);

  showScreen("quiz-screen");
  startTimer();
  renderQuestion();
}

// ========== SHUFFLE ==========
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ========== TIMER ==========
function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    secondsElapsed++;
    const m = String(Math.floor(secondsElapsed / 60)).padStart(2, "0");
    const s = String(secondsElapsed % 60).padStart(2, "0");
    document.getElementById("timer").textContent = `⏱ ${m}:${s}`;
  }, 1000);
}

// ========== RENDER QUESTION ==========
function renderQuestion() {
  const q = currentQuestions[currentIndex];

  document.getElementById("progress").textContent =
    `Q ${currentIndex + 1} / ${currentQuestions.length}`;

  document.getElementById("progress-fill").style.width =
    `${((currentIndex + 1) / currentQuestions.length) * 100}%`;

  document.getElementById("question-text").textContent =
    `${currentIndex + 1}. ${q.q}`;

  const optsDiv = document.getElementById("options");
  optsDiv.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    if (userAnswers[currentIndex] === i) btn.classList.add("selected");
    btn.textContent = `${String.fromCharCode(65 + i)}. ${opt}`;
    btn.onclick = () => selectOption(i);
    optsDiv.appendChild(btn);
  });

  document.getElementById("prev-btn").disabled = currentIndex === 0;
  const nextBtn = document.getElementById("next-btn");
  nextBtn.textContent =
    currentIndex === currentQuestions.length - 1 ? "Last Question" : "Next ➡";
}

function selectOption(i) {
  userAnswers[currentIndex] = i;
  renderQuestion();
}

function nextQuestion() {
  if (currentIndex < currentQuestions.length - 1) {
    currentIndex++;
    renderQuestion();
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
}

// ========== SUBMIT ==========
function submitQuiz() {
  const unanswered = userAnswers.filter((a) => a === null).length;
  if (unanswered > 0) {
    if (!confirm(`${unanswered} question(s) attempt nahi kiye. Submit karein?`)) return;
  }

  clearInterval(timerInterval);

  let correct = 0, wrong = 0, skipped = 0;

  currentQuestions.forEach((q, i) => {
    if (userAnswers[i] === null) skipped++;
    else if (userAnswers[i] === q.answer) correct++;
    else wrong++;
  });

  const total = currentQuestions.length;
  const percentage = Math.round((correct / total) * 100);

  document.getElementById("score-text").textContent = `${correct} / ${total}`;
  document.getElementById("correct-count").textContent = correct;
  document.getElementById("wrong-count").textContent = wrong;
  document.getElementById("skipped-count").textContent = skipped;

  let msg = "";
  if (percentage >= 90) msg = "🌟 Outstanding!";
  else if (percentage >= 70) msg = "👏 Excellent!";
  else if (percentage >= 50) msg = "👍 Good! Thoda practice karo.";
  else if (percentage >= 30) msg = "📚 Average. Practice karo.";
  else msg = "💪 Keep practicing!";

  document.getElementById("result-msg").textContent = `${percentage}% — ${msg}`;
  document.getElementById("review-box").innerHTML = "";
  document.getElementById("review-box").classList.remove("active");

  showScreen("result-screen");
}

// ========== REVIEW ==========
function reviewAnswers() {
  const box = document.getElementById("review-box");

  if (box.classList.contains("active")) {
    box.classList.remove("active");
    box.innerHTML = "";
    return;
  }

  box.innerHTML = "";
  currentQuestions.forEach((q, i) => {
    const userAns = userAnswers[i];
    const isCorrect = userAns === q.answer;
    const skipped = userAns === null;

    const div = document.createElement("div");
    div.className = "review-item " + (isCorrect ? "correct" : "wrong");

    const userText = skipped ? "Not Attempted" : q.options[userAns];

    div.innerHTML = `
      <p class="q">Q${i + 1}. ${q.q}</p>
      <p class="ans">✔ Correct: ${q.options[q.answer]}</p>
      <p class="user">${skipped ? "⚠" : (isCorrect ? "✔" : "✘")} Your Answer: ${userText}</p>
      <p class="exp">💡 ${q.explanation}</p>
    `;
    box.appendChild(div);
  });

  box.classList.add("active");
  box.scrollIntoView({ behavior: "smooth" });
}

// ========== SCREEN ==========
function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
