var text = "malayalam"
         // 012345678

var len = text.length-1;
var reverse=""
for(let i=len;i>=0;i--){
    let char=text[i]
    reverse += char 
}

console.log(reverse==text?"palindrome":"not palindrome");


//using array method  - join,reverse

var text = "madam"
var reversedString = text.split("").reverse().join("")
console.log(reversedString == text?"palindrome" : "not palindrome");