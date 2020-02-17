let a = [
    [1,1,0],
    [1,0,1],
    [1,1,1]
]

// mice can move in either of four direction, considering r, c as rows and columns
// he can move
//  r, c+1
//  r, c-1
//  r+1, c
//  r-1, c
// starting position is 0,0

/**
 * [ 0, 1, 2 ]
 * [ 3, 4, 5 ]
 * [ 6, 7, 8 ]
 */


let mapper = {
    '00': 0,
    '01': 1,
    '02': 2,
    '10': 3,
    '11': 4,
    '12': 5,
    '20': 6,
    '21': 7,
    '22': 8,
}

let reverseMapper = {
    0: '00',
    1: '01',
    2: '02',
    3: '10',
    4: '11',
    5: '12',
    6: '20',
    7: '21',
    8: '22',
}

// let sampleSolnArray = [0, 3, 6, 7, 8]

let solnArray = [0]
let noSoln =[];

function isInSolution(i, j) {
    return solnArray.includes(mapper[i.toString().concat(j.toString())])
}

function isTraversableFromLastSoln(i, j) {
    let lastPos = solnArray[solnArray.length - 1]; // 2
    let lastPosString = reverseMapper[lastPos] // 02
    if ((Number(lastPosString[0]) - 1).toString().concat(lastPosString[1]) === i.toString().concat(j)) {
        return true
    }
    if ((Number(lastPosString[0]) + 1).toString().concat(lastPosString[1]) === i.toString().concat(j)) {
        return true
    }
    if (lastPosString[0].toString().concat((Number(lastPosString[1]) - 1 ).toString()) === i.toString().concat(j)) {
        return true
    }
    if (lastPosString[0].toString().concat((Number(lastPosString[1]) + 1 ).toString()) === i.toString().concat(j)) {
        return true
    }
    return false
}

function checkForPathExists(array, i, j) {
    if(j - 1 >= 0 && !isInSolution(i, j-1) && isTraversableFromLastSoln(i, j-1) && array[i][j-1] === 1) {
        solnArray.push(mapper[ (i).toString().concat((j-1).toString()) ])
        return true
    }
    if(j + 1 <= 2 && !isInSolution(i, j+1) && isTraversableFromLastSoln(i, j+1) && array[i][j+1] === 1) {
        solnArray.push(mapper[ (i).toString().concat((j+1).toString()) ])
        return true
    }
    if(i - 1 >= 0 && !isInSolution(i-1, j) && isTraversableFromLastSoln(i-1, j) && array[i-1][j] === 1) {
        solnArray.push(mapper[ (i-1).toString().concat(j.toString()) ])
        return true
    }
    if(i + 1 <= 2 && !isInSolution(i+1, j) && isTraversableFromLastSoln(i+1, j) && array[i+1][j] === 1) {
        solnArray.push(mapper[ (i+1).toString().concat(j.toString()) ])
        return true
    }
    return  false
}


function printPath(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++) {
            let val = checkForPathExists(array, i, j)
        }
    }
}


printPath(a)
console.log(solnArray)
