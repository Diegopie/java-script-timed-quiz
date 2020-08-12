// * Declare Global Variables
    let questCount = 0;
    // ** Find Elements
        let scorePath = document.getElementById('score');
        let timerPath = document.getElementById('timer');
        let startPath = document.getElementById('start');
        let pPlaceHold = document.getElementsByClassName('center-p')[0];
        // *** Find Elements for Q/A
            let questionsPath = document.getElementById('questions');
            let ans01 = document.getElementById('answer1');
            let ans02 = document.getElementById('answer2');
            let ans03 = document.getElementById('answer3');
            let ans04 = document.getElementById('answer4');

                // console.log(scorePath);
                // console.log(timerPath);
                // console.log(questionsPath);
                // console.log(pPlaceHold);
                // console.log(startPath);

// * Store Questions in Array

    let questA = {
        quest: "What Does DOM Stand For?",
        ansA1: "Dolls Over Meat",
        ansA2: "Document Object Model",
        ansA3: "Does Overkills Matter",
        ansA4: "Doopy Overoppy Mooooooo",
    }
    
    let questB = {
        quest: "What Function Do We Use to Get Something From Local Storage?",
        ansA1: "getItem()",
        ansA2: "getLocal()",
        ansA3: "getKey()",
        ansA4: "foogahMashoo()",
    }

// * Create Functions

        
// Event Listener to Begin Game and Insert First Question
    startPath.addEventListener('click', function(event) {
    // Remove <p> Text
        pPlaceHold.innerText = "";
        if (questCount === 0) {
        // Update Question Counter
        // Add questA to HTML
        questionsPath.innerText = questA.quest;
        ans01.innerText = questA.ansA1;
        ans02.innerText = questA.ansA2;
        ans03.innerText = questA.ansA3;
        ans04.innerText = questA.ansA4;
    } 

    console.log(questCount)
});









