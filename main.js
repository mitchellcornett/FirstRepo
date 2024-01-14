
let numberOfWords = 3;

let wordArray = [];

let currentSection = 'firstSection';

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
        
        li.innerHTML = wordArray[i];

    }

    const firstSection = document.getElementById("firstSection");
    const secondSection = document.getElementById("secondSection");
    const transformButton = document.getElementById("transformButton"); 

    transformButton.classList.remove("hidden");

    transformButton.addEventListener("click", function () {
      if (currentSection === "firstSection") {
        firstSection.classList.add("hidden");
        secondSection.classList.remove("hidden");
        currentSection = "secondSection";
      } else {
        firstSection.classList.remove("hidden");
        secondSection.classList.add("hidden");
        currentSection = "firstSection";
      }

      function letterSwitcher (word) {
        return(word.charAt(word.length - 1) + word.substring(1, word.length - 1) + word.charAt(0));
      }

      let switchedArray = wordArray.map(letterSwitcher);

      for (let i = 0; i < numberOfWords; i++) {

        let li = document.getElementById("li" + (i + 3))
        
        li.innerHTML = switchedArray[i];

    }

    });
});
