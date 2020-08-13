// * Declare Global Variables
    let questCount = 0;
    let timer = false;
    // ** Find Elements
        let scorePath = document.getElementById('score');
        let timerPath = document.getElementById('timer');
        let startPath = document.getElementById('start');
        let pPlaceHold = document.getElementsByClassName('center-p')[0];
        // *** Find Elements for Q/A
            let questionsPath = document.getElementById('questions');
            let allAns = document.getElementById('allAns')
            let ans01 = document.getElementById('answer1');
            let ans02 = document.getElementById('answer2');
            let ans03 = document.getElementById('answer3');
            let ans04 = document.getElementById('answer4');

                // console.log(scorePath);
                // console.log(timerPath);
                // console.log(questionsPath);
                // console.log(pPlaceHold);
                // console.log(startPath);
                console.log(allAns);

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
            startPath.innerText = "";
            if (questCount === 0) {
            
            // Add questA to HTML
                questionsPath.innerText = questA.quest;
                ans01.innerText = questA.ansA1;
                ans02.innerText = questA.ansA2;
                ans03.innerText = questA.ansA3;
                ans04.innerText = questA.ansA4;

            } else if (questCount === 1) {
                questionsPath.innerText = questB.quest;
                ans01.innerText = questB.ansA1;
                ans02.innerText = questB.ansA2;
                ans03.innerText = questB.ansA3;
                ans04.innerText = questB.ansA4;
                

                        console.log('Quest Count Start Btn: ' + questCount);
             }   
    });

    allAns.addEventListener('click', function(event) {
        if (questCount === 0) {
            if (event.target.value === 2) {
                startPath.innerText = "Correct! Click Here for the Next Question"
                
                questCount++
                
                
                console.log('Quest Count Answer Btn: ' + questCount);
            } else {
                startPath.innerText = "Fool! Click Here for the Next Question"
                questCount++
            }
        } else if (questCount === 1) {
            if (event.target.value === 1) {
                startPath.innerText = "Correct! Click Here for the Next Question"
                questCount++
            } else {
                startPath.innerText = "Fool! Click Here for the Next Question"
                questCount++
            }

       }
    });


console.log('Quest Count after event: ' + questCount);















// questCount++

// if (questCount === 1) {
    
//         // Update Question Counter
//              questCount++
//              // Add questB to HTML
//                 questionsPath.innerText = questB.quest;
//                 ans01.innerText = questB.ansA1;
//                 ans02.innerText = questB.ansA2;
//                 ans03.innerText = questB.ansA3;
//                 ans04.innerText = questB.ansA4;
            
//         }


    // if (questCount === 0){
    //     pPlaceHold.innerText = "Try and answer all the questions inside the time limit! Gain 10 points by selecting the correct answer."
    // }



    // // How to end the game? 
    // if (questCount === 2) {
    //     // do something to display score, idfk
    //     questCounter = 0;
    // } 






