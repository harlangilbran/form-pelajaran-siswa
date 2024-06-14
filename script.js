let currentPage = 0;

function startLesson() {
  document.getElementById("welcome").classList.remove("active");
  document.getElementById("lesson1").classList.add("active");
}

function nextPage() {
  const pages = document.querySelectorAll(".page");
  pages[currentPage].classList.remove("active");
  currentPage++;
  if (currentPage < pages.length) {
    pages[currentPage].classList.add("active");
  }
}

function showQuestions() {
  document.getElementById("lesson3").classList.remove("active");
  document.getElementById("questions").classList.add("active");
}

function checkAnswers() {
  const answers = {
    answer1: document.getElementById("answer1").value.trim().toLowerCase(),
    answer2: document.getElementById("answer2").value.trim().toLowerCase(),
    answer3: document.getElementById("answer3").value.trim().toLowerCase(),
  };

  const correctAnswers = {
    answer1: "alert('hello, world!');",
    answer2: "document.body.style.backgroundColor = 'lightblue';",
    answer3: "img",
  };

  let correctCount = 0;

  if (answers.answer1 === correctAnswers.answer1) {
    correctCount++;
  }
  if (answers.answer2 === correctAnswers.answer2) {
    correctCount++;
  }
  if (answers.answer3 === correctAnswers.answer3) {
    correctCount++;
  }

  document.getElementById(
    "result"
  ).textContent = `Anda menjawab benar ${correctCount} dari 3 pertanyaan.`;
}
