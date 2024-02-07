var num=1634


var digitCount=String(num).length
var sum=0

while(num!=0){//153!=0
    let digit=num %10//15%10=5
    let pow=digit**digitCount
    sum=sum+pow
    //console.log(digit);
    num=Math.floor(num/10)
}
console.log(sum);