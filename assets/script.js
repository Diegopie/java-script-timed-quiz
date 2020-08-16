// * Declare Global Variables
    let questCount = 0;
    let score = 0;
    let timeLeft = 100;
    let gameRunning = true;
    let timerInterval;
    // ** Find Elements on Nav
        let scorePath = document.getElementById('score');
        let timerPath = document.getElementById('timer');
    // ** Find Elements on Card
        let contentPath = document.querySelector('.content-body');
        let loadQuizPath = document.querySelector('#loadQuiz');
        let startPath = document.getElementById('start');
        let pPlaceHoldPath = document.getElementsByClassName('center-p')[0];
        // *** Find Elements for Q/A
        let questionsPath = document.getElementById('questions');
        let allAns = document.getElementById('allAns')
        let ans01 = document.getElementById('answer1');
        let ans02 = document.getElementById('answer2');
        let ans03 = document.getElementById('answer3');
        let ans04 = document.getElementById('answer4');
        // *** Find High Score <divs>
        let textAreaPath = document.querySelector('#text-area');
        let btnPath = document.querySelector('#btn');

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

    let questC = {
        quest: "How Do You Trigger a Funciton to Run?",
        ansA1: "())",
        ansA2: "{}",
        ansA3: "Go go go",
        ansA4: "FUNTIONNNN ACTIVATE!!!",
    }

    let questD = {
        quest: "How do you spell JavaScript",
        ansA1: "jvaS",
        ansA2: "jQuery",
        ansA3: "jaaaaavascript",
        ansA4: "JavaScript",
    }


// * Create Functions

    // ** Begin Timer and End Game at 0
        function beginTimer() {
            timerInterval = setInterval(function() {
                timeLeft--;
                // Update HTML Element For User To See
                timerPath.innerText = timeLeft;
                // Stop Timer At 0 and End Game
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    gameOver();
                }
            }, 1000);
        }

    // ** Load Questions Into HTML
        function quiz() {
            // Remove Instructions and Load Display <ul>
            startPath.innerText = "";
            allAns.style.display = "block";
            // Check Which Quesion To Display Based On questCount Value
            if (questCount === 0) {
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
            } else if (questCount === 2) {
                questionsPath.innerText = questC.quest;
                ans01.innerText = questC.ansA1;
                ans02.innerText = questC.ansA2;
                ans03.innerText = questC.ansA3;
                ans04.innerText = questC.ansA4;
                
            } else if (questCount === 3) {
                questionsPath.innerText = questD.quest;
                ans01.innerText = questD.ansA1;
                ans02.innerText = questD.ansA2;
                ans03.innerText = questD.ansA3;
                ans04.innerText = questD.ansA4;
            } else if (questCount === 4) {
                gameOver();
            }
        };

    // ** Check The Answer For Current Question, Display Appropriate Responce
        function answers(event) {
            if (questCount === 0) {
                if (event.target.value === 2) {
                    correct();
                } else {
                    wrong();
                }
            } else if (questCount === 1) {
                if (event.target.value === 1) {
                    correct();
                } else {
                    wrong();
                }
            } else if (questCount === 2) {
                if (event.target.value === 1) {
                    correct();
                } else {
                    wrong();
                }
            } else if (questCount === 3) {
                if (event.target.value === 4) {
                    correct();
                } else {
                    wrong();
                }
            }
        }

    // ** When Game Ends, Display Message, text field, and Prompt High Score
        function gameOver () {
            allAns.style.display = "none";
            
            questionsPath.innerHTML = "<img src='./assets/images/game-over.png'>Game Over";
            clearInterval(timerInterval);
           

            // Send remining time and score to key
            let finalScore = score*timeLeft;
            localStorage.setItem("user-score", finalScore);

            
          
            // Display Score and Prompt Initials
                // Update center-p With New Messge
                pPlaceHoldPath.innerText = "Here is your final score!"
                // Display Score
                let dispScore = document.createElement('p')
                dispScore.innerText = localStorage.getItem('user-score');
                pPlaceHoldPath.appendChild(dispScore);
                

            
        }

    // ** Display When User Is Correct
        function correct() {
            // Remove <ul>
            allAns.style.display = "none";
            // Display Correct Message
            startPath.innerHTML = "<img src='./assets/images/right.png'> Correct! Click Here for the Next Question";
            // Update and Display Score
            score = score + 10;
            scorePath.innerText = score;
            // Update questCount So Next Quesion May Load
            questCount++;
        }

    // ** Dispay When User Is Wrong
        function wrong() {
            // Remove <ul>
            allAns.style.display = "none";
            // Display Wrong Message
            startPath.innerHTML = "<img src='./assets/images/wrong.png'> Fool! Click Here for the Next Question";
            // Update questCount So Next Quesion May Load
            questCount++;
            timeLeft = timeLeft - 5;
        }

// * Event Listeners
    // ** Call begintimer and quiz() Functions
        loadQuizPath.addEventListener('click', function() {
            beginTimer();
            pPlaceHoldPath.innerText = "";
            loadQuizPath.style.display = "none";
            quiz();    
        });

    // ** Call quiz() When User Clicks Next Question
        startPath.addEventListener('click', quiz) ;
    
    // ** Call answers() When User Selects an Possible Answer 
        allAns.addEventListener('click', answers);
       
    

           



        