const totalQuestions = 10
const correctAnswers = 9

const correctPercentage = (correctAnswers / totalQuestions) * 100
const wrongPercentage = 100 - correctPercentage

document.getElementById('correctPercentage').innerText = `${correctPercentage}%`
document.getElementById('wrongPercentage').innerText = `${wrongPercentage}%`

const circle = document.querySelector('.progress-circle')
const circleAngle = (correctPercentage / 100) * 360
circle.style.backgroundImage = `conic-gradient(#00ffff ${circleAngle}deg, #c2128d 0%)`
