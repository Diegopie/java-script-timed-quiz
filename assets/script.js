// * Declare Global Variables
    let questCount = 0;
    let score = 0;
    let timeLeft = 100;
    let gameRunning = true;
    let timer;
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

// * Create Functions

    // ** Begin Timer and End Game at 0
        function beginTimer() {
            let timerInterval = setInterval(function() {
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
            }
        }

    // ** When Game Ends, Display Message, text field, and Prompt High Score
        function gameOver () {
            allAns.style.display = "none";
            questionsPath.innerHTML = "<img src='./assets/images/game-over.png'>Game Over";


            // Display high score form
            contentPath.style.display = "none";
            textAreaPath.innerHTML = "<textarea class='form-control' rows='3' id='userInit' placeholder='Enter Your Initials and Click Submit to Save Your Score!'></textarea>"
            btnPath.innerHTML = "<button type='button' class='btn btn-block'>Submit</button>"
            // Send remining time and score to key
            localStorage.setItem("user-score", score);
            localStorage.setItem("user-time", timeLeft);
                // Get User Initials

            timeLeft = 0;
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
       
    // ** Logs User Initials to Local Storage
        btnPath.addEventListener('click', function() {
            btnPath.style.display = "none";
            // Find and Store User Initals in Local Storage
            let userInit = document.querySelector('#userInit');
            localStorage.setItem('user-initials', userInit.value);
            // Find #high-score <article>, Create and Append <btn>
            let highScoPath = document.querySelector('.high-score');
            let highLink = document.createElement('h3');
            highLink.innerText = "Click Here to View High Scores and Try Again!";
            highLink.setAttribute('class', 'high-score');
                //Set anpotjer attribute to link to a highscores page
            highScoPath.appendChild(highLink)
            
            console.dir(highScoPath);
            console.log(highLink);

           
    });


        