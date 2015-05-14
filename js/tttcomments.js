// scoreboard - keep track of how many times X and O has won games

$(document).ready(function() {

  var player = 0;
  var players = ['<img src="http://cdn.superbwallpapers.com/wallpapers/cartoons/elsa-frozen-25406-400x250.jpg">', '<img src="http://kathyssavings.com/wp-content/uploads/2013/08/Frozen-Hula-Olaf.png">'];
  var squareArray = [];
  var count = 0;
  var gameOver = false;

  var restart = function() {
    $('.square').html("");
    count = 0;
    $('#tie').hide();
    $('#winner').hide();
    gameOver = false;
  };

  $('#new-game').on('click', function() {
    restart();
  });

  // $('.square') will find all of the divs with class 'square'
  // .click when one of these squares is clicked on, run the following function
  $('.square').click(function() {
    squareArray=[];
    // check to see if this square has been clicked before
    if ($(this).html() === '' && gameOver === false) {
      // players[player] will get the image for the current player
      // the image will now go into the square that was clicked on
      $(this).html(players[player]);

      // counting the number of squares that have been clicked on
      count++;

      // '.square' looks at every square in the board
      // takes every value of each square and pushes it into the array
      $('.square').each(function() {
        squareArray.push($(this).html());
      });

      console.log(squareArray);

      // check for winner

      if (getWinner(squareArray, players[player])) {
        // display the winner
        gameOver = true;
        $('#winner').html(players[player] + ' wins!');
        $('#winner').show();

      } else if (count === 9) {
        gameOver = true;
        $('#tie').html('Tie game!');
        $('#tie').show();
      }

      player = 1 - player;

    }
  });

  // given a representation of the board, squareArray, and a current player
  // see if that current player has won
  var getWinner = function(square, player) {
    var win = false;

    if (square[0] === player && square[1] === player && square[2] === player) {
      win = true;
    }

    else if (square[3] === player && square[4] === player && square[5] === player) {
      win = true;
    }

    else if (square[6] === player && square[7] === player && square[8] === player) {
      win = true;
    }

    else if (square[0] === player && square[3] === player && square[6] === player) {
      win = true;
    }

    else if (square[1] === player && square[4] === player && square[7] === player) {
      win = true;
    }

    else if (square[2] === player && square[5] === player && square[8] === player) {
      win = true;
    }

    else if (square[0] === player && square[4] === player && square[8] === player) {
      win = true;
    }

    else if (square[2] === player && square[4] === player && square[6] === player) {
      win = true;
    }
    return win;
  };

});
