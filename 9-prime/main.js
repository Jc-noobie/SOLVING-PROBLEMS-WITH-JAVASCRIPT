let number = 5 ; 

function isPrime(num) {
    if ( num < 2 ) {
        return false ;
    } else {
        for(let i = 2;i < num; i++) {
            if(num % i === 0) {
                return false ;
            }
        }
    }
    return true; 
}

console.log(isPrime(4)) ;