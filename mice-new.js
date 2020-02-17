


let a = [
    [0,1,1],
    [1,0,1],
    [1,1,1]
]

let soln = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

globalReached = 0

function checkForGlobalReach () {
    return globalReached === 1
}

function checkForPathExists(array, i, j, firstTime = false) {
    if (firstTime) {
        if (array[0][0] === 1 ) {
            soln[0][0] = 1
            checkForPathExists(array, 0, 0)
            return;
        } else {
            console.log('nO starting point')
            return;
        }
    }
    soln[i][j] = 1;
    if (i === 2 && j === 2) {
        // solution is reached
        globalReached = 1
        return
    }
    if (checkForGlobalReach()) {
        return
    };
    if(j - 1 >= 0 && array[i][j-1] === 1 && soln[i][j-1] !== 1) {
        checkForPathExists(array, i, j-1)
    }
    if (checkForGlobalReach()) {
        return
    };
    if(j + 1 <= 2 && array[i][j+1] === 1 && soln[i][j+1] !== 1) {
        checkForPathExists(array, i, j+1)
    }
    if (checkForGlobalReach()) {
        return
    };
    if(i - 1 >= 0 && array[i-1][j] === 1 && soln[i-1][j] !== 1) {
        checkForPathExists(array, i-1, j)
    }
    if (checkForGlobalReach()) {
        return
    };
    if(i + 1 <= 2 && array[i+1][j] === 1 && soln[i+1][j] !== 1) {
        checkForPathExists(array, i+1, j)
    }
    if (checkForGlobalReach()) {
        return
    };
    // if it reached here no more solution from this position
    soln[i][j] = 0;

}

checkForPathExists(a, 0, 0, true)

for(let i = 0; i<3; i++) {
    console.log(soln[i])
}
