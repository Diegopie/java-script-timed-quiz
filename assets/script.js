// * Declare Global Variables
    let questCount = 0;
    let score = 0;
    let timer = false;
    let timeLeft = 100;
    // ** Find Elements
        let scorePath = document.getElementById('score');
        let timerPath = document.getElementById('timer');
        let startPath = document.getElementById('start');
        let loadQuizPath = document.querySelector('#loadQuiz')
        
        let pPlaceHoldPath = document.getElementsByClassName('center-p')[0];
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
                // console.log(pPlaceHoldPath);
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


function beginTimer() {
    let timerInterval = setInterval(function() {
        timeLeft--
        timerPath.innerText = timeLeft
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert('time up!');
          }
    }, 1000);
}


// Event Listener to Begin Game and Insert First Question


    loadQuizPath.addEventListener('click', function() {
        beginTimer();
        loadQuizPath.style.display = "block";
        allAns.style.display = "block";
});

        
    startPath.addEventListener('click', function quiz(event) {
        // Remove <p> Text
            pPlaceHoldPath.innerText = "";
            startPath.innerText = "";
            allAns.style.display = "block";
            
            if (questCount === 0) {
                    console.log('timer event', timer);
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

             if (timer) {
                beginTimer();
            }
    });


                    console.log('timer outside', timer);


    allAns.addEventListener('click', function(event) {
        if (questCount === 0) {
            if (event.target.value === 2) {
                allAns.style.display = "none";
                startPath.innerHTML = "<img src='./assets/images/right.png'> Correct! Click Here for the Next Question"
                score = score + 10;
                scorePath.innerText = score
                questCount++
                console.log('Quest Count Answer Btn: ' + questCount);
            } else {
                allAns.style.display = "none";
                startPath.innerHTML = "<img src='./assets/images/wrong.png'> Fool! Click Here for the Next Question"
                questCount++
            }
        } else if (questCount === 1) {
            if (event.target.value === 1) {
                allAns.style.display = "none";
                startPath.innerHTML = "<img src='./assets/images/right.png'> Correct! Click Here for the Next Question"
                score = score + 10; 
                scorePath.innerText = score
                questCount++
            } else {
                allAns.style.display = "none";
                startPath.innerHTML = "<img src='./assets/images/wrong.png'> Fool! Click Here for the Next Question"
                questCount++
            }

       }
    });


console.log('Quest Count after event: ' + questCount);






