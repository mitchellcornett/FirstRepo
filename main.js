
let numberOfWords = 3;

let wordArray = [];


document.addEventListener("DOMContentLoaded", function (event) {

    for (let i = 0; i < numberOfWords; i++) {

        let wordEntered = prompt("Please enter a word:")

        wordArray.push(wordEntered);
    }

    for (let i = 0; i < numberOfWords; i++) {

        let li = document.getElementById("li" + i)

        li.innerHTML = wordArray[i];
    }

    
});