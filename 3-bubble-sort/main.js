let myarray = [4,2,7,9,1,3,6,5,8] ;
console.log("This is the unsorted array") ;
console.log(myarray) ;


function BubbleSort(array) {

    let temp = 0 ;
    for(let i = 0 ; i < array.length ; i++) {
        for(let j = i ; j < array.length  ; j++) {
            if(array[i] > array[j]) {
                temp = array[i] ;
                array[i] = array[j] ;
                array[j] = temp ; 
            }
        }
    }
    return array; 
}

let sortedArray = BubbleSort(myarray) ;



console.log("----------")
console.log("This is my sorted array") ;
console.log(sortedArray) ;