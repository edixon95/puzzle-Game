import { enablePuzzleButtons } from "./puzzleScript.js"

// This array contains objects that hold images for each position.
// First it takes the players X axis, and then follows the path for Y axis
// Finally, it takes what direction the player is facing (0-3) and provides a file path for that image

const xAxisOne = [
    {
        x: 0,
    },
    {
        x: 1,
        y: [
            {
                // y0, not important
            },
            {
                0: ``,
                1: ``, // Out of bounds
                2: ``, // x1 y1
                3: ``,
            },
            {
                0: ``,
                1: ``, // out of bounds
                2: ``, // x1 y2
                3: ``,
            },
            {
                0: ``,
                1: ``, // out of bounds
                2: ``, // x1 y3
                3: ``,
            },
            {
                0: `./assets/img/levelOne/x1y4f0.jpg`,
                1: `./assets/img/levelOne/x1y4f1.jpg`,
                2: `./assets/img/levelOne/x1y4f2.jpg`, // x1 y4
                3: `./assets/img/levelOne/x1y4f3.jpg`,
            },
            {
                0: `./assets/img/levelOne/x1y5f0.jpg`,
                1: `./assets/img/levelOne/x1y5f1.jpg`, 
                2: `./assets/img/levelOne/x1y5f2.jpg`, //x1 y5
                3: `./assets/img/levelOne/x1y5f3.jpg`,
            },
            {
                0: `./assets/img/levelOne/x1y6f0.jpg`,
                1: `./assets/img/levelOne/x1y6f1.jpg`, 
                2: `./assets/img/levelOne/x1y6f2.jpg`, //x1 y6
                3: `./assets/img/levelOne/x1y6f3.jpg`,
            },
        ],
    },
    {
        x: 2,
        y: [
            {
                // y0, not important
            },
            {
                0: ``,
                1: ``, // Out of bounds
                2: ``, // x2 y1
                3: ``,
            },
            {
                0: ``,
                1: ``, // out of bounds
                2: ``, // x2 y2
                3: ``,
            },
            {
                0: ``,
                1: ``, // out of bounds
                2: ``, // x2 y3
                3: ``,
            },
            {
                0: `./assets/img/levelOne/x2y4f0.jpg`,
                1: `./assets/img/levelOne/x2y4f1.jpg`,
                2: `./assets/img/levelOne/x2y4f2.jpg`, // x2 y4
                3: `./assets/img/levelOne/x2y4f3.jpg`,
            },
            {
                0: `./assets/img/levelOne/x2y5f0.jpg`,
                1: `./assets/img/levelOne/x2y5f1.jpg`, 
                2: `./assets/img/levelOne/x2y5f2.jpg`, //x2 y5
                3: `./assets/img/levelOne/x2y5f3.jpg`,
            },
            {
                0: `./assets/img/levelOne/x2y6f0.jpg`,
                1: `./assets/img/levelOne/x2y6f1.jpg`, 
                2: `./assets/img/levelOne/x2y6f2.jpg`, //x2 y6
                3: `./assets/img/levelOne/x2y6f3.jpg`,
            },
        ],
    },
    {
        x: 3,
        y: [
            {
                // y0, not important
            },
            {
                0: `./assets/img/levelOne/x3y1f0.jpg`,
                1: `./assets/img/levelOne/x3y1f1.jpg`, 
                2: `./assets/img/levelOne/x3y1f2.jpg`, // x3 y1
                3: `./assets/img/levelOne/x3y1f3.jpg`,
            },
            {
                0: `./assets/img/levelOne/x3y2f0.jpg`,
                1: `./assets/img/levelOne/x3y2f1.jpg`, 
                2: `./assets/img/levelOne/x3y2f2.jpg`, // x3 y2
                3: `./assets/img/levelOne/x3y2f3.jpg`,
            },
            {
                0: `./assets/img/levelOne/x3y3f0.jpg`,
                1: `./assets/img/levelOne/x3y3f1.jpg`, 
                2: `./assets/img/levelOne/x3y3f2.jpg`, // x3 y3
                3: `./assets/img/levelOne/x3y3f3.jpg`,
            },
            {
                0: `./assets/img/levelOne/x3y4f0.jpg`,
                1: `./assets/img/levelOne/x3y4f1.jpg`,
                2: `./assets/img/levelOne/x3y4f2.jpg`, // x3 y4
                3: `./assets/img/levelOne/x3y4f3.jpg`,
            },
            {
                0: `./assets/img/levelOne/x3y5f0.jpg`,
                1: `./assets/img/levelOne/x3y5f1.jpg`, 
                2: `./assets/img/levelOne/x3y5f2.jpg`, //x3 y5
                3: `./assets/img/levelOne/x3y5f3.jpg`,
            },
            {
                0: `./assets/img/levelOne/x3y6f0.jpg`,
                1: `./assets/img/levelOne/x3y6f1.jpg`, 
                2: `./assets/img/levelOne/x3y6f2.jpg`, //x3 y6
                3: `./assets/img/levelOne/x3y6f3.jpg`,
            },
        ],
    },
]

