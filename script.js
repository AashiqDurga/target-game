window.onload = function () {
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