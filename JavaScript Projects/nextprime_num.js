function isPrime(num){
    let isPrimeNum=true
    for(let i=2;i<num;i++){
        if (num %i==0){
            isPrimeNum=false
            break
        }
    }
    return isPrimeNum
}
//console.log(isPrime(11));

function nextPrime(num){
    let nextNum=num+1
    while( !isPrime(nextNum)){
        nextNum++
    }
    return nextNum
}
console.log(nextPrime(17));