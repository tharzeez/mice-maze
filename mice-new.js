


let a = [
    [1,1,1,1,1,1],
    [1,1,0,0,1,1],
    [1,1,0,0,1,1],
    [1,0,0,1,0,1],
    [1,1,0,0,1,1],
    [0,1,1,1,0,1],
    [0,1,1,1,1,1],
]

let soln = []

globalReached = 0

function checkForGlobalReach () {
    return globalReached === 1
}

function prepareSolutionArray() {
    for(let i =0; i< a.length; i++) {
        soln.push([])
        for( let j = 0; j< a[0].length; j++) {
            soln[i][j] = 0
        }
    }
}

prepareSolutionArray();

function checkForPathExists(array, i, j, firstTime = false) {
    if (firstTime) {
        if (array[0][0] === 1 && array[array.length - 1][array[0].length - 1] === 1 ) {
            soln[0][0] = 1
            checkForPathExists(array, 0, 0)
            return;
        } else {
            console.log('nO starting point')
            return;
        }
    }
    soln[i][j] = 1;
    if (i === array.length - 1 && j === array[0].length - 1) {
        // solution is reached
        globalReached = 1
        return
    }
    if(i + 1 <= array.length - 1 && array[i+1][j] === 1 && soln[i+1][j] !== 1 && !checkForGlobalReach() ) {
        checkForPathExists(array, i+1, j)
    }
    if(j + 1 <= array[0].length - 1 && array[i][j+1] === 1 && soln[i][j+1] !== 1 && !checkForGlobalReach()) {
        checkForPathExists(array, i, j+1)
    }
    if(i - 1 >= 0 && array[i-1][j] === 1 && soln[i-1][j] !== 1 && !checkForGlobalReach()) {
        checkForPathExists(array, i-1, j)
    }
    if(j - 1 >= 0 && array[i][j-1] === 1 && soln[i][j-1] !== 1 && !checkForGlobalReach()) {
        checkForPathExists(array, i, j-1)
    }
    if (checkForGlobalReach()) {
        return
    };
    // if it reached here no more solution from this position
    soln[i][j] = 0;

}

checkForPathExists(a, 0, 0, true)

if (globalReached === 1) {
    for(let i = 0; i<a.length; i++) {
        console.log(soln[i])
    }
} else {
    console.log('NO result.')
}
