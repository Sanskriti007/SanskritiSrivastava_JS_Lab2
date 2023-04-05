function Quiz(questions) {
    this.score = 0;
    this.questions = questions
    this.questNumber = 0
}

    Quiz.prototype.isEnded = function () {
        return this.questNumber === this.questions.length
    }
    Quiz.prototype.getQuestionIndex = function () {
        return this.questions[this.questNumber]
    }
    
    Quiz.prototype.checkAnswer = function (option) {
        if (this.getQuestionIndex().isCorrect(option)) {

            this.score++
        }
        this.questNumber++

    }
    Question.prototype.isCorrect = function (option) {
        return this.answer === option
    }
    

    function showScores() {
        let res = "<h1>Result</h1>"
        res += "<h2 id='score'>Your score is " + quiz.score + " and mark percentage is " + (quiz.score / questions.length * 100) + "%</h2>"

        let quizElem = document.getElementById("quiz")
        quizElem.innerHTML = res

    }
    function handleOptionClicked(btnNumber, option) {
        let btn = document.getElementById(btnNumber)
        btn.onclick = function () {
            quiz.checkAnswer(option)

            loadQuestions()
        }

    }
    function showProgress() {
        let curr = quiz.questNumber + 1;
        let elem = document.getElementById("progress")
        elem.innerHTML = `Question ${curr} of ${quiz.questions.length}`
    }
    function loadQuestions() {
        if (quiz.isEnded()) {
            showScores()
        }
        else {
            let questionTitle = document.getElementById("question")
            questionTitle.innerHTML = quiz.getQuestionIndex().title

            let options = quiz.getQuestionIndex().options
            for (let i = 0; i < options.length; i++) {
                let optnBtn = document.getElementById("choice" + i)
                optnBtn.innerHTML = options[i]
                handleOptionClicked("btn" + i, options[i])
            }
            showProgress()
        }
    }

function Question(title, options, answer) {
    this.title = title
    this.options = options
    this.answer = answer
}
let questions = [
    new Question("Who is the author of Harry Potter?", ["Nicholas Spark", "Agatha Christie", "JK Rowling", "Sidney Sheldon"], "JK Rowling"),
    new Question("What is used in photosynthesis for making food?", ["Chlorophyll", "Rock", "Teeth", "Wood"], "Chlorophyll"),
    new Question("What is the most abundant gas?", ["Helium", "Carbon dioxide", "Oxygen", "Nitrogen"], "Nitrogen"),
    new Question("What is the first planet in solar system?", ["Earth", "Mercury", "Saturn", "Jupiter"], "Mercury")
]

let quiz = new Quiz(questions)
loadQuestions()