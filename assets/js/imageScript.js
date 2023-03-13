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

// Update camera, log stats
export const exploreCameraRefresh = () => {
    const imageCheck = JSON.parse(localStorage.getItem("playerTrack")) || {}
    const puzzleCheck = JSON.parse(localStorage.getItem("puzzleTrack")) || {}
    const gameScreen = document.getElementById('gameScreen')
    gameScreen.src = xAxisOne[imageCheck.x].y[imageCheck.y][imageCheck.facing]
    console.log(imageCheck)
    console.log(puzzleCheck)
}