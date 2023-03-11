import { exploreCameraRefresh } from "./imageScript.js"
import { puzzleCheck } from "./introPuzzle.js"
import { hideLights } from "./introPuzzle.js"
import { turnOffPuzzle } from "./introPuzzle.js"

// Player logic
// Didn't see the point in using north east etc as it would just mean converting with an if statement regardless, or cycling through an array
// All player stats are now an object as it's easier to keep track of and will make adding new features a lot easier in the future.

const playerStats = {
    x: 3,
    y: 1,
    facing: 0,
    puzzle: 0,
}

const puzzleStats = {
    puzzleOne: 0,
    puzzleTwo: 0
}

// Movement and directional context

const playerTurnRight = () => {
    playerStats.facing++
    if(playerStats.facing == 4){
        playerStats.facing = 0
    }
    savePosition()
    exploreCameraRefresh()
}

const playerTurnLeft = () => {
    playerStats.facing--
    if(playerStats.facing == -1){
        playerStats.facing = 3
    }
    savePosition()
    exploreCameraRefresh()
}

const playerMoveForward = () => {
    if(playerStats.facing == 0){
        playerStats.y++
    }
    else if(playerStats.facing == 1){
        playerStats.x++
    }
    else if(playerStats.facing == 2){
        playerStats.y--
    }
    else if(playerStats.facing == 3){
        playerStats.x--
    }
    resetPosition()
    exploreCameraRefresh()
}

// Basic out of bounds, will improve later
// By storing player position, also allows for save/load feature
// This turned out even better, because now I can pass information between files to make it easier to work with

const savePosition = () => {
    localStorage.setItem("player", JSON.stringify(playerStats));
    localStorage.setItem("puzzles", JSON.stringify(puzzleStats));
}

const resetPosition = () => {
    const playerPosition = JSON.parse(localStorage.getItem("player")) || {}
    if(playerStats.x == 2 && playerStats.y == 1 || playerStats.x == 2 && playerStats.y == 2 || playerStats.x == 2 && playerStats.y == 3){
        playerStats.x = playerPosition.x
        playerStats.y = playerPosition.y
    }
    else if(playerStats.x == 1 && playerStats.y == 3){
        playerStats.x = playerPosition.x
        playerStats.y = playerPosition.y
    }
    else if(playerStats.x == 0 || playerStats.x == 4 || playerStats.y == 0 || playerStats.y == 7){
        playerStats.x = playerPosition.x
        playerStats.y = playerPosition.y
    }
    else {
        savePosition()
    }
}

// all interactable positions will be hard coded here
const doInteract = () => {
    const playerPosition = JSON.parse(localStorage.getItem("player")) || {}
    if(playerPosition.x == 3 && playerPosition.y == 2 && playerPosition.facing == 3){
        playerStats.puzzle = 1
        savePosition()
        puzzleCheck()
    }
    else if(playerPosition.x == 3 && playerPosition.y == 2 && playerPosition.facing == 1){
        playerStats.puzzle = 2
        savePosition()
        puzzleCheck()
    }

    console.log(playerStats)
    console.log(puzzleStats)
}

// if player in puzzle, set puzzle to 0 and reset the camera and puzzle.
const goBack = () => {
    if(playerStats.puzzle >= 0){
        playerStats.puzzle = 0
        hideLights()
        savePosition()
        turnOffPuzzle()
        exploreCameraRefresh()

        const moveButtonContainer = document.getElementById('navigationButtons')
        const puzzleButtonContainer = document.getElementById('puzzleButtons')
        const lightBacking = document.getElementById('lightOverlay')
        const completeOverlay = document.getElementById('completeOverlay')

        moveButtonContainer.classList.toggle('hidden')
        puzzleButtonContainer.classList.toggle('hidden')
        lightBacking.classList.add('hidden')
        completeOverlay.classList.add('hidden')

        console.log(playerStats)
        console.log(puzzleStats)
    }
}

// Lets the game track which puzzle has been completed.
export const setPuzzleNumberOne = () => {
    playerStats.puzzle = 0
    puzzleStats.puzzleOne = 1
    savePosition()
}

export const setPuzzleNumberTwo = () => {
    playerStats.puzzle = 0
    puzzleStats.puzzleTwo = 1
    savePosition()
}

document.getElementById('butOne').addEventListener("click", playerTurnLeft )
document.getElementById('butTwo').addEventListener("click", playerMoveForward)
document.getElementById('butThree').addEventListener("click", playerTurnRight)
document.getElementById('butFour').addEventListener("click", doInteract)
document.getElementById('puzBack').addEventListener("click", goBack)