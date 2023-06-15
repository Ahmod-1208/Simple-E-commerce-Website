var questions = [
    {
      question: "Question 1: Which cognitive distortion is this?",
      answers: [
        "All-or-Nothing Thinking",
        "Overgeneralization",
        "Personalization",
        "Jumping to Conclusions"
      ],
      correctAnswer: 1
    },
    {
      question: "Question 2: Which cognitive distortion is this?",
      answers: [
        "Mind Reading",
        "Emotional Reasoning",
        "Should Statements",
        "Disqualifying the Positive"
      ],
      correctAnswer: 2
    },
    // Add more questions as needed
  ];
  
  var currentQuestion = 0;
  var score = 0;
  var startTime;
  var timerInterval;
  
  var questionElement = document.getElementById("question");
  var answersElement = document.getElementById("answers");
  var nextBtn = document.getElementById("nextBtn");
  var resultContainer = document.getElementById("resultContainer");
  var scoreElement = document.getElementById("score");
  
  function startTest() {
    document.getElementById("timer").textContent = "00:00:00";
    document.getElementById("questionContainer").style.display = "block";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("resultContainer").style.display = "none";
    score = 0;
    currentQuestion = 0;
    startTimer();
    showQuestion();
  }
  
  function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
  }
  
  function updateTimer() {
    var elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    var hours = Math.floor(elapsedTime / 3600);
    var minutes = Math.floor((elapsedTime % 3600) / 60);
    var seconds = elapsedTime % 60;
  
    document.getElementById("timer").textContent = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
  }
  
  function formatTime(time) {
    return time.toString().padStart(2, "0");
  }
  
  function showQuestion() {
    var question = questions[currentQuestion];
    questionElement.textContent = question.question;
  
    while (answersElement.firstChild) {
      answersElement.removeChild(answersElement.firstChild);
    }
}
    
  