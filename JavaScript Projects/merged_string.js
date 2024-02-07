
//merge two string

// var firstString = "ABC"
// var secondString = "PQR"
// var mergedString = ""

// for (let i=0;i<firstString.length;i++){
//     let sub = firstString[i] + secondString[i]
//     mergedString = mergedString + sub
// }

// console.log(mergedString);



var firstString = "ABC"
var secondString = "PQRST"
var mergedString = ""

var smallestString = firstString < secondString ? firstString : secondString

for (let i=0;i<smallestString.length;i++){
    let sub = firstString[i] + secondString[i]
    mergedString = mergedString + sub
}

// console.log(mergedString);

if( firstString.length > secondString.length )
{
    let balance = firstString.slice(smallestString.length)
    mergedString = mergedString + balance
}
else{
    let balance = secondString.slice(smallestString.length)
    mergedString = mergedString + balance
}
console.log(mergedString);

