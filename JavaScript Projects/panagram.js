var text="quick brown fox jumped over the lazy dogs"

//panagram if a-z alphabet present

var alphabets="abcdefghijklmnopqurstuvwxyz"
var isPanagram=true

for(let ch of alphabets){
    if(text.indexOf(ch)==-1){

        isPanagram=false
        break
    }

}
console.log(isPanagram);
console.log(alphabets);