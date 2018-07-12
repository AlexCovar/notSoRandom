function rNum(num) {
    console.log(Math.floor(Math.random() * num + 1));
}
rNum(10); // 4
//rNum(100);  78
//rNum(2);  0

function rLetter(word) {
console.log(word.charAt(Math.floor(Math.random() * word.length)));
console.log(word.charAt(Math.floor(Math.random() * word.length)));
console.log(word.charAt(Math.floor(Math.random() * word.length)));
}
rLetter("abcdefg");

function myGuy(x) {

}
myGuy("Take it easy"); // "Take it easy, my guy"