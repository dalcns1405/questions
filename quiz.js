const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Rome", "Berlin"],
      answer: "Paris"
    },
    {
      question: "What is the largest mammal?",
      choices: ["Elephant", "Whale", "Giraffe", "Horse"],
      answer: "Whale"
    },
    {
      question: "What is the symbol for potassium?",
      choices: ["Fe", "Au", "K", "Ag"],
      answer: "K"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const scoreElement = document.getElementById("score");
  
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = "";
    currentQuestion.choices.forEach(choice => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.classList.add("choice");
      button.onclick = function() {
        checkAnswer(choice);
      };
      choicesElement.appendChild(button);
    });
  }
  
  function checkAnswer(choice) {
    const currentQuestion = questions[currentQuestionIndex];
    if (choice === currentQuestion.answer) {
      score++;
      scoreElement.textContent = `Score: ${score}`;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    questionElement.textContent = "Quiz ended!";
    choicesElement.innerHTML = "";
  }
  showQuestion();
  