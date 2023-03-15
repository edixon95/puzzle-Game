{/* <button id="puzButOne">One</button> */}
// Brute force method for adding buttons and puzzle logic.
export const enablePuzzleButtons = () => {
    const puzzleCheck = JSON.parse(localStorage.getItem("puzzleTrack")) || {}
    if(puzzleCheck.currentPuzzle == 1 && puzzleCheck.puzzleSeq == 1) {
        makeButton()
        showContainer()
        saveLightObject()
    }
}

// Original light object for values to start with, will also reset the puzzle in event of quit
const lightObject = {
    light1: 0,
    light2: 0,
    light3: 0,
    light4: 0,
    light5: 0,
    light6: 0,
}
// Save lightObject to localStorage
const saveLightObject = () => {
    localStorage.setItem("lightObject", JSON.stringify(lightObject));
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
    saveLightObject()
    checkPass()
}

const b2p1s1 = () => {
    const lightCheck = JSON.parse(localStorage.getItem("lightObject")) || {}
    const light2 = document.getElementById('light2')
    const light6 = document.getElementById('light6')

    if(lightCheck.light2 == 0){
        lightObject.light2 = 1
        light2.classList.remove('hidden')
    }
    else {
        lightObject.light2 = 0
        light2.classList.add('hidden')
    }

    if(lightCheck.light6 == 0){
        lightObject.light6 = 1
        light6.classList.remove('hidden')
    }
    else {
        lightObject.light6 = 0
        light6.classList.add('hidden')
    }
    saveLightObject()
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
    saveLightObject()
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

    document.getElementById('puzBut1').addEventListener("click", b1p1s1)
    document.getElementById('puzBut2').addEventListener("click", b2p1s1)
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

