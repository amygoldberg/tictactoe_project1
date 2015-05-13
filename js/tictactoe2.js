//restart button

// scoreboard - keep track of how many times X and O has won games

// README - write doc

var player = 0;
var players = ['X', 'O'];
var squareArray = [];
var count = 0;
var gameOver = false;

$(document).ready(function() {
  $('.square').click(function() {
    squareArray=[];
    if ($(this).html() === '') {
      $(this).html(players[player]);

    count++;

    player = 1 - player;

      $('.square').each(function() {
          squareArray.push($(this).html())
      });

      console.log(squareArray);

      if (getWinner(squareArray)) {
        if(player === 1) {
          $('#winner').show();
          $('#winner').html('X wins!');
          // alert('X wins!')
        }
        else if (player === 0) {
          $('#winner').show();
          $('#winner').html('O wins!');
          //alert('O wins!')
        }
      } else if (count === 9) {
          gameOver = true;
          $('#tie').show();
          $('#tie').html('Tie game!');
      }
    }
  })
})

function getWinner(square) {
  var win;
  for (var i = 0; i < players.length; i += 1) {

    if (square[0] === players[i] && square[1] === players[i] && square[2] === players[i]) {
      win = true;
    }

    else if (square[3] === players[i] && square[4] === players[i] && square[5] === players[i]) {
      win = true;
    }

    else if (square[6] === players[i] && square[7] === players[i] && square[8] === players[i]) {
      win = true;
    }

    else if (square[0] === players[i] && square[3] === players[i] && square[6] === players[i]) {
      win = true;
    }

    else if (square[1] === players[i] && square[4] === players[i] && square[7] === players[i]) {
      win = true;
    }

    else if (square[2] === players[i] && square[5] === players[i] && square[8] === players[i]) {
      win = true;
    }

    else if (square[0] === players[i] && square[4] === players[i] && square[8] === players[i]) {
      win = true;
    }

    else if (square[2] === players[i] && square[4] === players[i] && square[6] === players[i]) {
      win = true;
    }
  }
  return win;
};
