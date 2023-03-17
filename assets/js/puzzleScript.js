// 
export const enablePuzzleButtons = () => {
    const puzzleCheck = JSON.parse(localStorage.getItem("puzzleTrack")) || {}
    const puzzleStats = puzzleButtonArray[puzzleCheck.currentPuzzle][puzzleCheck.puzzleSeq]
    const functionArray = puzzleFunctionArray[puzzleCheck.currentPuzzle][puzzleCheck.puzzleSeq]
    if(puzzleCheck.currentPuzzle == 1 && puzzleCheck.puzzleSeq == 1) {
        makeButton(puzzleStats)
        showContainer(functionArray)
        console.log(puzzleButtonArray[puzzleCheck.currentPuzzle][puzzleCheck.puzzleSeq])
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
    light7: 0,
    light8: 0,
    light9: 0,
}

// Puzzle button array
const puzzleButtonArray = [
    [  ], // currentPuzzle: 0
        [ // currentPuzzle: 1
            [ "./assets/img/Puzzles/levelOne/puzzleOne/p1s1bg.jpg" ], //puzzleSeq: 0,
                [ //puzzleSeq: 1
                "One",
                "Two",
                "Three",],
                [ //puzzleSeq: 2
                "./assets/img/Overlays/x1y4f1p2.png", 
                "./assets/img/Overlays/x1y4f1p3.png", 
                "./assets/img/Overlays/x1y4f2p1.png", 
                "./assets/img/Overlays/x1y4f3p1.png", 
                "./assets/img/Overlays/x1y4f3p2.png", 
                "./assets/img/Overlays/x1y5f1p3.png", ],
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

const puzzleFunctionArray = [
    [  ], // currentPuzzle: 0
        [ // currentPuzzle: 1
            [ "./assets/img/Puzzles/levelOne/puzzleOne/p1s1bg.jpg" ], //puzzleSeq: 0,
                [ //puzzleSeq: 1
                "light1",
                "light3",
                "light2",
                "light5",
                "light6",
                "light4",],
                [ //puzzleSeq: 2
                "./assets/img/Overlays/x1y4f1p2.png", 
                "./assets/img/Overlays/x1y4f1p3.png", 
                "./assets/img/Overlays/x1y4f2p1.png", 
                "./assets/img/Overlays/x1y4f3p1.png", 
                "./assets/img/Overlays/x1y4f3p2.png", 
                "./assets/img/Overlays/x1y5f1p3.png", ],
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
}

const buttonEvent = (array) => {
    document.getElementById('puzBut1').addEventListener("click", function(){
        twoLightButton(array[0], array[1])
    })

    document.getElementById('puzBut2').addEventListener("click", function(){
        twoLightButton(array[2], array[3])
    })

    document.getElementById('puzBut3').addEventListener("click", function(){
        twoLightButton(array[4], array[5])
    })
}

// Swap containers around from navigation buttons to puzzle buttons
const showContainer = (array) => {
    const buttonContainer = document.getElementById('puzzleButton')
    const navigationContainer = document.getElementById('navButton')
    buttonEvent(array)
    
    buttonContainer.classList.remove('hidden')
    buttonContainer.classList.add('showCurrentButton')
    navigationContainer.classList.remove('showCurrentButton')
    navigationContainer.classList.add('hidden')
}


// Check lightObject and compare against puzzleTarget
const checkPass = () => {
    const puzzleCheck = JSON.parse(localStorage.getItem("puzzleTrack")) || {}
    const functionArray = puzzleFunctionArray[puzzleCheck.currentPuzzle][puzzleCheck.puzzleSeq]
    const findTarget = Object.values(lightObject)
    const setTarget = findTarget.reduce((acc, val) => {
        return acc + val
    }, 0)
    console.log(setTarget)
    
    if(setTarget == functionArray.length){
        const screenContainer = document.getElementById('screenContainer')
        screenContainer.innerHTML = `<h1>You're a genius</h1>`
    }
    else {

    }
}

