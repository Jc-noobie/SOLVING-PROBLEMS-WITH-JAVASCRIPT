let num = 7 ; 

function fibonacci(number) {

    let firstTerm = 0; 
    let secondTerm  = 1 ;
    let nextTerm = 0 ;

    let result  = [] ;

    if(number <= 2) {
        console.log("The number should be higher than 2 ");
    } 

    for(let i = 0; i < number ; i++) {
        nextTerm = firstTerm + secondTerm ;
        if(i === 0) {
            result.push(firstTerm);
            result.push(secondTerm);
            result.push(nextTerm);
        } else {
            result.push(nextTerm) ;
        }
        firstTerm = secondTerm ;
        secondTerm = nextTerm;
    }

    return result; 

}

let result = fibonacci(num) ;

console.log(result) ;