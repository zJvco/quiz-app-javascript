const listOfQuestions = [
    {
        question: 'Qual a melhor linguagem de programação?',
        a: 'Java',
        b: 'Python',
        c: 'Javascript',
        d: 'C++',
        correct: 'c'
    },
    {
        question: 'Quais destas abaixo não é uma linguagem de programação?',
        a: 'HTML',
        b: 'Python',
        c: 'C#',
        d: 'Javascript',
        correct: 'a'
    },
    {
        question: 'Qual é o presidente atual do Brasil?',
        a: 'Lula',
        b: 'Bolsonaro',
        c: 'Dilma',
        d: 'Temer',
        correct: 'b'
    },
    {
        question: 'Quantos anos eu tenho (João Victor)?',
        a: '18',
        b: '22',
        c: '24',
        d: '19',
        correct: 'd'
    },
    {
        question: 'Qual o nome da minha cachorra?',
        a: 'Flor',
        b: 'Julie',
        c: 'Dragãozinha',
        d: 'Neeko',
        correct: 'b'
    },
]

const btnStart = document.querySelector('.btnStart')
const containerQuiz = document.querySelector('.container')
const question = document.querySelector('.question')
const txtA = document.querySelector('.a_text')
const txtB = document.querySelector('.b_text')
const txtC = document.querySelector('.c_text')
const txtD = document.querySelector('.d_text')

var currentQuestion = 0
var sumResult = 0


btnStart.addEventListener('click', () => {
    const startQuizContainer = document.querySelector('.startQuiz')

    containerQuiz.style.display = 'block'
    startQuizContainer.style.display = 'none'
    startQuiz()
})

function startQuiz() {
    question.innerHTML = listOfQuestions[0].question
    txtA.innerHTML = listOfQuestions[0].a
    txtB.innerHTML = listOfQuestions[0].b
    txtC.innerHTML = listOfQuestions[0].c
    txtD.innerHTML = listOfQuestions[0].d

    nextQuiz()
}

function nextQuiz() {
    const next = document.querySelector('.next')

    next.addEventListener('click', () => {
        if (getCorrectAnswer() == listOfQuestions[currentQuestion].correct) {
            sumResult++
        }

        currentQuestion++
    
        if (currentQuestion >= 5) {
            containerQuiz.style.display = 'none'
            showResults(sumResult)
        }
        else {
            console.log(currentQuestion)

            question.innerHTML = listOfQuestions[currentQuestion].question
            txtA.innerHTML = listOfQuestions[currentQuestion].a
            txtB.innerHTML = listOfQuestions[currentQuestion].b
            txtC.innerHTML = listOfQuestions[currentQuestion].c
            txtD.innerHTML = listOfQuestions[currentQuestion].d
        }
    })
}

function getCorrectAnswer() {
    const answers = document.getElementsByName('option')

    const listOfResults = []

    answers.forEach(e => {
        if (e.checked) {
            listOfResults.push(e.id)
        }
    })

    return listOfResults
}

function showResults(input) {
    const showResultsContainer = document.querySelector('.showResults-container')
    const showResultPoints = document.querySelector('.showResult')

    showResultsContainer.style.display = 'block'

    showResultPoints.innerText = input
}

const btnRestart = document.querySelector('.restart')

btnRestart.addEventListener('click', () => {
    window.location.reload()
})
