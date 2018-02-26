// start game

    $(document).ready(function() {

// generate random number for yourGoal number

        var random = Math.floor(Math.random()*102+19);
        
        $("#yourGoal").text(random);


// winner/loser functions

        function winner() {
            alert("Woohoo! You Won!!");
            $.playSound("Assets/audio/Blastwave_FX.mp3");
            wins++;
            $("#numberWins").text(wins);
            // reset();
            // console.log(wins);
        }
        
        function loser() {
            alert("Drats! You Lose!!");
            $.playSound("Assets/audio/spring_hit_wobble.mp3");
            losses++;
            $("#numberLosses").text(losses);
            // reset();
            // console.log(losses);
        }

        // Enable audio triggers

        $.extend({
            playSound: function () {
                return $(
                       '<audio class="sound-player" autoplay="autoplay" style="display:none;">'
                         + '<source src="' + arguments[0] + '" />'
                         + '<embed src="' + arguments[0] + '" hidden="true" autostart="true" loop="false"/>'
                       + '</audio>'
                     ).appendTo('body');
            },
            stopSound: function () {
                $(".sound-player").remove();
            }
        });


// assign values to crystal buttons
        
        var num1 = Math.floor(Math.random()*12+1);
        var num2 = Math.floor(Math.random()*12+1);
        var num3 = Math.floor(Math.random()*12+1);
        var num4 = Math.floor(Math.random()*12+1);

        $("#redCrystal").on("click", function() {
            $(this).val('num1');
            console.log("red clicked, value = " + num1)
            userTotal = userTotal + num1;
            console.log("New userTotal " + userTotal);
            $("#subTotal").text(userTotal);
            $.playSound("Assets/audio/hit_twang1.mp3");
            gameOver();
        });

        $("#clearCrystal").on("click", function() {
            $(this).val('num2');
            console.log("clear clicked, value = " + num2)
            userTotal = userTotal + num2;
            console.log("New userTotal " + userTotal);
            $("#subTotal").text(userTotal);
            $.playSound("Assets/audio/hit_twang1.mp3");
            gameOver();
        });

        $("#yellowCrystal").on("click", function() {
            $(this).val('num3');
            console.log("yellow clicked, value = " + num3)
            userTotal = userTotal + num3;
            console.log("New userTotal " + userTotal);
            $("#subTotal").text(userTotal);
            $.playSound("Assets/audio/hit_twang1.mp3");
            gameOver();
        });

        $("#blueCrystal").on("click", function() {
            $(this).val('num4');
            console.log("clicked, value = " + num4)
            userTotal = userTotal + num4;
            console.log("New userTotal " + userTotal);
            $("#subTotal").text(userTotal);
            $.playSound("Assets/audio/hit_twang1.mp3");
            gameOver();
        });

// play game

function gameOver() {

if (userTotal === random) {
    winner()
}

else if (userTotal > random) {
    loser();
} 
   
}
// tally wins and losses

        var userTotal= 0;
        var wins = 0;
        var losses = 0;
        
        $("#numberWins").text(wins);
        $("#numberLosses").text(losses);

       
        
        function reset() {
            random = Math.floor(Math.random()*102+19);
            console.log(random);
            $("#yourGoal").text(random);
            var num1 = Math.floor(Math.random()*12+1);
            var num2 = Math.floor(Math.random()*12+1);
            var num3 = Math.floor(Math.random()*12+1);
            var num4 = Math.floor(Math.random()*12+1);
            userTotal = 0;
            $("#subTotal").text(userTotal);
        }

    
        $("#newGame").on("click", function() {

            reset();

        })    

    })