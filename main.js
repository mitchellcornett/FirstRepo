
let numberOfWords = 3;

let wordArray = [];


document.addEventListener("DOMContentLoaded", function (event) {

    for (let i = 0; i < numberOfWords; i++) {
    
        let wordEntered = prompt("Please enter a word:");
        if (wordEntered === null || wordEntered.trim()=== ""){ 
            alert("Please enter a valid word. Try Again");
            i--;
        } else { 
        wordArray.push(wordEntered);
        }
    }

    for (let i = 0; i < numberOfWords; i++) {

        let li = document.getElementById("li" + i)
        if (li){
        li.innerHTML = wordArray[i];
    }
    }

    let button = document.getElementById("transformButton");

    button.classList.remove("hidden");
    
});
