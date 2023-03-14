// Probably the worst way to do this, but it works, not intending to fix

export const checkInteract = () => {
    // Everything has to be grabbed within the function
    const playerFile = JSON.parse(localStorage.getItem("playerTrack")) || {}
    const interactButton = document.getElementById('butFour')
    // If no puzzle, set LS "puzzleNo" to 0.
    // This number will used to select the puzzle with the interact button
    const puzzleReset = localStorage.setItem("puzzleNo", JSON.stringify(0));

    if(playerFile.x == 1 && playerFile.y == 4){

        if(playerFile.facing == 2){
        interactButton.classList.remove('hidden')
        localStorage.setItem("puzzleNo", JSON.stringify(1));
        }
        else if(playerFile.facing == 3){
            interactButton.classList.remove('hidden')
            localStorage.setItem("puzzleNo", JSON.stringify(2));
        }
        else{
            interactButton.classList.add('hidden')
            puzzleReset
        }
    }
    else if(playerFile.x == 2 && playerFile.y == 4 && playerFile.facing == 2){
        interactButton.classList.remove('hidden')
        localStorage.setItem("puzzleNo", JSON.stringify(3));
    }
    else if(playerFile.x == 3 && playerFile.y == 3){
        if(playerFile.facing == 3){
            interactButton.classList.remove('hidden')
            localStorage.setItem("puzzleNo", JSON.stringify(4));
        }
        else if(playerFile.facing == 1){
            interactButton.classList.remove('hidden')
            localStorage.setItem("puzzleNo", JSON.stringify(7));
        }
        else{
            interactButton.classList.add('hidden')
            puzzleReset
        }
    }
    else if(playerFile.x == 3 && playerFile.y == 2){
        if(playerFile.facing == 3){
            interactButton.classList.remove('hidden')
            localStorage.setItem("puzzleNo", JSON.stringify(6));
        }
        else if(playerFile.facing == 1){
            interactButton.classList.remove('hidden')
            localStorage.setItem("puzzleNo", JSON.stringify(5));
        }
        else{
            interactButton.classList.add('hidden')
            puzzleReset
        }
    }
    else{
        interactButton.classList.add('hidden')
        puzzleReset
    }
}