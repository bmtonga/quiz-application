# Quiz App

This is a simple quiz application I built using HTML, CSS, and JavaScript.  
It allows users to answer multiple-choice questions and see their final score at the end of the quiz.

## Features

- Multiple-choice questions
- Instant answer selection
- Score tracking system
- Final results display
- Restart quiz option
- Responsive design for mobile and desktop devices
- Clean and simple user interface

## How It Works

- A question is displayed with multiple answer options  
- I select one answer per question  
- The app checks if the answer is correct  
- A Next button appears
- Click it to move to the next question  
- At the end, the total score is shown  

## Tech Stack

- HTML – structure of the app  
- CSS – styling and layout  
- JavaScript – logic and interactivity  

## Project Structure

```plaintext
quiz-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Installation

1. Clone this repository:

```bash
git clone https://github.com/bmtonga/quiz-application.git
```

2. Open the project folder

3. Run `index.html` in your browser

## Example Question Format

```javascript
const questions = [
    {
        question: "The energy required to remove one mole of electrons from an atom in its gaseous state is called?",
        answers: [
            {text: "Activation Energy", correct:false},
            {text: "Ionisation Energy", correct:true},
            {text: "Enthalpy", correct:false},
            {text: "Electrolysis", correct:false},
        ]
    }
```

## Future Improvements

- Add a timer for each question  
- Add difficulty levels (easy, medium, hard)  
- Add different categories of questions  
- Randomize questions on each play  
- Add a leaderboard system  
- Connect to a backend for storing scores  

## What I Learned

Through this project, I improved my understanding of:

- DOM manipulation  
- Event handling in JavaScript  
- Working with arrays and objects  
- Conditional logic  
- Managing UI state in a simple app  

## License

This project is for learning and personal development purposes.