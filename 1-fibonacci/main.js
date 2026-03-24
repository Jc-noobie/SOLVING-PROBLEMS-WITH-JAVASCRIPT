let num = 7 ; 

function fibonacci(number) {

    let temp1 = 0 ;
    let temp2 = 1 ; 

    let answer = [temp1 , temp2 ] ;


    for(let i = 0 ; i < number; i++) {
        let result = temp1 + temp2 ; 
        temp1 = temp2 ;
        temp2 = result ;

        answer.push(result) ;
    }

    console.log(answer) ;
}

fibonacci(num) ;