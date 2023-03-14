// Import stuff
import { exploreCameraRefresh } from "./imageScript.js"
import { selectPuzzle } from "./interaction.js"

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
    selectPuzzle()
}

const playerTurnLeft = () => {
    playerStats.facing--
    if(playerStats.facing == -1){
        playerStats.facing = 3
    }
    savePosition()
    exploreCameraRefresh()
    selectPuzzle()
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
    selectPuzzle()
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

// Load all player progress from localStorage and set the player objects to match.
const loadGame = () => {
    const playerFile = JSON.parse(localStorage.getItem("playerTrack")) || {}
    const PuzzleFile = JSON.parse(localStorage.getItem("puzzleTrack")) || {}

    playerStats.x = playerFile.x
    playerStats.y = playerFile.y
    playerStats.facing = playerFile.facing
    playerStats.puzzle = playerFile.puzzle
    playerStats.level = playerFile.level

    puzzleStats.currentPuzzle = PuzzleFile.currentPuzzle
    puzzleStats.puzzleComplete = PuzzleFile.puzzleComplete
    puzzleStats.puzzleSeq = PuzzleFile.puzzleSeq

    exploreCameraRefresh()
    document.getElementById('startLoad').classList.add('hidden')
    document.getElementById('navButton').classList.remove('hidden')
    document.getElementById('navButton').classList.add('navigationButtons')
    document.getElementById('startLoad').innerHTML = ""
}

// Start fresh game
const startGame = () => {
    playerStats.x = 3
    playerStats.y = 1
    playerStats.facing = 0
    playerStats.puzzle = false
    playerStats.level = 1

    puzzleStats.currentPuzzle = 0
    puzzleStats.puzzleComplete = 0
    puzzleStats.puzzleSeq = 0

    savePosition()
    document.getElementById('startLoad').classList.add('hidden')
    document.getElementById('navButton').classList.remove('hidden')
    document.getElementById('navButton').classList.add('navigationButtons')
    document.getElementById('startLoad').innerHTML = ""
    document.getElementById('gameScreen').src = "./assets/img/levelOne/x3y1f0.jpg"
}

// Select menu Buttons. This entire div is wiped to remove the event listeners once used.
document.getElementById('startButton').addEventListener("click", startGame)
document.getElementById('loadButton').addEventListener("click", loadGame)
// Select movement buttons
document.getElementById('butOne').addEventListener("click", playerTurnLeft)
document.getElementById('butTwo').addEventListener("click", playerMoveForward)
document.getElementById('butThree').addEventListener("click", playerTurnRight)

// Something went wrong?