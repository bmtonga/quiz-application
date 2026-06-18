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
        question: "Which subatomic particle has a relative mass of approximately 1/1840 of a proton?",
        answers: [
            {text: "Proton", correct:false},
            {text: "Neutron", correct:false},
            {text: "Electron", correct:true},
            {text: "Positron", correct:false},
        ]
    },
    {
        question: "What is the shape of a methane molecule (CH4)?",
        answers: [
            {text: "Linear", correct:false},
            {text: "Tetrahedral", correct:true},
            {text: "Trigonal planar", correct:false},
            {text: "Pyramidal", correct:false},
        ]
    },
    {
        question: "Which type of bonding involves the electrostatic attraction between positive ions and a sea of delocalized electrons?",
        answers: [
            {text: "Ionic bonding", correct:false},
            {text: "Covalent bonding", correct:false},
            {text: "Metallic bonding", correct:true},
            {text: "Hydrogen bonding", correct:false},
        ]
    },
    {
        question: "What is the oxidation state of sulfur in sulfate ions (SO4 2-)?",
        answers: [
            {text: "+4", correct:false},
            {text: "+6", correct:true},
            {text: "-2", correct:false},
            {text: "0", correct:false},
        ]
    },
    {
        question: "Which of the following represents a standard condition for enthalpy measurements?",
        answers: [
            {text: "100 kPa and 298 K", correct:true},
            {text: "101.3 kPa and 273 K", correct:false},
            {text: "100 kPa and 0 K", correct:false},
            {text: "10 atm and 298 K", correct:false},
        ]
    },
    {
        question: "The conversion of an alkene to an alkane is an example of which type of reaction?",
        answers: [
            {text: "Substitution", correct:false},
            {text: "Addition", correct:true},
            {text: "Elimination", correct:false},
            {text: "Hydrolysis", correct:false},
        ]
    },
    {
        question: "What type of intermolecular force is primarily responsible for the relatively high boiling point of water compared to H2S?",
        answers: [
            {text: "Permanent dipole-dipole", correct:false},
            {text: "Instantaneous dipole-induced dipole", correct:false},
            {text: "Hydrogen bonding", correct:true},
            {text: "Covalent bonding", correct:false},
        ]
    },
    {
        question: "Which equation correctly represents the first electron affinity of chlorine?",
        answers: [
            {text: "Cl(g) + e- -> Cl-(g)", correct:true},
            {text: "Cl(g) -> Cl+(g) + e-", correct:false},
            {text: "Cl2(g) + 2e- -> 2Cl-(g)", correct:false},
            {text: "Cl-(g) -> Cl(g) + e-", correct:false},
        ]
    },
    {
        question: "What is the functional group of an aldehyde?",
        answers: [
            {text: "Hydroxyl group", correct:false},
            {text: "Carbonyl group at the end of a chain", correct:true},
            {text: "Carbonyl group in the middle of a chain", correct:false},
            {text: "Carboxyl group", correct:false},
        ]
    },
    {
        question: "Which of the following describes heterolytic fission?",
        answers: [
            {text: "Bond breaks evenly, each atom gets one electron", correct:false},
            {text: "Bond breaks unevenly, one atom retains both electrons", correct:true},
            {text: "An ionic bond dissociates in water", correct:false},
            {text: "Two radicals combine to form a bond", correct:false},
        ]
    },
    {
        question: "What color precipitate forms when aqueous silver nitrate is added to chloride ions?",
        answers: [
            {text: "White", correct:true},
            {text: "Cream", correct:false},
            {text: "Yellow", correct:false},
            {text: "Brown", correct:false},
        ]
    },
    {
        question: "According to Hess's Law, enthalpy change depends on:",
        answers: [
            {text: "The path taken", correct:false},
            {text: "Initial and final states only", correct:true},
            {text: "Activation energy", correct:false},
            {text: "Presence of a catalyst", correct:false},
        ]
    },
    {
        question: "Which species has a trigonal pyramidal shape?",
        answers: [
            {text: "BF3", correct:false},
            {text: "NH3", correct:true},
            {text: "CO2", correct:false},
            {text: "CH4", correct:false},
        ]
    },
    {
        question: "Which homologous series contains the ester functional group?",
        answers: [
            {text: "Alcohols", correct:false},
            {text: "Carboxylic acids", correct:false},
            {text: "Esters", correct:true},
            {text: "Ethers", correct:false},
        ]
    },
    {
        question: "What is the general formula for aliphatic alkenes?",
        answers: [
            {text: "CnH2n+2", correct:false},
            {text: "CnH2n", correct:true},
            {text: "CnH2n-2", correct:false},
            {text: "CnH2n+1OH", correct:false},
        ]
    },
    {
        question: "In a mass spectrometer, what causes the deflection of ions?",
        answers: [
            {text: "Magnetic field", correct:true},
            {text: "Electric field", correct:false},
            {text: "Vacuum", correct:false},
            {text: "High temperatures", correct:false},
        ]
    },
    {
        question: "Which of the following represents an initiation step in free radical substitution?",
        answers: [
            {text: "Cl2 -> 2Cl.", correct:true},
            {text: "CH4 + Cl. -> CH3. + HCl", correct:false},
            {text: "CH3. + Cl. -> CH3Cl", correct:false},
            {text: "Cl. + Cl2 -> Cl3.", correct:false},
        ]
    },
    {
        question: "What is true about structural isomers?",
        answers: [
            {text: "Same structural, different molecular formula", correct:false},
            {text: "Same molecular, different structural formula", correct:true},
            {text: "Identical properties", correct:false},
            {text: "Different states of matter", correct:false},
        ]
    },
    {
        question: "Conversion of an alcohol to an alkene is:",
        answers: [
            {text: "Dehydration", correct:true},
            {text: "Oxidation", correct:false},
            {text: "Hydrolysis", correct:false},
            {text: "Substitution", correct:false},
        ]
    },
    {
        question: "Which element has the highest first ionization energy in Period 3?",
        answers: [
            {text: "Sodium", correct:false},
            {text: "Magnesium", correct:false},
            {text: "Chlorine", correct:true},
            {text: "Phosphorus", correct:false},
        ]
    },
    {
        question: "Boiling points of halogens increase down the group due to:",
        answers: [
            {text: "Permanent dipole forces", correct:false},
            {text: "Strength of covalent bonds", correct:false},
            {text: "Increased London dispersion forces", correct:true},
            {text: "Increased ionic character", correct:false},
        ]
    },
    {
        question: "A nucleophile is:",
        answers: [
            {text: "An electron-pair donor", correct:true},
            {text: "An electron-pair acceptor", correct:false},
            {text: "A neutral atom", correct:false},
            {text: "A free radical", correct:false},
        ]
    },
    {
        question: "What is the standard enthalpy of formation of an element in its standard state?",
        answers: [
            {text: "+100 kJ/mol", correct:false},
            {text: "0 kJ/mol", correct:true},
            {text: "-100 kJ/mol", correct:false},
            {text: "Variable", correct:false},
        ]
    },
    {
        question: "Which compound shows cis-trans isomerism?",
        answers: [
            {text: "Ethene", correct:false},
            {text: "But-2-ene", correct:true},
            {text: "Propene", correct:false},
            {text: "2-methylpropene", correct:false},
        ]
    },
    {
        question: "Which gas turns acidified KMnO4 colorless?",
        answers: [
            {text: "CO2", correct:false},
            {text: "SO2", correct:true},
            {text: "Ammonia", correct:false},
            {text: "Oxygen", correct:false},
        ]
    },
    {
        question: "Bonding in ammonium chloride includes:",
        answers: [
            {text: "Covalent only", correct:false},
            {text: "Ionic and covalent", correct:true},
            {text: "Metallic only", correct:false},
            {text: "Ionic only", correct:false},
        ]
    },
    {
        question: "Catalysts increase reaction rate by:",
        answers: [
            {text: "Increasing reactant energy", correct:false},
            {text: "Lowering activation energy", correct:true},
            {text: "Increasing enthalpy change", correct:false},
            {text: "Decreasing collisions", correct:false},
        ]
    },
    {
        question: "Which property decreases down Group 2?",
        answers: [
            {text: "Atomic radius", correct:false},
            {text: "First ionization energy", correct:true},
            {text: "Reactivity with water", correct:false},
            {text: "Mass number", correct:false},
        ]
    },
    {
        question: "Systematic name for CH3CH2CH(OH)CH3?",
        answers: [
            {text: "Butan-1-ol", correct:false},
            {text: "Butan-2-ol", correct:true},
            {text: "2-methylpropan-1-ol", correct:false},
            {text: "Propan-2-ol", correct:false},
        ]
    },
    {
        question: "An electrophile is:",
        answers: [
            {text: "Electron-pair donor", correct:false},
            {text: "Electron-pair acceptor", correct:true},
            {text: "Negatively charged", correct:false},
            {text: "A free radical", correct:false},
        ]
    },
    {
        question: "Excess NaOH added to Mg2+ ions results in:",
        answers: [
            {text: "White precipitate, insoluble in excess", correct:true},
            {text: "Blue precipitate", correct:false},
            {text: "Green precipitate", correct:false},
            {text: "No precipitate", correct:false},
        ]
    },
    {
        question: "Which process is endothermic?",
        answers: [
            {text: "Combustion", correct:false},
            {text: "Neutralization", correct:false},
            {text: "Thermal decomposition", correct:true},
            {text: "Freezing", correct:false},
        ]
    },
    {
        question: "Electrons in Mg2+ ion:",
        answers: [
            {text: "12", correct:false},
            {text: "10", correct:true},
            {text: "14", correct:false},
            {text: "24", correct:false},
        ]
    },
    {
        question: "Primary alcohol oxidized under reflux forms:",
        answers: [
            {text: "Aldehyde", correct:false},
            {text: "Ketone", correct:false},
            {text: "Carboxylic acid", correct:true},
            {text: "Alkene", correct:false},
        ]
    },
    {
        question: "CH3COOCH2CH3 belongs to:",
        answers: [
            {text: "Ketone", correct:false},
            {text: "Ester", correct:true},
            {text: "Ether", correct:false},
            {text: "Carboxylic acid", correct:false},
        ]
    },
    {
        question: "Renewable energy source?",
        answers: [
            {text: "Coal", correct:false},
            {text: "Natural gas", correct:false},
            {text: "Hydrogen fuel", correct:true},
            {text: "Crude oil", correct:false},
        ]
    },
    {
        question: "What changes the rate constant (k)?",
        answers: [
            {text: "Concentration", correct:false},
            {text: "Temperature", correct:true},
            {text: "Surface area", correct:false},
            {text: "Pressure", correct:false},
        ]
    },
    {
        question: "Shape of CO2?",
        answers: [
            {text: "Bent", correct:false},
            {text: "Linear", correct:true},
            {text: "Tetrahedral", correct:false},
            {text: "Trigonal planar", correct:false},
        ]
    },
    {
        question: "Characteristic of transition metals?",
        answers: [
            {text: "Colored compounds", correct:true},
            {text: "Conductivity", correct:false},
            {text: "High melting point", correct:false},
            {text: "Formation of oxides", correct:false},
        ]
    },
    {
        question: "Ester + water -> alcohol + acid is:",
        answers: [
            {text: "Condensation", correct:false},
            {text: "Hydrolysis", correct:true},
            {text: "Dehydration", correct:false},
            {text: "Polymerization", correct:false},
        ]
    },
    {
        question: "Sodium hydroxide reacting with haloalkane acts as:",
        answers: [
            {text: "Electrophile", correct:false},
            {text: "Nucleophile", correct:true},
            {text: "Oxidizing agent", correct:false},
            {text: "Free radical", correct:false},
        ]
    },
    {
        question: "Chromium (Z=24) configuration:",
        answers: [
            {text: "[Ar] 4s2 3d4", correct:false},
            {text: "[Ar] 4s1 3d5", correct:true},
            {text: "[Ar] 3d6", correct:false},
            {text: "[Ar] 4s2 3d3", correct:false},
        ]
    },
    {
        question: "NaOH added to Fe2+ solution produces:",
        answers: [
            {text: "White precipitate", correct:false},
            {text: "Blue precipitate", correct:false},
            {text: "Green precipitate", correct:true},
            {text: "Red-brown precipitate", correct:false},
        ]
    },
    {
        question: "Termination step in free radical substitution:",
        answers: [
            {text: "Molecule breaks into radicals", correct:false},
            {text: "Radical reacts with molecule", correct:false},
            {text: "Two radicals combine", correct:true},
            {text: "Radical loses electron", correct:false},
        ]
    },
    {
        question: "Which statement about structural isomers is FALSE?",
        answers: [
            {text: "Same molecular formula", correct:false},
            {text: "Same structural formula", correct:true},
            {text: "Different homologous series possible", correct:false},
            {text: "Different atom arrangement", correct:false},
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