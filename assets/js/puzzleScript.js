// 
export const enablePuzzleButtons = () => {
    const puzzleCheck = JSON.parse(localStorage.getItem("puzzleTrack")) || {}
    if(puzzleCheck.currentPuzzle == 1 && puzzleCheck.puzzleSeq == 1) {
        makeButton()
        showContainer()
    }
}

// base light object. 
const lightObject = {
    light1: 0,
    light2: 0,
    light3: 0,
    light4: 0,
    light5: 0,
    light6: 0,
}

// Accepts two paremeters (strings) that are equal to the Id of the element you want to control
// eg lightOptionOne = "light1" lightOptionTwo = "light3"
const twoLightButton = (lightOptionOne, lightOptionTwo) => {
    // Select the elements with the parameters
    let firstSelectClass = document.getElementById(lightOptionOne).classList
    let secondSelectClass = document.getElementById(lightOptionTwo).classList
    // Toggle visibility of the element and update the lightObject. 1 = visible. 0 = hidden.
    if(lightObject[lightOptionOne] == 0){
        firstSelectClass.remove('hidden')
        lightObject[lightOptionOne] = 1
    }
    else{
        firstSelectClass.add('hidden')
        lightObject[lightOptionOne] = 0
    }

    if(lightObject[lightOptionTwo] == 0){
        secondSelectClass.remove('hidden')
        lightObject[lightOptionTwo] = 1
    }
    else{
        secondSelectClass.add('hidden')
        lightObject[lightOptionTwo] = 0
    }
    console.log(lightObject)
}
// button functions
// (b)utton 1 (p)uzzle 1 (s)equence 1
const b1p1s1 = () => {
    // load lightObject from localStorage
    const lightCheck = JSON.parse(localStorage.getItem("lightObject")) || {}
    // Select lights for this button
    const light1 = document.getElementById('light1')
    const light3 = document.getElementById('light3')
    // Toggle to turn lights on and off
    if(lightCheck.light1 == 0){
        lightObject.light1 = 1
        light1.classList.remove('hidden')
    }
    else {
        lightObject.light1 = 0
        light1.classList.add('hidden')
    }

    if(lightCheck.light3 == 0){
        lightObject.light3 = 1
        light3.classList.remove('hidden')
    }
    else {
        lightObject.light3 = 0
        light3.classList.add('hidden')
    }
    // Save after button press, and check if puzzle is completed
    checkPass()
}

const b3p1s1 = () => {
    const lightCheck = JSON.parse(localStorage.getItem("lightObject")) || {}
    const light4 = document.getElementById('light4')
    const light5 = document.getElementById('light5')

    if(lightCheck.light4 == 0){
        lightObject.light4 = 1
        light4.classList.remove('hidden')
    }
    else {
        lightObject.light4 = 0
        light4.classList.add('hidden')
    }

    if(lightCheck.light5 == 0){
        lightObject.light5 = 1
        light5.classList.remove('hidden')
    }
    else {
        lightObject.light5 = 0
        light5.classList.add('hidden')
    }
    checkPass()
}
// Clears puzzleButton container and adds required buttons for this puzzle
const makeButton = () => {
    const buttonContainer = document.getElementById('puzzleButton')
    buttonContainer.innerHTML = `
    <button id="puzBut1">One</button>
    <button id="puzBut2">Two</button>
    <button id="puzBut3">Three</button>`
}
// Swap containers around from navigation buttons to puzzle buttons
const showContainer = () => {
    const buttonContainer = document.getElementById('puzzleButton')
    const navigationContainer = document.getElementById('navButton')

    document.getElementById('puzBut1').addEventListener("click", function(){
        twoLightButton("light1", "light3")
    })
    document.getElementById('puzBut2').addEventListener("click", function(){
        twoLightButton("light2", "light4")
    })
    document.getElementById('puzBut3').addEventListener("click", b3p1s1)

    buttonContainer.classList.remove('hidden')
    buttonContainer.classList.add('showCurrentButton')

    navigationContainer.classList.remove('showCurrentButton')
    navigationContainer.classList.add('hidden')
}
// Check lightObject from localStorage to see if puzzle is complete
const checkPass = () => {
    const lightCheck = JSON.parse(localStorage.getItem("lightObject")) || {}
    if(lightCheck.light1 == 1 && lightCheck.light2 == 1 && lightCheck.light3 == 1 && lightCheck.light4 == 1 && lightCheck.light5 == 1 && lightCheck.light6 == 1){
        const screenContainer = document.getElementById('screenContainer')
        screenContainer.innerHTML = `<h1>You're a genius</h1>`
    }
    else {

    }
}

