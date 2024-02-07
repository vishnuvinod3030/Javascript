
// length
// toUppercase()
// to Lowercase()
// charAt(index)
// indexOf(char)
// startWith(char)
// split()
// slice()

var text="Luminar Technolab"
//        0123456789
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.length);
console.log(text.charAt(8));
console.log(text.indexOf("T"));
console.log(text.startsWith("Lu"));

var text = "fat cat tom"
var words=text.split("") //split words
console.log(words);

var text="Luminar Technolab"
var slicewords = text.slice(8,17)
console.log(slicewords);