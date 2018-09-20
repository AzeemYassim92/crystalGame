// start the javascript page
//the Random method alows you to pick a random #
// the floor method allows you to round down
$(document).ready(function () {
      var Random = Math.floor(Math.random() * 101 + 19)

      //random created computer # guess shown in text box
      $('#randomNumber').text(Random);

      //random #'s for each individual jewel
      var num1 = Math.floor(Math.random() * 11 + 1)
      var num2 = Math.floor(Math.random() * 11 + 1)
      var num3 = Math.floor(Math.random() * 11 + 1)
      var num4 = Math.floor(Math.random() * 11 + 1)

      //starting variables
      var userTotal = 0;
      var wins = 0;
      var losses = 0;


      $('#numberWins').text(wins);
      $('#numberLosses').text(losses);

      //reset game function
      function reset() {
        Random = Math.floor(Math.random() * 101 + 19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        userTotal = 0;
        $('#finalTotal').text(userTotal);
      }

      //wins counter

      function win() {
        alert("Congrats you won!");
        wins++;
        $('#numberWins').text(wins);
        reset();
      }

      function loser() {
        alert("Haha you lost!");
        losses++;
        $('#numberLosses').text(losses);
        reset();
      }

      //set up clicks for jewels

      $('#one').on('click', function () {
            userTotal = userTotal + num1;
            console.log("New userTotal= " + userTotal);
            $('#finalTotal').text(userTotal);
            // setting up if else statements for win conditions 

            if (userTotal == Random) {
              win();
            } else if (userTotal > Random) {
              loser();
            }

            $('#two').on('click', function () {
                  userTotal = userTotal + num2;
                  console.log("New userTotal= " + userTotal);
                  $('#finalTotal').text(userTotal);
                  // setting up if else statements for win conditions 

                  if (userTotal == Random) {
                    win();
                  } else if (userTotal > Random) {
                    loser();
                  }
                  $('#three').on('click', function () {
                    userTotal = userTotal + num3;
                    console.log("New userTotal= " + userTotal);
                    $('#finalTotal').text(userTotal);
                    // setting up if else statements for win conditions 

                    if (userTotal == Random) {
                      win();
                    } else if (userTotal > Random) {
                      loser();
                    }
                    $('#four').on('click', function () {
                      userTotal = userTotal + num4;
                      console.log("New userTotal= " + userTotal);
                      $('#finalTotal').text(userTotal);
                      // setting up if else statements for win conditions 

                      if (userTotal == Random) {
                        win();
                      } else if (userTotal > Random) {
                        loser();
                      }
                    });
                  