// Used to select overlays, works the exact same way as Axis array for location images
// Just for overlays. Refer to main function for comments on usage
const overlayArray = [
    {
        x: 0,
    },
    {
        x: 1,
        y: [
            {
                // y0, not important
            },
            {
                0: [ "", "", "", "", "", "", "", "",  ],
                1: [ "", "", "", "", "", "", "", "",  ], // Out of bounds
                2: [ "", "", "", "", "", "", "", "",  ], // x1 y1
                3: [ "", "", "", "", "", "", "", "",  ],
            },
            {
                0: [ "", "", "", "", "", "", "", "",  ],
                1: [ "", "", "", "", "", "", "", "",  ], // out of bounds
                2: [ "", "", "", "", "", "", "", "",  ], // x1 y2
                3: [ "", "", "", "", "", "", "", "",  ],
            },
            {
                0: [ "", "", "", "", "", "", "", "",  ],
                1: [ "", "", "", "", "", "", "", "",  ], // out of bounds
                2: [ "", "", "", "", "", "", "", "",  ], // x1 y3
                3: [ "", "", "", "", "", "", "", "",  ]
            },
            {
                0: [ "", "", "", "", "", "", "", "",  ],
                1: [ "", "", "./assets/img/Overlays/levelOne/x1y4f1p2.png", "./assets/img/Overlays/levelOne/x1y4f1p3.png", "", "", ],
                2: [ "", "./assets/img/Overlays/levelOne/x1y4f2p1.png", "", "", "", ""], // x1 y4
                3: [ "", "./assets/img/Overlays/levelOne/x1y4f3p1.png", "./assets/img/Overlays/levelOne/x1y4f3p2.png", "", "", "", ]
            },
            {
                0: [ "", "", "", "", "", "", "", "",  ],
                1: ["", "", "", "./assets/img/Overlays/levelOne/x1y5f1p3.png", "", "", "", ], 
                2: ["", "./assets/img/Overlays/levelOne/x1y5f2p1.png", "./assets/img/Overlays/levelOne/x1y5f2p2.png", "./assets/img/Overlays/levelOne/x1y5f2p3.png","", "", "", ], //x1 y5
                3: [ "", "", "", "", "", "", "", "",  ],
            },
            {
                0: [ "", "", "", "", "", "", "", "",  ],
                1: [ "", "", "", "", "", "", "", "",  ], 
                2: [ "", "./assets/img/Overlays/levelOne/x1y6f2p1.png", "./assets/img/Overlays/levelOne/x1y6f2p2.png", "./assets/img/Overlays/levelOne/x1y6f2p3.png", "./assets/img/Overlays/levelOne/x1y6f2p4.png", "", "", "",  ], //x1 y6
                3: [ "", "", "", "", "", "", "", "",  ],
            },
        ],
    },
    {
        x: 2,
        y: [
            {
                // y0, not important
            },
            {
                0: [ "", "", "", "", "", "", "", "",  ],
                1: [ "", "", "", "", "", "", "", "",  ], // Out of bounds
                2: [ "", "", "", "", "", "", "", "",  ], // x2 y1
                3: [ "", "", "", "", "", "", "", "",  ],
            },
            {
                0: [ "", "", "", "", "", "", "", "",  ],
                1: [ "", "", "", "", "", "", "", "",  ], // out of bounds
                2: [ "", "", "", "", "", "", "", "",  ], // x2 y2
                3: [ "", "", "", "", "", "", "", "",  ],
            },
            {
                0: [ "", "", "", "", "", "", "", "",  ],
                1: [ "", "", "", "", "", "", "", "",  ], // out of bounds
                2: [ "", "", "", "", "", "", "", "",  ], // x2 y3
                3: [ "", "", "", "", "", "", "", "",  ],
            },
            {
                0: [ "", "", "", "", "", "", "", "",  ],
                1: [ "", "", "", "./assets/img/Overlays/levelOne/x2y4f1p3.png", "", "", "", "",  ],
                2: [ "", "", "./assets/img/Overlays/levelOne/x2y4f2p2.png", "./assets/img/Overlays/levelOne/x2y4f2p3.png", "", "", "", "",  ], // x2 y4
                3: [ "", "./assets/img/Overlays/levelOne/x2y4f3p1.png", "./assets/img/Overlays/levelOne/x2y4f3p2.png", "", "", "", "", "",  ],
            },
            {
                0: [ "", "", "", "", "", "", "", "",  ],
                1: [ "", "", "", "", "", "", "", "",  ], 
                2: [ "", "./assets/img/Overlays/levelOne/x2y5f2p1.png", "./assets/img/Overlays/levelOne/x2y5f2p2.png", "./assets/img/Overlays/levelOne/x2y5f2p3.png", "./assets/img/Overlays/levelOne/x2y5f2p4.png", "", "", "",  ], //x2 y5
                3: [ "", "./assets/img/Overlays/levelOne/x2y5f3p1.png", "./assets/img/Overlays/levelOne/x2y5f3p2.png", "", "", "", "", "",  ],
            },
            {
                0: [ "", "", "", "", "", "", "", "",  ],
                1: [ "", "", "", "", "", "", "", "",  ], 
                2: [ "", "./assets/img/Overlays/levelOne/x2y6f2p1.png", "./assets/img/Overlays/levelOne/x2y6f2p2.png", "./assets/img/Overlays/levelOne/x2y6f2p3.png", "./assets/img/Overlays/levelOne/x2y6f2p4.png", "", "", "",  ], //x2 y6
                3: [ "", "", "", "", "", "", "", "",  ],
            },
        ],
    },
    {
        x: 3,
        y: [
            {
                // y0, not important
            },
            {
                0: [ "", "", "", "./assets/img/Overlays/levelOne/x3y1f0p3.png", "./assets/img/Overlays/levelOne/x3y1f0p4.png", "", "", "",  ],
                1: [ "", "", "", "", "", "", "", "",  ], 
                2: [ "", "", "", "", "", "", "", "",  ], // x3 y1
                3: [ "", "", "", "", "", "", "", "",  ],
            },
            {
                0: [ "", "", "", "./assets/img/Overlays/levelOne/x3y2f0p3.png", "./assets/img/Overlays/levelOne/x3y2f0p4.png", "", "", "",  ],
                1: [ "", "", "", "", "./assets/img/Overlays/levelOne/x3y2f1p4.png", "", "", "",  ], 
                2: [ "", "", "", "", "", "", "", "",  ], // x3 y2
                3: [ "", "", "", "", "", "", "", "",  ],
            },
            {
                0: [ "", "", "", "./assets/img/Overlays/levelOne/x3y3f0p3.png", "", "", "", "",  ],
                1: [ "", "", "", "", "", "", "", "",  ], 
                2: [ "", "", "", "", "./assets/img/Overlays/levelOne/x3y3f2p4.png", "", "", "",  ], // x3 y3
                3: [ "", "", "", "./assets/img/Overlays/levelOne/x3y3f3p3.png", "./assets/img/Overlays/levelOne/x3y3f3p4.png", "", "", "",  ],
            },
            {
                0: [ "", "", "", "", "", "", "", "",  ],
                1: [ "", "", "", "", "", "", "", "",  ],
                2: [ "", "", "", "./assets/img/Overlays/levelOne/x3y4f2p3.png", "./assets/img/Overlays/levelOne/x3y4f2p4.png", "", "", "",  ], // x3 y4
                3: [ "", "./assets/img/Overlays/levelOne/x3y4f3p1.png", "./assets/img/Overlays/levelOne/x3y4f3p2.png", "./assets/img/Overlays/levelOne/x3y4f3p3.png", "", "", "", "",  ],
            },
            {
                0: [ "", "", "", "", "", "", "", "",  ],
                1: [ "", "", "", "", "", "", "", "",  ], 
                2: [ "", "", "./assets/img/Overlays/levelOne/x3y5f2p2.png", "./assets/img/Overlays/levelOne/x3y5f2p3.png", "./assets/img/Overlays/levelOne/x3y5f2p4.png", "", "", "",  ], //x3 y5
                3: [ "", "./assets/img/Overlays/levelOne/x3y5f3p1.png", "./assets/img/Overlays/levelOne/x3y5f3p2.png", "", "", "", "", "",  ],
            },
            {
                0: [ "", "", "", "", "", "", "", "",  ],
                1: [ "", "", "", "", "", "", "", "",  ], 
                2: [ "", "./assets/img/Overlays/levelOne/x3y6f2p1.png", "./assets/img/Overlays/levelOne/x3y6f2p2.png", "./assets/img/Overlays/levelOne/x3y6f2p3.png", "./assets/img/Overlays/levelOne/x3y6f2p4.png", "", "", "",  ], //x3 y6
                3: [ "", "./assets/img/Overlays/levelOne/x3y6f3p1.png", "./assets/img/Overlays/levelOne/x3y6f3p2.png", "", "", "", "", "",  ],
            },
        ],
    },
]
// This contains dummy images for the time being
const lightsArray = [
    [  ], // currentPuzzle: 0
        [ // currentPuzzle: 1
            [ 
                "ignore",
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s1bg.jpg",
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s2bg.jpg",
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s3bg.jpg",   // Puzzle backgrounds stored in 0 index of sequence
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s1bg.jpg" ], // puzzleSeq: 0,
                [ //puzzleSeq: 1
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s1sq1.png", 
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s1sq2.png", 
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s1sq3.png", 
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s1sq4.png", 
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s1sq5.png", 
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s1sq6.png", ],
                [ //puzzleSeq: 2
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s2sq1.png", 
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s2sq2.png", 
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s2sq3.png", 
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s2sq4.png", 
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s2sq5.png", 
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s2sq6.png",
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s2sq7.png" ],
                [ //puzzleSeq: 3
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s3sq1.png", 
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s3sq2.png", 
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s3sq3.png", 
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s3sq4.png", 
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s3sq5.png", 
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s3sq6.png",
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s3sq7.png", ],
                [ //puzzleSeq: 4
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s1sq1.png", 
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s1sq2.png", 
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s1sq3.png", 
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s1sq4.png", 
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s1sq5.png", 
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s1sq6.png", ],
        ],
        [ // Current Puzzle 2
            [ 
                "ignore",
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s1bg.jpg",
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s1bg.jpg",
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s1bg.jpg",
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s1bg.jpg" ], //puzzleSeq: 0,
                [ //puzzleSeq: 1
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s1sq1.png", 
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s1sq2.png", 
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s1sq3.png", 
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s1sq4.png", 
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s1sq5.png", 
                "./assets/img/Puzzles/levelOne/puzzleOne/p1s1sq6.png", ],
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

// Function updated: now responsible for all image loading
export const exploreCameraRefresh = () => {
    // Grab localStorge for player and puzzle and select the game screen
    const imageCheck = JSON.parse(localStorage.getItem("playerTrack")) || {}
    const puzzleCheck = JSON.parse(localStorage.getItem("puzzleTrack")) || {}
    const gameScreen = document.getElementById('gameScreen')
    const overlay = document.getElementById('overlay')
    const overlayArraySearch = overlayArray[imageCheck.x].y[imageCheck.y][imageCheck.facing][puzzleCheck.puzzleComplete]
    // If player not in puzzle (false)
    if(imageCheck.puzzle == false) {
        overlay.src = ""
        //Take player x, y and facing to load the corresponding image for player object
        gameScreen.src = xAxisOne[imageCheck.x].y[imageCheck.y][imageCheck.facing]
        // Checks if player x, y and facing + number of puzzles complete has a value, if yes, display.
        // This is for the progress lights between each puzzle
        if(overlayArraySearch.length > 0){
            overlay.src = overlayArraySearch
        }
    console.log(imageCheck)
    console.log(puzzleCheck)
    } // if player in puzzle (true)
    else if(imageCheck.puzzle == true){
        // Take puzzle number and sequence (stage) in the puzzle pass the array in to the imageMaker callback function
        imageMaker(lightsArray[puzzleCheck.currentPuzzle][puzzleCheck.puzzleSeq])
    }
}
// Takes an array [lightsArray] and map all the puzzle elements on to the game screen
const imageMaker = (array) => {
    // Grab puzzle localStorage
    const puzzleCheck = JSON.parse(localStorage.getItem("puzzleTrack")) || {}
    // Select the screenContainer and and define an image element to append later
    const screenContainer = document.getElementById('screenContainer')
    const backgroundImage = document.createElement("img")
    const addedOverlay = document.createElement("img")
    // lightNumber used to give each image a unique ID to be interacted with
    let lightNumber = 1
    // Map the images in to the screenContainer
    screenContainer.innerHTML = array.map(image => {
        return`
        <img src="${image}" class="overlay hidden" id="light${lightNumber++}" />`
    }).join(' ')
    // Set the background image for the puzzle
    // Background image for each puzzle is stored in the 0 index of puzzleSeq
    backgroundImage.src = lightsArray[puzzleCheck.currentPuzzle][0][puzzleCheck.puzzleSeq]
    backgroundImage.setAttribute("id", "gameScreen")
    // Add it to the game screen, since innterHTML just wiped everything.
    screenContainer.appendChild(backgroundImage)
    addedOverlay.src = ""
    addedOverlay.setAttribute("id", "overlay")
    screenContainer.appendChild(addedOverlay)
    enablePuzzleButtons()
}

// Something went wrong?
