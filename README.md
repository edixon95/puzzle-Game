# Project Goal:
### The goal of this project was to create an interactable space that changes based on player input.
---
## Secondary goal(s):
- No frameworks or libraries
- Use data structures to build everything seen 
- All purpose functions that work with the addition of new content
---
# File overview:
player.js
- Responsible for updating the player object and saving to localStorage(LS)<br />

imageScript.js
- Responsible for updating visuals using the objects from **player.js** and LS
<br />

interaction.js
- Tracks which (if any) puzzle the player is in front of
<br />

puzzleScript.js
- Assigns buttons to puzzle elements mapped by **imageScript.js**

---

# File details:

## player.js
This file contains the player and puzzle objects, all interaction with these objects happen in this file, though more importantly it saves to LS.

playerObject(LS) is used to track the players previous position until the real playerObject is confirmed to have made a valid movement, then update playerObject(LS) if valid. Otherwise playerObject values are replaced with playerObject(LS).

playerObject(LS) is then read by **imageScript**.

## imageScript.js
imageScript.js is responsible for any picture loading, using the data from playerObject(LS) to navigate the multiple data structures to show the correct images. 

**Data structures**
- Images of the room (xAxisOne)
- Overlays to represent progress (overlayArray)
- Puzzle element images (lightsArray)

It also contains the **imageMaker** callback function, which maps all images contained within the **lightsArray** if the criteria is met. All images mapped have a unique id, which is used within **puzzleScript.js** to control individual elements.

The final purpose of this file is to add image overlays to the screen if the criteria is met. This is by using a similar data structure to **xAxisOne** and checking if the length is greater than 0.

## interaction.js
Reads the playerObject(LS) and compares against an array of similar objects. If match, takes an additional value from the comparison list (puzzleNo) and places it in localStorage under **facingPuzzle**. 

While this value exists, the interact button is visible, but **facingPuzzle** is not moved in to the playerObject/puzzleObject until the interact button is clicked

## puzzleScript.js
**Data Structures**
- Names of the buttons for each puzzle (puzzleButtonArray)
- the html id of all puzzle elements for that puzzle (puzzleFunctionArray)

Reads the puzzleObject(LS) to determine which puzzle the player is on. Then maps the buttons required. Finally using the id's from puzzleFunctionArray, the different puzzle elements are linked to buttons, which are selected based on amount of buttons and amount of puzzle elements.

---





