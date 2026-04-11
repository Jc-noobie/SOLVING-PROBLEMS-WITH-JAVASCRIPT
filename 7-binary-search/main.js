let array = [-5,2,4,6,10] ;
let target = 10 ; 

function binarySearch(array, length) {

    let leftIndex = 0 ;
    let rightIndex = array.length - 1 ;

    
    while(leftIndex <= rightIndex ) {
        let middleIndex = Math.floor((leftIndex + rightIndex )/ 2) ;
        
        if(target === array[middleIndex]) {
            return middleIndex ;
        }
        if(target < array[middleIndex]) {
            rightIndex = middleIndex - 1 ;
        } else {
            leftIndex = middleIndex + 1 ; 
        }
    }
    return -1 ; 

}

const index = binarySearch(array, array.length) ; 
console.log(`The index is at index ${index}`) ;
