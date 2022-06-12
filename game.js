// This project is made by - Krishna Sarathi Ghosh; Class - 7; School- Shemford Futuristic School Burdwan; Age - 12+ for BIT Mesra Junior Hackathon 2022 May in Codingal | This is the style.css file of the Project 
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'TECHNOLOGY: WHAT DEVICE IS USED FOR READING CHEQUES IN BANKS ?',
        choice1: 'SCANNER',
        choice2: 'OMR',
        choice3: 'BARCODE READER',
        choice4: 'MICR',
        answer: 4,
    },
    {
        question: 'SCIENCE (BIOLOGY) : WHICH CHEMICAL IS USED TO TEST THE PRESENCE OF STARCH IN A PLANT LEAF ?',
        choice1: 'ACID',
        choice2: 'IODINE',
        choice3: 'WATER',
        choice4: 'GLYCERIN',
        answer: 2,
    },
    {
        question: 'SCIENCE (PHYSICS) : IN A DARK ROOM WITH NO LIGHTS, RAJ BROUGHT A RED FLOWER. HE SHONE HIS TORCH ON THE FLOWER. WHAT COLOUR SHADOW WILL IT GIVE? N.B - THE FLOWER IS RED',
        choice1: 'BLACK',
        choice2: 'RED',
        choice3: 'BLUE',
        choice4: 'PINK',
        answer: 1,
    },
    {
        question: 'SCIENCE (CHEMISTRY) : RAM FILLED A TUBE WITH WATER. THEN HE TOOK 2 DROPS OF BLUE VITRIOL IN THE TEST TUBE. WHICH OF THE FOLLOWING IS A QUALITY OF BLUE VITRIOL WHEN MIXED WITH WATER ?',
        choice1: 'SOLUBLE',
        choice2: 'UNMIXABLE',
        choice3: 'INSOLUBLE',
        choice4: 'NONE OF THE ABOVE',
        answer: 1,
    },
    {
        question: 'TECHNOLOGY : WHICH OF THE FOLLOWING IS A - TEXT TO SPEECH - PYTHON LIBRARY? ',
        choice1: 'PYTTSX3',
        choice2: 'PYQT5',
        choice3: 'OS',
        choice4: 'SYS',
        answer: 1,
    },
    {
        question: 'TECHNOLOGY : WHICH OF THE FOLLOWING IS THE VERSION OF iOS RELEASED BY APPLE ON 16 SEPTEMBER, 2020 ?',
        choice1: 'IOS 15',
        choice2: 'IOS 13',
        choice3: 'IOS 14',
        choice4: 'IOS 20',
        answer: 3,
    },
    {
        question: 'SCIENCE (BIOLOGY) : WHAT ARE THE PLANTS WHICH GROW UNDER DRY, POOR CONDITIONS CALLED ? ',
        choice1: 'XEROPHYTES',
        choice2: 'HYDROPHYTES',
        choice3: 'CACTUS',
        choice4: 'NONE OF THE ABOVE',
        answer: 1,
    },
    {
        question: 'TECHNOLOGY : WHICH PROGRAMMING LANGUAGE IS USED TO STYLE A BASIC HTML WEBSITE?',
        choice1: 'PYTHON',
        choice2: 'CSS',
        choice3: 'JAVASCRIPT',
        choice4: 'XML',
        answer: 2,
    },
    {
        question: 'SCIENCE (CHEMISTRY) : WHICH GAS TURNS LIMEWATER MILKY?',
        choice1: 'CARBON DIOXIDE',
        choice2: 'OXYGEN',
        choice3: 'HYDROGEN',
        choice4: 'WATER VAPOUR',
        answer: 1,
    },
    {
        question: 'SCIENCE (PHYSICS) : AN IMAGE FORMED BY A PLAIN MIRROR IS - ',
        choice1: 'REAL',
        choice2: 'VIRTUAL',
        choice3: 'CANNOT BE DEFINED',
        choice4: 'FAKE',
        answer: 2, 
    },
    {
        question: 'TECHNOLOGY: RYZEN 9, A POWERFUL GAMING PROCESSOR, IS RELEASED BY :',
        choice1: 'AMD',
        choice2: 'INTEL',
        choice3: 'MEDIATEK',
        choice4: 'SNAPDRAGON',
        answer: 1,
    },
    {
        question: 'SCIENCE (BIOLOGY) : WHICH OF THE FOLLOWING IS NOT AN INSECTIVOROUS PLANT ?',
        choice1: 'VENUS FLYTRAP',
        choice2: 'PITCHER PLANT',
        choice3: 'SUNDEW PLANT',
        choice4: 'NONE OF THE ABOVE',
        answer: 4,
    },
    {
        question: 'SCIENCE (PHYSICS) : MEENA IS STANDING 10 FEET AWAY FROM A PLAIN MIRROR. HOW FAR IS HER REFLECTION FROM HER IN FEET ?',
        choice1: '10 FEET',
        choice2: '20 FEET',
        choice3: '30 FEET',
        choice4: '40 FEET',
        answer: 2,
    },
    {
        question: 'SCIENCE (CHEMISTRY) : MIXTURE OF CHALK DUST IN WATER IS A TYPE OF - ',
        choice1: 'HETEROGENEOUS MIXTURE',
        choice2: 'UNSEEING MIXTURE',
        choice3: 'HOMOGENEOUS MIXTURE',
        choice4: 'NONE OF THE ABOVE',
        answer: 1,
    },
    {
        question: 'TECHNOLOGY : WHICH TAG IN HTML IS USED TO CREATE A SEPARATING LINE ?',
        choice1: '<hr>',
        choice2: '<br>',
        choice3: '<h1>',
        choice4: '<div>',
        answer: 1,
    },
    {
        question: 'TECHNOLOGY : WHICH OF THE FOLLOWING IS THE LATEST VERSION OF WINDOWS IN 2022 ?',
        choice1: 'WINDOWS 7',
        choice2: 'WINDOWS 10',
        choice3: 'WINDOWS 8',
        choice4: 'WINDOWS 11',
        answer: 4,
    },
    {
        question: 'SCIENCE (BIOLOGY) : WHICH OF THE FOLLOWING IS AN ADAPTATION FOUND IN SUBMERGED HYDROPHYTES ?',
        choice1: 'NEEDLE LIKE LEAVES',
        choice2: 'SCALES OR SPINES',
        choice3: 'HOLLOW STEM_TO FLOAT',
        choice4: 'NONE OF THE ABOVE',
        answer: 1,
    },
    {
        question: 'TECHNOLOGY : WHICH OF THE FOLLOWING IS THE CORRECT FULL FORM OF QBASIC ?',
        choice1: "Quickest Byte All-Purpose Scientific Identifier Code",
        choice2: 'Quicker Beginner All-Purpose Scientific Instruction Code',
        choice3: 'Quick Basic All-Purpose Symbolic Identifier Code',
        choice4: "Quick Beginner's All-Purpose Symbolic Instruction Code",
        answer: 4,
    },
    {
        question: 'SCIENCE (CHEMISTRY) : WHICH OF THE FOLLOWING IS A LIQUID METAL ?',
        choice1: 'Mercury',
        choice2: 'Liquid Nitrogen',
        choice3: 'Carbon Dioxide',
        choice4: 'H2O',
        answer: 1,
    },
    {
        question: 'TECHNOLOGY: WHICH OF THE FOLLOWING IS NOT A LAPTOP MANUFACTURING COMPANY ?',
        choice1: 'HP',
        choice2: 'DELL',
        choice3: 'LENOVO',
        choice4: 'GoDaddy',
        answer: 4, 
    },
]

const SCORE_POINTS = 50
const MAX_QUESTIONS = 20

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]

    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
}) 

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()




   
