const questions = [
    {
        question: "The energy required to remove one mole of electrons from an atom in its gaseous state is called?",
        answers: [
            {text: "Activation Energy", correct:false},
            {text: "Ionisation Energy", correct:true},
            {text: "Enthalpy", correct:false},
            {text: "Electrolysis", correct:false},
        ]
    }, 
    {
        question: "What is the bond angle for a water molecule?",
        answers: [
            {text: "104.5 degrees", correct:true},
            {text: "109.5 degrees", correct:false},
            {text: "180 degrees", correct:false},
            {text: "100.4 degrees", correct:false},
        ]
    },
    {
        question: "What is the product of incomplete combustion of a hydrocarbon?",
        answers: [
            {text: "Carbon", correct:false},
            {text: "Carbon dioxide", correct:false},
            {text: "Hydrogen", correct:false},
            {text: "Carbon monoxide", correct:true},
        ]
    },
    {
        question: "Which of the following are allotropes?",
        answers: [
            {text: "Carbon and Carbon dioxide", correct:false},
            {text: "Carbon-13 and Carbon-14", correct:false},
            {text: "Helium and Hydrogen", correct:false},
            {text: "Graphite and Diamond", correct:true},
        ]
    }
];

const questionEL = document.getElementById("question");
const answerBtn = document.getElementById("answer-btn");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){

    resetstate()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionEL.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {

        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetstate() {
    nextBtn.style.display = "none";
    while (answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild)
    }
}
function selectAnswer(e){
    const selectBtn = e.target;
    const iscorrect = selectBtn.dataset.correct === "true";
    if(iscorrect){
        selectBtn.classList.add("correct");
        score ++;
    } else {
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerBtn.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block"
}
function showScore(){
    resetstate();
    const percentage = (score/questions.length)*100;
    questionEL.innerHTML = `You scored ${score}
    out of ${questions.length}! <br> Your Percentage is ${percentage}%`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block"
}
function handleNextbtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextBtn.addEventListener("click", ()=> {
    if (currentQuestionIndex < questions.length){
        handleNextbtn();
    } else {
        startQuiz(); 
    }
})
startQuiz();