var current=0;
const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Madrid", "Paris", "Rome", "Berlin"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Jupiter", "Saturn", "Mercury"],
      answer: "Mars"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
      answer: "Leonardo da Vinci"
    },
  ];

function Display(){
    const questionArea=document.getElementById("questionContainer");
    const answerArea=document.getElementById("Answer");
    questionArea.innerText=quizQuestions[current].question;
}
function NextQuestion(){
    current=current+1;
    Display();
}
Display();