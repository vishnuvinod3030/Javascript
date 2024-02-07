//function in javascript
//hoisting= js is an interpreted language it takes all functions to the top at the time of execution
//functionname(p1,p2) function calling

function maxTwo(num1,num2){
    return num1>num2?num1:num2
}

console.log(maxTwo(100,30));

//127,870
//first'th place 127
//console.log(========================);


function nthDigitMax(num1,num2){
    return num1%10>num2%10?num1:num2
}
console.log(nthDigitMax(127,872));


