const robot = document.querySelector('.robot')

//Challenge: Make Eve move when you click its body.
    
function moveRobot() {
    // let eye = document.querySelectorAll('.eye')
    // let left = eye[0].style
    // left.marginLeft = "20px"
    const initMargin = parseInt(window.getComputedStyle(robot).marginLeft)
    robot.style.marginLeft = initMargin + 20 + "px"
}

robot.addEventListener('click', moveRobot)