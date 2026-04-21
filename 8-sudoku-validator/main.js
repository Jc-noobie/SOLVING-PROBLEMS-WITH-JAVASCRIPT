const myboard = [
    ["1", "2", "0",     "0", "3", "0"   , "0", "0", "0"],
    ["4", "0", "0",     "5", "0", "0"   , "0", "0", "0"],
    ["0", "9", "8",     "0", "0", "0"   , "0", "0", "3"],

    ["5", "0", "0",     "0", "6", "0"   , "0", "0", "4"],
    ["0", "0", "0",     "8", "0", "3"   , "0", "0", "5"],
    ["7", "0", "0",     "0", "2", "0"   , "0", "0", "6"],

    ["0", "0", "0",     "0", "0", "0"   , "2", "0", "0"],
    ["0", "0", "0",     "4", "1", "9"   , "0", "0", "8"],
    ["0", "0", "0",     "0", "8", "0"   , "0", "7", "9"]
];

const invalidBoard = [
    ["1", "2", "0",     "0", "0", "0"   , "0", "0", "0"],  
    ["4", "5", "6",     "0", "0", "0"   , "0", "0", "0"],
    ["7", "8", "9",     "0", "0", "0"   , "0", "0", "0"],

    ["0", "0", "0",     "0", "0", "0"   , "0", "0", "0"],
    ["0", "0", "0",     "0", "1", "0"   , "0", "0", "0"],
    ["0", "0", "0",     "0", "0", "0"   , "0", "2", "0"],

    ["0", "0", "0",     "0", "0", "0"   , "0", "0", "0"],
    ["0", "0", "0",     "0", "0", "0"   , "0", "0", "0"],
    ["0", "0", "0",     "0", "0", "0"   , "0", "0", "0"]
];

const max = 9 ;

function printBoard(board) {

    let output = '' ;

    for(let i = 0 ; i < max ; i++) {

        if(i % 3 === 0 ) {
            output += ' -------------------------\n' ;
        }

        output += " | " ;

        for(let j = 0 ; j < max; j++) {
            if((j + 1) % 3 === 0 ) {
                output += board[i][j] + " | "
            } else {
                output += board[i][j] + " " 
            }
        }

        output += '\n'
    }

    output += " -------------------------\n"
    return output ; 
}

function isRowValid(board ) {
    
    for(let i = 0 ; i < max; i++) {
        let temp = new Set() ;

        for(let j = 0 ; j < max; j++) {

            if(board[i][j] !== "0" ) {
                if(!temp.has(board[i][j])) {
                    temp.add(board[i][j]) 
                    
                } else {
                    return false
                }
                
            } else {
                continue ; 
            }

        }
        
    }

    return true ; 
}

function isColValid(board) {

        for(let i = 0 ; i < max; i++) {
            let temp = new Set() ;
            for(let j = 0 ; j < max ; j++) {
                if(board[j][i] !== "0") {
                    if(!temp.has(board[j][i])) {
                        temp.add(board[j][i]) ; 
                    } else {
                        return false ;
                    }
                } else {
                    continue ; 
                }
            }
        }

        return true ; 
}   

function isBoxValid(board) {

    for(let rowBox = 0 ; rowBox < 3; rowBox++ ) {
        for(let colBox = 0 ;colBox < 3 ; colBox++ ) {
            
            const box = [] ;

            for(let i = 0 ; i < 3 ; i++){
                for( let j = 0 ; j < 3; j++){
                    const row = rowBox * 3 + i ;
                    const col = colBox * 3 + j ;
                    if(board[row][col] !== "0") {
                        box.push(board[row][col]) ;
                    }
                }
            }
            if(!boxChecker(box)) {  
                return false ;
            }

        }
    }


    return true  ;
}

function boxChecker(box) {

    
    for(let cell of box) {
        const seen = new Set() ;
        if(box !== "0") {
            if(!seen.has(box)) {
                seen.add(box)
            }
            else {
                return false ;
            } 
        }
    }
    return true; 
}


function isValid(board) {
    
    const isrowValid = isRowValid(board) ;
    const iscolValid = isColValid(board) ;
    const isboxValid = isBoxValid(board) ;
    if(iscolValid && isrowValid && isboxValid) {
        return true ; 
    } else {
        return false ;
    }

}

const board = printBoard(invalidBoard) ;
const result = isValid(invalidBoard) ;
console.log(board) ;
console.log(result) ;



