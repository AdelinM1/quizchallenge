const questions = [
    {
      question: "What is JavaScript?",
      options: ["A programming language", "A type of hardware", "A stylesheet ", "A game"],
      correctAnswer: 0
    },
    {
      question: "Who invented Javascript?",
      options: ["Isaac Newton", "Nielson Mandela", "Rocky Balboa", "Brendan Eich"],
      correctAnswer: 3
    }
  ];

  let currentQuestion = 0;
  let score = 0;
  let timer;
  const quizTime = 60; 

  document.getElementById("start-btn").addEventListener("click", startQuiz);

  function startQuiz() {
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    showQuestion();
    timer = setInterval(updateTimer, 1000);
  }

  function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElements = document.getElementsByClassName("option");

    questionElement.textContent = questions[currentQuestion].question;

    for (let i = 0; i < optionsElements.length; i++) {
      optionsElements[i].textContent = questions[currentQuestion].options[i];
    }
  }

  function checkAnswer(btn) {
    const selectedOption = Array.from(btn.parentNode.children).indexOf(btn);
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      score++;
    } else {
  
      timer -= 10;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  }

  function updateTimer() {
    if (timer <= 0) {
      endQuiz();
  }}