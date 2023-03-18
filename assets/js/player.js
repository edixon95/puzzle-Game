// Import stuff
import { exploreCameraRefresh } from "./imageScript.js"
import { selectPuzzle } from "./interaction.js"
import { lightObjectReset } from "./puzzleScript.js"

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

// Player movement. 0 = North. 1 = East. 2 = South. 3 = West
// savePosition - player.js - line 60
// exploreCameraRefresh - imageScript.js
// selectPuzzle - interaction.js
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
// playerStats are the real object, playerPosition is localStorage
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
    // Then update the camera, this will also load a puzzle if that was the last state the game was left in
    exploreCameraRefresh()
    document.getElementById('startLoad').classList.add('hidden')
    document.getElementById('navButton').classList.remove('hidden')
    document.getElementById('navButton').classList.add('showCurrentButton')
    document.getElementById('startLoad').innerHTML = ""
}

// Start fresh game
const startGame = () => {
    // Force player and puzzle object in to default state
    playerStats.x = 3
    playerStats.y = 1
    playerStats.facing = 0
    playerStats.puzzle = false
    playerStats.level = 1

    puzzleStats.currentPuzzle = 0
    puzzleStats.puzzleComplete = 0
    puzzleStats.puzzleSeq = 0
    // Then save to overwrite 
    savePosition()
    // Show movement buttons, clear the event listeners from the menu buttons
    document.getElementById('startLoad').classList.add('hidden')
    document.getElementById('navButton').classList.remove('hidden')
    document.getElementById('navButton').classList.add('showCurrentButton')
    document.getElementById('startLoad').innerHTML = ""
    // This first image is always seen at start game, so it's hard coded just to avoid loading everything for no reason
    document.getElementById('gameScreen').src = "./assets/img/levelOne/x3y1f0.jpg"
}

// Puzzle interaction stuff. Needs to be done in this file to have access to the objects
const interactButton = () => {
    const facingPuzzle = JSON.parse(localStorage.getItem("facingPuzzle"))
    const puzzleCheck = JSON.parse(localStorage.getItem("puzzleTrack")) || {}
    const gameScreen = document.getElementById('gameScreen') // Not used yet, but will be used to say that you can't attempt puzzle yet
    // This is so I stop breaking things
    // if puzzles complete is equal to or greater than the puzzle being faced(-1), run
    // Puzzles complete starts at 0. Player will always have one less puzzle complete than next puzzle to be done.
    // This check MUST happen here. There's too many errors to count if you try to do it after
    // Though there is a lot of data missing, that's probably more likely the cause
    if(puzzleCheck.puzzleComplete >= facingPuzzle-1){
    puzzleStats.currentPuzzle = facingPuzzle
    puzzleStats.puzzleSeq = 1
    playerStats.puzzle = true
    savePosition()
    exploreCameraRefresh()
    }
    else{
        console.log("Stop breaking")
        // To do: add in function and image structure to show in this event
    }
}



// Puzzle object changing for puzzleScript. It's just easier to update things here.
export const puzzleSeqUpdate = () => {
    const puzzleCheck = JSON.parse(localStorage.getItem("puzzleTrack")) || {}
    // When puzzle requirements met, increment puzzleSequence, then save and update images
    puzzleStats.puzzleSeq +=1
    // if puzzleSeq = 5, reset puzzleSeq
    if(puzzleStats.puzzleSeq == 5){
        puzzleStats.puzzleSeq = 0
        if(puzzleStats.puzzleComplete < puzzleCheck.currentPuzzle ){
            // Set puzzle complete to be current puzzle, if current puzzle is less than what's been completed
            // This should fix being able to undo progress by returning to a previous puzzle
            puzzleStats.puzzleComplete = puzzleCheck.currentPuzzle
        }
        // Mark the player as not in a puzzle
        playerStats.puzzle = false
        // Then reset everything
        backButtonFunction()
    } // else, save and update the camera
    savePosition()
    exploreCameraRefresh()
}
// Same reason as above, it's just easier to do it in this file
// This function is also hijacked for ending a puzzle once it's finished as it is close to default starting positions.
export const backButtonFunction = () => {
    playerStats.puzzle = false
    puzzleStats.currentPuzzle = 0
    puzzleStats.puzzleSeq = 0
    lightObjectReset()
    // Wipe screenContainer, this could contain multiple images overlayed that need to be removed
    const screenContainer = document.getElementById('screenContainer')
    screenContainer.innerHTML = ""
    // Create a new game screen and add it
    const backgroundImage = document.createElement("img")
    backgroundImage.setAttribute("id", "gameScreen")
    screenContainer.appendChild(backgroundImage)
    // Update local storage, then update the camera
    savePosition()
    exploreCameraRefresh()

    const buttonContainer = document.getElementById('puzzleButton')
    const navigationContainer = document.getElementById('navButton')
    // Swap the button containers
    buttonContainer.classList.add('hidden')
    buttonContainer.classList.remove('showCurrentButton')
    navigationContainer.classList.add('showCurrentButton')
    navigationContainer.classList.remove('hidden')

}

// Select menu Buttons. This entire div is wiped to remove the event listeners once used.
document.getElementById('startButton').addEventListener("click", startGame)
document.getElementById('loadButton').addEventListener("click", loadGame)
// Select movement buttons
document.getElementById('butOne').addEventListener("click", playerTurnLeft)
document.getElementById('butTwo').addEventListener("click", playerMoveForward)
document.getElementById('butThree').addEventListener("click", playerTurnRight)
document.getElementById('butFour').addEventListener("click", interactButton)

// Something went wrong?