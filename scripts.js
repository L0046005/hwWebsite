let currentQuestion = ""
let outcome = ""
let score = 0
let answerKey = ["D","C","D","filler","B","A"]

let buttons = document.querySelectorAll("button")

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        let parent = button.parentElement
        currentQuestion = Number(parent.className) - 1
        let className = button.className
        if (currentQuestion == 0) {
            if (answerKey[currentQuestion] == className) {
                score++
            } else {
                score--
            }
        }
        if (currentQuestion == 1) {
            if (answerKey[currentQuestion] == className) {
                score++
            } else {
                score--
            }
        }
        if (currentQuestion == 2) {
            if (className != "D") {
                score++
            } else {
                score--
            }
        }
        if (currentQuestion == 3) {
            let x = Number(parent.querySelector(".x").value)
            let y = Number(parent.querySelector(".y").value)
            if (175 <= x && x <= 195 && 310 <= y && y <= 358) {
                score++
            } else {
                score--
            }
        }
        if (currentQuestion == 4) {
            if (answerKey[currentQuestion] == className) {
                score++
            } else {
                score--
            }
        }
        if (currentQuestion == 5) {
            if (answerKey[currentQuestion] == className) {
                score++
            } else {
                score--
            }
        }

    })

})

let resultsButton = document.querySelector(".results")
resultsButton.addEventListener("click", function() {
    if (score == 6) {
        outcome = "cat"
    } else if (score == -6) {
        outcome = "dog"
    } else {
        outcome = "human"
    }
    let ans = document.createElement("p")
    ans.textContent = "You are most likely a " + outcome + "!!!"
    document.body.appendChild(ans)

})