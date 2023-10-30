let countdown = 10;
var score = 0;

window.onload = function () {
    timer()
    document.getElementById("target").addEventListener("click", () => {
        if (countdown > 0) {

            calculateScore()
            moveTarget()
        }
    })
}

const moveTarget = () => {
    const screenWidth = document.body.getBoundingClientRect().width
    const screenHeight = document.body.getBoundingClientRect().height

    const visibleScreenWidth = screenWidth - (screenWidth * 0.2)
    const visibleScreenHeight = screenHeight - (screenHeight * 0.2)

    x = Math.floor(Math.random() * visibleScreenWidth)
    y = Math.floor(Math.random() * visibleScreenHeight)

    document.querySelector(".target").style.transform = `translate(${x}px, ${y}px)`;
}

const calculateScore = () => {
    score++
    document.getElementById("score").textContent = `${score} clicks`
}

const timer = () => {
    document.getElementById("timer").textContent = `${countdown} Seconds`



    const intervalId = setInterval(() => {
        document.getElementById("timer").textContent = `${countdown} Seconds`
        countdown--;

        if (countdown < 0) {
            clearInterval(intervalId);
            document.getElementById("timer").textContent = `Game Over`
        }
    }, 1000);

}