// Import stuff
import { exploreCameraRefresh } from "./imageScript.js"

// Track player position and if they're in a puzzle or not
const playerStats = {
    x: 3,
    y: 1,
    facing: 0,
    puzzle: false,
    level: 1, // Useless right now
}
// Track puzzle statistics, for loading puzzles and overlays
const puzzleStats = {
    puzzleComplete: 0, // Used to track which overlay to show
    currentPuzzle: 0, // Define which puzzle the player is on
    puzzleSeq: 0, // Define which sequence in currentPuzzle
}

// Player movement. 0 = North. 
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

// Save position after turning and moving forward (only after checking if out of bounds)
const savePosition = () => {
    localStorage.setItem("playerTrack", JSON.stringify(playerStats));
    localStorage.setItem("puzzleTrack", JSON.stringify(puzzleStats));
}
// Check out of bounds, reset the player to previous position if triggered
const resetPosition = () => {
    const playerPosition = JSON.parse(localStorage.getItem("playerTrack")) || {}
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


// Select movement buttons
document.getElementById('butOne').addEventListener("click", playerTurnLeft)
document.getElementById('butTwo').addEventListener("click", playerMoveForward)
document.getElementById('butThree').addEventListener("click", playerTurnRight)