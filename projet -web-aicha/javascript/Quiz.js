function check() {
  const answers = {
    q1: "if (i!= 5)",
    q2: "function myFunction()",
    q3: "onclick",
    q4: 'alert("Hello World");',
    q5: "Math.max(x, y)",
    q6: "JavaScript",
    q7: "Cascading Style Sheets",
    q8: "Hypertext Markup Language",
    q9: "srcset",
    q10: "auto"
  };

  var score = 0;

  for (var questionId in answers) {
     userAnswer = document.querySelector(`input[name="${questionId}"]:checked`);

    if (!userAnswer) {
      alert("Veuillez répondre à toutes les questions avant de soumettre !");
      return;
    }

     correctAnswer = answers[questionId];
     message = userAnswer.value === correctAnswer 
      ? "Bonne réponse !" 
      : `Mauvaise réponse ! La bonne réponse est : ${correctAnswer}`;
     isCorrect = userAnswer.value === correctAnswer;

    if (isCorrect) score++;  

    showFeedback(questionId, message, isCorrect);
  }

  showScore(score);
  document.getElementById("Button").style.display = "none";
}

function showFeedback(questionId, message, isCorrect) {
   feedback = document.createElement("div");
  feedback.textContent = message;
  feedback.style.color = isCorrect ? "green" : "red";
  document.getElementById(questionId).appendChild(feedback);
}

function showScore(score) {
   result = document.createElement("div");
  result.id = "score";
  result.textContent = `Votre score est ${score}/10.`;
  document.body.appendChild(result);

  var button = document.createElement("BUTTON");
  button.innerHTML = '<a href="./Quiz.html" style="text-decoration:none; color:black;">Refaire</a>';
  button.setAttribute("id", "retake");
  document.body.appendChild(button);
}

function goBack() {
  window.location.href = "index.html";
}
