$(document).ready(function () {
    // all your code here :)
    var goalNumber = 95
    var crystalCounter = 0;
    var wins = 0;
    var loses = 0;
    var crystalsObject = [
        {
            score: 10,
            image: "assets/images/blue.png"
        },
        {
            score: 20,
            image: "assets/images/green.png"
        },
        {
            score: 15,
            image: "assets/images/red.png"
        },
        {
            score: 5,
            image: "assets/images/yellow.png"
        }

    ];


    function userInter() {
        var resultString = "<h1> Try to reach a score of :" + goalNumber + "</h1>" + "<p> Your Wins:" + wins + " !" + "</p>" + "<p> Your Loses:" + loses +  " !</p>"
        $("#results").html(resultString);
    }

    // generate new random goal number
    function generateNum() {
         goalNumber = Math.floor((Math.random() * 120) + 19);
    }

    for (var i = 0; i < crystalsObject.length; i++) {
        // add a new score to each crystal 
        var randomNumber = Math.floor(Math.random() * 18) + 1;
        crystalsObject[i].score = randomNumber;

        var crystalImg = $("<img>")
            .attr("src", crystalsObject[i].image)
            .attr("value", crystalsObject[i].score)
            .addClass("btns")
        $("#crystalButtons").append(crystalImg)
        console.log(crystalsObject);
    }
    $(".btns").on("click", function () {
        console.log($(this).attr("value"))
        var crystalValue = parseInt($(this).attr("value"))

        crystalCounter += crystalValue;
        $("#scoreTotal").text("Your Score Is " + crystalCounter + "!")
        console.log(crystalCounter, "this is current score!")

        if (goalNumber === crystalCounter) {
            wins++;
            generateNum();
            crystalCounter = 0;
            userInter();
        } else if (crystalCounter > goalNumber) {
            loses++;
            generateNum();
            crystalCounter = 0;
             userInter();
        }

    })

    userInter();

    $("#scoreTotal").text("Your Score Is 0")
    console.log(goalNumber)

});