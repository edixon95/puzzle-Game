// Importing puzzle updating function to use the object in player.js and camera update
import { exploreCameraRefresh } from "./imageScript.js"
import { backButtonFunction, puzzleSeqUpdate } from "./player.js"

export const enablePuzzleButtons = () => {
    const puzzleCheck = JSON.parse(localStorage.getItem("puzzleTrack")) || {}
    const puzzleStats = puzzleButtonArray[puzzleCheck.currentPuzzle][puzzleCheck.puzzleSeq]
    const functionArray = puzzleFunctionArray[puzzleCheck.currentPuzzle][puzzleCheck.puzzleSeq]
    
    makeButton(puzzleStats) // line 194
    addButtonFunction(functionArray) // line 229
}

// base light object. 
const lightObject = {
    light1: 0,
    light2: 0,
    light3: 0,
    light4: 0,
    light5: 0,
    light6: 0,
    light7: 0,
    light8: 0,
    light9: 0,
}

// Solves world hunger
export const lightObjectReset = () => {
    lightObject.light1 = 0
    lightObject.light2 = 0
    lightObject.light3 = 0
    lightObject.light4 = 0
    lightObject.light5 = 0
    lightObject.light6 = 0
    lightObject.light7 = 0
    lightObject.light8 = 0
    lightObject.light9 = 0
}

// Puzzle button array
// ** Holding mostly dummy data
const puzzleButtonArray = [
    [  ], // currentPuzzle: 0
        [ // currentPuzzle: 1
            [ "./assets/img/Puzzles/levelOne/puzzleOne/puzzle1p1.png" ], //puzzleSeq: 0,
                [ //puzzleSeq: 1
                "One",
                "Two",
                "Three",],
                [ //puzzleSeq: 2
                "One", 
                "Two", 
                "Three", ],
                [ //puzzleSeq: 3
                "One", 
                "Two", 
                "Three", ],
                [ //puzzleSeq: 4
                "One", 
                "Two", 
                "Three", ],
        ],
        [ // currentPuzzle: 2
            [ "./assets/img/Puzzles/levelOne/puzzleOne/p1s1bg.jpg" ], //puzzleSeq: 0,
                [ //puzzleSeq: 1
                "One",
                "Two",
                "Three",],
                [ //puzzleSeq: 2
                "One", 
                "Two", 
                "Three", ],
                [ //puzzleSeq: 3
                "One", 
                "Two", 
                "Three" ],
                [ //puzzleSeq: 4
                "./assets/img/Overlays/x1y4f1p2.png", 
                "./assets/img/Overlays/x1y4f1p3.png", 
                "./assets/img/Overlays/x1y4f2p1.png", 
                "./assets/img/Overlays/x1y4f3p1.png", 
                "./assets/img/Overlays/x1y4f3p2.png", 
                "./assets/img/Overlays/x1y5f1p3.png", ],
        ]
]
// ** Holding mostly dummy data
// This array is used to select the id's of the light elements in each puzzle
const puzzleFunctionArray = [
    [  ], // currentPuzzle: 0
        [ // currentPuzzle: 1
            [  ], //puzzleSeq: 0,
                [ //puzzleSeq: 1
                "light1",
                "light3",
                "light2",
                "light5",
                "light6",
                "light4", ],
                [ //puzzleSeq: 2
                "light5", 
                "light2", 
                "light6", 
                "light7", 
                "light3", 
                "light4",
                "light1" ],
                [ //puzzleSeq: 3
                "light7",
                "light5",
                "light3",
                "light2",
                "light1",
                "light4",
                "light6", ],
                [ //puzzleSeq: 4
                "light1",
                "light3",
                "light2",
                "light5",
                "light6",
                "light4", ],
        ],
        [ // currentPuzzle: 2
            [  ], //puzzleSeq: 0,
                [ //puzzleSeq: 1
                "light1",
                "light3",
                "light2",
                "light5",
                "light6",
                "light4",],
                [ //puzzleSeq: 2
                "light5", 
                "light2", 
                "light1", 
                "light6", 
                "light3", 
                "light4", ],
                [ //puzzleSeq: 3
                "./assets/img/Overlays/x1y4f1p2.png", 
                "./assets/img/Overlays/x1y4f1p3.png", 
                "./assets/img/Overlays/x1y4f2p1.png", 
                "./assets/img/Overlays/x1y4f3p1.png", 
                "./assets/img/Overlays/x1y4f3p2.png", 
                "./assets/img/Overlays/x1y5f1p3.png", ],
                [ //puzzleSeq: 4
                "./assets/img/Overlays/x1y4f1p2.png", 
                "./assets/img/Overlays/x1y4f1p3.png", 
                "./assets/img/Overlays/x1y4f2p1.png", 
                "./assets/img/Overlays/x1y4f3p1.png", 
                "./assets/img/Overlays/x1y4f3p2.png", 
                "./assets/img/Overlays/x1y5f1p3.png", ],
        ]
]

// Accepts two paremeters (strings) that are equal to the Id of the element you want to control
// eg lightOptionOne = "light1" lightOptionTwo = "light3"
const twoLightButtonToggle = (lightOptionOne, lightOptionTwo) => {
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
    checkPass()
}

