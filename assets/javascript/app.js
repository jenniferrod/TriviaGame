//  variables
//  ----------------------------------------------------------------
var clock = 150;
var intervalId;
var minutes = 0;
var seconds = 0;

var correct = 0;
var messages = ["Great job!", "Meh", "You know nothing"];
var range;

var audio = new Audio("intro.m4a");

//  ----------------------------------------------------------------
// timer 
function countDown() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

    function decrement() {
        clock--;
        minutes = parseInt(clock / 60);
        seconds = parseInt(clock % 60);


        $("#timer").html("Time Remaining: " + minutes + ":" + seconds);

        if (clock === 0) {
            alert("Times up!");
            clearInterval(intervalId);
        }
    } // decrement close
}; // countDown close

countDown();

//  other functions
//  ----------------------------------------------------------------
function check() {

    var q1 = document.quiz.q1.value;
    var q2 = document.quiz.q2.value;
    var q3 = document.quiz.q3.value;
    var q4 = document.quiz.q4.value;
    var q5 = document.quiz.q5.value;
    var q6 = document.quiz.q6.value;
    var q7 = document.quiz.q7.value;
    var q8 = document.quiz.q8.value;
    var q9 = document.quiz.q9.value;
    var q10 = document.quiz.q10.value;

    //  correct answers 
    //  ------------------------------------------------------------
    if (q1 == "King's Landing") {
        correct++;
    }
    if (q2 == "Aerys Taragrayen") {
        correct++;
    }
    if (q3 == "Battle of the Bastards") {
        correct++;
    }
    if (q4 == "Shaggy Dog") {
        correct++;
    }
    if (q5 == "Die") {
        correct++;
    }
    if (q6 == "Braavos") {
        correct++;
    }
    if (q7 == "Renly Baratheon") {
        correct++;
    }
    if (q8 == "Roose Bolton") {
        correct++;
    }
    if (q9 == "Olenna Tyrell") {
        correct++;
    }
    if (q10 == "The Faith of the Seven") {
        correct++;
    }
    //  final messages
    //  ------------------------------------------------------------
    if (correct < 1) {
        range = 2
    }
    if (correct > 0 && correct <= 8) {
        range = 1
    }
    if (correct >= 9) {
        range = 0
    }
};

//  results page
//  ------------------------------------------------------------
$("#button").on("click", function () {
    $("#button").hide(this);
    $("#quiz").hide(this);

    $("#message").text(messages[range]);

    $("#score").text("You got " + correct + " correct!");
   
});
