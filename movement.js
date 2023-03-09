import { exploreCameraRefresh } from "./imageScript.js"

// Player logic
// Didn't see the point in using north east etc as it would just mean converting with an if statement regardless, or cycling through an array
// All player stats are now an object as it's easier to keep track of and will make adding new features a lot easier in the future.

const playerStats = {
    x: 3,
    y: 1,
    facing: 0,
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


document.getElementById('butOne').addEventListener("click", playerTurnLeft )
document.getElementById('butTwo').addEventListener("click", playerMoveForward)
document.getElementById('butThree').addEventListener("click", playerTurnRight)