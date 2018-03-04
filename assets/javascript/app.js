$(document).ready(function () {
    //Variables including answer, gif, and question array
    var countDown = 10;
    var questionCount = 0;
    var selectedAnswer;
    var clock;
    var correct;
    var wrong;
    var unAnswered;
    var chosenAnswer;

    var questionArray = ["What movie does the show 'Rick and Morty' resemble?",
        "What is the first rule of Fight Club?",
        "What does the Fox say?",
        "WAR! HUH! YEAH! What is it good for?",
        "When there's something strange in the neighborhood, who ya gonna call?",
        "What is your name?",
        "What is your quest?",
        "What is the velocity of an Unladen Swallow?"];

    var answerArray = [["Jay and Silent Bob", "Top Gun", "Back to the Future", "Batman & Robin"],
        ["No talking in the library", "Don't talk about Fight Club", "Bring an extra pair of socks", "There are no rules"],
        ["Ring-ding-ding-ding!", "Wa-pa-pa-pa-pa-pa-pow!", "Hatee-hatee-hatee-ho!", "Fraka-kaka-kaka-kaka-kow!"],
        ["Blowing things up", "Making money", "Spending money", "Absolutely nothing"],
        ["The police", "Ghostbusters", "My mom", "The ice cream man"],
        ["It is Arthur, King of the Britons", "Julie", "Donald Trump", "Oprah"],
        ["Achieve happiness", "Make a lot of money", "To seek the Holy Grail", "Do nothing"],
        ["What do you mean? An African or European swallow?", "2,000 mph", "They can't fly", "Yes"]];

    var correctAnswer = ["C. Back to the Future",
        "B. Don't talk about Fight Club",
        "A. Ring-ding-ding-ding!",
        "D. Absolutely nothing",
        "B. Ghostbusters",
        "A. It is Arthur, King of the Britons",
        "C. To seek the Holy Grail",
        "A. What do you mean? An African or European swallow?"];

    var gifArray = ["<img class='center-block img-right gif' src='assets/images/RickMorty.gif'>",
         "<img class='center-block img-right gif' src='assets/images/FightClub.gif'>",
         "<img class='center-block img-right gif' src='assets/images/Fox.gif'>",
         "<img class='center-block img-right gif' src='assets/images/Nope.gif'>", 
         "<img class='center-block img-right gif' src='assets/images/Ghostbusters.gif'>", 
         "<img class='center-block img-right gif' src='assets/images/Name.gif'>", 
         "<img class='center-block img-right gif' src='https://thumbs.gfycat.com/GoodCreamyAmphiuma-size_restricted.gif'>", 
         "<img class='center-block img-right gif' src='https://thumbs.gfycat.com/WhoppingSinfulAsianlion-size_restricted.gif'>"];

    //function for the Initial start screen
    function introScreen() {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
         $(".quizArea").html(startScreen);
        };
        
    introScreen();

    //on-click for the start button
    $(".jumbotron").on("click", ".start-button", function(){
        gameContent();
        timeClock();
    });

    //gameContent function
    function gameContent(){
        gameElements = "<p class='text-center timer'> Time: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCount] + "</p><p class='answer'>A. " + answerArray[questionCount][0] + "</p><p class='answer'>B. " + answerArray[questionCount][1]+"</p><p class='answer'>C. "+ answerArray[questionCount][2]+ "</p><p class='answer'>D. " + answerArray[questionCount][3]+"</p>";
        $(".quizArea").html(gameElements);
    };

    //function to countdown the timer
    function timeClock(){
        clock = setInterval(thirtySec, 1000);
	function thirtySec() {
		if (countDown === 0) {
            clearInterval(clock);
            outOfTime();
			
		}
		if (countDown > 0) {
			countDown--;
		}
		$(".timer").html("Time: " + countDown);
        };
    };

    //on click for the answers 
    $('.jumbotron').on("click", ".answer", function(){
        chosenAnswer = $(this).text();
        if(chosenAnswer == correctAnswer[questionCount]){
           clearInterval(clock);
           addWin();
           alert("correct");
        }
        else{
            clearInterval(clock);
            addLoss();
        }
    });

    //addWin function
    function addWin(){
        var audioWin = document.createElement('audio');
        audioWin.setAttribute('src', 'assets/correct.mp3');
        audioWin.play();
        correct++;
        gameElements = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + countDown + "</span></p>" + "<p class='text-center'>Correct! Answer: " + correctAnswer[questionCount] + "</p>" + gifArray[questionCount];
        $(".quizArea").html(gameElements);
        setTimeout(pause, 5500);
    };

    //addLoss function
    function addLoss(){
        var audioLoss = document.createElement('audio');
        audioLoss.setAttribute('src', 'assets/wrong.mp3');
        audioLoss.play();
        wrong++;
        gameElements = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + countDown + "</span></p>" + "<p class='text-center'>WRONG!! Answer: " + correctAnswer[questionCount] + "</p>" + gifArray[questionCount];
        $(".quizArea").html(gameElements);
        setTimeout(pause, 5500);
    };

    //outOfTime function
    function outOfTime(){
        var audioLoss = document.createElement('audio');
        audioLoss.setAttribute('src', 'assets/wrong.mp3');
        audioLoss.play();
        unAnswered++;
        gameElements = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + countDown + "</span></p>" + "<p class='text-center'>Out of Time! Answer: " + correctAnswer[questionCount] + "</p>" + gifArray[questionCount];
        $(".quizArea").html(gameElements);
        setTimeout(pause, 5500);       
    }

    //pause function (inbetween questions)
    function pause(){
        if(questionCount < 7){
            questionCount++;
            gameContent();
            countDown = 10;
            timeClock();
        }
        else{
            resultScreen();
        }
    };
    
   
    








    


        




















});