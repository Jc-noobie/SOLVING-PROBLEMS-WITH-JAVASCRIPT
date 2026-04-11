let array = [-5,2,10,4,6] ;
let target = 4 ; 

function linearSearch(array , length ) {

    for(let i = 0 ; i < length ;  i++) {
        if(array[i] === target) {
            return i ; 
        }
    }

    return -1;
}

let result = linearSearch(array , array.length) ;
console.log(`The target is at index ${result }`) ;