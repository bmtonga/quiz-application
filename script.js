/**
 * Announce a message to screen readers via the aria-live region.
 * @param {string} message - The message to announce.
 */
function announce(message) {
    const announcer = document.getElementById("announcements");
    if (announcer) {
        // Clear previous content to ensure re-announcement
        announcer.textContent = "";
        // Use setTimeout to ensure the clear is registered before new content
        setTimeout(() => {
            announcer.textContent = message;
        }, 50);
    }
}

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
    },
    {
        question: "Distinguishes aldehyde from ketone:",
        answers: [
            {text: "Acidified potassium dichromate", correct:false},
            {text: "Tollens' reagent", correct:true},
            {text: "Bromine water", correct:false},
            {text: "Sodium carbonate", correct:false},
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
    nextBtn.removeAttribute("aria-label");
    announce("Quiz started. Good luck!");
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
        button.setAttribute("aria-label", answer.text);
        answerBtn.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

    // Focus the question heading for keyboard and screen reader users
    questionEL.focus();
    announce(`Question ${questionNo}: ${currentQuestion.question}. ${currentQuestion.answers.length} options available.`);
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
        announce("Correct!");
    } else {
        selectBtn.classList.add("incorrect");
        announce("Incorrect. The correct answer is highlighted.");
    }
    Array.from(answerBtn.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
    nextBtn.setAttribute("aria-label", "Next question");
}
function showScore(){
    resetstate();
    const percentage = Math.round((score/questions.length)*100);
    let resultMessage;
    if (percentage < 50){
        resultMessage = `You have failed, try again. You scored ${score} out of ${questions.length}!`;
        questionEL.innerHTML = `<p>${resultMessage}</p>`
    }else if(percentage < 70){
        resultMessage = `You can do better! You scored ${score} out of ${questions.length}!`;
        questionEL.innerHTML = `<p>${resultMessage}</p>`
    } else{
        resultMessage = `Excellent Work! You scored ${score} out of ${questions.length}!`;
        questionEL.innerHTML = `<p>${resultMessage}</p>`
    }

    announce(`Quiz complete. ${resultMessage} You obtained ${percentage} percent.`);
    nextBtn.innerHTML = "Try Again";
    nextBtn.setAttribute("aria-label", "Try Again");
    nextBtn.style.display = "block";
    questionEL.focus();
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