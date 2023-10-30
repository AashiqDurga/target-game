window.onload = function () {
    timer()
    document.getElementById("target").addEventListener("click", () => {
        moveTarget()
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

const timer = () => {

    let timer = document.getElementById("timer").textContent = "20 Seconds"


    let countdown = 20;

    const intervalId = setInterval(() => {
        timer = document.getElementById("timer").textContent = `${countdown} Seconds`
        console.log(countdown);
        countdown--;

        if (countdown < 0) {
            clearInterval(intervalId);
            document.getElementById("timer").textContent = ` Game Over`
        }
    }, 1000);

}