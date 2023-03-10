// This file is very messy, sorry for anyone reading.

import { setPuzzleNumberOne } from "./movement.js"

// Variables to track puzzle state
let lightOneG = 0
let lightTwoG = 0
let lightThreeG = 0
let lightFourG = 0
let lightFiveG = 0
let lightSixG = 0

// Object layout for puzzle elements
const puzzleImage = {
        background: `./puzzleOne/puzzleBG.jpg`,
        squareOverlay: `./puzzleOne/puzzleSquares.png`,
        squareLights: {
            1: `./puzzleOne/puzzlesquares1.png`,
            2: `./puzzleOne/puzzlesquares2.png`,
            3: `./puzzleOne/puzzlesquares3.png`,
            4: `./puzzleOne/puzzlesquares4.png`,
            5: `./puzzleOne/puzzlesquares5.png`,
            6: `./puzzleOne/puzzlesquares6.png`,
        },
        complete: `./puzzleOne/puzzleComplete.png`
}

// Check which puzzle, and set it up
// This is where it gets messy.
export const puzzleCheck = () => {
    const playerCheck = JSON.parse(localStorage.getItem("player")) || {}
    const puzzleCheck = JSON.parse(localStorage.getItem("puzzles")) || {}

    const completeOverlay = document.getElementById('completeOverlay')
    const gameScreen = document.getElementById('gameScreen')
    const lightBacking = document.getElementById('lightOverlay')
    const lightOne = document.getElementById('lightOne')
    const lightTwo = document.getElementById('lightTwo')
    const lightThree = document.getElementById('lightThree')
    const lightFour = document.getElementById('lightFour')
    const lightFive = document.getElementById('lightFive')
    const lightSix = document.getElementById('lightSix')

    const moveButtonContainer = document.getElementById('navigationButtons')
    const puzzleButtonContainer = document.getElementById('puzzleButtons')

    // Check if puzzle has already been complete or not
    if(puzzleCheck.puzzleOne == 1){
        gameScreen.src = puzzleImage.background
        lightBacking.src = puzzleImage.squareOverlay
        completeOverlay.src = puzzleImage.complete

        lightBacking.classList.remove('hidden')
        completeOverlay.classList.remove('hidden')

        moveButtonContainer.classList.toggle('hidden')
        puzzleButtonContainer.classList.toggle('hidden')
    } // If puzzle not complete, grab the object and display the puzzle
    else if(playerCheck.puzzle == 1){
        gameScreen.src = puzzleImage.background
        lightBacking.src = puzzleImage.squareOverlay
        lightOne.src = puzzleImage.squareLights[1]
        lightTwo.src = puzzleImage.squareLights[2]
        lightThree.src = puzzleImage.squareLights[3]
        lightFour.src = puzzleImage.squareLights[4]
        lightFive.src = puzzleImage.squareLights[5]
        lightSix.src = puzzleImage.squareLights[6]

        moveButtonContainer.classList.toggle('hidden')
        puzzleButtonContainer.classList.toggle('hidden')
        hideLights()
        lightThree.classList.toggle('hidden')
        lightSix.classList.toggle('hidden')
        // Puzzle initial state
        lightThreeG = 1
        lightSixG = 1
    }
}

export const hideLights = () => {
    const hidden = document.querySelectorAll('.light');
    for (let i = 0; i < hidden.length; i++) {
        hidden[i].classList.add('hidden')
    }
}

// Buttons and logic for puzzle one.
// These "could" be wrapped in an if/switch to function for each puzzle, but I will probably not do that
const buttonOne = () => {
    const lightOne = document.getElementById('lightOne')
    const lightThree = document.getElementById('lightThree')
    const lightSix = document.getElementById('lightSix')

    lightOne.classList.toggle('hidden')
    lightThree.classList.toggle('hidden')
    lightSix.classList.toggle('hidden')

    if(lightOneG == 1){
        lightOneG = 0
    }
    else {
        lightOneG = 1
    }

    if(lightThreeG == 1){
        lightThreeG = 0
    }
    else {
        lightThreeG = 1
    }

    if(lightSixG == 1){
        lightSixG = 0
    }
    else {
        lightSixG = 1
    }

    checkComplete()
}

const buttonTwo = () => {
    const lightThree = document.getElementById('lightThree')
    const lightFive = document.getElementById('lightFive')
    
    lightThree.classList.toggle('hidden')
    lightFive.classList.toggle('hidden')

    if(lightThreeG == 1){
        lightThreeG = 0
    }
    else {
        lightThreeG = 1
    }

    if(lightFiveG == 1){
        lightFiveG = 0
    }
    else {
        lightFiveG = 1
    }

    checkComplete()
}

const buttonThree = () => {
    const lightTwo = document.getElementById('lightTwo')
    const lightThree = document.getElementById('lightThree')
    const lightFour = document.getElementById('lightFour')

    lightTwo.classList.toggle('hidden')
    lightThree.classList.toggle('hidden')
    lightFour.classList.toggle('hidden')

    if(lightTwoG == 1){
        lightTwoG = 0
    }
    else {
        lightTwoG = 1
    }

    if(lightThreeG == 1){
        lightThreeG = 0
    }
    else {
        lightThreeG = 1
    }

    if(lightFourG == 1){
        lightFourG = 0
    }
    else {
        lightFourG = 1
    }

    checkComplete()
}

const buttonFour = () => {
    const lightThree = document.getElementById('lightThree')
    const lightSix = document.getElementById('lightSix')

    lightThree.classList.toggle('hidden')
    lightSix.classList.toggle('hidden')

    if(lightThreeG == 1){
        lightThreeG = 0
    }
    else {
        lightThreeG = 1
    }

    if(lightSixG == 1){
        lightSixG = 0
    }
    else {
        lightSixG = 1
    }

    checkComplete()
}

// Reset the puzzle so it's solvable again, though not really needed anymore.
export const massLightToggle = () => {
    lightOneG = 0
    lightTwoG = 0
    lightThreeG = 0
    lightFourG = 0
    lightFiveG = 0
    lightSixG = 0
}

// Check if puzzle is in complete state
const checkComplete = () => {
    if(lightOneG == 1 && lightTwoG == 1 && lightThreeG == 1 && lightFourG == 1 && lightFiveG == 1 && lightSixG == 1){

        const completeOverlay = document.getElementById('completeOverlay')
        // if puzzle one complete, save 
        setPuzzleNumberOne()
        completeOverlay.src = puzzleImage.complete
    }
}


document.getElementById('puzButOne').addEventListener("click", buttonOne)
document.getElementById('puzButTwo').addEventListener("click", buttonTwo)
document.getElementById('puzButThree').addEventListener("click", buttonThree)
document.getElementById('puzButFour').addEventListener("click", buttonFour)
