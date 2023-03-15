// Array of puzzles, any additions can be made just by adding another object in the same form.
const puzzleLocation = [
    {
        x: 1,
        y: 4,
        facing: 2,
        puzzleNo: 1
    },
    {
        x: 1,
        y: 4,
        facing: 3,
        puzzleNo: 2
    },
    {
        x: 2,
        y: 4,
        facing: 2,
        puzzleNo: 3
    },
    {
        x: 3,
        y: 3,
        facing: 3,
        puzzleNo: 4
    },
    {
        x: 3,
        y: 2,
        facing: 1,
        puzzleNo: 5
    },
]

// Function to compare player location with puzzle locations to display interact button and begin to update player object
export const selectPuzzle = () => {
    const playerGet = JSON.parse(localStorage.getItem("playerTrack")) || {} // Get player info
    const playerStats = [playerGet] // Use it as an array to get access to filter
    
    // Compare player object with list of puzzle locations
    // If x, y and facing match against puzzleLocation, result = matching object from puzzleLocation
    // If no match, result = []
    const result = puzzleLocation.filter(puzzleObj => playerStats.some(playerObj => puzzleObj.facing === playerObj.facing && puzzleObj.y === playerObj.y && puzzleObj.x === playerObj.x));
    const interactButton = document.getElementById('butFour')

    // If no matches, set facingPuzzle to 0 and make sure interact button is not visible.
    if(result.length == 0){
        localStorage.setItem("facingPuzzle", JSON.stringify(0));
        interactButton.classList.add('hidden')
    }
    // else set facingPuzzle to puzzleNo in localStorage and display the interact button
    else{
        localStorage.setItem("facingPuzzle", JSON.stringify(result[0].puzzleNo));
        interactButton.classList.remove('hidden')
    }
}