const threeLightButtonToggle = (lightOptionOne, lightOptionTwo, lightOptionThree) => {
    // Select the elements with the parameters
    let firstSelectClass = document.getElementById(lightOptionOne).classList
    let secondSelectClass = document.getElementById(lightOptionTwo).classList
    let thirdSelectClass = document.getElementById(lightOptionThree).classList
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

    if(lightObject[lightOptionThree] == 0){
        thirdSelectClass.remove('hidden')
        lightObject[lightOptionThree] = 1
    }
    else{
        thirdSelectClass.add('hidden')
        lightObject[lightOptionThree] = 0
    }
    console.log(lightObject)
    checkPass()
}

// Clears puzzleButton container and adds required buttons for this puzzle
const makeButton = (array) => {
    let buttonid = 1
    const buttonContainer = document.getElementById('puzzleButton')
    buttonContainer.innerHTML = array.map(button => {
        return`
        <button id="puzBut${buttonid++}">${button}</button>`
    }).join(' ')
    // Adds a back button, function is done in player.js
    const backButton = document.createElement("button")
    backButton.textContent = "Back"
    backButton.setAttribute("id", "backButton")
    buttonContainer.appendChild(backButton)
    document.getElementById('backButton').addEventListener("click", backButtonFunction)
}
// ButtonEvent 3(b)utton 6(l)ights
const buttonEvent3b6l = (array) => {
    document.getElementById('puzBut1').addEventListener("click", function(){
        twoLightButtonToggle(array[0], array[1])
    })

    document.getElementById('puzBut2').addEventListener("click", function(){
        twoLightButtonToggle(array[2], array[3])
    })

    document.getElementById('puzBut3').addEventListener("click", function(){
        twoLightButtonToggle(array[4], array[5])
    })
}
// Not used yet, these are just variations of button layouts
const buttonEvent3b7l = (array) => {
    document.getElementById('puzBut1').addEventListener("click", function(){
        threeLightButtonToggle(array[0], array[1], array[2])
    })

    document.getElementById('puzBut2').addEventListener("click", function(){
        twoLightButtonToggle(array[3], array[4])
    })

    document.getElementById('puzBut3').addEventListener("click", function(){
        twoLightButtonToggle(array[5], array[6])
    })
    // lightToggle(array)
}

const buttonEvent3b7lOverlap = (array) => {
    document.getElementById('puzBut1').addEventListener("click", function(){
        threeLightButtonToggle(array[0], array[1], array[2])
    })

    document.getElementById('puzBut2').addEventListener("click", function(){
        threeLightButtonToggle(array[0], array[3], array[6])
    })

    document.getElementById('puzBut3').addEventListener("click", function(){
        twoLightButtonToggle(array[4], array[5])
    })
    lightToggle(array)
}

// Light Toggler
// Trying to work out a set of rules to follow that this will function for any puzzle
// Will update if work out more, but currently it doesn't seem to matter where the toggle takes place
// As long as the elements toggled are linked to the same button (theory: and the overlap happens in that same spot)
const lightToggle = (array) => {
    let firstLight = array[3]
    let secondLight = array[6]

    let firstSelectClass = document.getElementById(firstLight).classList
    let secondSelectClass = document.getElementById(secondLight).classList

    lightObject[firstLight] = 1
    lightObject[secondLight] = 1

    firstSelectClass.remove('hidden')
    secondSelectClass.remove('hidden')
}



// Swap containers around from navigation buttons to puzzle buttons
const addButtonFunction = (array) => {
    // Grab puzzle data from localStorage and use the puzzle information to work out how to assign the buttons
    const puzzleCheck = JSON.parse(localStorage.getItem("puzzleTrack")) || {}
    const puzzleStats = puzzleButtonArray[puzzleCheck.currentPuzzle][puzzleCheck.puzzleSeq]
    const functionArray = puzzleFunctionArray[puzzleCheck.currentPuzzle][puzzleCheck.puzzleSeq]
    // Select button Containers
    const buttonContainer = document.getElementById('puzzleButton')
    const navigationContainer = document.getElementById('navButton')
    // Take from array puzzleFunctionButton and assign img id to buttons
    // Checks amount of buttons in the puzzle against amount of lights to assign a passable combination of buttons with some variation between puzzles
    // There is no science behind this, I'm just experimenting
    if(puzzleStats.length == 3 && functionArray.length == 6){
        buttonEvent3b6l(array)
    }
    else if(puzzleStats.length == 3 && functionArray.length == 7){
        buttonEvent3b7lOverlap(array)
    }
    buttonContainer.classList.remove('hidden')
    buttonContainer.classList.add('showCurrentButton')
    navigationContainer.classList.remove('showCurrentButton')
    navigationContainer.classList.add('hidden')
}


// Check lightObject and compare against puzzleTarget
const checkPass = () => {
    const overlay = document.getElementById('overlay')
    const puzzleCheck = JSON.parse(localStorage.getItem("puzzleTrack")) || {}
    const functionArray = puzzleFunctionArray[puzzleCheck.currentPuzzle][puzzleCheck.puzzleSeq]
    const buttonArray = puzzleButtonArray[puzzleCheck.currentPuzzle][0]
    const findTarget = Object.values(lightObject)
    const setTarget = findTarget.reduce((acc, val) => {
        return acc + val
    }, 0)
    console.log(setTarget)
    // If setTarget (amount of lights on/1) == amount of lights that exist in the puzzle
    if(setTarget == functionArray.length){
        // If puzzle seq = 4 and this triggers the puzzle is over
        if(puzzleCheck.puzzleSeq == 4){
            overlay.src = buttonArray
        }
        setTimeout(function() {
        lightObjectReset()
        puzzleSeqUpdate()
        exploreCameraRefresh()
        }, 1000)
    }
}

